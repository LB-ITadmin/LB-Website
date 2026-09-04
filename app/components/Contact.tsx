"use client";

import { useState } from "react";
import Logomark from "./Logomark";
import { SHOW_CAREERS, SHOW_LINKEDIN, WEB3FORMS_ACCESS_KEY } from "../flags";

function LinkedIn({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.48 2.48 0 0 1 4.98 3.5zM2.9 8.9h4.16V21H2.9zM9.5 8.9h3.99v1.65h.06a4.37 4.37 0 0 1 3.93-2.16c4.2 0 4.98 2.77 4.98 6.37V21h-4.16v-5.36c0-1.28 0-2.92-1.78-2.92s-2.06 1.39-2.06 2.83V21H9.5z" />
    </svg>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New enquiry from loudbound.com",
          from_name: "Loudbound website",
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });
      const json = await res.json().catch(() => ({ success: false }));
      if (!res.ok || !json.success) throw new Error("request failed");
      setSent(true);
    } catch {
      setError(
        "Something went wrong. Please email info@loudbound.com directly."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="lb-contact" id="contact">
      <div className="lb-contact__wm" aria-hidden="true">
        <Logomark size={320} color="rgba(254,214,93,0.13)" />
      </div>

      <div className="lb-contact__inner">
        <div className="lb-contact__info">
          <p className="mono lb-contact__eyebrow">
            <span className="lb-contact__dot" /> Contact Us
          </p>
          <h2 className="lb-contact__heading">
            Ready to get loud? <em>Get in touch.</em>
          </h2>
          <p className="lb-contact__sub">
            Message us now to find out how we can help your brand explode.
            There&rsquo;s no project too big or too small.
          </p>

          <div className="lb-contact__emails">
            <div>
              <span className="mono lb-contact__label">General</span>
              <a href="mailto:info@loudbound.com">info@loudbound.com</a>
            </div>
            {SHOW_CAREERS && (
              <div>
                <span className="mono lb-contact__label">Careers</span>
                <a href="mailto:careers@loudbound.com">careers@loudbound.com</a>
              </div>
            )}
          </div>

          {SHOW_LINKEDIN && (
            <a className="lb-contact__social" href="#" aria-label="Follow us on LinkedIn">
              <span>Follow us on</span>
              <LinkedIn />
            </a>
          )}
        </div>

        {sent ? (
          <div className="lb-contact__thanks">
            <span className="lb-contact__thanks-mark" aria-hidden="true">
              <Logomark size={40} color="var(--ink)" />
            </span>
            <h3>Message sent.</h3>
            <p>Thanks for reaching out. We&rsquo;ll be in touch shortly.</p>
          </div>
        ) : (
          <form className="lb-contact__form" onSubmit={handleSubmit}>
            <label className="lb-field">
              <span>Full name*</span>
              <input type="text" name="name" required autoComplete="name" />
            </label>
            <label className="lb-field">
              <span>Your email*</span>
              <input type="email" name="email" required autoComplete="email" />
            </label>
            <label className="lb-field">
              <span>Phone</span>
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label className="lb-field">
              <span>Message</span>
              <textarea name="message" rows={5} />
            </label>
            <div className="lb-contact__actions">
              <label className="lb-check">
                <input type="checkbox" required />
                <span>Accept terms &amp; conditions.</span>
              </label>
              <button className="lb-contact__send" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send"}
                {!sending && (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
            {error && <p className="lb-contact__error">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
