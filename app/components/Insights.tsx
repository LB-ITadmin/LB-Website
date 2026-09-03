const PHOTOS = [
  { src: "/insights/photo-1.png", alt: "Strategy session with campaign materials" },
  { src: "/insights/photo-2.png", alt: "The Loudbound studio" },
  { src: "/insights/photo-3.png", alt: "Stage lights" },
];

export default function Insights() {
  const strip = [...PHOTOS, ...PHOTOS, ...PHOTOS, ...PHOTOS];
  return (
    <section className="lb-insights" id="insights">
      <div className="lb-insights__inner">
        <div className="lb-insights__copy">
          <p className="mono lb-insights__eyebrow">
            <span className="lb-insights__dot" /> Insights
          </p>
          <h2 className="lb-insights__heading">
            <em>Tap into consumer-driven insights</em> and propel your success.
          </h2>
          <p className="lb-insights__sub">
            Real understanding of the people behind the metrics. We turn
            behaviour, intent and culture into momentum for your brand.
          </p>
          <a className="lb-insights__cta" href="#contact">
            Let&rsquo;s talk
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="lb-insights__art">
          <img
            src="/insights/insights-illustration.png"
            alt=""
            aria-hidden="true"
            width={954}
            height={842}
          />
        </div>
      </div>

      {/* kinetic photo strip */}
      <div className="lb-insights__strip" aria-label="Life at Loudbound">
        <div className="lb-insights__strip-track">
          {strip.map((p, i) => (
            <figure className="lb-insights__shot" key={i}>
              <img src={p.src} alt={i < PHOTOS.length ? p.alt : ""} aria-hidden={i >= PHOTOS.length} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
