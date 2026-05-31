import Image from "next/image";

export default function Programs() {
  return (
    <>
      {/* ── Programs Intro: heading left, description right — no image ── */}
      <section className="section programs-intro" id="programs">
        <div className="container two-col">
          <div className="col-text">
            <span className="eyebrow">Our Programs</span>
            <h2>Trauma&#8209;Informed Sanctuaries for Adults&nbsp;21+</h2>
          </div>
          <div className="col-text-muted" style={{ alignSelf: "center" }}>
            <p>
              Sanctuary Forward offers healing&#8209;centered programs for adults
              ages 21 and older. Each program is designed to provide a safe,
              supportive environment where individuals can stabilize, rebuild,
              and move toward lasting independence.
            </p>
          </div>
        </div>
      </section>

      {/* ── Safe Haven for Women ── */}
      <section className="section program-block">
        <div className="container two-col">

          {/* Left: staggered collage — img1 left-aligned, img2 right-aligned */}
          <div className="col-image">
            <div className="program-collage">
              {/* img1 — left-aligned, shows full image */}
              <div className="pc-wrap pc-wrap-1">
                <Image
                  src="/images/safeHaven1.png"
                  alt="Dignity begins with a helping hand"
                  width={620}
                  height={465}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              {/* img2 — right-aligned, shows full image */}
              <div className="pc-wrap pc-wrap-2">
                <Image
                  src="/images/safeHaven2.jpg"
                  alt="Safe Haven counselling session"
                  width={620}
                  height={413}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="col-text">
            <h3 className="text-green">Safe Haven for Women</h3>
            <p>
              A trauma&#8209;informed sanctuary for women ages 21 and older. Safe
              Haven for Women serves individuals navigating homelessness, domestic
              violence, chronic health conditions, substance&#8209;use recovery,
              and reentry.
            </p>
            <p className="program-tagline">
              <em>
                A place where every woman is empowered to heal, rise, and
                reclaim her future.
              </em>
            </p>
            <p>
              Every resident receives Sanctuary Forward&rsquo;s full range of
              core program services outlined below.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pathway to Strength for Men ── */}
      <section className="section program-block">
        <div className="container two-col">

          {/* Left: text */}
          <div className="col-text">
            <h3 className="text-green">Pathway to Strength for Men</h3>
            <p>
              A restorative, trauma&#8209;informed sanctuary for men ages 21 and
              older. Pathway to Strength for Men serves individuals navigating
              homelessness, substance&#8209;use recovery, chronic health
              conditions, and reentry after incarceration.
            </p>
            <p className="program-tagline">
              <em>
                A place where every man is supported to rebuild, rise with
                strength, and reclaim his future.
              </em>
            </p>
            <p>
              Every resident receives Sanctuary Forward&rsquo;s full range of
              core program services outlined below.
            </p>
          </div>

          {/* Right: staggered collage — img1 left-aligned, img2 right-aligned */}
          <div className="col-image">
            <div className="program-collage">
              {/* img1 — left-aligned */}
              <div className="pc-wrap pc-wrap-1">
                <Image
                  src="/images/pathway1.png"
                  alt="Fists united in community strength"
                  width={620}
                  height={465}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              {/* img2 — right-aligned */}
              <div className="pc-wrap pc-wrap-2">
                <Image
                  src="/images/pathway2.png"
                  alt="From despair to strength"
                  width={620}
                  height={260}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
