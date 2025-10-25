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

type OverlayLink = {
  label: string;
  href: string;
  external?: boolean;
};

const LOGO = {
  src: "https://ulaman.cdn.prismic.io/ulaman/aAMlsuvxEdbNPPas_logo-new.svg",
  alt: "Ulaman Bali",
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
] as const;

const MENU_BASE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Villas", href: "/rooms" },
  { label: "Packages", href: "/packages-ulaman" },
  {
    label: "Spa",
    href: "https://riversidespabyulaman.com/",
    external: true,
  },
  { label: "Retreats", href: "/retreats" },
  {
    label: "Dine",
    href: "https://earthbyulaman.com",
    external: true,
  },
  { label: "Experiences", href: "/activities" },
  { label: "Facilities", href: "/facilities" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "The Map", href: "/ulaman-map" },
] satisfies OverlayLink[];

const FEATURE_LINKS = [
  { label: "Wellness Journey", href: "/wellness" },
  { label: "Offers & Packages", href: "/packages-ulaman" },
  { label: "Journal", href: "/blog" },
  { label: "Media Coverage", href: "/press" },
] satisfies OverlayLink[];

const CONTACT_LINKS = [
  {
    label: "reservations@ulamanbaliexperience.com",
    href: "mailto:reservations@ulamanbaliexperience.com",
  },
  {
    label: "+62 812-2714-2854",
    href: "https://wa.me/6281227142854",
    external: true,
  },
  {
    label: "Ulaman Road, Buwit, Kediri, Tabanan, Bali",
    href: "https://www.google.com/maps/dir//Ulaman+Road,+Buwit,+Kediri,+Tabanan+Regency,+Bali+82121",
    external: true,
  },
] satisfies OverlayLink[];

