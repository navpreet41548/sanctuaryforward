"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds a subtle fade/slide-in as sections scroll into view — on every page.
 * Progressive enhancement: if JS never runs, content stays fully visible
 * (we only add the hiding `.reveal` class from JS, never in the markup).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("main section, .site-footer")
    );
    if (!targets.length || reduce) return;

    const vh = window.innerHeight;
    targets.forEach((el) => {
      el.classList.add("reveal");
      // Already in view on load → show immediately (no flash, no animation).
      if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add("in");
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      // threshold 0 → fires as soon as any pixel enters, so tall (stacked,
      // mobile) sections reveal reliably regardless of their height.
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
