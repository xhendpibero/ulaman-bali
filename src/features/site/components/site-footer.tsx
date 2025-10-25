"use client";

import Link from "next/link";

import type { SiteContent } from "@/types/site";

type SiteFooterProps = {
  footer: SiteContent["footer"];
  social: SiteContent["meta"]["social"];
};

export function SiteFooter({ footer, social }: SiteFooterProps) {
  return (
    <footer
      id="contact"
      className="border-t border-stone-900 bg-black py-16 text-stone-300"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[2fr_3fr]">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-[0.28em] text-white">
              Stay Connected
            </h3>
            <p className="text-sm text-stone-400">
              Join the regenerative travel community for retreat unveilings,
              seasonal rituals, and architectural stories.
            </p>
            <div className="flex flex-wrap gap-4">
              {social.map((item) => (
                <Link
                  key={item.platform}
                  href={item.href}
                  className="rounded-full border border-stone-800 px-4 py-2 text-xs uppercase tracking-[0.28em] text-stone-200 transition hover:border-white hover:text-white"
                >
                  {item.platform}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footer.sections.map((section) => (
              <div key={section.title} className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="transition hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-stone-900 pt-8 text-xs uppercase tracking-[0.3em] text-stone-500">
          <p className="text-[0.7rem]">{footer.legal}</p>
          <p className="mt-2 text-[0.7rem]">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

