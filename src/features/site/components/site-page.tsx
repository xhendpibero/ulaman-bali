"use client";

import { Suspense } from "react";

import { ArchitectureMediaSlice } from "@/features/site/components/architecture-media-slice";
import { CallToActionSlice } from "@/features/site/components/call-to-action-slice";
import { CommonArticleSection } from "@/features/site/components/common-article-section";
import { CurtainRevealSlice } from "@/features/site/components/curtain-reveal-slice";
import { ExperiencesCollageSlice } from "@/features/site/components/experiences-collage-slice";
import { ExperiencesScheduleSlice } from "@/features/site/components/experiences-schedule-slice";
import { ImagePanelSlice } from "@/features/site/components/image-panel-slice";
import { ImageVideoSlice } from "@/features/site/components/image-video-slice";
import { MapOfUlamanSlice } from "@/features/site/components/map-of-ulaman-slice";
import { PackagesCarouselSlice } from "@/features/site/components/packages-carousel-slice";
import { ReviewsSectionSlice } from "@/features/site/components/reviews-section-slice";
import { RoomTypesCarouselSlice } from "@/features/site/components/room-types-carousel-slice";
import { ScrollHighlightingCta } from "@/features/site/components/scroll-highlighting-cta";
import { SiteFooter } from "@/features/site/components/site-footer";
import { SiteHeader } from "@/features/site/components/site-header";
import { TextBehindImageSlice } from "@/features/site/components/text-behind-image-slice";
import { useArticleSlides } from "@/features/site/queries/article-slides";
import { useMapBasePoints } from "@/features/site/queries/map-base-points";
import { useSiteContent } from "@/features/site/queries/site-content";

export function SitePage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <SitePageContent />
    </Suspense>
  );
}

function SitePageContent() {
  const { data } = useSiteContent();
  const { data: articleSlides } = useArticleSlides();
  const { data: baseMapPoints } = useMapBasePoints();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-stone-950 to-black">
      <SiteHeader navigation={data.navigation} siteName={data.meta.siteName} />
      <main className="flex flex-col">
        <div
          id="smooth-wrapper"
          style={{
            inset: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <div
            id="smooth-content"
            style={{
              rotate: "none",
              scale: "none",
              transform:
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
              boxSizing: "border-box",
              width: "100%",
              overflow: "visible",
            }}
          >
            <div>
              <div className="space-y-36 sm:space-y-28 lg:space-y-40 xl:space-y-36">
                <ImageVideoSlice />
                <ScrollHighlightingCta />
                <CommonArticleSection slides={articleSlides} />
                <RoomTypesCarouselSlice />
                <ScrollHighlightingCta />
                <ArchitectureMediaSlice />
                <PackagesCarouselSlice />
                <CurtainRevealSlice />
                <TextBehindImageSlice />
                <ScrollHighlightingCta />
                <ImagePanelSlice />
                <MapOfUlamanSlice basePoints={baseMapPoints} />
                <ReviewsSectionSlice />
                <ExperiencesCollageSlice />
                <ExperiencesScheduleSlice />
                <CallToActionSlice />
                {/* <LandingFooterSlice /> */}
              </div>

              <SiteFooter footer={data.footer} social={data.meta.social} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function PageSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-stone-500">
      Loading the retreat experience...
    </div>
  );
}
