"use client";

import Image from "next/image";

const REVIEW_LINKS = [
  {
    rating: "4.7",
    totalLabel: "742 Google Reviews",
    href: "https://www.google.com/travel/search?q=ulaman%20bali&hl=en-ID",
  },
  {
    rating: "4.8",
    totalLabel: "295 TripAdvisor Reviews",
    href: "https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
];

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Villas", href: "/rooms" },
  { label: "Dining", href: "https://earthbyulaman.com/" },
  { label: "Spa", href: "https://riversidespabyulaman.com/" },
  { label: "Retreats", href: "/retreats" },
  { label: "Experiences", href: "/activities" },
  { label: "Facilities", href: "/facilities" },
  { label: "Ulaman Map", href: "/ulaman-map" },
  { label: "About", href: "/about" },
  { label: "Articles", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Sustainability", href: "/sustainability" },
];

const CONTACT_LINES = [
  "Banjar Biyahan, Desa Belalang, Kecamatan Kediri, Tabanan Regency, Bali 82121",
  "reservations@ulamanbaliexperience.com",
  "+62 361 906 0857",
];

export function LandingFooterSlice() {
  return (
    <footer className="mt-36 sm:mt-28 lg:mt-40 xl:mt-36">
      <article className="space-y-6 pb-2 lg:space-y-9 lg:pb-2.5 xl:pb-3">
        <header className="text-center font-normal leading-none text-brand">
          <a
            href="https://www.instagram.com/ulamanbali/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @ulamanbali
          </a>
        </header>
        <div>
          <div
            className="relative outline-none"
            role="region"
            aria-roledescription="carousel"
          >
            <div className="overflow-hidden">
              <div className="flex -ml-4">{/* Instagram feed placeholder */}</div>
            </div>
          </div>
        </div>
      </article>

      <div className="dark bg-dark-emphasis text-light-background">
        <div className="py-20 xl:py-16">
          <div className="app-container">
            <section className="pt-20">
              <div className="flex flex-col items-center justify-center">
                <ul className="flex flex-col items-center gap-y-3">
                  {REVIEW_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <span className="flex items-center">
                          {link.rating}&nbsp;
                          <StarIcon />
                        </span>
                        <span>/</span>
                        <span className="opacity-50">{link.totalLabel}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="py-20">
              <div className="app-container mx-auto flex w-full max-w-screen-md flex-col space-y-8 overflow-visible sm:flex-row sm:justify-center md:mx-auto md:space-y-0 md:px-0">
                <div className="flex cursor-pointer items-center justify-between rounded-none border-light pb-6 sm:w-1/3 sm:justify-start sm:border-r sm:pb-0">
                  <div className="relative">
                    <span>Check In</span>
                  </div>
                  <div className="mx-5 h-px w-20 bg-light sm:mx-2 sm:w-8"></div>
                  <div className="relative">
                    <span>Check Out</span>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:w-1/2 lg:w-2/3">
                  <div className="flex flex-1 items-center justify-start gap-5 sm:justify-center">
                    <label htmlFor="adult" className="text-sm">
                      Adult
                    </label>
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        className="flex aspect-square w-7 items-center justify-center rounded-full border border-light transition-colors duration-300 hover:border-brand hover:bg-brand disabled:pointer-events-none disabled:opacity-60"
                        aria-label="Decrease adults"
                        disabled
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
                        readOnly
                        className="pointer-events-none hidden"
                        aria-hidden="true"
                      />
                      <button
                        type="button"
                        className="flex aspect-square w-7 items-center justify-center rounded-full border border-light transition-colors duration-300 hover:border-brand hover:bg-brand disabled:pointer-events-none disabled:opacity-50"
                        aria-label="Increase adults"
                        disabled
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="flex h-12 items-center justify-center rounded-asymetrical border border-light px-12 transition-colors duration-300 hover:border-brand hover:bg-brand"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <section className="flex flex-col items-center justify-between sm:flex-row-reverse sm:gap-x-5">
              <div className="flex h-80 w-full items-center overflow-hidden border-none sm:w-auto xl:h-auto xl:w-[41rem] xl:items-start">
                <Image
                  src="https://images.prismic.io/ulaman/ZpDw3R5LeNNTxF2w_ulaman-bali.jpg?auto=format,compress"
                  alt="Ulaman eco-luxury retreat map"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="prose:p:pr-10 space-y-4 pt-7 text-smallest sm:w-64 lg:w-1/3">
                <h3 className="heading display-3">
                  Tucked Within Majestic Balinese Nature.
                </h3>
                <p>
                  Strategically located near popular areas like Canggu and Ubud,
                  experience tranquil nature and luxury. With endless
                  activities, you&apos;ll never want to leave Ulaman.
                </p>
              </div>
            </section>

            <section className="py-20">
              <div className="grid gap-16 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                <div className="space-y-12">
                  <h3 className="display-3">
                    Sign up for our newsletter and get the latest updates.
                  </h3>
                  <form
                    action="/"
                    method="post"
                    className="space-y-4 text-smallest sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-4 sm:text-smaller"
                  >
                    <input type="hidden" name="form-name" value="newsletter" />
                    <p className="hidden">
                      <label>
                        Don&apos;t fill this out if you&apos;re human:{" "}
                        <input name="bot-field" />
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
                    </div>
                    <button
                      type="submit"
                      className="btn-primary ui-underline-anim reverse text-light disabled:opacity-50 disabled:hover:before:scale-x-100 sm:col-span-2 sm:w-fit"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                <nav className="space-y-7 xl:pt-0">
                  <h6 className="display-6">Explore</h6>
                  <ul className="grid grid-cols-2 gap-x-12 gap-y-5">
                    {EXPLORE_LINKS.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="ui-underline-anim">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </section>

            <section className="space-y-6 border-t border-white/10 pt-12 text-smaller">
              <div className="space-y-2">
                {CONTACT_LINES.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="opacity-70">
                © {new Date().getFullYear()} Ulaman Eco-Luxury Retreat. All
                rights reserved.
              </p>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-star-icon aspect-square w-3.5 fill-current stroke-none"
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
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

