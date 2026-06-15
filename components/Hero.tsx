import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('/images/homeBg.png')" }}
        role="img"
        aria-label="Community members holding hands"
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>More Than a Shelter.</h1>
        <p className="hero-sub">A Safe Place to Heal, Rebuild, and Begin Again.</p>
        {/* <Link href="/#programs" className="btn btn-primary btn-lg">Start Your Journey</Link> */}
      </div>
    </section>
  );
}
