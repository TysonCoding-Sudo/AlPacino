import type { Metadata } from "next";
import { Inter, Space_Grotesk, Oswald } from "next/font/google";
import { company } from "@al-pacino/shared";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alpacino.co.za"),
  title: {
    default: `${company.name} — Construction & ICT Solutions, South Africa`,
    template: "%s | Al Pacino (Pty) Ltd",
  },
  description:
    `${company.name} is an owner-managed South African company delivering Construction services (roadworks, water, electrical, HVAC, landscaping, fencing) and end-to-end ICT Solutions from assessment and supply to support.`,
  keywords: [
    "Al Pacino Pty Ltd",
    "construction South Africa",
    "roadworks",
    "water infrastructure",
    "electrical engineering",
    "HVAC commissioning",
    "ICT solutions",
    "IT support",
    "network solutions",
    "cybersecurity",
    "Gauteng",
  ],
  openGraph: {
    title: `${company.name} — Built. Connected.`,
    description:
      "One company, two disciplines: Construction and ICT Solutions across South Africa.",
    type: "website",
    locale: "en_ZA",
    siteName: company.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${oswald.variable}`}>
      <body className="min-h-screen bg-stone-50 font-sans text-stone-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}