"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { ParallaxSlice as ParallaxSliceType } from "@/types/site";

type ParallaxSlicesProps = {
  slices: ParallaxSliceType[];
};

export function ParallaxSlices({ slices }: ParallaxSlicesProps) {
  return (
    <section
      id="experiences"
      className="relative flex flex-col gap-24 bg-stone-950 py-24"
    >
      {slices.map((slice) => (
        <ParallaxSlice key={slice.id} slice={slice} />
      ))}
    </section>
  );
}

function ParallaxSlice({ slice }: { slice: ParallaxSliceType }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || 1;
      const progress =
        1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

      setOffset(progress * slice.depth);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slice.depth]);

  return (
    <article
      ref={ref}
      className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8"
    >
      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.44em] text-stone-400">
          {slice.subtitle}
        </span>
        <h2 className="text-3xl font-light uppercase tracking-[0.12em] text-white sm:text-4xl">
          {slice.title}
        </h2>
        <p className="text-base leading-relaxed text-stone-300">
          {slice.copy}
        </p>
      </div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-stone-900 shadow-2xl">
        <Image
          src={slice.media.src}
          alt={slice.media.alt}
          fill
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-out"
          style={{
            transform: `translateY(${offset * 0.6}px)`,
          }}
        >
          <div className="h-full w-full bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </article>
  );
}



