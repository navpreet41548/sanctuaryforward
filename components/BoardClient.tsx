"use client";

import { useRef } from "react";
import Link from "next/link";

const BOARD_MEMBERS = [
  { name: "Member Name", role: "Board Chair",   linkedin: "#" },
  { name: "Member Name", role: "Vice Chair",    linkedin: "#" },
  { name: "Member Name", role: "Treasurer",     linkedin: "#" },
  { name: "Member Name", role: "Secretary",     linkedin: "#" },
  { name: "Member Name", role: "Board Member",  linkedin: "#" },
  { name: "Member Name", role: "Board Member",  linkedin: "#" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21h-4z" />
    </svg>
  );
}

export default function BoardClient() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (!trackRef.current) return;
    const amount = trackRef.current.offsetWidth * 0.75;
    trackRef.current.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="section team" id="board">
      <div className="container">

        <div className="team-head">
          <div className="team-intro">
            <span className="chip">Board of Directors</span>
            <h2>Meet Our Team</h2>
            <p className="muted">
              Lorem ipsum eget orci ipsum ullamcorper arcu a quam mi at quam blandit
              mi convallis nibh nisi senectus et quis lectus eu vitae imperdiet iaculis
              risus ut gravida habitant dolor pharetra nunc.
            </p>
          </div>
          <div className="team-nav">
            <button onClick={() => scroll("prev")} className="team-arrow" aria-label="Previous team members">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={() => scroll("next")} className="team-arrow" aria-label="Next team members">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="team-track" ref={trackRef}>
          {BOARD_MEMBERS.map((m, i) => (
            <article key={i} className="team-card">
              <div className="team-photo" role="img" aria-label={`${m.name} portrait`} />
              <div className="team-info">
                <div className="team-info-text">
                  <h4>{m.name}</h4>
                  <p className="role">{m.role}</p>
                </div>
                <a href={m.linkedin} className="team-linkedin" aria-label={`LinkedIn profile of ${m.name}`}>
                  <LinkedInIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <Link href="/" style={{ color: "var(--green-700)", fontSize: "0.9375rem", fontWeight: 500 }}>
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}
