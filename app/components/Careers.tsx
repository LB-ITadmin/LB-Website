const ROLES = [
  { title: "Marketing Executive", dept: "Marketing" },
  { title: "Account Executive", dept: "Human Resources" },
  { title: "Senior Designer", dept: "Creative" },
  { title: "SEO Specialist", dept: "SEO" },
  { title: "Affiliate Manager", dept: "Affiliate" },
];

export default function Careers() {
  return (
    <section className="lb-careers" id="careers">
      <div className="lb-careers__top">
        <div>
          <p className="mono lb-careers__eyebrow">
            <span className="lb-careers__dot" /> Careers
          </p>
          <h2 className="lb-careers__heading">
            Take your career <em>further</em>.
          </h2>
          <p className="lb-careers__intro">
            Are you a marketing professional looking to jump forward with your
            career at a fast-growing, innovative agency? We have adrenaline-inducing
            opportunities waiting at Loudbound, so prepare to get excited. Join a
            team of industry leaders in an open, cutting-edge environment and learn
            to love Monday like never before.
          </p>
        </div>
        <a className="lb-careers__cta" href="/careers">
          Visit careers page
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="lb-careers__list">
        {ROLES.map((r, i) => (
          <a className="lb-role" href="/careers" key={r.title}>
            <span className="lb-role__index" aria-hidden="true">0{i + 1}</span>
            <div className="lb-role__main">
              <h3 className="lb-role__title">{r.title}</h3>
              <span className="mono lb-role__dept">{r.dept} Department</span>
            </div>
            <div className="lb-role__meta">
              <span className="lb-role__tag">Full-time</span>
              <span className="lb-role__tag">Remote · Europe</span>
            </div>
            <span className="lb-role__apply">
              Apply
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
