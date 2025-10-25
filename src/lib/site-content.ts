import siteContent from "@/data/site.json";
import type { SiteContent } from "@/types/site";

export async function loadSiteContent(): Promise<SiteContent> {
  // In a future iteration this can be replaced with a CMS/API call.
  return siteContent as SiteContent;
}

