const WIN = [
  { letter: "W", word: "Worth",          smallColor: "#ee7c2b" },
  { letter: "I", word: "Identity",       smallColor: "#dc2626" },
  { letter: "N", word: "New Beginnings", smallColor: "#1d4f3f" },
];

export default function OurMessage() {
  return (
    <section className="section win-section" id="message">
      <div className="container center">

        {/* Eyebrow */}
        <p style={{ fontWeight: 700, fontSize: "1.125rem", color: "#8604FB", marginBottom: 8, letterSpacing: "0.04em" }}>
          Our Message
        </p>

        {/* Main heading */}
        <h2 className="text-green" style={{ margin: "0 0 20px" }}>
          From Crisis to Stability, With Dignity.
        </h2>

        {/* First paragraph — bold */}
        <p style={{ maxWidth: 660, margin: "0 auto 14px", fontWeight: 700, color: "var(--gray-900)", fontSize: "0.9375rem", lineHeight: 1.65 }}>
          A difficult season does not define a person&rsquo;s future. Because
          everyone deserves the opportunity to rise.
        </p>

        {/* Second paragraph */}
        <p style={{ maxWidth: 620, margin: "0 auto 40px", color: "var(--gray-700)", fontSize: "0.9375rem", lineHeight: 1.65 }}>
          At Sanctuary Forward, we provide a safe and supportive environment
          where adults can regain their footing, reconnect with what matters
          most, and move forward with confidence.
        </p>

        {/* WIN intro */}
        <p style={{ fontWeight: 600, color: "var(--gray-700)", marginBottom: 28, fontSize: "0.9375rem" }}>
          Through the power of{" "}
          <strong style={{ color: "var(--gray-900)" }}>WIN</strong>, we help
          individuals rediscover:
        </p>

        {/* WIN rows — all left-aligned */}
        <div style={{ display: "inline-flex", flexDirection: "column", width: "min(520px, 68vw)", textAlign: "left" }}>
          {WIN.map((item) => (
            <div key={item.letter}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, paddingTop: 8, paddingBottom: 8 }}>

                {/* Letter block — clips only top/bottom, left/right bleed freely */}
                <div style={{ position: "relative", flexShrink: 0, width: 70, height: 70, clipPath: "inset(0 -200px)" }}>
                  {/* Large watermark — pinned to top, bleeds below */}
                  <span style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 130,
                    lineHeight: 1,
                    fontWeight: 700,
                    color: "rgba(45, 195, 170, 0.22)",
                    fontFamily: "'Petrona', serif",
                    userSelect: "none",
                    whiteSpace: "nowrap",
                  }}>
                    {item.letter}
                  </span>
                  {/* Small coloured letter — centred over the watermark */}
                  <span style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: 22,
                    fontWeight: 700,
                    lineHeight: 1,
                    color: item.smallColor,
                    fontFamily: "var(--font-poppins), sans-serif",
                  }}>
                    {item.letter}
                  </span>
                </div>

                {/* Word */}
                <p style={{ margin: 0, fontSize: "1.125rem", color: "#2a2a2a", fontWeight: 400 }}>
                  &mdash; {item.word}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "#e5e7eb" }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
