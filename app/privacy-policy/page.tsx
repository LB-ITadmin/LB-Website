import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import ScrollTop from "../components/ScrollTop";
import PrivacyContent from "../components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Loudbound",
  description:
    "How Loudbound collects, processes and protects your personal data in compliance with the GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="lb-privacy-main">
        <PrivacyContent />
      </main>
      <Footer />
      <CookieConsent />
      <ScrollTop />
    </>
  );
}
