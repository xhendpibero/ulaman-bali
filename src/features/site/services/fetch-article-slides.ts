import { fetchJsonBinRecord } from "@/lib/http/jsonbin";

export type ArticleSlide = {
  src: string;
  alt: string;
  loading: "eager" | "lazy";
};

const ARTICLE_SLIDES_BIN_URL =
  "https://api.jsonbin.io/v3/b/68fd7773ae596e708f2ce8ad";

export async function fetchArticleSlides(): Promise<ReadonlyArray<ArticleSlide>> {
  return fetchJsonBinRecord<ReadonlyArray<ArticleSlide>>(ARTICLE_SLIDES_BIN_URL);
}

