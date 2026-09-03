"use client";

import { useState } from "react";
import Logomark from "./Logomark";

const VALUES = [
  {
    n: "01",
    title: "Connected",
    text: "Connected teams drive collaboration, nurture healthy working relationships, and promote knowledge-sharing.",
  },
  {
    n: "02",
    title: "Inclusive",
    text: "Inclusion revolves around the day-to-day interactions between employees, managers, leaders, teams and peers.",
  },
  {
    n: "03",
    title: "Flexible",
    text: "We understand that how and when our employees work best will vary depending on their individual circumstances.",
  },
];

const PERKS = [
  {
    title: "Hybrid work from home",
    lead: "Flexible, inclusive, supportive.",
    desc: "At Loudbound, mutual appreciation and positive assumptions are guiding principles. When we don't see each other each day, it's easy to make assumptions about other employees; we keep these assumptions positive, trusting that everyone is doing their best and making responsible decisions.",
  },
  {
    title: "Professional development",
    desc: "We strongly believe in rewarding our employees by helping them grow within our organisation. We offer professional development support for training that will help you develop your skills and competencies.",
  },
  {
    title: "Wellness allowance",
    desc: "We aim to promote wellness and good health among our employees by contributing to various activities that nourish the mind, body and soul, whether it's gym memberships or spa treatments.",
  },
  {
    title: "Birthday leave",
    desc: "Instead of eating cake with your coworkers, we help you celebrate with a little “ME” time, meaning all Loudbound employees get their birthday off. An extra day is added to your leave balance.",
  },
  {
    title: "Team events",
    desc: "Work can be stressful at times, therefore we take every opportunity to unwind, laugh, party and have fun. From Friday drinks to team buildings and events, we are fond of our social gatherings.",
  },
  {
    title: "Private health care",
    desc: "Relax, we've got you covered. We take care of our employees in more ways than one. Each member of our team gets a private health insurance plan.",
  },
  {
    title: "Work Pension Scheme",
    desc: "Invest in your future with our Work Pension Scheme, designed to help you build long-term financial security with contributions towards your retirement.",
  },
  {
    title: "Relocation package",
    desc: "We believe in global talent. We believe that a person's location does not define their value. We will provide you with a relocation package that will make the transition to your new home as smooth and easy as possible.",
  },
];

const ROLES = [
  {
    title: "Marketing Executive",
    dept: "Marketing",
    type: "Full-time",
    loc: "Remote · Europe",
    posted: "June 2024",
    blurb:
      "Own multi-channel campaigns end to end, from brief to reporting, and help our clients cut through the noise across paid, social and content.",
  },
  {
    title: "Account Executive",
    dept: "Human Resources",
    type: "Full-time",
    loc: "Remote · Europe",
    posted: "June 2024",
    blurb:
      "Be the connective tissue between our clients and delivery teams, keeping projects on track, communication sharp and relationships strong.",
  },
  {
    title: "Senior Designer",
    dept: "Creative",
    type: "Full-time",
    loc: "Remote · Europe",
    posted: "June 2024",
    blurb:
      "Set the visual standard for everything we ship, from brand systems to campaign creative, with real craft and a strong point of view.",
  },
  {
    title: "SEO Specialist",
    dept: "SEO",
    type: "Full-time",
    loc: "Remote · Europe",
    posted: "June 2024",
    blurb:
      "Drive organic growth through technical, on-page and content strategy, turning search data into rankings and revenue.",
  },
  {
    title: "Affiliate Manager",
    dept: "Affiliate",
    type: "Full-time",
    loc: "Remote · Europe",
    posted: "June 2024",
    blurb:
      "Build and scale affiliate partnerships that perform, negotiating deals and optimising programmes for high-quality leads.",
  },
];

