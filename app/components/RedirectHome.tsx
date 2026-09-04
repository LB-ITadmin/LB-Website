"use client";

import { useEffect } from "react";

export default function RedirectHome() {
  useEffect(() => {
    window.location.replace("/");
  }, []);
  return null;
}
