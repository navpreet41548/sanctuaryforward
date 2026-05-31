const SZ = { width: 44, height: 44 };
const SW = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const VALUES = [
  {
    title: "Dignity",
    desc: "Every person is worthy of respect.",
    color: "#ee7c2b",
    icon: (
      <svg viewBox="0 0 24 24" {...SZ} {...SW}>
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a6 6 0 0112 0v2"/>
      </svg>
    ),
  },
  {
    title: "Compassion",
    desc: "We respond with care and understanding.",
    color: "#f59e0b",
    icon: (
      <svg viewBox="0 0 24 24" {...SZ} {...SW}>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    title: "Integrity",
    desc: "We do what is right, even when no one is watching.",
    color: "#8b5cf6",
    icon: (
      <svg viewBox="0 0 24 24" {...SZ} {...SW}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Accountability",
    desc: "We foster responsibility and personal growth.",
    color: "#ec4899",
    icon: (
      <svg viewBox="0 0 24 24" {...SZ} {...SW}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="2"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Inclusion",
    desc: "Everyone is welcomed and valued.",
    color: "#6366f1",
    icon: (
      <svg viewBox="0 0 24 24" {...SZ} {...SW}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: "Collaboration",
    desc: "We believe lasting change happens together.",
    color: "#3b82f6",
    icon: (
      <svg viewBox="0 0 24 24" {...SZ} {...SW}>
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    title: "Excellence",
    desc: "We are committed to providing high-quality, person-centered support.",
    color: "#0ea5e9",
    icon: (
      <svg viewBox="0 0 24 24" {...SZ} {...SW}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: "Belonging",
    desc: "We create spaces where people feel safe, accepted, and connected.",
    color: "#06b6d4",
    icon: (
      <svg viewBox="0 0 24 24" {...SZ} {...SW}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

export default function Values() {
  return (
    <section className="section vvp">
      <div className="container vvp-grid">

        {/* ── Left: values card ── */}
        <div
          className="vvp-card vvp-values"
          style={{ backgroundImage: "url('/images/valuesBg.png')" }}
        >
          <div className="vvp-card-body">
            <div className="heading-underline-wrap">
              <h4>Our Values</h4>
              <div className="heading-underline" style={{ background: "#ec4899" }} />
            </div>

            <div className="values-list">
              {VALUES.map(v => (
                <div key={v.title} className="values-list-item">
                  <span style={{ color: v.color, flexShrink: 0, lineHeight: 0 }}>
                    {v.icon}
                  </span>
                  <div className="values-list-text">
                    <strong>{v.title}</strong>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Vision + Brand Promise ── */}
        <div className="vvp-stack">
          <div className="vvp-card vvp-vision">
            <div className="vvp-card-body">
              <div className="heading-underline-wrap">
                <h4>Our Vision</h4>
                <div className="heading-underline" style={{ background: "#7c3aed" }} />
              </div>
              <p>
                We envision a world where every person in crisis has a safe place
                to land, the support to heal, and the opportunity to rise. We are
                more than shelter — we are a sanctuary.
              </p>
              <p style={{ marginTop: 14 }}>
                We create pathways from crisis to stability through compassionate,
                trauma&#8209;informed support that honors the dignity of every
                individual. We meet people where they are, walk alongside them
                through life&rsquo;s most difficult seasons, and empower them to
                rediscover their strength, reclaim their self&#8209;worth, and
                build lives rooted in purpose, belonging, and possibility.
              </p>
            </div>
          </div>

          <div className="vvp-card vvp-promise">
            <div className="vvp-card-body">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 0 }}>
                <div className="heading-underline-wrap" style={{ marginBottom: 0 }}>
                  <h4>Brand Promise</h4>
                  <div className="heading-underline" style={{ background: "#ec4899" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>
                  Seen | Supported | Empowered
                </span>
              </div>
              <div style={{ marginBottom: 16 }} />
              <p>
                At Sanctuary Forward, we see the person — the people — not the
                circumstance or circumstances.
              </p>
              <p style={{ marginTop: 12 }}>
                We lead with compassion, respond with purpose, and stand beside
                each individual as they rebuild their life.
              </p>
              <p style={{ marginTop: 12 }}>
                Our promise is simple: to provide unwavering support, meaningful
                opportunities, and a community that believes in every
                person&rsquo;s ability to rise.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
