"use client";

import type { ExperienceHighlight } from "@/types/site";

type HighlightsGridProps = {
  highlights: ExperienceHighlight[];
};

const iconMap: Record<string, string> = {
  leaf: "🌿",
  spark: "⚡️",
  wave: "🌊",
};

export function HighlightsGrid({ highlights }: HighlightsGridProps) {
  return (
    <section
      id="wellness"
      className="bg-stone-950 pb-24 pt-10 sm:pt-12"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {highlights.map((highlight) => (
          <article
            key={highlight.id}
            className="rounded-3xl border border-stone-800 bg-stone-900/60 p-8 transition duration-300 hover:-translate-y-1 hover:border-stone-700 hover:bg-stone-900"
          >
            <div className="text-3xl">{iconMap[highlight.icon] ?? "✨"}</div>
            <h3 className="mt-4 text-lg font-semibold uppercase tracking-[0.22em]">
              {highlight.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-300">
              {highlight.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

