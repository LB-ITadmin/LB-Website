import Logomark from "./Logomark";

export default function About() {
  return (
    <section className="lb-about" id="about">
      <div className="lb-about__grid">
        <div className="lb-about__copy">
          <p className="mono lb-about__eyebrow">
            <span className="lb-about__dot" /> About Us
          </p>
          <h2 className="lb-about__heading">
            What is <em>Loudbound</em>
            <span className="lb-about__q">?</span>
          </h2>
          <div className="lb-about__body">
            <p>
              <strong>Simple.</strong> Loudbound is the building block within
              your brand that drives it forward to bold new horizons. Attach us
              to your vision and we&rsquo;ll connect seamlessly, launching your
              products to dizzying new heights.
            </p>
            <p>
              Loudbound is not just another company. It&rsquo;s a dynamic force
              propelling businesses forward in competitive markets.
            </p>
            <p>
              With expertise across Paid Media, SEO, Affiliate Management,
              Social Media and Branding, we build and enact strategies that
              breathe life into brands, turning our partners into industry
              leaders.
            </p>
          </div>
          <a className="lb-about__cta" href="/careers">
            Come work with us
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="lb-about__media">
          <figure className="lb-about__figure">
            <img src="/about/office.webp" alt="The Loudbound studio" />
            <span className="lb-about__badge" aria-hidden="true">
              <Logomark size={22} color="var(--ink)" />
            </span>
          </figure>
          <p className="mono lb-about__caption">Built for upward momentum</p>
        </div>
      </div>
    </section>
  );
}
