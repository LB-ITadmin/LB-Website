import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--f-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--f-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--f-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loudbound | We supercharge brands",
  description:
    "Loudbound is a B2B digital-marketing studio. Paid Media, SEO, affiliate, social and branding, engineered for upward momentum.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
