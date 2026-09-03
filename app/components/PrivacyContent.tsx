"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "general", index: "01", title: "General information" },
  { id: "processing", index: "02", title: "Data processing" },
  { id: "rights", index: "03", title: "Your rights as a subject" },
  { id: "transfer", index: "04", title: "Transfer of your data to third parties" },
];

export default function PrivacyContent() {
  const [active, setActive] = useState("general");
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = refs.current[s.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="lb-privacy">
      <header className="lb-privacy__head">
        <p className="mono lb-privacy__eyebrow">
          <span className="lb-privacy__dot" /> Privacy Policy
        </p>
        <h1 className="lb-privacy__title">Data protection</h1>
        <p className="lb-privacy__lede">
          The following data protection declaration applies to the use of the
          website{" "}
          <a href="https://www.loudbound.com">www.loudbound.com</a>{" "}
          (hereinafter &ldquo;website&rdquo;).
        </p>
        <div className="lb-glowline" aria-hidden="true" />
      </header>

      <div className="lb-privacy__grid">
        <nav className="lb-privacy__nav" aria-label="Sections">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  className={`lb-privacy__navitem${
                    active === s.id ? " is-active" : ""
                  }`}
                  onClick={() => go(s.id)}
                >
                  <span className="lb-privacy__navnum">{s.index}/</span>
                  <span className="lb-privacy__navlabel">{s.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lb-privacy__body">
          <section
            id="general"
            ref={(el) => {
              refs.current.general = el;
            }}
            className="lb-privacy__section"
          >
            <p>
              We attach great importance to data protection. The collection and
              processing of your personal data takes place in compliance with the
              applicable data protection regulations, in particular the EU General
              Data Protection Regulation (GDPR). We collect and process your
              personal data in order to be able to offer you the website and any
              other services offered by the website. This declaration describes how
              and for what purpose your data is collected and used and what choices
              you have in connection with personal data.
            </p>
            <p>You can save and print this privacy policy at any time.</p>
            <h3 className="lb-privacy__sub">Responsible body</h3>
            <p>
              The responsible body for the collection, processing and use of your
              personal data within the meaning of the GDPR is Loudbound. For any
              privacy matter you can reach us at{" "}
              <a href="mailto:info@loudbound.com">info@loudbound.com</a>.
            </p>
            <h3 className="lb-privacy__sub">Key definitions</h3>
            <p>
              <strong>Data subject.</strong> A data subject is any identified or
              identifiable natural person whose personal data is processed by the
              controller.
            </p>
            <p>
              <strong>Processing.</strong> Processing is any operation or set of
              operations which is performed on personal data or on sets of personal
              data, whether or not by automated means, such as collection,
              recording, organisation, structuring, storage, adaptation or
              alteration, retrieval, consultation, use, disclosure by transmission,
              dissemination or otherwise making available, alignment or linking,
              restriction, erasure or destruction.
            </p>
            <p>
              <strong>Restriction of processing.</strong> Restriction of processing
              is the marking of stored personal data with the aim of limiting its
              future processing.
            </p>
            <p>
              <strong>Profiling.</strong> Profiling is any form of automated
              processing of personal data consisting of the use of personal data to
              evaluate certain personal aspects relating to a natural person, in
              particular to analyse or predict aspects concerning that natural
              person&rsquo;s performance at work, economic situation, health,
              personal preferences, interests, reliability, behaviour, location or
              movements. Profiling does not take place on our website.
            </p>
          </section>

          <div className="lb-glowline" aria-hidden="true" />

          <section
            id="processing"
            ref={(el) => {
              refs.current.processing = el;
            }}
            className="lb-privacy__section"
          >
            <h2 className="lb-privacy__h2">Data processing</h2>
            <h3 className="lb-privacy__sub">Server log files</h3>
            <p>
              When you visit our website, the provider automatically collects and
              stores information in server log files that your browser transmits.
              This includes the browser type and version, the operating system,
              the referrer URL, the host name of the accessing device and the time
              of the server request. This data cannot be assigned to specific
              persons and is not merged with other data sources. It is processed to
              ensure a smooth connection, comfortable use of the website, and to
              evaluate system security and stability.
            </p>
            <h3 className="lb-privacy__sub">Contact requests</h3>
            <p>
              If you send us enquiries via the contact form or by email, your
              details are stored for the purpose of processing the request and in
              case of follow-up questions. We do not pass on this data without your
              consent. The legal basis for processing is our legitimate interest in
              responding to your request and, where a contract is initiated, the
              performance of pre-contractual measures.
            </p>
            <h3 className="lb-privacy__sub">Cookies</h3>
            <p>
              Our website uses cookies that are necessary for operation as well as
              optional cookies that help us understand how the site is used. You
              can accept or decline optional cookies at any time through the cookie
              banner. Necessary cookies do not require consent; all other cookies
              are only set once you have given consent.
            </p>
            <h3 className="lb-privacy__sub">Storage period</h3>
            <p>
              We only store personal data for as long as is necessary for the
              respective purpose or as required by statutory retention periods.
              Once the purpose no longer applies and no legal obligation to retain
              exists, the data is erased.
            </p>
          </section>

          <div className="lb-glowline" aria-hidden="true" />

          <section
            id="rights"
            ref={(el) => {
              refs.current.rights = el;
            }}
            className="lb-privacy__section"
          >
            <h2 className="lb-privacy__h2">Your rights as a subject</h2>
            <p>
              Within the scope of the applicable law you have the following rights
              regarding your personal data:
            </p>
            <ul className="lb-privacy__list">
              <li>
                <strong>Right of access.</strong> You can request confirmation as to
                whether personal data concerning you is processed and obtain
                information about it.
              </li>
              <li>
                <strong>Right to rectification.</strong> You can request the
                correction of inaccurate data and the completion of incomplete data.
              </li>
              <li>
                <strong>Right to erasure.</strong> You can request the deletion of
                your personal data where the legal requirements are met.
              </li>
              <li>
                <strong>Right to restriction.</strong> You can request the
                restriction of processing of your personal data.
              </li>
              <li>
                <strong>Right to data portability.</strong> You can request to
                receive the data you have provided in a structured, commonly used
                and machine-readable format.
              </li>
              <li>
                <strong>Right to object.</strong> You can object to the processing
                of your personal data on grounds relating to your particular
                situation.
              </li>
              <li>
                <strong>Right to withdraw consent.</strong> Where processing is
                based on consent, you can withdraw it at any time with effect for
                the future.
              </li>
            </ul>
            <p>
              You also have the right to lodge a complaint with a data protection
              supervisory authority about the processing of your personal data.
            </p>
          </section>

          <div className="lb-glowline" aria-hidden="true" />

          <section
            id="transfer"
            ref={(el) => {
              refs.current.transfer = el;
            }}
            className="lb-privacy__section"
          >
            <h2 className="lb-privacy__h2">Transfer of your data to third parties</h2>
            <p>
              We do not sell your personal data. A transfer to third parties only
              takes place where it is permitted by law, necessary for the fulfilment
              of a contract, or where you have given your consent.
            </p>
            <h3 className="lb-privacy__sub">Processors</h3>
            <p>
              We use carefully selected service providers to operate our website,
              for example for hosting and infrastructure. These providers act as
              processors on our behalf, are bound by contract, and only process data
              in accordance with our instructions and the applicable data protection
              law.
            </p>
            <h3 className="lb-privacy__sub">Transfers outside the EU</h3>
            <p>
              Should data be transferred to recipients in a country outside the
              European Union, we ensure an adequate level of protection through
              appropriate safeguards such as the European Commission&rsquo;s
              standard contractual clauses.
            </p>
            <h3 className="lb-privacy__sub">Contact for privacy matters</h3>
            <p>
              For questions about this policy, or to exercise any of your rights,
              contact us at{" "}
              <a href="mailto:info@loudbound.com">info@loudbound.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
