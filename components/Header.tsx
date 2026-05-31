"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const LOGOS = [
  "/images/logo/logo1v1-removebg-preview.png",
  "/images/logo/logo2v1__1_-removebg-preview.png",
  "/images/logo/logo3v1-removebg-preview.png",
];

const NAV = [
  { href: "/#home",     label: "Home" },
  { href: "/#about",    label: "About Us" },
  { href: "/#programs", label: "Programs" },
  { href: "/#mission",  label: "Mission" },
  { href: "/board",     label: "Board" },
];

export default function Header() {
  const [idx, setIdx]       = useState(0);
  const [fading, setFading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cb = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setFading(true);
      setTimeout(() => { setIdx(i => (i + 1) % LOGOS.length); setFading(false); }, 400);
    }, 5 * 60 * 1000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Progressive enhancement: close the menu after a link tap (works once JS is up;
  // if JS never runs, tapping the burger again still closes it — pure CSS).
  const closeMenu = () => { if (cb.current) cb.current.checked = false; };

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      {/* Pure-CSS toggle — no JS needed to open/close the mobile menu */}
      <input ref={cb} type="checkbox" id="nav-cb" className="nav-cb" />

      <div className="nav-wrap container">
        <Link href="/#home" className="logo" aria-label="Sanctuary Forward home" onClick={closeMenu}>
          <Image
            src={LOGOS[idx]}
            alt="Sanctuary Forward"
            width={140}
            height={70}
            className="logo-img"
            style={{ opacity: fading ? 0 : 1 }}
            priority
          />
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {NAV.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="nav-link">{l.label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-primary btn-sm nav-cta">Contact</Link>
        </nav>

        {/* The label toggles the checkbox — works on iOS with zero JS */}
        <label htmlFor="nav-cb" className="nav-toggle" aria-label="Toggle navigation menu">
          <span />
          <span />
          <span />
        </label>
      </div>

      <div className="mobile-menu">
        <ul>
          {NAV.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link" onClick={closeMenu}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-primary nav-cta" onClick={closeMenu}>Contact</Link>
      </div>
    </header>
  );
}
