"use client";

import { HydrationBoundary } from "@tanstack/react-query";
import type { DehydratedState } from "@tanstack/react-query";

import { SitePage } from "@/features/site/components/site-page";

type SitePageHydratorProps = {
  state: DehydratedState;
};

export function SitePageHydrator({ state }: SitePageHydratorProps) {
  return (
    <HydrationBoundary state={state}>
      <SitePage />
    </HydrationBoundary>
  );
}
