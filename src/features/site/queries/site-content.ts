import {
  queryOptions,
  useSuspenseQuery,
} from "@tanstack/react-query";

import { fetchSiteContent } from "@/features/site/services/fetch-site-content";
import type { SiteContent } from "@/types/site";

export const siteContentQueryKey = ["site-content"] as const;

export const siteContentQueryOptions = () =>
  queryOptions<SiteContent>({
    queryKey: siteContentQueryKey,
    queryFn: fetchSiteContent,
  });

export const useSiteContent = () =>
  useSuspenseQuery(siteContentQueryOptions());




