import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

// Aspekta (the original brand font) is a neutral geometric grotesque.
// Manrope is a close open-source stand-in until the real Aspekta VF is dropped in.
const aspekta = Manrope({
  variable: "--font-aspekta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Akkurat-Mono stand-in for the small mono eyebrow/number labels.
const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Leap Square — We Supercharge Brands",
  description:
    "Leap Square is a full-service B2B digital marketing agency — Advertising, SEO, Affiliate Management, Social Media and Branding. Conquering the online space in leaps and bounds.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Leap Square — We Supercharge Brands",
    description:
      "Conquering the online space in leaps and bounds. B2B digital marketing done right.",
    type: "website",
  },
  icons: {
    icon: "/img/cropped-LEAP-SQUARE-LOGO-FOR-DARK-BACKGROUND-6-32x32.png",
    apple: "/img/cropped-LEAP-SQUARE-LOGO-FOR-DARK-BACKGROUND-6-180x180.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${aspekta.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
