import Image from "next/image";
import Link from "next/link";

export default function Founder() {
  return (
    <section className="section founder" id="founder">
      <div className="container two-col">
        <div className="col-text">
          <h2>CEO &amp; Founder</h2>
          <p>
            Welcome to Sanctuary Forward. I&rsquo;m{" "}
            <strong>Nicole Ray Glenn</strong>, Founder and CEO, and for more than
            30 years I&rsquo;ve dedicated my life to supporting individuals and
            families navigating homelessness, recovery, chronic illness, and
            major life transitions.
          </p>
          <p>
            My journey began on the front lines, serving directly in the
            community before stepping into leadership roles such as Assistant
            Program Director and Program Director. Those experiences shaped a
            simple but powerful belief that guides Sanctuary Forward today:
            shelter should be more than a place to sleep&mdash;it should be a
            place where healing begins, stability is restored, and lives are
            rebuilt.
          </p>
          <p>
            Rooted in faith, compassion, and purpose, I lead with the conviction
            that every person deserves to be seen, heard, and valued. Sanctuary
            Forward exists to honor that truth and to walk with people as they
            reclaim their strength, dignity, and future.
          </p>
          <p>
            <strong>Personal Motto:</strong> Live. Love. Serve.
          </p>
          <Link href="/founder" className="btn btn-primary">Know More</Link>
        </div>

        <div className="col-image">
          <Image
            src="/images/nicoleRay2.png"
            alt="Portrait of Nicole Ray Glenn — CEO &amp; Founder"
            width={480}
            height={480}
            className="img-frame img-founder"
            style={{ objectFit: "contain", background: "#f5f5f5" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
