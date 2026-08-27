"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Expertise", href: "/#expertise" },
  { label: "About Us", href: "/#about" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled; // dark text/logo once over cream

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(39,39,39,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" aria-label="Leap Square home" className="relative z-10">
          <Image
            src={
              dark
                ? "/img/LEAP-SQUARE-LOGO-FOR-DARK-BACKGROUND-6.svg"
                : "/img/leap-square-logo.svg"
            }
            alt="Leap Square"
            width={160}
            height={42}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[15px] font-medium transition-colors hover:opacity-70 ${
                dark ? "text-ink" : "text-cream"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className={`group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[15px] font-semibold transition-colors ${
              dark
                ? "bg-orange text-white hover:bg-orange-dark"
                : "bg-white text-orange hover:bg-cream"
            }`}
          >
            Contact Us
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-y-0.5"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-0.5 w-6 transition-all ${
                  dark || open ? "bg-ink" : "bg-cream"
                } ${open && i === 0 ? "translate-y-2 rotate-45" : ""} ${
                  open && i === 1 ? "opacity-0" : ""
                } ${open && i === 2 ? "-translate-y-2 -rotate-45" : ""}`}
              />
            ))}
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-cream px-5 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-orange px-6 py-3 font-semibold text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
