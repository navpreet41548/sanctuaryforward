import Link from "next/link";

export default function Mission() {
  return (
    <section className="section mission" id="mission">
      <div className="container two-col">

        {/* Left — multi-colour heading */}
        <div className="col-text">
          <span className="eyebrow">Mission Statement</span>

          <h2 style={{ lineHeight: 1.25, marginBottom: "28px" }}>
            {/* Line 1 — dark green */}
            <span style={{ color: "#171AD7" }}>Restoring </span><span style={{ color: "#143d31" }}>Dignity.</span>
            <br />
            {/* Line 2 — "Rebuilding" dark green, "Lives." orange */}
            <span style={{ color: "#143d31" }}>Rebuilding </span>
            <span style={{ color: "#ee7c2b" }}>Lives.</span>
            <br />
            {/* Line 3 — "Renewing" purple, "Hope." dark green */}
            <span style={{ color: "#7c3aed" }}>Renewing </span>
            <span style={{ color: "#143d31" }}>Hope.</span>
          </h2>

          <Link href="/#contact" className="btn btn-primary mission-cta">Get Started</Link>
        </div>

        {/* Right — supporting paragraph with coloured keywords */}
        <div className="col-text-muted">
          <p>
            At the heart of Sanctuary Forward is a simple belief:{" "}
            <strong style={{ color: "#8604FB" }}>every life matters</strong>. Every
            adult deserves to be seen, heard, and given a genuine opportunity to
            begin again. Through our safe, healing&#8209;centered shelter and
            supportive services, we help individuals move from crisis to{" "}
            <strong style={{ color: "#8604FB" }}>stability</strong> with{" "}
            <strong style={{ color: "#8604FB" }}>dignity</strong>,{" "}
            <strong style={{ color: "#8604FB" }}>purpose</strong>, and{" "}
            <strong style={{ color: "#8604FB" }}>hope</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
