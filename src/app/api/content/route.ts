import { NextResponse } from "next/server";

import { loadSiteContent } from "@/lib/site-content";

export async function GET() {
  const content = await loadSiteContent();
  return NextResponse.json(content);
}
