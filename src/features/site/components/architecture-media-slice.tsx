"use client";

import { useEffect, useRef, useState } from "react";

const BACKGROUND_IMAGE =
  "https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress";
const INITIAL_WIDTH_PERCENT = 50;
const FINAL_WIDTH_PERCENT = 100;
const INITIAL_RADIUS = 1024;
const FINAL_RADIUS = 0;
const INITIAL_SHIFT = -800;
const FINAL_SHIFT = 1080;

export function ArchitectureMediaSlice() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 1;
      const totalScrollable = rect.height + windowHeight;
      const rawProgress = (windowHeight - rect.top) / totalScrollable;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clamped);
      frameRef.current = undefined;
    };

    const handleScroll = () => {
      if (frameRef.current !== undefined) {
        return;
      }
      frameRef.current = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameRef.current !== undefined) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const animatedWidth =
    INITIAL_WIDTH_PERCENT +
    (FINAL_WIDTH_PERCENT - INITIAL_WIDTH_PERCENT) * progress;

  const animatedRadius = `${
    INITIAL_RADIUS + (FINAL_RADIUS - INITIAL_RADIUS) * progress
  }px ${
    INITIAL_RADIUS + (FINAL_RADIUS - INITIAL_RADIUS) * progress
  }px 0 0`;

  const animatedShift =
    INITIAL_SHIFT + (FINAL_SHIFT - INITIAL_SHIFT) * progress;

  return (
    <section
      data-slice-type="arch_media"
      data-slice-variation="default"
      className="sandikala-rounded-exception flex aspect-screen justify-center xl:h-[150vh] xl:aspect-auto"
      ref={sectionRef}
    >
      <div
        className="relative flex h-full w-1/2 justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          width: `${animatedWidth}%`,
          borderRadius: animatedRadius,
        }}
      >
        <div className="h-screen w-screen rounded-none object-cover xl:absolute">
          <div
            className="h-full w-full"
            style={{
              transform: `translate(0px, ${animatedShift}px)`,
              willChange: "transform",
            }}
            data-speed="0.01"
            data-lag="0"
          >
            <img
              src={BACKGROUND_IMAGE}
              alt="Ulaman Bali"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
