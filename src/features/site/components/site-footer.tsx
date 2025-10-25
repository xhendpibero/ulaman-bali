"use client";

import Link from "next/link";
import { useMemo } from "react";

import { cn } from "@/lib/utils";
import type { SiteContent } from "@/types/site";

type SiteFooterProps = {
  footer: SiteContent["footer"];
  social: SiteContent["meta"]["social"];
};

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Villas", href: "/rooms" },
  { label: "Dining", href: "https://earthbyulaman.com/", external: true },
  { label: "Spa", href: "https://riversidespabyulaman.com/", external: true },
  { label: "Retreats", href: "/retreats" },
  { label: "Experiences", href: "/activities" },
  { label: "Facilities", href: "/facilities" },
  { label: "Ulaman Map", href: "/ulaman-map" },
  { label: "About", href: "/about" },
  { label: "Articles", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Video Testimonials", href: "/testimonials" },
] as const;

const CONNECT_LINKS = [
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
] as const;

const FEATURED_BADGES = [
  {
    src: "https://images.prismic.io/ulaman/ZtB9TEaF0TcGJhOP_deluxe.png?auto=format,compress",
    alt: "Destination Deluxe Ulaman Bali",
  },
  {
    src: "https://images.prismic.io/ulaman/ZtB82EaF0TcGJhNj_unesco.png?auto=format,compress",
    alt: "UNESCO Ulaman Bali",
  },
  {
    src: "https://images.prismic.io/ulaman/ZtB8rkaF0TcGJhNW_kohler.png?auto=format,compress",
    alt: "Kohler Bold Design Awards Ulaman Bali",
  },
  {
    src: "https://images.prismic.io/ulaman/ZtB9AUaF0TcGJhNw_loop.png?auto=format,compress",
    alt: "Loop Awards Ulaman Bali",
  },
  {
    src: "https://images.prismic.io/ulaman/ZtB8YUaF0TcGJhMu_award.png?auto=format,compress",
    alt: "Interior Design Confederation Singapore Awards",
  },
  {
    src: "https://images.prismic.io/ulaman/Z9vWIDiBA97GisV6_asfeatured_experiences_white.png?auto=format,compress",
    alt: "National Geographic Featured Ulaman Bali",
  },
  {
    src: "https://images.prismic.io/ulaman/Z9vXJTiBA97GisWj_Hotellogoblack.png?auto=format,compress",
    alt: "World Luxury Hotel Awards Ulaman Bali",
  },
] as const;

const PACKAGES_TICKER = [
  {
    name: "The Avatar Experience",
    duration: "3 days 2 nights",
  },
  {
    name: "The Ultimate Honeymoon",
    duration: "3 days 2 nights",
  },
] as const;

type FooterNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export function SiteFooter({ footer, social }: SiteFooterProps) {
  const exploreLinks = useMemo<FooterNavItem[]>(
    () => [...EXPLORE_LINKS],
    [],
  );

  const connectLinks = useMemo<FooterNavItem[]>(
    () => [
      ...CONNECT_LINKS,
      ...social.map((item) => ({
        label: item.platform,
        href: item.href,
        external: true,
      })),
    ],
    [social],
  );

  const doubledBadges = useMemo(
    () => [...FEATURED_BADGES, ...FEATURED_BADGES],
    [],
  );
  const tickerGroups = useMemo(
    () => [PACKAGES_TICKER, PACKAGES_TICKER, PACKAGES_TICKER] as const,
    [],
  );

  return (
    <footer id="contact" className="mt-36 bg-light text-brand sm:mt-28 lg:mt-40 xl:mt-36">
      <InstagramBanner />

      <div className="bg-dark-emphasis text-light-background">
        <div className="py-20 xl:py-16">
          <div className="app-container space-y-20">
            <ReviewsHighlight />
            <StaySearchSection />

            <section className="flex flex-col items-center justify-between sm:flex-row-reverse sm:gap-x-5">
              <div className="flex h-80 w-full items-center overflow-hidden border-none sm:w-auto lg:h-96 xl:h-auto xl:w-[41rem] xl:items-start">
                <img
                  src="https://images.prismic.io/ulaman/ZpDw3R5LeNNTxF2w_ulaman-bali.jpg?auto=format,compress"
                  alt="Ulaman Bali map"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="prose:p:pr-10 space-y-4 pt-7 text-smallest sm:w-64 lg:w-1/3">
                <h3 className="heading display-3">
                  Tucked Within Majestic Balinese Nature.
                </h3>
                <p>
                  Strategically located near popular areas like Canggu and Ubud,
                  experience tranquil nature and luxury. With endless activities,
                  you&apos;ll never want to leave Ulaman.
                </p>
              </div>
            </section>

            <section className="pt-24">
              <div className="flex flex-col items-start gap-16 xl:flex-row xl:items-start xl:justify-between">
                <NewsletterForm />

                <nav className="pt-20 xl:pt-0">
                  <h6 className="display-6">Explore</h6>
                  <ul className="grid grid-cols-2 gap-x-12 gap-y-5 pt-7">
                    {exploreLinks.map((item) => (
                      <li key={item.href}>
                        <FooterLink {...item} />
                      </li>
                    ))}
                  </ul>
                </nav>

                <nav className="pt-16 xl:pt-0">
                  <h6 className="display-6">Connect</h6>
                  <ul className="grid grid-cols-2 gap-x-12 gap-y-5 pt-7">
                    {connectLinks.map((item) => (
                      <li key={item.href}>
                        <FooterLink {...item} />
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </section>
          </div>
        </div>

        <section className="max-w-screen overflow-hidden bg-dark-emphasis py-8">
          <BadgeMarquee badges={FEATURED_BADGES} doubledBadges={doubledBadges} />
        </section>

        <PackageTicker tickerGroups={tickerGroups} />
        <LegalFooter footer={footer} />
      </div>
    </footer>
  );
}

function InstagramBanner() {
  return (
    <article className="space-y-6 pb-2 lg:space-y-9 lg:pb-2.5 xl:pb-3">
      <header className="text-center font-normal leading-none text-brand">
        <a
          href="https://www.instagram.com/ulamanbali/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ulamanbali
        </a>
      </header>
      <div>
        <div
          className="relative outline-none"
          role="region"
          aria-roledescription="carousel"
          tabIndex={0}
        >
          <div className="overflow-hidden">
            <div className="flex -ml-4">{/* IG content placeholder */}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ReviewsHighlight() {
  return (
    <section className="pt-20">
      <div className="flex flex-col items-center justify-center">
        <ul className="flex flex-col items-center gap-y-3">
          <li>
            <a
              href="https://www.google.com/travel/search?q=ulaman%20bali&hl=en-ID&gl=id&cs=1&ap=ugEHcmV2aWV3cw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="flex items-center">
                4.7&nbsp;
                <StarIcon />
              </span>
              <span>/</span>
              <span className="opacity-50">742 Google Reviews</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="flex items-center">
                4.8&nbsp;
                <StarIcon />
              </span>
              <span>/</span>
              <span className="opacity-50">295 TripAdvisor Reviews</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function StaySearchSection() {
  return (
    <div className="py-20">
      <div className="app-container mx-auto flex w-full max-w-screen-md flex-col space-y-8 overflow-visible sm:flex-row sm:justify-center md:mx-auto md:space-y-0 md:px-0">
        <div className="flex cursor-pointer items-center justify-between rounded-none border-light pb-6 sm:w-1/3 sm:border-r sm:pb-0 sm:justify-start">
          <div className="relative h-min">
            <span>Check In</span>
          </div>
          <div className="ml-4 mr-5 h-px w-20 bg-light sm:w-8" />
          <div className="relative h-min">
            <span>Check Out</span>
          </div>
        </div>

        <div className="flex items-center justify-between sm:w-1/2 lg:w-2/3">
          <div className="flex flex-1 items-center justify-start gap-5 sm:justify-center">
            <label htmlFor="adult">Adult</label>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="flex aspect-square w-7 items-center justify-center rounded-full border border-light transition duration-300 hover:border-brand hover:bg-brand disabled:pointer-events-none disabled:opacity-60"
                aria-label="Decrease adults"
              >
                <MinusIcon />
              </button>
              <div className="w-5 text-center">
                <span className="inline-block">2</span>
              </div>
              <input
                id="adult"
                name="adult"
                type="number"
                value={2}
                className="hidden pointer-events-none"
                readOnly
              />
              <button
                type="button"
                disabled
                className="flex aspect-square w-7 items-center justify-center rounded-full border border-light transition duration-300 hover:border-brand hover:bg-brand disabled:pointer-events-none disabled:opacity-50"
                aria-label="Increase adults"
              >
                <PlusIcon />
              </button>
            </div>
          </div>
          <button
            type="button"
            className="flex h-12 items-center justify-center rounded-asymetrical border border-light px-12 transition duration-300 hover:border-brand hover:bg-brand"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

function BadgeMarquee({
  badges,
  doubledBadges,
}: {
  badges: typeof FEATURED_BADGES;
  doubledBadges: typeof FEATURED_BADGES;
}) {
  const marqueeItems = useMemo(
    () => [...badges, ...doubledBadges],
    [badges, doubledBadges],
  );

  return (
    <div className="overflow-hidden">
      <div className="marquee-track marquee-track--slow gap-x-16 pl-16 sm:gap-x-20 sm:pl-20 lg:gap-x-24 lg:pl-24">
        {marqueeItems.map((badge, index) => (
          <div key={`${badge.src}-${index}`} className="h-full">
            <img
              src={badge.src}
              alt={badge.alt}
              className="h-11 w-auto lg:h-14 xl:h-16"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PackageTicker({
  tickerGroups,
}: {
  tickerGroups: ReadonlyArray<typeof PACKAGES_TICKER>;
}) {
  const flattened = useMemo(
    () => tickerGroups.flat(),
    [tickerGroups],
  );
  const marqueeItems = useMemo(
    () => [...flattened, ...flattened],
    [flattened],
  );

  return (
    <nav className="max-w-screen overflow-hidden bg-light py-7 text-dark-emphasis">
      <div className="marquee-track gap-x-9 pl-9 xl:gap-x-10 xl:pl-10">
        {marqueeItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex gap-x-9">
            <span className="inline-block aspect-square w-2 rounded-full bg-current" />
            <button type="button">
              <span>{item.name}</span>
              <span>&nbsp;|&nbsp;</span>
              <span>{item.duration}</span>
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
}

function LegalFooter({ footer }: { footer: SiteFooterProps["footer"] }) {
  return (
    <footer className="app-container pt-20">
      <nav>
        <ul className="flex flex-wrap justify-between gap-x-1 gap-y-4">
          <li>
            <FooterLink label="Terms" href="/legal/terms" />
          </li>
          <li>
            <FooterLink label="Privacy" href="/legal/privacy-policy" />
          </li>
          <li>
            <FooterLink label="Ulaman Bookings" href="/contact/ulaman-bookings" />
          </li>
          <li>
            <span className="text-smallest">{footer.legal}</span>
          </li>
          <li>
            <span className="text-smallest">{footer.copyright}</span>
          </li>
          <li className="order-3">
            <a
              href="https://www.twomoonsstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-smallest ui-underline-anim"
            >
              Made With ❤︎ By <span className="opacity-100">Two Moons Studio</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

type FooterLinkProps = {
  label: string;
  href: string;
  external?: boolean;
};

function FooterLink({ label, href, external }: FooterLinkProps) {
  const baseClasses = "text-smallest ui-underline-anim transition hover:opacity-80";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {label}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={baseClasses}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(baseClasses, "before:scale-x-100")}>
      {label}
    </Link>
  );
}

function NewsletterForm() {
  return (
    <div className="py-2.5">
      <div className="max-w-lg space-y-6">
        <div>
          <h6 className="display-6 text-24">Get Notified On Our Offers</h6>
        </div>
        <form className="space-y-7 sm:flex-col" name="newsletter-signup">
          <input type="hidden" name="form-name" value="newsletter-signup" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <label htmlFor="newsletter-name" className="sr-only">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              id="newsletter-name"
              placeholder="Your Name*"
              required
              className="input-field"
            />
            <span className="absolute left-0 top-full hidden p-1 text-smaller text-warning dark:text-light sm:text-smallest">
              This field is required
            </span>
          </div>

          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="relative">
            <input
              className="input-field"
              id="newsletter-email"
              placeholder="Your Email*"
              name="email"
              type="email"
              required
            />
            <span className="absolute left-0 top-full hidden p-1 text-smaller text-warning dark:text-light sm:text-smallest">
              Please enter a valid email address
            </span>
          </div>

          <button
            type="submit"
            className="btn-primary ui-underline-anim reverse text-light disabled:opacity-50 disabled:hover:before:scale-x-100"
            disabled
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="lucide lucide-star-icon aspect-square w-3.5"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-minus-icon w-5"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-plus-icon w-5"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
