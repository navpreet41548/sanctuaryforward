import Image from "next/image";
import Link from "next/link";

export default function FounderDetail() {
  return (
    <>
      {/* ── Section 1: More About Me ── */}
      <section className="section fd-about">
        <div className="container two-col">
          <div className="col-text">
            <h2 className="text-green">More About Me</h2>
            <p>
              Welcome to Sanctuary Forward. I&rsquo;m{" "}
              <strong>Nicole Ray Glenn</strong>, Founder and CEO, and for more than
              30 years I&rsquo;ve dedicated my life to supporting individuals and
              families navigating homelessness, recovery, chronic illness, and major
              life transitions.
            </p>
            <p>
              My journey began on the front lines, serving directly in the community
              before stepping into leadership roles such as Assistant Program Director
              and Program Director. Those experiences shaped a simple but powerful
              belief that guides Sanctuary Forward today: shelter should be more than
              a place to sleep&mdash;it should be a place where healing begins,
              stability is restored, and lives are rebuilt.
            </p>
            <p>
              Rooted in faith, compassion, and purpose, I lead with the conviction
              that every person deserves to be seen, heard, and valued. Sanctuary
              Forward exists to honor that truth and to walk with people as they
              reclaim their strength, dignity, and future.
            </p>
            <p><strong>Personal Motto:</strong> Live. Love. Serve.</p>
          </div>

          <div className="col-image fd-nicole-wrap">
            <Image
              src="/images/nicoleRay2.png"
              alt="Portrait of Nicole Ray Glenn — CEO & Founder"
              width={480}
              height={480}
              className="img-frame img-founder"
              style={{ objectFit: "contain", width: "100%", height: "auto", boxShadow: "none" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Section 2: Experience, Leadership & Impact ── */}
      <section className="section fd-experience">
        <div className="container two-col reverse fd-experience-grid">
          <div className="col-image">
            <Image
              src="/images/experienceImg.png"
              alt="Nicole Ray Glenn in a leadership setting"
              width={520}
              height={480}
              className="img-frame"
              style={{ objectFit: "cover", width: "100%", height: "auto", background: "none", boxShadow: "none" }}
            />
          </div>

          <div className="col-text">
            <h2 className="text-green" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.875rem)" }}>Experience, Leadership &amp; Impact</h2>
            <p>
              Over the years, Nicole advanced into leadership roles including
              Assistant Program Director and Program Director, gaining a deep,
              hands-on understanding of shelter operations, client needs, and
              systemic challenges. She has worked within HIV/AIDS organizations,
              homeless service programs, and housing agencies across New York City.
            </p>
            <p>
              Her frontline experience shaped her compassionate approach, while her
              leadership strengthened her ability to build effective,
              community-centered programs. Nicole earned her BA in Health and Human
              Services, grounding her work in equity, wellness, and sustainable
              support systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: Compassion, Faith & Purpose ── */}
      <section className="fd-compassion">
        <div className="fd-compassion-inner">
          <h2>Compassion, Faith &amp; Purpose</h2>
          <p>
            Nicole&rsquo;s leadership is shaped by her lived experience as a mother,
            grandmother, and wife, deepening her empathy and commitment to helping
            others rebuild with dignity. She understands the lasting impact of
            homelessness and is driven to create programs that honor the whole person.
            Guided by faith, she leads with humility and purpose, focusing on
            listening, walking alongside others, and creating space for healing and
            transformation.
          </p>
          <Link href="/contact" className="btn btn-primary">Get in Touch!</Link>
        </div>
      </section>
    </>
  );
}
