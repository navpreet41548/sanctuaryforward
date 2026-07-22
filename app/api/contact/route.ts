import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer opens raw TCP sockets, so this route must run on Node, never Edge.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO ?? "admin@sanctuaryforward.com";

const LIMITS = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 40,
  message: 5000,
} as const;

type Field = keyof typeof LIMITS;

/** Escape values before they land in the HTML body of the email. */
function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strip CR/LF so a submitted value can never forge an email header. */
function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function readField(body: Record<string, unknown>, name: Field) {
  const raw = body[name];
  return typeof raw === "string" ? raw.trim() : "";
}

let cached: nodemailer.Transporter | null = null;

function getTransporter() {
  if (cached) return cached;

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    throw new Error(
      "SMTP_USER and SMTP_PASS are not set. Add them to .env.local (see .env.example)."
    );
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  cached = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port,
    // 465 is implicit TLS; 587 upgrades via STARTTLS.
    secure: port === 465,
    auth: { user, pass },
  });
  return cached;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Expected a JSON body." }, { status: 400 });
  }

  const firstName = readField(body, "firstName");
  const lastName = readField(body, "lastName");
  const email = readField(body, "email");
  const phone = readField(body, "phone");
  const message = readField(body, "message");

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { error: "First name, last name, email, and message are all required." },
      { status: 400 }
    );
  }

  // Deliberately permissive — real addresses are validated by delivery, not regex.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look valid." },
      { status: 400 }
    );
  }

  const fields: Record<Field, string> = { firstName, lastName, email, phone, message };
  for (const [name, max] of Object.entries(LIMITS) as [Field, number][]) {
    if (fields[name].length > max) {
      return NextResponse.json(
        { error: `${name} is too long (max ${max} characters).` },
        { status: 400 }
      );
    }
  }

  const fullName = oneLine(`${firstName} ${lastName}`);
  const replyTo = oneLine(email);

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      // The sending mailbox is independent of TO. Defaults to the authenticated
      // account because Gmail silently rewrites From to match it unless the
      // address is a verified "Send mail as" alias.
      from: `"Sanctuary Forward Website" <${process.env.CONTACT_FROM || process.env.SMTP_USER}>`,
      to: TO,
      replyTo: `"${fullName.replace(/"/g, "")}" <${replyTo}>`,
      subject: `New contact form message from ${fullName}`,
      text: [
        `Name:    ${fullName}`,
        `Email:   ${replyTo}`,
        `Phone:   ${phone || "(not provided)"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2 style="margin:0 0 16px">New contact form message</h2>
        <p style="margin:0 0 4px"><strong>Name:</strong> ${esc(fullName)}</p>
        <p style="margin:0 0 4px"><strong>Email:</strong> ${esc(replyTo)}</p>
        <p style="margin:0 0 16px"><strong>Phone:</strong> ${esc(phone) || "(not provided)"}</p>
        <p style="margin:0 0 8px"><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;margin:0">${esc(message)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    // Log the real cause server-side; never leak SMTP internals to the browser.
    console.error("[contact] failed to send message:", error);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}
