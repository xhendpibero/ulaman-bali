"use client";

import { ReactNode } from "react";

type ReviewStat = {
  rating: string;
  totalLabel: string;
  href: string;
};

type GuestReview = {
  name: string;
  title: string;
  dateLabel: string;
  excerpt: ReactNode;
  linkHref: string;
};

const REVIEW_STATS: ReviewStat[] = [
  {
    rating: "4.8",
    totalLabel: "295 TripAdvisor Reviews",
    href: "https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
  {
    rating: "4.7",
    totalLabel: "742 Google Reviews",
    href: "https://www.google.com/travel/search?q=ulaman%20bali&hl=en-ID",
  },
];

const GUEST_REVIEWS: GuestReview[] = [
  {
    name: "Jody T",
    title: `"Artistic Wonderland."`,
    dateLabel: "July 2023",
    excerpt: (
      <>
        “This is an artistic wonderland and a{" "}
        <em>once-in-a-lifetime experience</em>. The architect who designed this
        place is a genius, it is so funky and unique; the shapes and usage of
        different types of wood (mostly bamboo) make this a “not to miss”
        destination. The staff there are amazing, they are all so helpful, smart
        and friendly…”
      </>
    ),
    linkHref:
      "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r904290293-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
  {
    name: "Francesco & Veronica",
    title: `"If I Only Could Give 6 Stars."`,
    dateLabel: "Feb. 2023",
    excerpt: (
      <>
        “This is definitely <em>one of the best resorts we’ve ever been to</em>.
        My husband and I spent a two-day self-love retreat and it went far
        beyond our expectations. The staff are so friendly, helpful and nice,
        and the extraordinary architecture that surrounds you when you walk
        inside is unforgettable…”
      </>
    ),
    linkHref:
      "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r879239527-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
];

export function ReviewsSectionSlice() {
  return (
    <section data-slice-type="reviews_section" data-slice-variation="default">
      <div
        className="relative outline-none"
        role="region"
        aria-roledescription="carousel"
      >
        <header className="app-container">
          <div className="border-b space-y-9 pb-8 sm:flex sm:items-start sm:justify-between sm:space-y-0">
            <div className="space-y-8">
              <div>
                <h3 className="heading display-3">
                  What Our Guests <br />
                  Have to Say About Us
                </h3>
              </div>
              <div className="flex justify-between gap-11 text-smaller text-brand sm:justify-start sm:gap-14">
                {REVIEW_STATS.map((stat) => (
                  <div
                    key={stat.href}
                    className="xl:flex xl:items-center xl:gap-2"
                  >
                    <span className="flex items-center gap-x-3">
                      <span className="flex items-center text-small">
                        <span>{stat.rating}&nbsp;</span>
                        <StarIcon />
                        <span>&nbsp;/</span>
                      </span>
                    </span>
                    <a
                      href={stat.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="transition-opacity hover:opacity-80 sm:opacity-70"
                    >
                      {stat.totalLabel}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <nav>
              <div className="flex gap-5 text-brand sm:gap-3.5 lg:gap-6">
                <CarouselButton direction="prev" disabled />
                <CarouselButton direction="next" />
              </div>
            </nav>
          </div>
        </header>

        <div className="overflow-hidden">
          <div className="flex -ml-4 sm:dir-ltr">
            {GUEST_REVIEWS.map((review) => (
              <div
                key={review.name}
                role="group"
                aria-roledescription="slide"
                className="min-w-0 shrink-0 grow-0 basis-full pl-4 opacity-0 transition-opacity duration-500 [&.is-snapped]:opacity-100"
              >
                <article className="app-container pt-11 space-y-5 sm:flex sm:space-y-0 sm:gap-14 sm:justify-between xl:gap-44">
                  <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-cols-[auto_auto] sm:grid-rows-[auto_1fr] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                    <h3 className="display-6 text-dark-background col-span-1 order-first sm:order-none sm:text-vw-sm lg:text-largest">
                      {review.name}
                    </h3>
                    <h5 className="display-6 text-dark-background order-last sm:order-none sm:row-span-2 sm:text-vw-sm lg:text-largest">
                      {review.title}
                    </h5>
                    <span className="block text-smallest order-1 sm:order-none">
                      {review.dateLabel}
                    </span>
                  </header>
                  <div className="space-y-5 max-w-lg sm:w-1/2">
                    <div>
                      <p>{review.excerpt}</p>
                    </div>
                    <nav>
                      <a
                        href={review.linkHref}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn-primary text-smaller ui-underline-anim reverse"
                      >
                        Continue Reading
                      </a>
                    </nav>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  direction,
  disabled,
}: {
  direction: "prev" | "next";
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`relative flex items-center rounded-md border border-current px-6 transition ${
        direction === "prev" ? "rotate-180" : ""
      } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      aria-label={direction === "prev" ? "Previous review" : "Next review"}
    >
      <ArrowIcon />
    </button>
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

function ArrowIcon() {
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
      className="lucide lucide-move-right-icon w-7 stroke-1"
      aria-hidden="true"
    >
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </svg>
  );
}
