import { loadSiteContent } from "@/lib/site-content";
import type { SiteContent } from "@/types/site";

const API_ENDPOINT = "/api/content";

export async function fetchSiteContent(): Promise<SiteContent> {
  if (typeof window === "undefined") {
    return loadSiteContent();
  }

  const response = await fetch(API_ENDPOINT, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Unable to fetch site content");
  }

  return (await response.json()) as SiteContent;
}


