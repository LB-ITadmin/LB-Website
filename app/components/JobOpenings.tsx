export default function JobOpenings() {
  return (
    <section className="lb-openings" id="job-openings">
      <figure className="lb-openings__figure">
        <img src="/about/jobs-image.jpg" alt="" aria-hidden="true" />
        <span className="mono lb-openings__tag">Now hiring</span>
      </figure>
      <div className="lb-openings__bar">
        <h2 className="lb-openings__heading">
          Keep updated with our job openings, here or on{" "}
          <em>LinkedIn.</em>
        </h2>
        <a className="lb-openings__cta" href="#" aria-label="Follow us on LinkedIn">
          <span>Follow us on</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.48 2.48 0 0 1 4.98 3.5zM2.9 8.9h4.16V21H2.9zM9.5 8.9h3.99v1.65h.06a4.37 4.37 0 0 1 3.93-2.16c4.2 0 4.98 2.77 4.98 6.37V21h-4.16v-5.36c0-1.28 0-2.92-1.78-2.92s-2.06 1.39-2.06 2.83V21H9.5z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
