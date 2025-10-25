"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useState,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type ExperienceModalAction = {
  label: string;
  href: string;
  target?: "_blank";
  rel?: string;
  variant?: "primary" | "link";
};

type ExperienceModalContent = {
  title?: string;
  descriptions: string[];
  highlights?: string[];
  meta?: Array<{ label: string; value: string }>;
  notes?: string[];
  actions?: ExperienceModalAction[];
};

type ExperienceTile = {
  image: {
    src: string;
    alt: string;
  };
  label: string;
  wrapperClass: string;
  modal: ExperienceModalContent;
};

function ModalPortal({ children }: { children: ReactNode }) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.createElement("div");
    element.setAttribute("data-modal-root", "experiences-collage-modal");
    document.body.appendChild(element);
    setContainer(element);

    return () => {
      document.body.removeChild(element);
    };
  }, []);

  if (!container) {
    return null;
  }

  return createPortal(children, container);
}

const EXPERIENCES: ExperienceTile[] = [
  {
    image: {
      src: "https://images.prismic.io/ulaman/ZnWOMpbWFbowew-3_eco-reosrt.jpg?auto=format,compress",
      alt: "Private tennis session at Ulaman",
    },
    label: "Private Tennis Coach",
    wrapperClass: "aspect-[10/14] sm:aspect-[10/19] lg:aspect-[10/14] xl:aspect-[10/12.5]",
    modal: {
      descriptions: [
        "Ulaman offers private tennis lessons for all levels on our court located amidst the rice fields. Rackets and balls are provided, and night lights are available for evening play.",
      ],
      highlights: [
        "Includes equipment & court usage",
        "Available for all levels",
      ],
      meta: [{ label: "Hourly Rate", value: "IDR 500.000++" }],
      actions: [
        {
          label: "Enquire",
          href: "https://wa.me/6281227142854",
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "primary",
        },
        {
          label: "View Terms",
          href: "/activities#terms",
          variant: "link",
        },
      ],
    },
  },
  {
    image: {
      src: "https://images.prismic.io/ulaman/ZoDImh5LeNNTwp39_restaurant.jpg?auto=format,compress",
      alt: "Romantic dining by Ulaman's natural waterfalls",
    },
    label: "Romantic 5-Star Culinary Experience by Ulaman's Natural Waterfalls!",
    wrapperClass: "aspect-[10/13] sm:aspect-[10/16] lg:aspect-[10/12] xl:aspect-[10/9.5]",
    modal: {
      descriptions: [
        "4-Course Chef's Selection, created with love by Chef Arik and his team. Experience an internationally inspired personalized menu using local seasonal ingredients combined with our Chef's inspiration.",
        "Dine in the most exclusive romantic venue in Bali, right in front of natural waterfalls with exquisite bamboo architecture. Includes a private server and the option to add bespoke touches such as flowers or personalized messages.",
      ],
      highlights: [
        "Includes choice of local beverage or cocktail & house wine",
        "Exclusive venue beautifully decorated with local flowers",
      ],
      meta: [
        { label: "Menu", value: "Chef's personalized 4-course dining" },
        { label: "Venue", value: "Private waterfall-side pavilion" },
      ],
      actions: [
        {
          label: "Enquire",
          href: "https://wa.me/6281227142854",
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "primary",
        },
        {
          label: "View Terms",
          href: "/activities#terms",
          variant: "link",
        },
      ],
    },
  },
  {
    image: {
      src: "https://images.prismic.io/ulaman/Zlas5KWtHYXtT4Cm_yoga-in-bali.jpg?auto=format,compress",
      alt: "Yoga shala at Ulaman Eco Luxury Retreat",
    },
    label: "Private Yoga Session (Hatha, Yin or Fly High Yoga)",
    wrapperClass: "aspect-[10.8/10] sm:aspect-[10/15] lg:aspect-[10.7/10] xl:aspect-[10/9]",
    modal: {
      descriptions: [
        "Enjoy a private yoga session designed for you. Choose Hatha for strength, Yin for deep relaxation, or Fly High Yoga with aerial support to enhance stretches and core strength.",
      ],
      highlights: [
        "Duration: 60 minutes",
        "Tailored to individuals, couples, or small groups",
      ],
      meta: [
        { label: "Individual Rate", value: "IDR 1.000.000++" },
        { label: "Couple Rate", value: "IDR 1.500.000++" },
      ],
      notes: ["*Included for in-house guests"],
      actions: [
        {
          label: "Enquire",
          href: "https://wa.me/6281227142854",
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "primary",
        },
        {
          label: "View Terms",
          href: "/activities#terms",
          variant: "link",
        },
      ],
    },
  },
  {
    image: {
      src: "https://images.prismic.io/ulaman/ZlbB0KWtHYXtT4Fc_bali-hotels.jpg?auto=format,compress",
      alt: "Romantic bed decorations",
    },
    label: "Romantic Bed Decorations",
    wrapperClass: "aspect-[10.3/10] sm:aspect-[10/20] lg:aspect-[10/16.7] xl:aspect-[10/13]",
    modal: {
      descriptions: [
        "Surprise your loved one with a romantic bed arrangement inspired by local floral artistry. Rose petals, palm leaves, and handcrafted accents set the tone for a memorable celebration.",
        "Indulge in Ulaman's exquisite homemade chocolates as the perfect finishing touch.",
      ],
      highlights: [
        "Includes rose petal arrangement & bamboo accents",
        "Custom messages available upon request",
      ],
      meta: [{ label: "Pricing", value: "IDR 500.000++" }],
      actions: [
        {
          label: "Book now",
          href: "https://wa.me/6281227142854",
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "primary",
        },
        {
          label: "View Terms",
          href: "/activities#terms",
          variant: "link",
        },
      ],
    },
  },
  {
    image: {
      src: "https://images.prismic.io/ulaman/ZoZc3h5LeNNTwyC-_luxury-resort-bali.jpg?auto=format,compress",
      alt: "Helicopter over Bali rice terraces",
    },
    label: "VIP Airport Transfers via Helicopter",
    wrapperClass: "aspect-[10/15.5] sm:aspect-[10/19.5] lg:aspect-[10/14] xl:aspect-[10/12.5]",
    modal: {
      descriptions: [
        "Arrive at Ulaman quicker and in style with our VIP helicopter airport transfers. Avoid traffic and enjoy sweeping views of Bali from the sky.",
        "Our concierge team will coordinate every detail to ensure a seamless journey from arrival to retreat.",
      ],
      highlights: [
        "Direct transfer from Ngurah Rai International Airport",
        "Ideal for special occasions & time-sensitive travel",
      ],
      meta: [{ label: "Starting Price", value: "$2,500 USD" }],
      actions: [
        {
          label: "Enquire",
          href: "https://wa.me/6281227142854",
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "primary",
        },
        {
          label: "View Terms",
          href: "/activities#terms",
          variant: "link",
        },
      ],
    },
  },
  {
    image: {
      src: "https://images.prismic.io/ulaman/ZlbDa6WtHYXtT4F-_eco-hotel-bali.jpg?auto=format,compress",
      alt: "Celebratory balloons and bed decoration",
    },
    label: "Balloons and Sparkles",
    wrapperClass: "aspect-[10/11] sm:aspect-[10/15.5] lg:aspect-[10/12] xl:aspect-[10/9.5]",
    modal: {
      descriptions: [
        "Transform your villa into a festive wonderland with bespoke balloon styling and sparkling accents curated by our celebrations team.",
        "Perfect for birthdays, proposals, or milestone moments, complete with optional add-ons like cakes, florals, or live music.",
      ],
      highlights: [
        "Fully personalized décor concepts",
        "Optional add-ons: cakes, flowers & ambient lighting",
      ],
      meta: [{ label: "Pricing", value: "Custom quotation" }],
      actions: [
        {
          label: "Enquire",
          href: "https://wa.me/6281227142854",
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "primary",
        },
        {
          label: "View Terms",
          href: "/activities#terms",
          variant: "link",
        },
      ],
    },
  },
];

