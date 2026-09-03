import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import ScrollTop from "../components/ScrollTop";
import CareersPage from "../components/CareersPage";

export const metadata: Metadata = {
  title: "Careers — Loudbound",
  description:
    "Join Loudbound. Open roles across marketing, creative, SEO and affiliate, with an employee-first culture and a remote-friendly, benefits-loaded package.",
};

export default function Careers() {
  return (
    <>
      <Header />
      <main className="lbc-main">
        <CareersPage />
      </main>
      <Footer />
      <CookieConsent />
      <ScrollTop />
    </>
  );
}
