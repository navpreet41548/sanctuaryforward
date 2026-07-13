import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Sanctuary Forward home">
            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" aria-hidden="true">
              <path d="M11 1C6 7 2 11 4 18c2 6 7 8 7 8s5-2 7-8c2-7-2-11-7-17z" fill="#fff"/>
              <path d="M11 10c-1.5 4-1.5 10 0 16" stroke="#ee7c2b" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
            </svg>
            <span className="footer-logo-text">
              <span>Sanctuary</span>{" "}<span>Forward</span>
            </span>
          </Link>
          <p>More than shelter. A place to heal, rise, and move forward.</p>
        </div>

        <div className="footer-col">
          <h5>Explore</h5>
          <ul>
            <li><Link href="/#home">Home</Link></li>
            <li><Link href="/#about">About Us</Link></li>
            <li><Link href="/#programs">Programs</Link></li>
            {/* <li><Link href="/board">Board</Link></li> */}
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Programs</h5>
          <ul>
            <li><Link href="/#programs">Haven for Women</Link></li>
            <li><Link href="/#programs">Pathway to Strength for Men</Link></li>
            <li><Link href="/#programs">Reentry Support</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li>New York State</li>
            <li><a href="mailto:hello@sanctuaryforward.org">hello@sanctuaryforward.org</a></li>
            <li><a href="tel:+10000000000">+1 (000) 000-0000</a></li>
          </ul>
        </div>

      </div>

      <div className="container footer-bottom">
        <small>&copy; 2026 Sanctuary Forward Inc. All rights reserved.</small>
        <ul className="legal">
          <li><Link href="#">Privacy</Link></li>
          <li><Link href="#">Terms</Link></li>
        </ul>
      </div>
    </footer>
  );
}
