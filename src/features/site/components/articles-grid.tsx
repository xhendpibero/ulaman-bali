"use client";

import Image from "next/image";
import Link from "next/link";

import type { Article } from "@/types/site";

type ArticlesGridProps = {
  articles: Article[];
};

export function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <section
      id="stories"
      className="bg-stone-950 py-24"
      aria-labelledby="stories-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 pb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.44em] text-stone-400">
            EDITORIAL JOURNAL
          </span>
          <h2
            id="stories-heading"
            className="text-3xl font-light uppercase tracking-[0.16em] text-white sm:text-4xl"
          >
            Stories from the retreat
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-stone-900 bg-stone-900/60 transition duration-300 hover:-translate-y-1 hover:border-stone-700 hover:bg-stone-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-stone-400">
                  <span>{article.category}</span>
                  <span>{article.readingTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white transition group-hover:text-stone-200">
                  {article.title}
                </h3>
                <p className="text-sm text-stone-300">{article.excerpt}</p>
                <span className="mt-auto text-xs font-semibold uppercase tracking-[0.3em] text-stone-200">
                  Read Story →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
