"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/types/site";

type SiteHeaderProps = {
  navigation: NavigationItem[];
  siteName: string;
};

const PRIMARY_LINKS = [
  { label: "Villas", href: "/rooms" },
  {
    label: "Spa",
    href: "https://riversidespabyulaman.com/",
    external: true,
  },
  {
    label: "Dine",
    href: "https://earthbyulaman.com",
    external: true,
  },
  { label: "Retreats", href: "/retreats" },
];

const FEATURE_LINKS = [
  { label: "Facilities", href: "/facilities" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "The Map", href: "/ulaman-map" },
];

const CONTACT_LINKS = [
  {
    label: "reservations@ulamanbaliexperience.com",
    href: "mailto:reservations@ulamanbaliexperience.com",
  },
  {
    label: "+62 361 123 4567",
    href: "tel:+623611234567",
  },
  {
    label: "Jl. Biyahan, Tabanan Regency, Bali 82121",
    href: "https://maps.app.goo.gl/bW7S6oWJStTgmu8v6",
    external: true,
  },
];

const GALLERY_IMAGES = [
  {
    src: "https://images.prismic.io/ulaman/ZiPocPPdc1huKp2I_Ulaman-bali.jpg?auto=format,compress",
    alt: "Ulaman Bali entrance",
  },
  {
    src: "https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress",
    alt: "Infinity pool at sunset Ulaman Bali",
  },
  {
    src: "https://images.prismic.io/ulaman/Zpct2h5LeNNTxOAy_skyvilla.jpg?auto=format,compress",
    alt: "Sky bamboo villa Ulaman Bali",
  },
];

export function SiteHeader({ navigation, siteName }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allNavLinks = useMemo(() => {
    const merged = [...navigation];
    PRIMARY_LINKS.forEach((link) => {
      const alreadyPresent = merged.some(
        (item) => item.href === link.href || item.label === link.label,
      );
      if (!alreadyPresent) {
        merged.push({ label: link.label, href: link.href });
      }
    });
    return merged;
  }, [navigation]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.classList.remove("overflow-hidden");
      return;
    }

    document.body.classList.add("overflow-hidden");
    const timer = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 5000);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.clearInterval(timer);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((current) => !current);
  const closeMenu = () => setIsMenuOpen(false);

  const ratingLink =
    "https://www.google.com/travel/search?q=ulaman%20bali&hl=en";
  const tripAdvisorLink =
    "https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html";

  return (
    <header
      id="header"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex flex-col"
    >
      <div className="pointer-events-auto flex w-full items-center justify-between bg-stone-950/50 px-4 py-3 text-stone-100 backdrop-blur-lg transition-colors duration-300 md:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-6">
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu-overlay"
            className="group flex h-12 w-12 flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="sr-only">
              {isMenuOpen ? "Close navigation" : "Open navigation"}
            </span>
            <div
              className={cn(
                "relative h-5 w-6",
                "before:absolute before:left-0 before:h-0.5 before:w-full before:rounded-full before:bg-current before:transition-transform before:duration-300",
                "after:absolute after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-current after:transition-transform after:duration-300",
                isMenuOpen
                  ? "before:top-1/2 before:-translate-y-1/2 before:rotate-45 after:top-1/2 after:-translate-y-1/2 after:-rotate-45"
                  : "before:top-1 after:bottom-1",
              )}
            />
          </button>
          <nav className="hidden items-center gap-6 md:flex">
            {PRIMARY_LINKS.map((item) => (
              <NavAnchor key={item.href} {...item} />
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-center text-xs uppercase tracking-[0.4em] md:justify-start">
          <Link href="#hero" className="font-semibold">
            {siteName}
          </Link>
        </div>
        <div className="hidden flex-1 items-center justify-end gap-6 text-xs md:flex">
          <a
            href={ratingLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-stone-300 transition hover:text-white"
          >
            <span>4.7</span>
            <span className="text-[0.6rem]">★</span>
            <span>/ 742 Google Reviews</span>
          </a>
          <a
            href={tripAdvisorLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-stone-300 transition hover:text-white"
          >
            <span>5.0</span>
            <span className="text-[0.6rem]">★</span>
            <span>/ TripAdvisor</span>
          </a>
        </div>
      </div>

      <div
        id="site-menu-overlay"
        aria-hidden={!isMenuOpen}
        className={cn(
          "pointer-events-none fixed inset-0 z-40 flex transform bg-black/80 backdrop-blur-2xl transition duration-300",
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "opacity-0 delay-150",
        )}
      >
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-24 text-stone-100 md:px-6 lg:flex-row lg:px-8">
          <button
            type="button"
            onClick={closeMenu}
            className="absolute right-4 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="sr-only">Close menu</span>
            <span className="relative block h-4 w-4">
              <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rotate-45 rounded-full bg-current" />
              <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
            </span>
          </button>

          <div className="flex flex-col gap-8 lg:w-1/3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                Navigate
              </p>
              <ul className="mt-4 space-y-3 text-lg font-medium uppercase tracking-[0.2em]">
                {allNavLinks.map((item) => (
                  <li key={item.href}>
                    <NavAnchor
                      {...item}
                      className="hover:text-white/70 transition"
                      onClick={closeMenu}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                Explore
              </p>
              <ul className="mt-4 flex flex-wrap gap-3 text-sm uppercase tracking-[0.3em] text-stone-300">
                {FEATURE_LINKS.map((item) => (
                  <li key={item.href}>
                    <NavAnchor
                      {...item}
                      className="hover:text-white transition"
                      onClick={closeMenu}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-stone-300">
                {CONTACT_LINKS.map((item) => (
                  <li key={item.href}>
                    <NavAnchor
                      {...item}
                      className="hover:text-white transition"
                      onClick={closeMenu}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-8 lg:w-2/3 lg:flex-row">
            <div className="flex flex-1 flex-col justify-between">
              <p className="max-w-md text-sm text-stone-300">
                Ulaman Eco-Luxury Retreat is carved into the jungle canopy of
                Tabanan, Bali. Discover regenerative architecture, hydrotherapy
                sanctuaries, and curated wellness experiences surrounded by
                living water.
              </p>
              <div className="mt-8 flex gap-4 text-sm uppercase tracking-[0.3em] text-stone-300">
                <a
                  href="https://www.instagram.com/ulaman.ecoretreat"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/ulamanretreat"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/@ulamanretreat"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  YouTube
                </a>
              </div>
            </div>

            <div className="relative hidden w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl lg:flex">
              {GALLERY_IMAGES.map((image, index) => (
                <div
                  key={image.src}
                  className={cn(
                    "absolute inset-0 h-full w-full transition-opacity duration-700",
                    index === activeImageIndex
                      ? "opacity-100"
                      : "opacity-0",
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

type NavAnchorProps = {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

function NavAnchor({
  label,
  href,
  external,
  className,
  onClick,
}: NavAnchorProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={className}
      >
        {label}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {label}
    </Link>
  );
}
