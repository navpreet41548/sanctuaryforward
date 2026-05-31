const COLORS = [
  "#ee7c2b","#3b82f6","#8b5cf6",
  "#0d9488","#e11d48","#f59e0b",
  "#6366f1","#ec4899","#06b6d4",
];

const CARDS = [
  { title: "Pre&#8209;Release &amp; Intake",               desc: "Assessment, admission, and individualized service planning.",                                      icon: <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1"/><path d="M8.8 13l2 2 4-4.2"/></g></svg> },
  { title: "Comprehensive Case Management",                desc: "One&#8209;on&#8209;one support, advocacy, and goal setting.",                                      icon: <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.4"/><path d="M3 20c0-3.3 2.7-6 6-6 1.6 0 3.1.6 4.2 1.7"/><path d="M14.5 18.8l2 2 4-4"/></g></svg> },
  { title: "Employment &amp; Workforce Development",       desc: "Job readiness, resume support, and employment referrals.",                                         icon: <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M3 12.5h18"/></g></svg> },
  { title: "Education &amp; Life Skills",                  desc: "GED referrals, vocational training, digital literacy, and financial education.",                   icon: <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8.5l10-4 10 4-10 4z"/><path d="M6 10.6V15c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.4"/><path d="M22 8.5v4.5"/></g></svg> },
  { title: "Behavioral Health &amp; Wellness",             desc: "Mental health, substance use, and peer support referrals.",                                        icon: <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5C7 17 3 13.4 3 9A4.5 4.5 0 0111.5 6.8 4.5 4.5 0 0121 9c0 .8-.13 1.6-.4 2.3"/><path d="M6.5 12.5h3l1.5-3 2 6 1.5-3h6"/></g></svg> },
  { title: "Housing Stabilization",                        desc: "Housing search, placement, and retention support.",                                                 icon: <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/></g></svg> },
  { title: "Family Reunification &amp; Community Connection", desc: "Rebuilding relationships and strengthening support systems.",                                   icon: <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8" r="3"/><path d="M2.5 19c0-3 2.7-5 6-5s6 2 6 5"/><circle cx="17.5" cy="9" r="2.3"/><path d="M16 14.2c2.9.2 5.5 2 5.5 4.8"/></g></svg> },
  { title: "Health &amp; Benefits Navigation",              desc: "Access to healthcare, insurance, and public benefits.",                                           icon: <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5.5c0 4.8-3.3 8.2-7 9.7-3.7-1.5-7-4.9-7-9.7V6z"/><path d="M12 8.5v6M9 11.5h6"/></g></svg> },
  { title: "Aftercare &amp; Alumni Support",               desc: "Ongoing coaching, check&#8209;ins, and community connections to support long&#8209;term success.", icon: <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M5.7 5.7l3.9 3.9M14.4 14.4l3.9 3.9M18.3 5.7l-3.9 3.9M9.6 14.4l-3.9 3.9"/></g></svg> },
];

export default function CorePrograms() {
  return (
    <section className="section core-components">
      <div className="container">

        {/* 2-col header */}
        <div className="section-head two-col">
          <div className="col-text">
            <span className="eyebrow">Our Approach</span>
            <h2>Our 9 Core Program Components</h2>
          </div>
          <div className="col-text-muted">
            <p>
              Our trauma&#8209;informed, healing&#8209;centered model supports the
              whole person — helping adults move from crisis to stability through
              personalized care, practical resources, and meaningful connections.
            </p>
          </div>
        </div>

        <div className="cards-grid">
          {CARDS.map((c, i) => (
            <article className="card" key={i}>
              <div className="card-icon">{c.icon}</div>
              <div className="card-text">
                <h4
                  dangerouslySetInnerHTML={{ __html: c.title }}
                  style={{ color: COLORS[i] }}
                />
                <p dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            </article>
          ))}
        </div>

        {/* Shared Commitment */}
        <div className="shared-commitment narrow center">
          <h2 style={{ color: "#143d31", marginBottom: "24px" }}>
            Our Shared Commitment
          </h2>
          <p>
            Whether someone enters Safe Haven for Women or Pathway to Strength
            for Men, they are welcomed into a community rooted in dignity,
            compassion, accountability, and healing.
          </p>
          <p>
            At Sanctuary Forward, we believe every adult deserves a safe place to
            rest, recover, and rebuild a life filled with stability, purpose, and
            belonging.
          </p>
        </div>
      </div>
    </section>
  );
}
