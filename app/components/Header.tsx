"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logomark from "./Logomark";

const NAV: { label: string; hash: string; page?: string }[] = [
  { label: "Expertise", hash: "#expertise" },
  { label: "About Us", hash: "#about" },
  { label: "Careers", hash: "#careers", page: "/careers" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const to = (hash: string) => (onHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`lb-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="lb-header__inner">
          <a className="lb-brand" href={onHome ? "#top" : "/"} aria-label="Loudbound home">
            <Logomark size={31} color="var(--mustard)" />
            <span className="lb-brand__word">Loudbound</span>
          </a>

          <nav className="lb-nav" aria-label="Primary">
            {NAV.map((item, i) => (
              <a key={item.hash} className="lb-nav__link" href={item.page ?? to(item.hash)}>
                <span className="lb-nav__idx">0{i + 1}</span>
                <span className="lb-nav__label">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="lb-header__right">
            <a className="lb-cta" href={to("#contact")}>
              <span>Contact Us</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button
              className={`lb-burger${open ? " is-open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      <div className={`lb-overlay${open ? " is-open" : ""}`}>
        <nav className="lb-overlay__nav">
          {NAV.map((item, i) => (
            <a
              key={item.hash}
              href={item.page ?? to(item.hash)}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.1 + i * 0.06}s` : "0s" }}
            >
              <span className="mono lb-overlay__idx">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="lb-overlay__cta" href={to("#contact")} onClick={() => setOpen(false)}>
          Contact Us ↗
        </a>
      </div>
    </>
  );
}
