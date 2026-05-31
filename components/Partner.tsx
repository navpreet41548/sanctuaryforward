import Image from "next/image";
import Link from "next/link";

export default function Partner() {
  return (
    <section className="section partner-cta" id="contact">
      <div className="container center">
        <Image
          src="/images/partner.png"
          alt="We are ready to partner and collaborate"
          width={760}
          height={440}
          style={{ borderRadius: 20, display: "block", width: "100%", height: "auto", maxWidth: 760, margin: "0 auto" }}
        />
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 32 }}>
          <Link href="/contact" className="btn btn-primary" style={{ flex: 1, maxWidth: 200, textAlign: "center" }}>
            Get in Touch!
          </Link>
          <Link href="#" className="btn btn-outline" style={{ flex: 1, maxWidth: 200, textAlign: "center" }}>
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
