"use client";

import { useEffect, useState } from "react";

function CookieIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 2.5A13.5 13.5 0 1 0 29.5 16a1 1 0 0 0-1.7-.7 3 3 0 0 1-4.1-4.1 3 3 0 0 1-2.9-2.9A3 3 0 0 1 16.7 4.2 1 1 0 0 0 16 2.5Z"
        fill="currentColor"
      />
      <g fill="var(--ink)">
        <circle cx="12" cy="12" r="1.6" />
        <circle cx="19.5" cy="11.5" r="1.3" />
        <circle cx="21" cy="18.5" r="1.6" />
        <circle cx="13.5" cy="19.5" r="1.4" />
        <circle cx="16.5" cy="24" r="1.2" />
      </g>
    </svg>
  );
}

export default function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setReady(true);
    try {
      if (!localStorage.getItem("lb-cookie-consent")) setOpen(true);
    } catch {}
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem("lb-cookie-consent", value);
    } catch {}
    setOpen(false);
  };

  if (!ready) return null;

  if (!open) {
    return (
      <button
        className="lb-cookie-fab"
        onClick={() => setOpen(true)}
        aria-label="Cookie preferences"
      >
        <CookieIcon size={20} />
      </button>
    );
  }

  return (
    <div className="lb-cookie" role="dialog" aria-label="Cookie consent">
      <span className="lb-cookie__icon" aria-hidden="true">
        <CookieIcon size={26} />
      </span>
      <div className="lb-cookie__body">
        <p className="lb-cookie__title">A few cookies?</p>
        <p className="lb-cookie__text">
          We use cookies to improve your experience and understand how the site
          is used. You can accept or decline.
        </p>
      </div>
      <div className="lb-cookie__actions">
        <button
          className="lb-cookie__btn lb-cookie__btn--ghost"
          onClick={() => decide("declined")}
        >
          Decline
        </button>
        <button
          className="lb-cookie__btn lb-cookie__btn--accept"
          onClick={() => decide("accepted")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
