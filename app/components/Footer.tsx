import Logomark from "./Logomark";

const YEAR = new Date().getFullYear();

const SITEMAP = [
  { label: "Expertise", href: "#expertise" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.48 2.48 0 0 1 4.98 3.5zM2.9 8.9h4.16V21H2.9zM9.5 8.9h3.99v1.65h.06a4.37 4.37 0 0 1 3.93-2.16c4.2 0 4.98 2.77 4.98 6.37V21h-4.16v-5.36c0-1.28 0-2.92-1.78-2.92s-2.06 1.39-2.06 2.83V21H9.5z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="lb-footer" id="site-footer">
      {/* kinetic CTA */}
      <a className="lb-footer__cta" href="#contact">
        <span className="mono lb-footer__eyebrow">Let&rsquo;s make noise</span>
        <h2 className="lb-footer__headline">
          Ready to
          <br />
          get <em>loud?</em>
          <svg
            className="lb-footer__arrow"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 18 18 6M8 6h10v10"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h2>
      </a>

      {/* columns */}
      <div className="lb-footer__grid">
        <div className="lb-footer__col lb-footer__brandcol">
          <div className="lb-footer__mark">
            <Logomark size={30} color="var(--mustard)" />
            <span>Loudbound</span>
          </div>
          <p className="lb-footer__blurb">
            A B2B digital-marketing studio engineered for upward momentum across
            paid media, SEO, affiliate, social &amp; brand.
          </p>
        </div>

        <div className="lb-footer__col">
          <span className="mono lb-footer__label">Sitemap</span>
          <ul>
            {SITEMAP.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lb-footer__col">
          <span className="mono lb-footer__label">Social</span>
          <ul>
            {SOCIAL.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="lb-footer__social">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {l.icon}
                  </svg>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lb-footer__col">
          <span className="mono lb-footer__label">Get in touch</span>
          <ul>
            <li>
              <a href="mailto:info@loudbound.com">info@loudbound.com</a>
            </li>
            <li>
              <a href="mailto:careers@loudbound.com">careers@loudbound.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="lb-glowline" aria-hidden="true" />

      <div className="lb-footer__base">
        <span className="mono">© {YEAR} Loudbound</span>
        <span className="mono">Built with intent</span>
      </div>
    </footer>
  );
}
