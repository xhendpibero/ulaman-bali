"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type ArticleSlide = {
  src: string;
  alt: string;
  loading: "eager" | "lazy";
};

const ARTICLE_SLIDES: ArticleSlide[] = [
  {
    src: "https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress",
    alt: "Ulaman Bali",
    loading: "lazy",
  },
  {
    src: "https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress",
    alt: "The Best Infinity Pool at Sunset Time in Bali",
    loading: "eager",
  },
  {
    src: "https://images.prismic.io/ulaman/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg?auto=format,compress",
    alt: "Ice Bath and Hot Bath at Riverside Spa",
    loading: "lazy",
  },
];

const ARTICLE_LINES = [
  "An award-winning eco-luxury resort ",
  "offering a unique hideaway experience. ",
  "Embrace authenticity, balance, and ",
  "harmony with nature in a healing, ",
  "luxurious environment.",
];

export function CommonArticleSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = ARTICLE_SLIDES.length;

  const goToSlide = useCallback(
    (nextIndex: number) => {
      if (totalSlides === 0) {
        return;
      }
      const normalizedIndex =
        ((nextIndex % totalSlides) + totalSlides) % totalSlides;
      setActiveSlide(normalizedIndex);
    },
    [totalSlides],
  );

  const handleNext = useCallback(() => {
    goToSlide(activeSlide + 1);
  }, [activeSlide, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(activeSlide - 1);
  }, [activeSlide, goToSlide]);

  const indicators = useMemo(
    () =>
      ARTICLE_SLIDES.map((slide, index) => ({
        id: `${slide.src}-indicator`,
        isActive: index === activeSlide,
        onClick: () => goToSlide(index),
        label: `Go to slide ${index + 1}`,
      })),
    [activeSlide, goToSlide],
  );

  return (
    <section
      data-slice-type="common_article_section"
      data-slice-variation="default"
      className="app-container"
    >
      <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:gap-11 lg:justify-between lg:gap-20 xl:gap-32">
        <div className="w-full items-center xl:max-w-lg">
          <div className="aspect-[10/13] sm:aspect-[10/14]">
            <figure className="group relative h-full w-full overflow-hidden rounded-asymetrical border-none object-cover">
              <div className="rounded-inherit">
                <div className="absolute inset-0 flex justify-center rounded-inherit">
                  {ARTICLE_SLIDES.map((slide, index) => (
                    <div
                      key={slide.src}
                      className={cn(
                        "absolute inset-0 h-full w-full overflow-hidden rounded-inherit transition-opacity duration-500 ease-in-out",
                        index === activeSlide
                          ? "opacity-100"
                          : "pointer-events-none opacity-0",
                      )}
                      aria-hidden={index !== activeSlide}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="h-full w-full rounded-inherit object-cover"
                        loading={slide.loading}
                      />
                    </div>
                  ))}

                  <nav className="absolute inset-x-3.5 bottom-5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="aspect-square flex h-14 w-14 rotate-180 items-center justify-center rounded-md border border-current bg-dark text-light backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100"
                      aria-label="Previous slide"
                    >
                      <ArrowIcon />
                    </button>
                    <nav>
                      <ul className="flex gap-2">
                        {indicators.map(({ id, isActive, onClick, label }) => (
                          <li key={id}>
                            <button
                              type="button"
                              onClick={onClick}
                              aria-label={label}
                              className={cn(
                                "aspect-square w-3 rounded-full bg-light transition-opacity duration-300 hover:opacity-100",
                                isActive ? "" : "opacity-50",
                              )}
                            />
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="aspect-square flex h-14 w-14 items-center justify-center rounded-md border border-current bg-dark text-light backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 group-hover:disabled:opacity-50 xl:opacity-0 xl:group-hover:opacity-100"
                      aria-label="Next slide"
                    >
                      <ArrowIcon />
                    </button>
                  </nav>
                </div>
              </div>
            </figure>
          </div>
        </div>

        <div className="relative w-full xl:max-w-xl">
          <div className="space-y-9 prose:p:max-w-md lg:space-y-5 xl:space-y-9">
            <h5 className="heading display-5">
              {ARTICLE_LINES.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </h5>
            <p>
              We believe nature and luxury can coexist. Ulaman Eco Luxury
              Resort offers{" "}
              <em>
                a secluded, lush haven with luxurious amenities and impeccable
                service
              </em>
              . Immerse yourself in traditional Balinese culture and leave
              feeling renewed, all while minimizing your ecological footprint.
              Recharge your mind, body, and soul in this unique holistic
              retreat.
            </p>
            <p>
              <Link
                href="/about"
                className="rich-text-link text-brand inline-block"
              >
                <span className="btn-primary inline-block ui-underline-anim reverse">
                  About Us
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
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
      className="lucide lucide-move-right-icon w-6 stroke-1"
      aria-hidden="true"
    >
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </svg>
  );
}
