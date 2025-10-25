import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import Providers from "./providers";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  "https://www.ulamanbali.com";

const siteUrl =
  rawSiteUrl.startsWith("http://") || rawSiteUrl.startsWith("https://")
    ? rawSiteUrl
    : `https://${rawSiteUrl}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ulaman Eco-Luxury Retreat | Mind Interactive Media Front-End Test",
    template: "%s | Ulaman Eco-Luxury Retreat",
  },
  description:
    "Experience the Ulaman eco-luxury retreat with immersive nature-inspired design, regenerative wellness, and thoughtfully curated villas in the heart of Bali.",
  keywords: [
    "Ulaman",
    "Eco Retreat",
    "Bali Resort",
    "Sustainable Travel",
    "Luxury Villas",
  ],
  openGraph: {
    title: "Ulaman Eco-Luxury Retreat",
    description:
      "A nature-integrated destination featuring holistic wellness, organic dining, and regenerative design in Bali.",
    url: siteUrl,
    siteName: "Ulaman Eco-Luxury Retreat",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        width: 1200,
        height: 630,
        alt: "Ulaman Eco-Luxury Retreat aerial view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mindinteractive",
    site: "@mindinteractive",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-stone-950 text-stone-100 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
