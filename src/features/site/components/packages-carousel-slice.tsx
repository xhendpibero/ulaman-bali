"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type PackageItem = {
  title: string;
  duration: string;
  image: {
    src: string;
    alt: string;
  };
};

const HEADLINE_LINES = [
  "Book one of our special ",
  "packages for a getaway you'll ",
  "never forget.",
] as const;

const PACKAGES: PackageItem[] = [
  {
    title: "The Avatar Experience",
    duration: "3 Days / 2 Nights",
    image: {
      src: "https://images.prismic.io/ulaman/Zjrn-kMTzAJOCn4c_eco-luxury-hotel-bali.jpg?auto=format,compress",
      alt: "Lakeside villas at Ulaman Eco Luxury Retreat",
    },
  },
  {
    title: "The Ultimate Honeymoon",
    duration: "3 Days / 2 Nights",
    image: {
      src: "https://images.prismic.io/ulaman/ZjebwkMTzAJOCiml_Ulaman-eco-retreat.jpg?auto=format,compress",
      alt: "Romantic couple enjoying Ulaman honeymoon retreat",
    },
  },
];

export function PackagesCarouselSlice() {
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

  const handleNavigate = useCallback((direction: "prev" | "next") => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    const offset = direction === "prev" ? -80 : 80;
    container.scrollBy({ left: offset, behavior: "smooth" });
    window.requestAnimationFrame(updateScrollState);
  }, [updateScrollState]);

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
    <section
      data-slice-type="packages_carousel"
      data-slice-variation="withTitle"
      className="space-y-11 lg:space-y-16"
    >
      <header>
        <div className="mx-auto max-w-[24.35rem] space-y-5 sm:space-y-6 lg:max-w-[30rem] xl:space-y-5">
          <div
            className="space-y-em text-center dark:prose-headings:text-light dark:prose-p:text-light"
            id="packages-carousel-headline"
          >
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
          className="relative flex items-center outline-none sm:gap-9 lg:gap-20 2xl:gap-52"
          role="region"
          aria-roledescription="carousel"
          aria-label="Packages carousel"
        >
          <nav className="hidden sm:block">
            <div className="flex flex-col gap-5 text-brand sm:gap-3.5 lg:gap-6">
              <CarouselButton
                direction="prev"
                onClick={() => handleNavigate("prev")}
                disabled={!canScrollPrev}
              />
              <CarouselButton
                direction="next"
                onClick={() => handleNavigate("next")}
                disabled={!canScrollNext}
              />
            </div>
          </nav>

          <div className="flex-1">
            <div
              ref={scrollContainerRef}
              className="flex -ml-4 overflow-x-auto scroll-smooth sm:dir-ltr"
            >
              {PACKAGES.map((item) => (
                <div
                  key={item.title}
                  role="group"
                  aria-roledescription="slide"
                  className="group min-w-0 shrink-0 grow-0 basis-auto pb-1 pl-4 sm:pl-10 last:pr-10 lg:pl-18 lg:last:pr-18"
                >
                  <PackageCard item={item} />
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
  onClick?: () => void;
  disabled?: boolean;
};

function CarouselButton({ direction, onClick, disabled }: CarouselButtonProps) {
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
      aria-label={direction === "prev" ? "Previous package" : "Next package"}
    >
      <div className="aspect-square text-current p-0 px-6 flex items-center">
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
      </div>
    </button>
  );
}

function PackageCard({ item }: { item: PackageItem }) {
  return (
    <article className="group-last:pr-6 -mr-4 cursor-pointer space-y-5 pl-6 pt-2.5 sm:mr-0 sm:px-0">
      <div className="floating-element-decoration aspect-[10/10.6] w-[21.5rem] sm:w-72 lg:w-[21.5rem]">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          className="relative z-10 rounded-lg object-cover"
          sizes="(min-width: 1024px) 22rem, 18rem"
        />
      </div>
      <footer className="space-y-4">
        <h6 className="badge glass text-smallest dark:text-dark">
          {item.duration}
        </h6>
        <footer className="space-y-3 sm:space-y-3.5 lg:space-y-3">
          <h3 className="display-5 leading-tight dark:text-light">
            {item.title}
          </h3>
          <nav>
            <span className="btn-primary capitalize dark:text-light lg:text-smaller ui-underline-anim reverse">
              Discover
            </span>
          </nav>
        </footer>
      </footer>
    </article>
  );
}