function ArrowUpRight({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CareersPage() {
  const [openRole, setOpenRole] = useState<number | null>(0);
  const [activePerk, setActivePerk] = useState(0);

  return (
    <div className="lbc">
      {/* HERO */}
      <header className="lbc-hero">
        <div className="lbc-hero__main">
          <p className="mono lbc-eyebrow">
            <span className="lbc-dot" /> Careers
          </p>
          <h1 className="lbc-hero__title">
            Why join <em>Loudbound?</em>
          </h1>
          <p className="lbc-hero__sub">
            Pick a market leader with a fantastic employee-first approach for your
            next position.
          </p>
          <a className="lbc-hero__cta" href="#open-roles">
            View open roles
            <ArrowUpRight />
          </a>
        </div>

        <aside className="lbc-hero__stats" aria-hidden="true">
          <div className="lbc-stat">
            <span className="lbc-stat__num">05</span>
            <span className="mono lbc-stat__label">Open roles</span>
          </div>
          <div className="lbc-stat">
            <span className="lbc-stat__num">07</span>
            <span className="mono lbc-stat__label">Benefits</span>
          </div>
          <div className="lbc-stat">
            <span className="lbc-stat__num">100%</span>
            <span className="mono lbc-stat__label">Remote-friendly</span>
          </div>
        </aside>
      </header>

      <div className="lb-glowline" aria-hidden="true" />

      {/* CULTURE */}
      <section className="lbc-culture">
        <div className="lbc-culture__rail">
          <p className="mono lbc-kicker">The Loudbound way</p>
          <span className="lbc-culture__mark" aria-hidden="true">
            <Logomark size={40} color="rgba(254,214,93,0.9)" />
          </span>
        </div>
        <div className="lbc-culture__content">
          <p className="lbc-culture__lead">
            Are you a marketing professional looking to jump forward with your
            career at a fast-growing, innovative agency? We have adrenaline-inducing
            opportunities waiting for you. Join a team of industry leaders in an
            open, cutting-edge environment and{" "}
            <em>learn to love Monday</em> like never before.
          </p>
          <blockquote className="lbc-culture__quote">
            <p className="lbc-culture__body">
              At Loudbound, we don&rsquo;t just partner; we elevate. Our mastery of
              the marketing ecosystem transforms challenges into triumphs, ensuring
              your brand not only competes but leads globally.
            </p>
          </blockquote>
        </div>
      </section>

      {/* VALUES */}
      <section className="lbc-values">
        {VALUES.map((v) => (
          <article className="lbc-value" key={v.n}>
            <span className="lbc-value__num" aria-hidden="true">
              {v.n}
            </span>
            <h3 className="lbc-value__title">{v.title}</h3>
            <p className="lbc-value__text">{v.text}</p>
          </article>
        ))}
      </section>

      {/* PERKS */}
      <section className="lbc-perks">
        <div className="lbc-perks__inner">
          <div className="lbc-perks__head">
            <p className="mono lbc-kicker lbc-kicker--dark">Perks &amp; benefits</p>
            <h2 className="lbc-perks__heading">
              We look after our <em>people.</em>
            </h2>
          </div>
          <div className="lbc-perks__tabs">
            <ul className="lbc-perks__tablist">
              {PERKS.map((p, i) => (
                <li key={p.title}>
                  <button
                    className={`lbc-ptab${activePerk === i ? " is-active" : ""}`}
                    onClick={() => setActivePerk(i)}
                    aria-expanded={activePerk === i}
                  >
                    <span className="lbc-ptab__dot" aria-hidden="true" />
                    <span className="lbc-ptab__title">{p.title}</span>
                    <svg
                      className="lbc-ptab__arrow"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14m-6-6 6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
            <div className="lbc-perks__panel">
              <div className="lbc-perks__panelinner" key={activePerk}>
                <span className="mono lbc-perks__panelnum" aria-hidden="true">
                  0{activePerk + 1}
                </span>
                <h3 className="lbc-perks__paneltitle">{PERKS[activePerk].title}</h3>
                {PERKS[activePerk].lead && (
                  <strong className="lbc-perks__panellead">
                    {PERKS[activePerk].lead}
                  </strong>
                )}
                <p className="lbc-perks__paneltext">{PERKS[activePerk].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ROLES — accordion */}
      <section className="lbc-roles" id="open-roles">
        <div className="lbc-roles__head">
          <p className="mono lbc-kicker">
            <span className="lbc-dot" /> Open roles
          </p>
          <h2 className="lbc-roles__heading">
            Find your <em>next move</em>.
          </h2>
        </div>

        <ul className="lbc-acc">
          {ROLES.map((r, i) => {
            const isOpen = openRole === i;
            return (
              <li className={`lbc-accitem${isOpen ? " is-open" : ""}`} key={r.title}>
                <button
                  className="lbc-accbtn"
                  onClick={() => setOpenRole(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="lbc-accbtn__idx" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="lbc-accbtn__title">{r.title}</span>
                  <span className="mono lbc-accbtn__dept">{r.dept}</span>
                  <span className="lbc-accbtn__plus" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </button>
                <div className="lbc-accpanel">
                  <div className="lbc-accpanel__inner">
                    <p className="lbc-accpanel__blurb">{r.blurb}</p>
                    <div className="lbc-accpanel__meta">
                      <span className="lbc-tag">{r.type}</span>
                      <span className="lbc-tag">{r.loc}</span>
                      <span className="mono lbc-accpanel__posted">
                        Posted {r.posted}
                      </span>
                    </div>
                    <a
                      className="lbc-apply"
                      href={`mailto:careers@loudbound.com?subject=Application: ${r.title}`}
                    >
                      Apply now
                      <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="lb-glowline" aria-hidden="true" />

      {/* CLOSING CTA */}
      <section className="lbc-closer">
        <span className="lbc-closer__mark" aria-hidden="true">
          <Logomark size={54} color="var(--mustard)" />
        </span>
        <h2 className="lbc-closer__heading">
          Don&rsquo;t see your role? <em>Introduce yourself.</em>
        </h2>
        <p className="lbc-closer__sub">
          Keep updated with our job openings here or on LinkedIn. Great people are
          always worth hearing from.
        </p>
        <div className="lbc-closer__actions">
          <a className="lbc-closer__btn" href="mailto:careers@loudbound.com">
            careers@loudbound.com
          </a>
          <a className="lbc-closer__link" href="#" aria-label="Follow us on LinkedIn">
            <span>Follow us on</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.48 2.48 0 0 1 4.98 3.5zM2.9 8.9h4.16V21H2.9zM9.5 8.9h3.99v1.65h.06a4.37 4.37 0 0 1 3.93-2.16c4.2 0 4.98 2.77 4.98 6.37V21h-4.16v-5.36c0-1.28 0-2.92-1.78-2.92s-2.06 1.39-2.06 2.83V21H9.5z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
