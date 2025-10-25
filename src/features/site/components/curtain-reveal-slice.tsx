"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const CURTAIN_IMAGES = [
  {
    src: "https://images.prismic.io/ulaman/ZlQ_cik0V36pXpWM_ulaman-eco-resort.jpg?auto=format,compress",
    alt: "Reiki healing ritual at Ulaman",
    topClass: "top-10",
    direction: 1,
    initialRotation: 4,
    finalRotation: 8,
  },
  {
    src: "https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress",
    alt: "Guests gathering at Ulaman eco retreat",
    topClass: "-top-10",
    direction: -1,
    initialRotation: -4,
    finalRotation: -8,
  },
] as const;

const INITIAL_SHIFT_PX = 80;
const FINAL_SHIFT_PX = 460;
const CURTAIN_EASING = 0.12;
const CURTAIN_EPSILON = 0.001;

export function CurtainRevealSlice() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | undefined>(undefined);
  const animationRef = useRef<number | undefined>(undefined);
  const targetProgressRef = useRef(0);
  const displayRef = useRef(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  const step = useCallback(() => {
    const target = targetProgressRef.current;
    const current = displayRef.current;
    const delta = target - current;

    if (Math.abs(delta) < CURTAIN_EPSILON) {
      displayRef.current = target;
      setDisplayProgress(target);
      animationRef.current = undefined;
      return;
    }

    const next = current + delta * CURTAIN_EASING;
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
      const clamped = Math.min(Math.max(rawProgress * 2, 0), 1);

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

  return (
    <section
      data-slice-type="curtain_reveal"
      data-slice-variation="default"
      className="!mt-28 [&+*]:!mt-0"
      ref={sectionRef}
    >
      <div className="app-container relative flex w-full max-w-screen items-center justify-center overflow-hidden aspect-screen sm:aspect-auto sm:min-h-[90vh] xl:max-w-unset">
        <div className="pointer-events-none absolute z-20 flex h-full w-full items-center justify-center py-14 2xl:py-0">
          {CURTAIN_IMAGES.map((image) => {
            const shift =
              image.direction *
              (INITIAL_SHIFT_PX +
                (FINAL_SHIFT_PX - INITIAL_SHIFT_PX) * displayProgress);
            const rotation =
              image.initialRotation +
              (image.finalRotation - image.initialRotation) * displayProgress;

            return (
              <figure
                key={image.src}
                className={cn(
                  "absolute aspect-[10/14] w-96 rounded-md shadow-xl",
                  image.topClass,
                )}
                style={{
                  transform: `translateX(${shift}px) translateY(40px) rotate(${rotation}deg)`,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1280px) 24rem, 18rem"
                  className="rounded-md object-cover"
                />
              </figure>
            );
          })}
        </div>

        <div className="relative z-10 mx-auto max-w-md space-y-5 text-center">
          <div className="mx-auto max-w-92 space-y-5 lg:max-w-lg">
            <h4 className="display-4 heading">
              Discover your path to wellness and growth.
            </h4>
            <p>
              At Ulaman we redefine luxury as an experience that not only
              pampers the senses but also nurtures the soul. Nestled in pristine
              nature, our eco-luxury retreat offers a sanctuary for healing and
              transformation. With personalized programs year-round, enjoy
              dedicated attention and care, immersing yourself in relaxation,
              rejuvenation, or profound inner change through meticulously
              curated activities and treatments.{" "}
              <em>Your transformative journey begins here.</em>
            </p>
          </div>

          <ul className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-8 text-brand">
            <li>
              <Link
                href="/retreats"
                className="btn-primary inline-block capitalize ui-underline-anim reverse"
              >
                Learn More
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
