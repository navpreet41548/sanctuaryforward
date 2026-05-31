"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PANELS = [
  {
    src: "/images/governance1.png",
    alt: "Board leadership in session",
    title: "Integrity & Transparency",
    desc: "Our board upholds the highest standards of integrity, ensuring every decision aligns with our mission to serve adults navigating crisis.",
  },
  {
    src: "/images/governance2.png",
    alt: "Board members collaborating",
    title: "Fiduciary Stewardship",
    desc: "Through responsible stewardship of resources, we maximise impact for every person we serve across New York State.",
  },
  {
    src: "/images/governance3.png",
    alt: "Community governance meeting",
    title: "Mission Alignment",
    desc: "Every governance decision is made with our mission at the centre — creating pathways from crisis to stability.",
  },
  {
    src: "/images/governance4.png",
    alt: "Strategic planning session",
    title: "Ethical Leadership",
    desc: "Our commitment to dignity, healing, and long‑term stability for every person we serve guides all strategic decisions.",
  },
];

export default function Governance() {
  const [active, setActive] = useState(0);

  return (
    <section className="governance-section" id="governance">
      <div className="container">
        <div className="narrow center">
          <span className="eyebrow">Governance</span>
          <h2 className="text-green">Governance</h2>
          <p style={{ color: "var(--gray-700)", marginTop: 12 }}>
            Sanctuary Forward is guided by a Board of Directors devoted to
            integrity, transparency, and accountability. Through fiduciary
            stewardship, mission alignment, and ethical leadership, we create
            pathways from crisis to stability for adults navigating homelessness,
            recovery, reentry, and major life transitions.
          </p>
          <p style={{ color: "var(--gray-700)", marginTop: 10 }}>
            Our work reflects unwavering commitment to dignity, healing, and
            long‑term stability for every person we serve.
          </p>
        </div>

        {/* Desktop expandable gallery */}
        <div className="governance-gallery">
          {PANELS.map((p, i) => (
            <div
              key={i}
              className={`gov-panel${active === i ? " active" : ""}`}
              style={{ flex: active === i ? "3.5 0 0" : "1 0 0" }}
              onMouseEnter={() => setActive(i)}
            >
              <Image src={p.src} alt={p.alt} fill style={{ objectFit: "cover" }} sizes="(max-width:1200px) 50vw, 420px" />
              <div className="gov-panel-overlay" />
              <div className="gov-panel-text">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="governance-gallery-mobile">
          {PANELS.map((p, i) => (
            <div key={i} className="gov-mobile-panel">
              <Image src={p.src} alt={p.alt} fill style={{ objectFit: "cover" }} />
              <div className="gov-mobile-overlay" />
              <div className="gov-mobile-text">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/board" className="btn btn-primary">Meet Our Board</Link>
        </div>
      </div>
    </section>
  );
}
