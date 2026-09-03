"use client";

import { useRef } from "react";

const SERVICES = [
  {
    key: "advertising",
    title: "Paid Media",
    paras: [
      "Put your brand in front of the right audience with Loudbound's Paid Media expertise. Our strategies and campaigns are built around your goals, combining data-driven insights with smart targeting to maximise reach, engagement and performance.",
      "Our Paid Media team specialises in creating high-impact, performance-driven campaigns across multiple channels, continuously optimising every step from first impression through to conversion.",
      "Let us maximise your reach, accelerate acquisition and turn your media investment into measurable growth.",
    ],
  },
  {
    key: "seo",
    title: "SEO",
    paras: [
      "Loudbound's SEO team utilises top-tier tools and industry knowledge to dominate search rankings and guarantee conversion by producing high-value Google-friendly content that brings in high traffic yield with the right user intent for conversion.",
      "Not every growing business can spare the resources to hire their own crack team of SEO experts to battle for dominance on the SERP. That's where our keyword warriors and content wizards come in! Using the latest tools and industry-leading techniques we will bring your sites to the top; beating out your competitors and securing traffic.",
    ],
  },
  {
    key: "affiliate",
    title: "Affiliate Management",
    paras: [
      "At Loudbound, our next-level marketing programs are led by industry experts who push for exceptional results to help you hit and surpass your digital targets. Partnership is at the core of everything we do and it's essential for our partners to feel complete trust in our abilities and commitment to their brands.",
      "Our marketing services are designed to act as seamless funnels for customers and are perfect representations of our capabilities to convert, retain and bring consistent value time and time again. Join us on our journey for affiliate management excellence.",
    ],
  },
  {
    key: "social",
    title: "Social Media",
    paras: [
      "Marketing for the expanding and ever changing universe of social media can be a daunting and often unforgiving prospect for many growing businesses. That's why it's especially important to have the services of experts at your disposal who understand trend trajectory and how to reach the users that will most benefit from your brands.",
      "Our social media team are veterans of thousands of successful campaigns ranging from influencer deals to cross-selling projects across all popular platforms. We understand that your products require bespoke paid media for each portal and can help you dominate the competition across all of these spaces.",
    ],
  },
  {
    key: "branding",
    title: "Branding",
    paras: [
      "What makes brands really POP and stick in the minds of customers now and in the future? That's what our specialised branding team is working on every day while developing memorable and targeted campaigns that perfectly suit your products.",
      "Even the most useful brands can risk being forgotten if their appearance, messaging and persona isn't finely tuned to blossom within their markets. Let us guide you through a branding masterclass as we develop a style, theme and personality that makes your brand stick in the minds and hearts of your customers.",
    ],
  },
];

export default function Expertise() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".lb-card");
    const amount = card ? card.offsetWidth + 24 : 360;
    const max = el.scrollWidth - el.clientWidth;
    if (dir === 1 && el.scrollLeft >= max - 6) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir === -1 && el.scrollLeft <= 6) {
      el.scrollTo({ left: max, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * amount, behavior: "smooth" });
    }
  };

  return (
    <section className="lb-expertise" id="expertise">
      <div className="lb-expertise__top">
        <div>
          <p className="mono lb-expertise__eyebrow">
            <span className="lb-expertise__dot" /> Expertise
          </p>
          <h2 className="lb-expertise__heading">
            Let us build, manage and <em>grow</em> your products.
          </h2>
        </div>
        <div className="lb-expertise__intro">
          <p>
            Loudbound are the masters of the digital marketing ecosystem, adding
            valuable operational benefits to clients all over the world with a
            full range of B2B marketing and paid media services.
          </p>
          <p>
            We have many focused teams in specific areas within our solutions
            that come together to help your brand excel beyond any competition.
          </p>
          <p className="lb-expertise__intro-strong">
            Find the services you need below and get in touch today.
          </p>
        </div>
      </div>

      <div className="lb-expertise__bar">
        <span className="mono lb-expertise__count">05 Services</span>
        <div className="lb-arrows">
          <button aria-label="Previous" onClick={() => scroll(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5m6-6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button aria-label="Next" onClick={() => scroll(1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="lb-carousel" ref={trackRef}>
        {SERVICES.map((s, i) => (
          <article className="lb-card" key={s.key}>
            <span className="mono lb-card__idx">0{i + 1}</span>
            <div className="lb-card__head">
              <img
                className="lb-card__icon"
                src={`/icons/${s.key}.svg`}
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
              />
              <h3 className="lb-card__title">{s.title}</h3>
            </div>
            <div className="lb-card__body">
              {s.paras.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
