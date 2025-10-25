"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const BACKGROUND_IMAGE =
  "https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress";
const INITIAL_WIDTH_PERCENT = 50;
const FINAL_WIDTH_PERCENT = 100;
const INITIAL_RADIUS = 1024;
const FINAL_RADIUS = 0;
const INITIAL_SHIFT = -800;
const FINAL_SHIFT = 1080;
const EASING = 0.12;
const EPSILON = 0.001;

export function ArchitectureMediaSlice() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number>();
  const animationRef = useRef<number>();
  const targetProgressRef = useRef(0);
  const displayRef = useRef(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  const step = useCallback(() => {
    const target = targetProgressRef.current;
    const current = displayRef.current;
    const delta = target - current;

    if (Math.abs(delta) < EPSILON) {
      displayRef.current = target;
      setDisplayProgress(target);
      animationRef.current = undefined;
      return;
    }

    const next = current + delta * EASING;
    displayRef.current = next;
    setDisplayProgress(next);
    animationRef.current = window.requestAnimationFrame(step);
  }, []);

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
      targetProgressRef.current = clamped;
      if (!animationRef.current) {
        animationRef.current = window.requestAnimationFrame(step);
      }
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
      if (animationRef.current !== undefined) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [step]);

  const animatedWidth =
    INITIAL_WIDTH_PERCENT +
    (FINAL_WIDTH_PERCENT - INITIAL_WIDTH_PERCENT) * displayProgress;

  const animatedRadius = `${
    INITIAL_RADIUS + (FINAL_RADIUS - INITIAL_RADIUS) * displayProgress
  }px ${
    INITIAL_RADIUS + (FINAL_RADIUS - INITIAL_RADIUS) * displayProgress
  }px 0 0`;

  const animatedShift =
    INITIAL_SHIFT + (FINAL_SHIFT - INITIAL_SHIFT) * displayProgress;

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
