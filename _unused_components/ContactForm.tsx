"use client";

import { useState } from "react";

const inputCls =
  "w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-ink placeholder:text-ink/45 focus:border-yellow focus:outline-none focus:ring-2 focus:ring-yellow/50";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend yet on localhost — wire to email/CRM later.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-white/95 p-8 text-center">
        <p className="text-xl font-semibold text-ink">Thanks — message sent!</p>
        <p className="mt-2 text-ink/70">
          The Leap Square team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="fullname" placeholder="Full name*" className={inputCls} />
        <input
          required
          type="email"
          name="email"
          placeholder="Your email*"
          className={inputCls}
        />
      </div>
      <input name="phone" placeholder="Phone" className={inputCls} />
      <textarea name="message" placeholder="Message" rows={5} className={inputCls} />
      <label className="flex items-start gap-3 text-sm text-cream/90">
        <input required type="checkbox" className="mt-1 accent-yellow" />
        <span>Accept terms &amp; conditions.</span>
      </label>
      <button
        type="submit"
        className="rounded-full bg-yellow px-8 py-3.5 font-semibold text-ink shadow-sm transition-transform hover:-translate-y-0.5"
      >
        Take the Leap
      </button>
    </form>
  );
}
