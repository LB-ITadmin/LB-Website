"use client";

import { useState } from "react";

const VALUES = [
  {
    n: "01",
    title: "Partner-Led Goals",
    body: "Our passion for professional success is fuelled by our responsibility to our collaborators. Your goals are our goals, and our successes are your successes.",
    img: "/about/value-1.jpg",
  },
  {
    n: "02",
    title: "Complete Market Coverage",
    body: "We specialise in every area required for total market control of your brands. Cover every metric and watch your conversions soar towards the moon.",
    img: "/about/value-2.jpg",
  },
  {
    n: "03",
    title: "Future-Proof Brand Development",
    body: "Our teams push the boundaries of brand design and marketing prowess within the digital world. Always stay ahead of the pack with us.",
    img: "/about/value-3.jpg",
  },
];

export default function Values() {
  const [active, setActive] = useState(0);

  return (
    <section className="lb-values" id="values">
      <div className="lb-values__grid">
        <div className="lb-values__list">
          <p className="mono lb-values__eyebrow">
            <span className="lb-values__dot" /> Why Loudbound
          </p>
          {VALUES.map((v, i) => (
            <div
              className={`lb-values__item${active === i ? " is-active" : ""}`}
              key={v.n}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
            >
              {i > 0 && <span className="lb-values__line" aria-hidden="true" />}
              <span className="lb-values__num" aria-hidden="true">{v.n}</span>
              <div className="lb-values__content">
                <h3 className="lb-values__title">
                  {v.title}
                  <svg className="lb-values__arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </h3>
                <p className="lb-values__body">{v.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lb-values__media">
          <figure className="lb-values__figure">
            <img
              src="/about/why-loudbound.jpg"
              alt="Upward momentum"
              className="lb-values__img is-active"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
