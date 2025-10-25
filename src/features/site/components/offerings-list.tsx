"use client";

import Image from "next/image";

import type { Offering } from "@/types/site";

type OfferingsListProps = {
  offerings: Offering[];
};

export function OfferingsList({ offerings }: OfferingsListProps) {
  return (
    <section
      id="residences"
      className="bg-stone-950 py-24"
      aria-labelledby="offerings-heading"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.44em] text-stone-400">
            RESIDENCES & EXPERIENCES
          </span>
          <h2
            id="offerings-heading"
            className="text-3xl font-light uppercase tracking-[0.16em] text-white sm:text-4xl"
          >
            Crafted for the rhythm of the jungle
          </h2>
        </div>
        <div className="grid gap-10">
          {offerings.map((offering) => (
            <article
              key={offering.id}
              className="grid gap-8 rounded-3xl border border-stone-900 bg-stone-900/50 p-6 transition duration-300 hover:border-stone-700 hover:bg-stone-900 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:p-10"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={offering.image.src}
                  alt={offering.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-5">
                <span className="inline-flex w-fit rounded-full border border-stone-700 px-4 py-1 text-xs uppercase tracking-[0.3em] text-stone-300">
                  {offering.tag}
                </span>
                <h3 className="text-2xl font-medium uppercase tracking-[0.12em] text-white">
                  {offering.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-300">
                  {offering.description}
                </p>
                <ul className="space-y-2 text-sm text-stone-200">
                  {offering.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1 text-stone-400">
                        —
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-200">
                  {offering.startingRate}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

