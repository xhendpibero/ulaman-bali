import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import {
  fetchArticleSlides,
  type ArticleSlide,
} from "@/features/site/services/fetch-article-slides";

export const articleSlidesQueryKey = ["article-slides"] as const;

export const articleSlidesQueryOptions = () =>
  queryOptions<ReadonlyArray<ArticleSlide>>({
    queryKey: articleSlidesQueryKey,
    queryFn: fetchArticleSlides,
  });

export const useArticleSlides = () =>
  useSuspenseQuery(articleSlidesQueryOptions());

