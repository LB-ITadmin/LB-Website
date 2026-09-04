import { SHOW_CAREERS, SHOW_LINKEDIN } from "../flags";

export default function Hero() {
  return (
    <main id="top" className="lb-hero2">
      <div className="lb-hero2__logo" aria-hidden="true">
        <svg viewBox="0 0 310.69 313.77" fill="none">
          <path
            className="lb-logo-p1"
            d="M217.2,226.31v43.82c0,1.83-.96,3-2.16,4.23l-35.9,36.84c-1.56,1.6-2.61,2.57-5.1,2.57H3.07c-1.59,0-3.06-.76-3.06-2.54v-176.55c-.01-2.33.58-3.61,2.08-5.1l34.68-34.52c.95-.95,2.57-1.72,3.91-1.72h43.79c1.29-.01,2.42,1.24,2.42,2.65v120.56c.27,3.81,2.97,6.87,6.75,6.87l22.18.05v30.71c0,.51.65,1.6,1.14,1.69.49.09,1.74-.24,2.14-.6l35.25-31.84,59.98.02c1.65,0,2.81,1.21,2.86,2.85Z"
          />
          <path
            className="lb-logo-p2"
            d="M225.03,216.1l.03-55.56v-63.63c0-4.85-3.64-7.18-8.13-7.18l-120.61.03c-1.48,0-2.8-1.24-2.8-2.63l-.05-44.3c0-2.11.75-3.7,2.22-5.19L130.61,2.36C131.89,1.07,132.95,0,135.06,0h173.06c1.39,0,2.57,1.34,2.57,2.73v167.36c0,2.04-1.13,3.09-2.37,4.38l-41.44,43.04c-.93.96-2.73,1.5-4.03,1.5l-35.13.02c-1.58,0-2.69-1.28-2.69-2.92Z"
          />
        </svg>
      </div>

      <div className="lb-hero2__text">
        <p className="mono lb-hero2__eyebrow">
          <span className="lb-hero2__dot" /> B2B Digital Marketing Studio
        </p>
        <h1 className="lb-hero2__title">
          We supercharge <em>brands</em>,<br />
          conquering the online&nbsp;space.
        </h1>
        <p className="lb-hero2__sub">
          Join the new vanguard of online paid media, acquisition &amp;
          marketing. Loudbound is a tidal force, propelling conversion waves
          upward within B2B channels and crafting your legacy as an industry
          leader.
        </p>

        <div className="lb-hero2__actions">
          <a className="lb-btn lb-btn--orange" href="#contact">
            Get Started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          {SHOW_CAREERS && (
            <a className="lb-btn lb-btn--mustard" href="/careers">
              Careers
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
          {SHOW_LINKEDIN && (
            <a className="lb-btn lb-btn--ghost" href="#" aria-label="Follow us on LinkedIn">
              Follow us on
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.48 2.48 0 0 1 4.98 3.5zM2.9 8.9h4.16V21H2.9zM9.5 8.9h3.99v1.65h.06a4.37 4.37 0 0 1 3.93-2.16c4.2 0 4.98 2.77 4.98 6.37V21h-4.16v-5.36c0-1.28 0-2.92-1.78-2.92s-2.06 1.39-2.06 2.83V21H9.5z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Grow Your Career — side card */}
      {SHOW_CAREERS && (
        <a className="lb-grow" href="/careers">
          <span className="lb-grow__icon" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M7 7v10h10M7 17 18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="lb-grow__body">
            <span className="lb-grow__title">Grow Your Career</span>
            <span className="lb-grow__sub">Take a look at our open positions and apply.</span>
          </span>
        </a>
      )}

      <span className="mono lb-hero2__scroll" aria-hidden="true">
        Scroll ↓
      </span>
    </main>
  );
}
