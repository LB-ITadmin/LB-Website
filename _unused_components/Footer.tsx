import Image from "next/image";
import Link from "next/link";

const LINKEDIN = "https://www.linkedin.com/company/leap-square";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-ink text-cream">
      {/* giant wordmark watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 flex select-none justify-center overflow-hidden leading-none"
      >
        <span className="display translate-y-[18%] text-[22vw] font-extrabold tracking-tight text-white/[0.04]">
          LEAP SQUARE
        </span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Image
              src="/img/leap-square-logo.svg"
              alt="Leap Square"
              width={180}
              height={48}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              We supercharge brands — conquering the online space in leaps and
              bounds. B2B advertising, SEO, affiliate management, social media
              and branding.
            </p>
            <a
              href="https://terramedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label mt-6 inline-block text-xs text-yellow hover:opacity-80"
            >
              Part of Terra Media
            </a>
          </div>

          <div>
            <h3 className="mono-label text-xs text-cream/50">Navigate</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/#expertise" className="hover:text-yellow">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-yellow">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-yellow">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-yellow">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label text-xs text-cream/50">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="mailto:info@leapsquare.com" className="hover:text-yellow">
                  info@leapsquare.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@leapsquare.com"
                  className="hover:text-yellow"
                >
                  careers@leapsquare.com
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center">
          <p>© LeapSquare — 2024</p>
          <div className="flex items-center gap-6">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow"
            >
              Linkedin
            </a>
            <Link href="/privacy-policy" className="hover:text-yellow">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