export function ExperiencesCollageSlice() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || current === 0) {
        return current;
      }

      return current - 1;
    });
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || current === EXPERIENCES.length - 1) {
        return current;
      }

      return current + 1;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeModal, goToNext, goToPrevious]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    closeButtonRef.current?.focus();
  }, [activeIndex]);

  const handleTileKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>, index: number) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveIndex(index);
      }
    },
    []
  );

  const activeExperience =
    activeIndex !== null ? EXPERIENCES[activeIndex] : null;
  const totalExperiences = EXPERIENCES.length;

  return (
    <section
      data-slice-type="experiences_catalog"
      data-slice-variation="allExperiencesCollage"
    >
      <div>
        <div>
          <div className="space-y-5 sm:space-y-2.5 lg:space-y-7 xl:space-y-5">
            <div>
              <figure className="columns-2 gap-1.5 space-y-2 md:columns-3 md:gap-2 xl:column">
                {EXPERIENCES.map((experience, index) => (
                  <div key={experience.label} className={experience.wrapperClass}>
                    <div className="relative h-full w-full overflow-hidden rounded-md">
                      <article
                        className="block h-full w-full cursor-pointer overflow-hidden rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                        onClick={() => setActiveIndex(index)}
                        onKeyDown={(event) => handleTileKeyDown(event, index)}
                        role="button"
                        tabIndex={0}
                        aria-label={`View details for ${experience.label}`}
                      >
                        <Image
                          src={experience.image.src}
                          alt={experience.image.alt}
                          fill
                          loading="lazy"
                          className="h-full w-full object-cover"
                          sizes="(min-width: 1280px) 20rem, (min-width: 768px) 30vw, 50vw"
                        />
                        <footer className="absolute inset-x-2.5 bottom-2.5">
                          <h6 className="badge w-fit max-w-full bg-light-background/40 py-1 text-tiny font-medium leading-tight text-light-emphasis backdrop-blur-3xl xl:text-smallest">
                            {experience.label}
                          </h6>
                        </footer>
                      </article>
                    </div>
                  </div>
                ))}
              </figure>
            </div>
            <nav className="text-center">
              <a
                href="/activities"
                className="btn-primary ui-underline-anim reverse"
              >
                Discover All Experiences
              </a>
            </nav>
          </div>
        </div>
      </div>
      {activeExperience ? (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[90] overflow-y-auto bg-dark"
            role="dialog"
            aria-modal="true"
            aria-label={activeExperience.modal.title ?? activeExperience.label}
            onClick={closeModal}
          >
            <button
              type="button"
              ref={closeButtonRef}
              onClick={closeModal}
              className="fixed right-6 top-6 z-[105] rounded-full bg-light-background/80 p-2 text-dark transition hover:bg-light-background"
              aria-label="Close experience details"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <article
              className="relative flex min-h-full h-[100vh] w-full flex-col bg-light-background text-dark xl:flex-row"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative hidden min-h-full w-full max-w-[45%] bg-dark/10 xl:block">
                <Image
                  src={activeExperience.image.src}
                  alt={activeExperience.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 45vw, (min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>

              <div className="relative flex flex-1 flex-col">
                <div className="relative h-64 w-full overflow-hidden xl:hidden">
                  <Image
                    src={activeExperience.image.src}
                    alt={activeExperience.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 100vw, 100vw"
                    priority
                  />
                </div>

                <div className="hide-scrollbar flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
                  <span className="text-brand/80 text-smallest tracking-wide sm:text-smaller">
                    {(activeIndex || 0) + 1} / {totalExperiences}
                  </span>
                  <header className="mt-4 space-y-4 sm:mt-6">
                    <div>
                      <h2 className="display-3 max-w-3xl">
                        {activeExperience.modal.title ?? activeExperience.label}
                      </h2>
                    </div>
                    <div className="space-y-3 text-sm sm:text-base">
                      {activeExperience.modal.descriptions.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </header>

                  {activeExperience.modal.highlights?.length ? (
                    <div className="mt-7">
                      <ul className="space-y-3 text-sm sm:text-base">
                        {activeExperience.modal.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-dark/90"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-brand"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {activeExperience.modal.meta?.length ? (
                    <div className="mt-9 space-y-6 sm:space-y-7">
                      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {activeExperience.modal.meta.map((item) => (
                          <li key={`${item.label}-${item.value}`} className="space-y-2">
                            <h6 className="text-brand text-smaller font-medium tracking-wide">
                              {item.label}
                            </h6>
                            <span className="badge inline-flex w-fit items-center rounded-md bg-light-emphasis px-3 py-1 text-smaller text-dark">
                              {item.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {activeExperience.modal.notes?.length ? (
                    <div className="mt-6 space-y-2 text-smallest text-brand">
                      {activeExperience.modal.notes.map((note) => (
                        <p key={note}>{note}</p>
                      ))}
                    </div>
                  ) : null}
                </div>

                <footer className="flex flex-col gap-6 border-t border-brand/20 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-8">
                  <div className="flex gap-5 sm:gap-3.5 lg:gap-6 text-brand">
                    <ModalCarouselButton
                      direction="prev"
                      disabled={activeIndex === 0}
                      onClick={goToPrevious}
                    />
                    <ModalCarouselButton
                      direction="next"
                      disabled={activeIndex === totalExperiences - 1}
                      onClick={goToNext}
                    />
                  </div>

                  <nav className="flex flex-wrap gap-3 sm:justify-end">
                    {activeExperience.modal.actions?.map((action) => {
                      const isPrimary = action.variant === "primary";

                      return (
                        <a
                          key={action.label}
                          href={action.href}
                          target={action.target}
                          rel={action.rel}
                          className={
                            isPrimary
                              ? "btn-primary inline-flex items-center justify-center rounded-full px-8 py-3 text-smaller font-medium"
                              : "btn-primary ui-underline-anim reverse text-smaller opacity-80"
                          }
                        >
                          {action.label}
                        </a>
                      );
                    })}
                  </nav>
                </footer>
              </div>
            </article>
          </div>
        </ModalPortal>
      ) : null}
    </section>
  );
}

type ModalCarouselButtonProps = {
  direction: "prev" | "next";
  disabled?: boolean;
  onClick: () => void;
};

function ModalCarouselButton({
  direction,
  disabled,
  onClick,
}: ModalCarouselButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex h-16 w-16 items-center justify-center rounded border border-current text-brand transition hover:bg-brand hover:text-light disabled:cursor-not-allowed disabled:border-brand/40 disabled:text-brand/40${direction === "prev" ? " rotate-180" : ""}`}
      aria-label={direction === "prev" ? "View previous experience" : "View next experience"}
    >
      <div className="aspect-square text-current p-0 px-6 flex items-center">
        <ModalArrowIcon />
      </div>
    </button>
  );
}

function ModalArrowIcon() {
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
