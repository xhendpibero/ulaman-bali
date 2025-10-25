"use client";

import { useEffect, useRef, useState } from "react";

type CtaLine = {
  text: string;
};

const CTA_LINES: CtaLine[] = [
  {
    text: "Nestled among the rice fields and ",
  },
  {
    text: "coconut trees of Tabanan, Ulaman ",
  },
  {
    text: "is only 20 minutes away from the ",
  },
  {
    text: "vibrant town of Canggu.",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function ScrollHighlightingCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateProgress = () => {
      const element = sectionRef.current;
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      // Consider progress complete once the section's midpoint reaches the viewport midpoint.
      const elementMidpoint = rect.top + rect.height / 2;
      const startThreshold = viewportHeight;
      const endThreshold = viewportHeight / 2;
      const denominator = Math.max(startThreshold - endThreshold, 1);
      const rawProgress = (startThreshold - elementMidpoint) / denominator;
      const nextProgress = clamp(rawProgress, 0, 1);

      setScrollProgress((current) =>
        Math.abs(current - nextProgress) > 0.005 ? nextProgress : current,
      );
    };

    const handleScroll = () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
      animationFrame = window.requestAnimationFrame(updateProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const segments = CTA_LINES.length;
  const getLineProgress = (index: number) => {
    const segmentSize = 1 / segments;
    const start = segmentSize * index;
    const raw = (scrollProgress - start) / segmentSize;
    return clamp(raw, 0, 1);
  };

  return (
    <section
      ref={sectionRef}
      data-slice-type="call_to_action"
      data-slice-variation="scrollHighlighting"
      className="app-container"
    >
      <div className="mx-auto max-w-[38rem] space-y-5 sm:space-y-6 xl:max-w-[44rem] xl:space-y-5">
        <div className="space-y-em text-center" id="cta-1-text-block">
          <h2 className="display-2 heading">
            {CTA_LINES.map(({ text }, index) => {
              const lineProgress = getLineProgress(index);
              const backgroundPosition = `${100 - lineProgress * 100}% 0%`;

              return (
                <span
                  key={text}
                  className="relative block bg-clip-text gradient bg-[length:200%] text-center text-transparent transition-[background-position] duration-300 ease-out will-change-[background-position]"
                  style={{ backgroundPosition }}
                >
                  {text}
                </span>
              );
            })}
          </h2>
        </div>
      </div>
    </section>
  );
}
