"use client";

import { cn } from "@/lib/utils";
import type { HeroSection as HeroSectionType } from "@/types/site";

type HeroSectionProps = {
  hero: HeroSectionType;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      id={hero.id}
      className="relative flex min-h-[90vh] flex-col justify-end overflow-hidden bg-black pt-24"
    >
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          poster={hero.video.poster}
          playsInline
          autoPlay
          muted
          loop
          preload="metadata"
        >
          {hero.video.sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-20 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold tracking-[0.48em] text-stone-200/80">
          {hero.eyebrow}
        </span>
        <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-end">
          <div className="space-y-5">
            <h1 className="text-4xl font-light uppercase leading-tight tracking-[0.08em] text-white sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="text-lg text-stone-200 sm:text-xl">
              {hero.subheadline}
            </p>
            <p className="max-w-2xl text-base text-stone-300">
              {hero.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={cn(
                    "rounded-full border px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] transition duration-300",
                    cta.variant === "primary"
                      ? "border-white bg-white text-black hover:bg-stone-200"
                      : "border-stone-200/50 text-stone-200 hover:border-white hover:text-white",
                  )}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
          <dl className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <DataPoint label="Location" value={hero.meta.location} />
            <DataPoint label="Coordinates" value={hero.meta.coordinates} />
            <DataPoint label="Climate" value={hero.meta.weatherTagline} />
          </dl>
        </div>
      </div>
    </section>
  );
}

function DataPoint({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="space-y-2">
      <dt className="text-xs tracking-[0.3em] text-stone-300 uppercase">
        {label}
      </dt>
      <dd className="text-base font-medium text-white">{value}</dd>
    </div>
  );
}

