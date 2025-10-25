"use client";

import { cn } from "@/lib/utils";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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
  linkHref?: string;
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

const DEFAULT_REVIEW_LINK =
  "https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html";

const GUEST_REVIEWS: GuestReview[] = [
  {
    name: "Alsana Trawally",
    title: `"Best Experience In Bali."`,
    dateLabel: "June 2024",
    excerpt: (
      <>
        "Best experience I had in Bali out of all the resorts I&apos;ve been to.
        Customer service was impeccable and the staff were so kind. Mr. Komang
        made sure we had accommodations and did everything to make sure we had a
        warm welcome. It&apos;s unbelievable that everything is made of bamboo."
      </>
    ),
  },
  {
    name: "Anne & Steve",
    title: `"A Truly Memorable Experience."`,
    dateLabel: "May 2024",
    excerpt: (
      <>
        "Fabulous architecture, beautiful natural setting, and wonderful staff
        combine to provide a truly memorable experience. Our stay at Ulaman Eco
        Resort was one we will remember forever. We came to relax in this amazing
        setting with its beautiful architecture set around a waterfall and
        surrounded by rice paddies."
      </>
    ),
  },
  {
    name: "Beata B",
    title: `"Mind-Blowing Architecture And Top-Notch Service!"`,
    dateLabel: "Apr. 2024",
    excerpt: (
      <>
        "From the moment you step into this incredible resort, you feel like you
        are in another world. A world where imagination has no limits and where
        your body and mind can recharge to the fullest. We were blown away by the
        architecture and design and loved every moment of our stay at Ulaman."
      </>
    ),
  },
  {
    name: "Conny H",
    title: `"Perfect Place To Relax And Heal!"`,
    dateLabel: "Apr. 2023",
    excerpt: (
      <>
        "Loved this place so much, I extended and stayed over a week. It is the
        perfect retreat to relax and heal. The resort is beautiful, peaceful, and
        embedded in nature. The food is delicious, the staff deliver excellent
        service, and the holistic wellness options made it truly special."
      </>
    ),
  },
  {
    name: "Janey V",
    title: `"One Of The Most Beautiful Resorts In The World."`,
    dateLabel: "Jan. 2024",
    excerpt: (
      <>
        "Ulaman eco-resort is, without doubt, one of the most beautiful resorts I
        have stayed at. I returned from a four-day solo stay focused on yoga,
        wellness, and healing, feeling rested and rejuvenated. Everything at this
        stunning resort adds to the restorative experience."
      </>
    ),
  },
  {
    name: "Alex & Regina",
    title: `"Immerse Yourself In Nature."`,
    dateLabel: "Nov. 2023",
    excerpt: (
      <>
        "Our stay at Ulaman was truly exceptional. The resort&apos;s commitment to
        eco-principles and sustainable practices is admirable. The bamboo
        architecture blends with the natural surroundings, creating a serene
        atmosphere and inspiring guests to connect deeply with nature."
      </>
    ),
  },
  {
    name: "Mikael R",
    title: `"Out-Of-This-World Experience."`,
    dateLabel: "Aug. 2023",
    excerpt: (
      <>
        "This unique resort feels like stepping into an Avatar movie set with
        added five-star service and cuisine. The rooms are super comfortable and
        impressive. All in all, it was truly amazing and highly recommended—even
        for someone as well-traveled as me."
      </>
    ),
  },
  {
    name: "Jody T",
    title: `"Artistic Wonderland."`,
    dateLabel: "July 2023",
    excerpt: (
      <>
        "This is an artistic wonderland and a once-in-a-lifetime experience. The
        architect who designed this place is a genius—the shapes and bamboo
        craftsmanship make it a destination not to miss. The staff are so
        helpful, smart, and friendly."
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
        "This is definitely one of the best resorts we&apos;ve ever been to. We
        spent a two-day self-love retreat that exceeded our expectations. The
        staff are incredibly friendly and helpful, and the extraordinary
        architecture that surrounds you is unforgettable."
      </>
    ),
    linkHref:
      "https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r879239527-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html",
  },
];

