import { QueryClient, dehydrate } from "@tanstack/react-query";

import { SitePageHydrator } from "@/features/site/components/site-page-hydrator";
import { articleSlidesQueryOptions } from "@/features/site/queries/article-slides";
import { mapBasePointsQueryOptions } from "@/features/site/queries/map-base-points";
import { siteContentQueryOptions } from "@/features/site/queries/site-content";
import { loadSiteContent } from "@/lib/site-content";

export default async function Home() {
  const queryClient = new QueryClient();
  const content = await loadSiteContent();

  queryClient.setQueryData(
    siteContentQueryOptions().queryKey,
    content,
  );

  await queryClient.prefetchQuery(articleSlidesQueryOptions());
  await queryClient.prefetchQuery(mapBasePointsQueryOptions());

  return (
    <SitePageHydrator state={dehydrate(queryClient)} />
  );
}
