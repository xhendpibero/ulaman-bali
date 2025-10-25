"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ScrollDirection = "prev" | "next";

type RoomType = {
  href: string;
  title: string;
  description: ReactNode;
  image: {
    src: string;
    alt: string;
  };
};

const HEADLINE_LINES = [
  "Discover cozy elegance, where tranquility ",
  "meets Bali’s serene beauty.",
] as const;

const ROOM_TYPES: RoomType[] = [
  {
    href: "/rooms/floating-lake",
    title: "Floating Lake",
    description: (
      <>
        A <em>luxurious</em> <em>floating villa</em> on Ulaman&apos;s bio-filtered
        lake.
      </>
    ),
    image: {
      src: "https://images.prismic.io/ulaman/ZjNQMkMTzAJOCfIQ_best-resort-ulaman.jpg?auto=format,compress",
      alt: "Lake villa overlooking the bio-filtered lagoon at Ulaman",
    },
  },
  {
    href: "/rooms/cocoon-jungle",
    title: "Cocoon Jungle",
    description: (
      <>
        Indulge in an unparalleled
        <em> blend of exotic elegance and coziness.</em>
      </>
    ),
    image: {
      src: "https://images.prismic.io/ulaman/ZjHaf0MTzAJOCdga_ulaman-eco-retreat.jpg?auto=format,compress",
      alt: "Cocoon jungle villa with sweeping canopy views",
    },
  },
  {
    href: "/rooms/avatar-tree-house",
    title: "Avatar Tree House",
    description: (
      <>
        Experience luxury in an <em>avatar-inspired</em> sky villa with 180°
        views.
      </>
    ),
    image: {
      src: "https://images.prismic.io/ulaman/Zpct2h5LeNNTxOAy_skyvilla.jpg?auto=format,compress",
      alt: "Avatar tree house villa suspended above the jungle",
    },
  },
  {
    href: "/rooms/grand-lagoon-private-pool",
    title: "Grand Lagoon Private Pool",
    description: (
      <>
        Indulge in an <em>exclusive riverside villa</em> with jungle lagoon
        view.
      </>
    ),
    image: {
      src: "https://images.prismic.io/ulaman/Zj2YskMTzAJOCrKK_eco-luxury-resort-indonesia.jpg?auto=format,compress",
      alt: "Private pool villa surrounded by jungle lagoon",
    },
  },
  {
    href: "/rooms/jungle-garden-pool",
    title: "Jungle Garden Pool",
    description: (
      <>
        An <em>ultimate private pool retreat</em> set within the Ulaman gardens.
      </>
    ),
    image: {
      src: "https://images.prismic.io/ulaman/ZpH1_h5LeNNTxIQh_grand-lagoon.jpg?auto=format,compress",
      alt: "Jungle garden pool villa with lush landscaping",
    },
  },
  {
    href: "/rooms/ulin-poolside",
    title: "Ulin Poolside",
    description: (
      <>
        A <em>luxurious jungle ground-floor oasis</em> with infinity pool
        access.
      </>
    ),
    image: {
      src: "https://images.prismic.io/ulaman/Zlfnx6WtHYXtT6xP_ecoresort-bali.jpg?auto=format,compress",
      alt: "Ulin poolside villa interior opening to the pool",
    },
  },
];

export function RoomTypesCarouselSlice() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = Math.max(scrollWidth - clientWidth, 0);

    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft < maxScroll - 1);
  }, []);

  const handleScrollBy = useCallback(
    (direction: ScrollDirection) => {
      const container = scrollContainerRef.current;
      if (!container) {
        return;
      }

      const offset = direction === "prev" ? -80 : 80;
      container.scrollBy({ left: offset, behavior: "smooth" });
      window.requestAnimationFrame(updateScrollState);
    },
  [updateScrollState],
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    updateScrollState();

    const handle = () => updateScrollState();
    container.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);

    return () => {
      container.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, [updateScrollState]);

  return (
    <section className="space-y-10 sm:space-y-11 lg:space-y-16" data-slice-type="room_types_carousel" data-slice-variation="withTitle">
      <header className="app-container">
        <div className="mx-auto max-w-[31.25rem] space-y-5 sm:space-y-6 lg:max-w-[40rem] xl:space-y-5">
          <div className="space-y-em text-center" id="room-types-headline">
            <h4 className="display-4 heading">
              {HEADLINE_LINES.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </h4>
          </div>
        </div>
      </header>

      <section className="!pr-0 sm:app-container sm:max-w-unset">
        <div
          className="relative flex outline-none sm:gap-9 lg:gap-20 2xl:gap-52"
          role="region"
          aria-roledescription="carousel"
        >
          <nav className="hidden pt-32 sm:block lg:pt-52">
            <div className="flex flex-col gap-5 text-brand sm:gap-3.5 lg:gap-6">
              <CarouselButton
                direction="prev"
                onClick={() => handleScrollBy("prev")}
                disabled={!canScrollPrev}
              />
              <CarouselButton
                direction="next"
                onClick={() => handleScrollBy("next")}
                disabled={!canScrollNext}
              />
            </div>
          </nav>

          <div className="flex-1">
            <div
              ref={scrollContainerRef}
              className="flex -ml-4 overflow-x-auto scroll-smooth sm:dir-ltr"
            >
              {ROOM_TYPES.map((room) => (
                <div
                  key={room.href}
                  role="group"
                  aria-roledescription="slide"
                  className="group min-w-0 shrink-0 grow-0 basis-auto pb-1 pl-4 sm:pl-7 last:pr-6"
                >
                  <Link href={room.href} className="block">
                    <article className="-mr-7 pl-6 group-last:pr-6 sm:mr-0 sm:p-0">
                      <div className="w-88 space-y-4 lg:w-112">
                        <figure className="group relative aspect-[10/14] overflow-hidden rounded-md xl:aspect-[10/13]">
                          <div className="rounded-inherit">
                            <div className="absolute inset-0 flex justify-center rounded-inherit">
                              <div className="h-full w-full overflow-hidden rounded-inherit">
                                <Image
                                  src={room.image.src}
                                  alt={room.image.alt}
                                  fill
                                  sizes="(min-width: 1024px) 28rem, 22rem"
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </figure>

                        <footer className="space-y-4">
                          <header className="space-y-2.5 lg:space-y-3.5">
                            <h3 className="display-5 leading-tight">{room.title}</h3>
                            <div className="mt-3 pr-4 xl:pr-20">
                              <p>{room.description}</p>
                            </div>
                          </header>
                          <nav>
                            <span className="btn-primary capitalize ui-underline-anim reverse">
                              Discover
                            </span>
                          </nav>
                        </footer>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

type CarouselButtonProps = {
  direction: "prev" | "next";
  disabled?: boolean;
  onClick?: () => void;
};

function CarouselButton({ direction, disabled, onClick }: CarouselButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded border border-current transition",
        "text-brand",
        direction === "prev" && "rotate-180",
        disabled && "cursor-not-allowed opacity-50",
      )}
      aria-label={direction === "prev" ? "Previous room" : "Next room"}
    >
      <div className="aspect-square text-current p-0 px-6 flex items-center">
        <ArrowIcon />
      </div>
    </button>
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