export function ReviewsSectionSlice() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragTranslate, setDragTranslate] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const pointerIdRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const activeIndexRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalSlides = GUEST_REVIEWS.length;

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const clampIndex = useCallback(
    (value: number) => Math.min(Math.max(value, 0), totalSlides - 1),
    [totalSlides],
  );

  const commitIndex = useCallback(
    (next: number) => {
      const clamped = clampIndex(next);
      setActiveIndex(clamped);
      setDragTranslate(0);
    },
    [clampIndex],
  );

  const handlePrev = useCallback(() => {
    commitIndex(activeIndexRef.current - 1);
  }, [commitIndex]);

  const handleNext = useCallback(() => {
    commitIndex(activeIndexRef.current + 1);
  }, [commitIndex]);

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!trackRef.current) {
        return;
      }

      pointerIdRef.current = event.pointerId;
      startXRef.current = event.clientX;
      setIsDragging(true);
      trackRef.current.setPointerCapture(event.pointerId);
    },
    [],
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isDragging) {
        return;
      }

      const delta = event.clientX - startXRef.current;
      setDragTranslate(delta);
    },
    [isDragging],
  );

  const endDrag = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isDragging) {
        return;
      }

      const delta = event.clientX - startXRef.current;
      const threshold = 60;

      setIsDragging(false);

      if (Math.abs(delta) > threshold) {
        if (delta > 0) {
          commitIndex(activeIndexRef.current - 1);
        } else {
          commitIndex(activeIndexRef.current + 1);
        }
      } else {
        setDragTranslate(0);
      }

      if (pointerIdRef.current !== null && trackRef.current) {
        trackRef.current.releasePointerCapture(pointerIdRef.current);
      }
      pointerIdRef.current = null;
    },
    [commitIndex, isDragging],
  );

  const handlePointerCancel = useCallback(() => {
    if (pointerIdRef.current !== null && trackRef.current) {
      trackRef.current.releasePointerCapture(pointerIdRef.current);
    }
    pointerIdRef.current = null;
    setIsDragging(false);
    setDragTranslate(0);
  }, []);

  const trackStyle = useMemo(() => {
    const baseTranslate = -activeIndex * 100;
    const translateValue = `calc(${baseTranslate}% + ${dragTranslate}px)`;

    return {
      transform: `translateX(${translateValue})`,
      transition: isDragging ? "none" : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
      cursor: isDragging ? "grabbing" : "grab",
    } as const;
  }, [activeIndex, dragTranslate, isDragging]);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < totalSlides - 1;

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
                <CarouselButton
                  direction="prev"
                  onClick={handlePrev}
                  disabled={!canGoPrev}
                />
                <CarouselButton
                  direction="next"
                  onClick={handleNext}
                  disabled={!canGoNext}
                />
              </div>
            </nav>
          </div>
        </header>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex -ml-4 sm:dir-ltr"
            style={trackStyle}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={handlePointerCancel}
            role="presentation"
          >
            {GUEST_REVIEWS.map((review, index) => (
              <div
                key={`${review.name}-${review.dateLabel}`}
                role="group"
                aria-roledescription="slide"
                aria-hidden={index !== activeIndex}
                className={cn(
                  "min-w-0 shrink-0 grow-0 basis-full pl-4 transition-opacity duration-500",
                  index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0",
                )}
              >
                <article className="app-container space-y-5 pt-11 sm:flex sm:gap-14 sm:justify-between sm:space-y-0 xl:gap-44">
                  <header className="order-first grid grid-cols-[1fr_auto] gap-4 sm:order-none sm:grid-cols-[auto_auto] sm:grid-rows-[auto_1fr] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                    <h3 className="display-6 text-dark-background col-span-1 sm:text-vw-sm lg:text-largest">
                      {review.name}
                    </h3>
                    <h5 className="display-6 text-dark-background order-last sm:order-none sm:row-span-2 sm:text-vw-sm lg:text-largest">
                      {review.title}
                    </h5>
                    <span className="block text-smallest order-1 sm:order-none">
                      {review.dateLabel}
                    </span>
                  </header>
                  <div className="max-w-lg space-y-5 sm:w-1/2">
                    <div>
                      <p>{review.excerpt}</p>
                    </div>
                    {(review.linkHref ?? DEFAULT_REVIEW_LINK) && (
                      <nav>
                        <a
                          href={review.linkHref ?? DEFAULT_REVIEW_LINK}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="btn-primary text-smaller ui-underline-anim reverse"
                        >
                          Continue Reading
                        </a>
                      </nav>
                    )}
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

type CarouselButtonProps = {
  direction: "prev" | "next";
  disabled?: boolean;
  onClick?: () => void;
};

function CarouselButton({
  direction,
  disabled,
  onClick,
}: CarouselButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "touch-manipulation p-0 relative flex items-center rounded-md border border-current transition",
        direction === "prev" && "rotate-180",
        disabled ? "cursor-not-allowed opacity-50 pointer-events-none" : "hover:border-brand",
      )}
      aria-label={direction === "prev" ? "Previous review" : "Next review"}
    >
      <div className="aspect-square text-current p-0 px-6 flex items-center">
        <ArrowIcon />
      </div>
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

