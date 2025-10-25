"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

import { cn } from "@/lib/utils";

const BANNER_WORDS = ["Balance - Relaxation", "Renewal - Healing"] as const;

const VIDEO_SOURCES = [
  {
    src: "https://ulaman.cdn.prismic.io/ulaman/ZnDvD5m069VX10t2_spa.mp4",
    type: "video/mp4",
  },
  {
    src: "https://ulaman.cdn.prismic.io/ulaman/ZnDvnJm069VX10uC_spa.webm",
    type: "video/webm",
  },
] as const;

const POSTER =
  "https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export function TextBehindImageSlice() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameRef = useRef<number | undefined>(undefined);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 1;
      const totalScrollable = rect.height + windowHeight;
      const progress = clamp((windowHeight - rect.top) / totalScrollable);

      setScrollProgress(progress);
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

  const handlePlay = useCallback(() => {
    if (!videoRef.current) {
      return;
    }

    const playPromise = videoRef.current.play();
    if (playPromise) {
      playPromise.catch(() => {
        /* safari/autoplay safeguards – ignore */
      });
    }
    setIsExpanded(true);
  }, []);

  const handleVideoKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handlePlay();
      }
    },
    [handlePlay],
  );

  const bannerOffsets = BANNER_WORDS.map((_, index) => {
    const direction = index === 0 ? 1 : -1;
    return direction * scrollProgress * 50;
  });

  const containerClasses = cn(
    "relative flex items-center justify-center overflow-hidden transition-all duration-1000",
    isExpanded
      ? "h-[90vw] w-full max-w-full rounded-none px-10 sm:h-[74vw] xl:h-[49vw]"
      : "h-[90vw] max-w-[65vw] rounded-t-[500px] sm:h-[74vw] sm:max-w-[53vw] xl:h-[49vw] xl:max-w-[37vw]",
  );

  return (
    <section
      ref={sectionRef}
      data-slice-type="text_behind_image"
      data-slice-variation="video"
      className="relative flex items-center justify-center overflow-hidden"
    >
      <ul className="absolute inset-0 z-0 flex h-full w-full flex-col justify-center gap-8">
        {BANNER_WORDS.map((word, index) => (
          <li
            key={word}
            className="flex min-w-full justify-center whitespace-nowrap text-90 font-brand leading-none text-brand opacity-10 sm:text-120 lg:text-150 xl:text-206"
            style={{
              transform: `translateX(${bannerOffsets[index]}%)`,
              transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            aria-hidden="true"
          >
            {word}
          </li>
        ))}
      </ul>

      <div
        role="button"
        tabIndex={0}
        onClick={handlePlay}
        onKeyDown={handleVideoKeyDown}
        className="relative z-10 w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        aria-pressed={isExpanded}
        aria-label="Play Riverside Spa video"
      >
        <div className="flex justify-center">
          <div className={containerClasses}>
            <div className="relative aspect-[18/10] h-full w-full">
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                poster={POSTER}
                preload="auto"
                controls={isExpanded}
                className="h-full w-full rounded-lg object-cover"
                onPlay={() => setIsExpanded(true)}
              >
                {VIDEO_SOURCES.map((source) => (
                  <source key={source.src} src={source.src} type={source.type} />
                ))}
                <img src={POSTER} alt="Riverside spa pavilion" loading="lazy" />
              </video>
            </div>

            {!isExpanded ? (
              <div className="badge absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-brand-lighter/60 px-4 py-2 text-large text-light shadow-xl backdrop-blur">
                <span className="inline-block aspect-square w-2.5 rounded-full bg-current" />
                <span>Play Video</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