const REVIEW_LINKS = [
  {
    score: "4.7",
    descriptor: "742 Google Reviews",
    href: "https://www.google.com/travel/search?q=ulaman%20bali&hl=en-ID&gl=id&cs=1&ap=ugEHcmV2aWV3cw",
  },
  {
    score: "4.8",
    descriptor: "295 Tripadvisor Reviews",
    href: "https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
] as const;

const SUPPORT_LINKS = [
  {
    label: "Whatsapp",
    href: "https://wa.me/6281227142854",
    external: true,
  },
  {
    label: "Directions",
    href: "https://www.google.com/maps/dir//Ulaman+Road,+Buwit,+Kediri,+Tabanan+Regency,+Bali+82121",
    external: true,
  },
  {
    label: "TripAdvisor",
    href: "https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ulamanbali",
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/UlamanBali/",
    external: true,
  },
] satisfies OverlayLink[];

const CTA_LINK = {
  label: "Stay With Us",
  href: "https://booking.ulamanbali.com/book/706/rooms",
};

const GALLERY_IMAGES = [
  {
    src: "https://images.prismic.io/ulaman/Zjeq0EMTzAJOCirD_hotel.jpg?auto=format,compress",
    alt: "Ulaman Bali retreat aerial view",
  },
  {
    src: "https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress",
    alt: "Riverside spa at Ulaman Bali",
  },
  {
    src: "https://images.prismic.io/ulaman/Zpct2h5LeNNTxOAy_skyvilla.jpg?auto=format,compress",
    alt: "Sky villa at Ulaman Bali",
  },
  {
    src: "https://images.prismic.io/ulaman/Zjr4hkMTzAJOCn6N_bali-architecture.jpg?auto=format,compress",
    alt: "Bamboo architecture at Ulaman Bali",
  },
] as const;

export function SiteHeader({ navigation, siteName }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const overlayLinks = useMemo<OverlayLink[]>(() => {
    const merged: OverlayLink[] = [...MENU_BASE_LINKS];

    navigation.forEach((item) => {
      const exists = merged.some(
        (link) =>
          link.href.replace(/\/+$/, "") === item.href.replace(/\/+$/, "") ||
          link.label.toLowerCase() === item.label.toLowerCase(),
      );

      if (!exists) {
        merged.push({ label: item.label, href: item.href });
      }
    });

    return merged;
  }, [navigation]);

  const midpoint = Math.ceil(overlayLinks.length / 2);
  const primaryColumn = overlayLinks.slice(0, midpoint);
  const secondaryColumn = overlayLinks.slice(midpoint);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.classList.remove("overflow-hidden");
      return;
    }

    document.body.classList.add("overflow-hidden");
    const interval = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 5000);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.clearInterval(interval);
    };
  }, [isMenuOpen]);

  const handleToggleMenu = () => setIsMenuOpen((open) => !open);
  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 12;
      setIsScrolled(scrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className="pointer-events-none fixed top-0 z-[90] flex h-screen w-full flex-col"
    >
      <div
        className={cn(
          "pointer-events-auto relative z-50 flex app-container py-2 transition-[background-color,border-color,color] duration-300 sm:py-4 lg:items-center lg:justify-between lg:px-8 xl:max-w-unset xl:px-10",
          isMenuOpen
            ? "border-b-[0.9px] border-brand/20 bg-light text-brand"
            : isScrolled
              ? "border-b-[0.9px] border-brand/20 bg-light-background text-brand"
              : "border-b border-transparent bg-transparent text-light",
        )}
      >
        <div className="flex flex-1 items-center">
          <nav className="flex w-full items-center space-x-10 xl:space-x-14">
            <MenuToggleButton
              isOpen={isMenuOpen}
              onClick={handleToggleMenu}
              isScrolled={isMenuOpen || isScrolled}
            />

            <ul className="hidden items-center space-x-9 xl:flex">
              {PRIMARY_LINKS.map((item) => (
                <li key={item.href} className="header-animation-target">
                  <NavAnchor
                    {...item}
                    className={cn(
                      "ui-underline-anim text-normal tracking-wide transition",
                      isMenuOpen || isScrolled
                        ? "text-brand hover:text-brand/70"
                        : "text-light hover:text-light/80",
                    )}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* <div className="hidden flex-1 text-smallest sm:block lg:block">
          <ul className="space-y-1 lg:space-y-0">
            {REVIEW_LINKS.map((review) => (
              <li key={review.href}>
                <a
                  href={review.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "flex items-center gap-1 transition",
                    isMenuOpen || isScrolled
                      ? "text-brand/80 hover:text-brand"
                      : "text-light hover:text-light/80",
                  )}
                >
                  <span>{review.score}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>/</span>
                  <span>{review.descriptor}</span>
                </a>
              </li>
            ))}
          </ul>
        </div> */}

        <div className="flex flex-1 items-center justify-center">
          <Link
            href="/"
            aria-label={siteName}
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <figure
              className={cn(
                "logo opacity-100 transition-[width] duration-300",
                isMenuOpen || isScrolled
                  ? "w-16 sm:w-14 lg:w-20"
                  : "w-24 sm:w-28 lg:w-40 xl:w-32",
              )}
            >
              <Image
                src={LOGO.src}
                alt={LOGO.alt}
                width={120}
                height={48}
                className="h-auto w-full"
                priority
              />
            </figure>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end xl:items-start">
          <nav className="flex items-center justify-end xl:items-start">
            <a
              href={CTA_LINK.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "header-animation-target rounded-asymetrical py-2 px-6 text-normal leading-none transition-colors duration-300 sm:py-4 lg:px-8",
                isMenuOpen || isScrolled
                  ? "border border-brand bg-transparent text-brand hover:bg-brand hover:text-light"
                  : "border border-brand bg-brand text-light hover:bg-transparent hover:text-brand",
              )}
            >
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline-block">{CTA_LINK.label}</span>
            </a>
          </nav>
        </div>
      </div>

      <aside
        id="site-menu-overlay"
        aria-hidden={!isMenuOpen}
        className={cn(
          "pointer-events-none absolute inset-0 flex h-full w-full flex-col bg-light-background text-brand transition duration-500 ease-out",
          isMenuOpen ? "pointer-events-auto opacity-100" : "opacity-0",
        )}
      >
        <div className="relative flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto pt-28 pb-20 sm:pt-36 xl:pt-56">
            <div className="app-container flex flex-col gap-16 xl:flex-row xl:gap-24 xl:px-10">
              <div className="flex flex-col gap-12 xl:w-1/3">
                <div>
                  <p className="text-largest font-medium uppercase tracking-[0.4em] text-brand/60">
                    Navigate
                  </p>
                  <ul className="mt-6 grid gap-x-8 gap-y-4 text-2xl font-light uppercase tracking-[0.2em] sm:grid-cols-2 xl:block xl:space-y-3 xl:text-3xl">
                    {primaryColumn.map((item) => (
                      <li key={item.href}>
                        <NavAnchor
                          {...item}
                          className="transition-opacity duration-300 hover:opacity-70"
                          onClick={handleCloseMenu}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {secondaryColumn.length > 0 ? (
                  <div>
                    <p className="text-largest font-medium uppercase tracking-[0.4em] text-brand/60">
                      Discover
                    </p>
                    <ul className="mt-6 space-y-1 text-2xl font-light uppercase tracking-[0.2em] xl:text-3xl">
                      {secondaryColumn.map((item) => (
                        <li key={item.href}>
                          <NavAnchor
                            {...item}
                            className="transition-opacity duration-300 hover:opacity-70"
                            onClick={handleCloseMenu}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col gap-12 xl:w-1/3">
                <div>
                  <p className="text-largest font-medium uppercase tracking-[0.4em] text-brand/60">
                    Explore
                  </p>
                  <ul className="mt-6 grid gap-3 text-sm uppercase tracking-[0.3em] text-brand/80 sm:grid-cols-2">
                    {FEATURE_LINKS.map((item) => (
                      <li key={item.href}>
                        <NavAnchor
                          {...item}
                          className="transition hover:text-brand"
                          onClick={handleCloseMenu}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-largest font-medium uppercase tracking-[0.4em] text-brand/60">
                    Contact
                  </p>
                  <ul className="mt-6 space-y-1 text-sm text-brand/80">
                    {CONTACT_LINKS.map((item) => (
                      <li key={item.href}>
                        <NavAnchor
                          {...item}
                          className="transition hover:text-brand"
                          onClick={handleCloseMenu}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-largest font-medium uppercase tracking-[0.4em] text-brand/60">
                    Reviews
                  </p>
                  <ul className="mt-6 space-y-1 text-sm text-brand/80">
                    {REVIEW_LINKS.map((review) => (
                      <li key={review.href}>
                        <a
                          href={review.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 transition hover:text-brand"
                          onClick={handleCloseMenu}
                        >
                          <span className="text-base font-medium text-brand">
                            {review.score}
                          </span>
                          <span>/</span>
                          <span>{review.descriptor}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <nav className="flex flex-wrap gap-x-4 gap-y-2 text-smallest uppercase tracking-[0.3em] text-brand/80">
                  {SUPPORT_LINKS.map((link, index) => (
                    <span key={link.href} className="flex items-center gap-2">
                      {index > 0 && (
                        <span aria-hidden="true" className="text-brand/40">
                          /
                        </span>
                      )}
                      <NavAnchor
                        {...link}
                        className="transition hover:text-brand"
                        onClick={handleCloseMenu}
                      />
                    </span>
                  ))}
                </nav>
              </div>

              <div className="flex flex-1 flex-col gap-8 xl:w-1/3">
                <div className="relative h-64 w-full overflow-hidden rounded-t-[4rem] sm:h-80 xl:h-full xl:min-h-[28rem]">
                  {GALLERY_IMAGES.map((image, index) => (
                    <div
                      key={image.src}
                      className={cn(
                        "absolute inset-0 h-full w-full transition-opacity duration-700",
                        index === activeImageIndex ? "opacity-100" : "opacity-0",
                      )}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}

type MenuToggleButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  isScrolled: boolean;
};

function MenuToggleButton({ isOpen, onClick, isScrolled }: MenuToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="site-menu-overlay"
      className={cn(
        "relative group py-5 header-animation-target transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isScrolled
          ? "text-brand focus-visible:ring-brand/60"
          : "text-light focus-visible:ring-white/70",
      )}
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <span
        aria-hidden="true"
        className="relative block h-3 w-16 lines"
      >
        <span
          className={cn(
            "absolute left-0 h-0.5 rounded-full bg-current transition-all duration-300",
            isOpen
              ? "top-1/2 w-full -translate-y-1/2 rotate-45"
              : "top-0 w-6 group-hover:w-11/12",
          )}
        />
        <span
          className={cn(
            "absolute left-0 h-0.5 rounded-full bg-current transition-all duration-300",
            isOpen
              ? "top-1/2 w-full -translate-y-1/2 -rotate-45"
              : "bottom-0 w-full group-hover:w-11/12",
          )}
        />
      </span>
    </button>
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
