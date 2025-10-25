import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import Providers from "./providers";

import "./globals.css";
import "./tailwind-3-2-7.css";

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

const basisGrotesque = localFont({
  src: [
    {
      path: "../fonts/BasisGrotesquePro/BasisGrotesquePro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/BasisGrotesquePro/BasisGrotesquePro-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/BasisGrotesquePro/BasisGrotesquePro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/BasisGrotesquePro/BasisGrotesquePro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BasisGrotesquePro/BasisGrotesquePro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BasisGrotesquePro/BasisGrotesquePro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BasisGrotesquePro/BasisGrotesquePro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/BasisGrotesquePro/BasisGrotesquePro-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/BasisGrotesquePro/BasisGrotesquePro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-basis-grotesque",
  display: "swap",
});

const americana = localFont({
  src: [
    {
      path: "../fonts/Americana/Americana-BT.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Americana/Americana-BT.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Americana/Americana-BT.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-americana",
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
        className={`${geistSans.variable} ${geistMono.variable} ${basisGrotesque.variable} ${americana.variable} bg-stone-950 text-stone-100 antialiased bg-light-background`}
      >
        <Script id="cleanup-fdprocessedid" strategy="beforeInteractive">
          {`(function(){if(typeof document==="undefined"){return;}var removeAttrs=function(root){if(!root||!root.querySelectorAll){return;}var nodes=root.querySelectorAll("[fdprocessedid]");for(var i=0;i<nodes.length;i+=1){nodes[i].removeAttribute("fdprocessedid");}};removeAttrs(document);var observer=new MutationObserver(function(mutations){for(var i=0;i<mutations.length;i+=1){var mutation=mutations[i];if(mutation.type==="attributes"&&mutation.attributeName==="fdprocessedid"&&mutation.target&&mutation.target.removeAttribute){mutation.target.removeAttribute("fdprocessedid");}if(mutation.type==="childList"){for(var j=0;j<mutation.addedNodes.length;j+=1){var node=mutation.addedNodes[j];if(node&&node.nodeType===1){if(node.hasAttribute&&node.hasAttribute("fdprocessedid")){node.removeAttribute("fdprocessedid");}removeAttrs(node);}}}}});observer.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:["fdprocessedid"]});})()`}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
