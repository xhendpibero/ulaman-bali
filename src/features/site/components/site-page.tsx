"use client";

import { Suspense } from "react";

// import { ArticlesGrid } from "@/features/site/components/articles-grid";
// import { HeroSection } from "@/features/site/components/hero-section";
// import { HighlightsGrid } from "@/features/site/components/highlights-grid";
// import { OfferingsList } from "@/features/site/components/offerings-list";
// import { ParallaxSlices } from "@/features/site/components/parallax-slices";
import { SiteFooter } from "@/features/site/components/site-footer";
import { SiteHeader } from "@/features/site/components/site-header";
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
            position: "fixed",
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
            <main>
              <div className="space-y-36 sm:space-y-28 lg:space-y-40 xl:space-y-36">
                <section
                  data-slice-type="image_video_slice"
                  data-slice-variation="video"
                >
                  <div className="rounded-none relative">
                    <div className="aspect-screen w-full">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 z-10 pointer-events-none"></div>
                      <div className="flex items-center justify-center overflow-hidden relative w-full h-full">
                        <iframe
                          id="playerpqkVOxt7Tk4"
                          className="pointer-events-none absolute"
                          frameBorder="0"
                          allowFullScreen={false}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          title="Ulaman"
                          width="2126.222222222222"
                          height="1196"
                          src="https://www.youtube.com/embed/pqkVOxt7Tk4?enablejsapi=1&amp;autoplay=0&amp;loop=1&amp;controls=0&amp;rel=0&amp;playlist=pqkVOxt7Tk4&amp;vq=hd1440&amp;origin=https%3A%2F%2Fulamanbali.com&amp;widgetid=1&amp;forigin=https%3A%2F%2Fulamanbali.com%2F&amp;aoriginsup=1&amp;vf=3"
                        ></iframe>
                        <div
                          className="w-full h-full bg-light absolute top-0 left-0"
                          style={{ display: "none" }}
                        >
                          <img
                            src="https://images.prismic.io/ulaman/ZiO2APPdc1huKpxk_eco-resort-bali.jpg?auto=format,compress"
                            alt="“Experience sustainable luxury amidst Bali’s lush jungle at Ulaman Eco Luxury Retreat #EcoLuxury"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  data-slice-type="call_to_action"
                  data-slice-variation="scrollHighlighting"
                  className="app-container"
                >
                  <div className="space-y-5 mx-auto sm:space-y-6 xl:space-y-5 max-w-[38rem] xl:max-w-[44rem]">
                    <div
                      className="text-center space-y-em"
                      id="cta-1-text-block"
                    >
                      <h2 className="heading display-2">
                        <div
                          className="bg-clip-text gradient bg-left bg-[length:200%] text-transparent"
                          style={{
                            display: "block",
                            textAlign: "center",
                            position: "relative",
                            backgroundPosition: "55.2168% 0%",
                          }}
                        >
                          Nestled among the rice fields and{" "}
                        </div>
                        <div
                          className="bg-clip-text gradient bg-left bg-[length:200%] text-transparent"
                          style={{
                            display: "block",
                            textAlign: "center",
                            position: "relative",
                            backgroundPosition: "100% 0%",
                          }}
                        >
                          coconut trees of Tabanan, Ulaman{" "}
                        </div>
                        <div
                          className="bg-clip-text gradient bg-left bg-[length:200%] text-transparent"
                          style={{
                            display: "block",
                            textAlign: "center",
                            position: "relative",
                            backgroundPosition: "100% 0%",
                          }}
                        >
                          is only 20 minutes away from the{" "}
                        </div>
                        <div
                          className="bg-clip-text gradient bg-left bg-[length:200%] text-transparent"
                          style={{
                            display: "block",
                            textAlign: "center",
                            position: "relative",
                            backgroundPosition: "100% 0%",
                          }}
                        >
                          vibrant town of Canggu.
                        </div>
                      </h2>
                    </div>
                  </div>
                </section>
                <section
                  data-slice-type="common_article_section"
                  data-slice-variation="default"
                  className="app-container"
                >
                  <div className="sm:flex-row flex-col flex gap-10 sm:items-center sm:gap-11 lg:justify-between lg:gap-20 xl:gap-32">
                    <div className="w-full xl:max-w-lg items-center">
                      <div className="sm:aspect-[10/14] aspect-[10/13]">
                        <figure className="relative group w-full h-full object-cover rounded-asymetrical border-none overflow-hidden">
                          <div className="rounded-inherit">
                            <div className="absolute inset-0 flex justify-center rounded-inherit">
                              <div className="w-full h-full rounded-inherit overflow-hidden">
                                <img
                                  src="https://images.prismic.io/ulaman/Zpcs2R5LeNNTxOAv_ulaman.jpg?auto=format,compress"
                                  alt="Ulaman Bali"
                                  className="w-full h-full object-cover rounded-inherit"
                                  loading="lazy"
                                />
                              </div>
                              <div
                                style={{ display: "none" }}
                                className="w-full h-full rounded-inherit overflow-hidden"
                              >
                                <img
                                  src="https://images.prismic.io/ulaman/ZotMNx5LeNNTw4r1_ulaman.jpg?auto=format,compress"
                                  alt="The Best Infinity Pool at Sunset Time in Bali"
                                  className="w-full h-full object-cover rounded-inherit"
                                  loading="eager"
                                />
                              </div>
                              <div
                                style={{ display: "none" }}
                                className="w-full h-full rounded-inherit overflow-hidden"
                              >
                                <img
                                  src="https://images.prismic.io/ulaman/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg?auto=format,compress"
                                  alt="Ice Bath and Hot Bath at Riverside Spa"
                                  className="w-full h-full object-cover rounded-inherit"
                                  loading="lazy"
                                />
                              </div>

                              <nav className="absolute bottom-5 flex inset-x-3.5 items-center justify-between">
                                <button
                                  className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 rotate-180 bg-dark text-light"
                                  disabled={false}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-move-right-icon w-6 stroke-1"
                                  >
                                    <path d="M18 8L22 12L18 16"></path>
                                    <path d="M2 12H22"></path>
                                  </svg>
                                </button>
                                <nav>
                                  <ul className="flex gap-2">
                                    <li className="rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                    <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                    <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                  </ul>
                                </nav>
                                <button
                                  className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 bg-dark text-light"
                                  id="tprrd6"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-move-right-icon w-6 stroke-1"
                                  >
                                    <path d="M18 8L22 12L18 16"></path>
                                    <path d="M2 12H22"></path>
                                  </svg>
                                </button>
                              </nav>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div className="w-full xl:max-w-xl relative">
                      <div className="space-y-9 lg:space-y-5 xl:space-y-9 prose:p:max-w-md">
                        <h5 className="heading display-5">
                          <div>An award-winning eco-luxury resort </div>
                          <div>offering a unique hideaway experience. </div>
                          <div>Embrace authenticity, balance, and </div>
                          <div>harmony with nature in a healing, </div>
                          <div>luxurious environment.</div>
                        </h5>
                        <p>
                          We believe nature and luxury can coexist. Ulaman Eco
                          Luxury Resort offers{" "}
                          <em>
                            a secluded, lush haven with luxurious amenities and
                            impeccable service
                          </em>
                          . Immerse yourself in traditional Balinese culture and
                          leave feeling renewed, all while minimizing your
                          ecological footprint. Recharge your mind, body, and
                          soul in this unique holistic retreat.
                        </p>
                        <p>
                          <a
                            href="/about"
                            className="rich-text-link text-brand inline-block"
                            data-path="/about"
                          >
                            <span className="inline-block btn-primary ui-underline-anim reverse">
                              About Us
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="space-y-10 sm:space-y-11 lg:space-y-16"
                  data-slice-type="room_types_carousel"
                  data-slice-variation="withTitle"
                >
                  <header className="app-container">
                    <div className="space-y-5 mx-auto sm:space-y-6 xl:space-y-5 max-w-[31.25rem] lg:max-w-[40rem]">
                      <div
                        className="text-center space-y-em"
                        id="undefinedcta-title3-text-block"
                      >
                        <h4 className="heading display-4">
                          <div>Discover cozy elegance, where tranquility </div>
                          <div>meets Bali’s serene beauty.</div>
                        </h4>
                      </div>
                    </div>
                  </header>
                  <section className="sm:app-container sm:max-w-unset !pr-0">
                    <div
                      className="relative flex outline-none sm:gap-9 lg:gap-20 2xl:gap-52"
                      role="region"
                      aria-roledescription="carousel"
                    >
                      <nav className="pt-32 lg:pt-52 hidden sm:block">
                        <nav className="flex gap-5 sm:gap-3.5 lg:gap-6 flex-col text-brand">
                          <button
                            className="touch-manipulation p-0 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed static w-16 lg:w-20"
                            id="qn2ppi"
                            disabled={false}
                          >
                            <div className="aspect-square border-current border rounded w-full flex items-center justify-center rotate-180">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-move-right-icon w-7 stroke-1"
                              >
                                <path d="M18 8L22 12L18 16"></path>
                                <path d="M2 12H22"></path>
                              </svg>
                            </div>
                          </button>
                          <button
                            className="touch-manipulation p-0 text-brand disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed static w-16 lg:w-20"
                            id="m32j3"
                          >
                            <div className="aspect-square border-current border rounded w-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-move-right-icon w-7 stroke-1"
                              >
                                <path d="M18 8L22 12L18 16"></path>
                                <path d="M2 12H22"></path>
                              </svg>
                            </div>
                          </button>
                        </nav>
                      </nav>
                      <div className="flex-1 overflow-hidden">
                        <div className="overflow-hidden">
                          <div className="flex -ml-4 sm:dir-ltr">
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 pl-4 basis-auto group sm:pl-7 last:pr-6 pb-1"
                            >
                              <a href="/rooms/floating-lake" className="">
                                <article className="-mr-7 pl-6 group-last:pr-6 sm:mr-0 sm:p-0">
                                  <div className="w-88 space-y-4 lg:w-112">
                                    <figure className="relative group aspect-[10/14] rounded-md overflow-hidden xl:aspect-[10/13]">
                                      <div className="rounded-inherit">
                                        <div className="absolute inset-0 flex justify-center rounded-inherit">
                                          <div className="w-full h-full rounded-inherit overflow-hidden">
                                            <img
                                              src="https://images.prismic.io/ulaman/ZjNQMkMTzAJOCfIQ_best-resort-ulaman.jpg?auto=format,compress"
                                              alt="lake villa drone shot"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/Zlbe8aWtHYXtT4Qk_lakevillabali.jpg?auto=format,compress"
                                              alt="bathroom lake villa"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="eager"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/Zlbe8KWtHYXtT4Qj_lakevilla2.jpg?auto=format,compress"
                                              alt="lake villa from inside"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>

                                          <nav className="absolute bottom-5 flex inset-x-3.5 items-center justify-between">
                                            <button
                                              className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 rotate-180 bg-dark text-light"
                                              disabled={false}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                            <nav>
                                              <ul className="flex gap-2">
                                                <li className="rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                              </ul>
                                            </nav>
                                            <button
                                              className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 bg-dark text-light"
                                              id="auyn3"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                          </nav>
                                        </div>
                                      </div>
                                    </figure>
                                    <footer className="space-y-4">
                                      <header className="space-y-2.5 lg:space-y-3.5">
                                        <h3 className="display-5 leading-tight">
                                          Floating Lake
                                        </h3>
                                        <div className="pr-4 xl:pr-20 mt-3">
                                          <p>
                                            A <em>luxurious</em>{" "}
                                            <em>floating villa </em>on Ulaman's
                                            bio-filtered lake.
                                          </p>
                                        </div>
                                      </header>
                                      <nav>
                                        <span className="ui-underline-anim reverse btn-primary capitalize">
                                          Discover
                                        </span>
                                      </nav>
                                    </footer>
                                  </div>
                                </article>
                              </a>
                            </div>
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 pl-4 basis-auto group sm:pl-7 last:pr-6 pb-1"
                            >
                              <a href="/rooms/cocoon-jungle" className="">
                                <article className="-mr-7 pl-6 group-last:pr-6 sm:mr-0 sm:p-0">
                                  <div className="w-88 space-y-4 lg:w-112">
                                    <figure className="relative group aspect-[10/14] rounded-md overflow-hidden xl:aspect-[10/13]">
                                      <div className="rounded-inherit">
                                        <div className="absolute inset-0 flex justify-center rounded-inherit">
                                          <div className="w-full h-full rounded-inherit overflow-hidden">
                                            <img
                                              src="https://images.prismic.io/ulaman/ZjHaf0MTzAJOCdga_ulaman-eco-retreat.jpg?auto=format,compress"
                                              alt="cocoon upper deluxe"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/ZjeopEMTzAJOCiqz_resorts-bali.jpg?auto=format,compress"
                                              alt="couple sitting on balcony of cocoon"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="eager"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/ZjeookMTzAJOCiqx_hotel-indonesia.jpg?auto=format,compress"
                                              alt="inside of cocoon upper deluxe"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/ZjHZjEMTzAJOCdgU_ulaman.jpg?auto=format,compress"
                                              alt="cocoon bathroom"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>

                                          <nav className="absolute bottom-5 flex inset-x-3.5 items-center justify-between">
                                            <button
                                              className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 rotate-180 bg-dark text-light"
                                              disabled={false}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                            <nav>
                                              <ul className="flex gap-2">
                                                <li className="rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                              </ul>
                                            </nav>
                                            <button
                                              className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 bg-dark text-light"
                                              id="36rtrn"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                          </nav>
                                        </div>
                                      </div>
                                    </figure>
                                    <footer className="space-y-4">
                                      <header className="space-y-2.5 lg:space-y-3.5">
                                        <h3 className="display-5 leading-tight">
                                          Cocoon Jungle
                                        </h3>
                                        <div className="pr-4 xl:pr-20 mt-3">
                                          <p>
                                            Indulge in an unparalleled
                                            <em>
                                              {" "}
                                              blend of exotic elegance and
                                              coziness.
                                            </em>
                                          </p>
                                        </div>
                                      </header>
                                      <nav>
                                        <span className="ui-underline-anim reverse btn-primary capitalize">
                                          Discover
                                        </span>
                                      </nav>
                                    </footer>
                                  </div>
                                </article>
                              </a>
                            </div>
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 pl-4 basis-auto group sm:pl-7 last:pr-6 pb-1"
                            >
                              <a href="/rooms/avatar-tree-house" className="">
                                <article className="-mr-7 pl-6 group-last:pr-6 sm:mr-0 sm:p-0">
                                  <div className="w-88 space-y-4 lg:w-112">
                                    <figure className="relative group aspect-[10/14] rounded-md overflow-hidden xl:aspect-[10/13]">
                                      <div className="rounded-inherit">
                                        <div className="absolute inset-0 flex justify-center rounded-inherit">
                                          <div className="w-full h-full rounded-inherit overflow-hidden">
                                            <img
                                              src="https://images.prismic.io/ulaman/Zpct2h5LeNNTxOAy_skyvilla.jpg?auto=format,compress"
                                              alt="skyvilla"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/ZjejSkMTzAJOCioK_bali-hotels.jpg?auto=format,compress"
                                              alt="inside the room of sky villa"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/ZlbjEqWtHYXtT4TY_skyvillabathroom.jpg?auto=format,compress"
                                              alt="sky villa bathroom"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>

                                          <nav className="absolute bottom-5 flex inset-x-3.5 items-center justify-between">
                                            <button
                                              className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 rotate-180 bg-dark text-light"
                                              disabled={false}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                            <nav>
                                              <ul className="flex gap-2">
                                                <li className="rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                              </ul>
                                            </nav>
                                            <button className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 bg-dark text-light">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                          </nav>
                                        </div>
                                      </div>
                                    </figure>
                                    <footer className="space-y-4">
                                      <header className="space-y-2.5 lg:space-y-3.5">
                                        <h3 className="display-5 leading-tight">
                                          Avatar Tree House
                                        </h3>
                                        <div className="pr-4 xl:pr-20 mt-3">
                                          <p>
                                            Experience luxury in an{" "}
                                            <em>avatar-inspired </em>sky villa
                                            with 180° views.
                                          </p>
                                        </div>
                                      </header>
                                      <nav>
                                        <span className="ui-underline-anim reverse btn-primary capitalize">
                                          Discover
                                        </span>
                                      </nav>
                                    </footer>
                                  </div>
                                </article>
                              </a>
                            </div>
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 pl-4 basis-auto group sm:pl-7 last:pr-6 pb-1"
                            >
                              <a
                                href="/rooms/grand-lagoon-private-pool"
                                className=""
                              >
                                <article className="-mr-7 pl-6 group-last:pr-6 sm:mr-0 sm:p-0">
                                  <div className="w-88 space-y-4 lg:w-112">
                                    <figure className="relative group aspect-[10/14] rounded-md overflow-hidden xl:aspect-[10/13]">
                                      <div className="rounded-inherit">
                                        <div className="absolute inset-0 flex justify-center rounded-inherit">
                                          <div className="w-full h-full rounded-inherit overflow-hidden">
                                            <img
                                              src="https://images.prismic.io/ulaman/ZpH1_h5LeNNTxIQh_grand-lagoon.jpg?auto=format,compress"
                                              alt="grand-lagoon"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/Zj16UkMTzAJOCrGd_hotels-in-bali.jpg?auto=format,compress"
                                              alt="grand lagoon villa drone shot"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/Zj16TkMTzAJOCrGY_eco-luxury-resort-indonesia.jpg?auto=format,compress"
                                              alt="the living area of grand lagoon"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/Zoor6h5LeNNTw3wE_ulaman.jpg?auto=format,compress"
                                              alt="grand-lagoon"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>

                                          <nav className="absolute bottom-5 flex inset-x-3.5 items-center justify-between">
                                            <button
                                              className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 rotate-180 bg-dark text-light"
                                              disabled={false}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                            <nav>
                                              <ul className="flex gap-2">
                                                <li className="rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                              </ul>
                                            </nav>
                                            <button className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 bg-dark text-light">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                          </nav>
                                        </div>
                                      </div>
                                    </figure>
                                    <footer className="space-y-4">
                                      <header className="space-y-2.5 lg:space-y-3.5">
                                        <h3 className="display-5 leading-tight">
                                          Grand Lagoon Private Pool
                                        </h3>
                                        <div className="pr-4 xl:pr-20 mt-3">
                                          <p>
                                            Indulge in an{" "}
                                            <em>exclusive riverside villa </em>
                                            with jungle lagoon view.
                                          </p>
                                        </div>
                                      </header>
                                      <nav>
                                        <span className="ui-underline-anim reverse btn-primary capitalize">
                                          Discover
                                        </span>
                                      </nav>
                                    </footer>
                                  </div>
                                </article>
                              </a>
                            </div>
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 pl-4 basis-auto group sm:pl-7 last:pr-6 pb-1"
                            >
                              <a href="/rooms/jungle-garden-pool" className="">
                                <article className="-mr-7 pl-6 group-last:pr-6 sm:mr-0 sm:p-0">
                                  <div className="w-88 space-y-4 lg:w-112">
                                    <figure className="relative group aspect-[10/14] rounded-md overflow-hidden xl:aspect-[10/13]">
                                      <div className="rounded-inherit">
                                        <div className="absolute inset-0 flex justify-center rounded-inherit">
                                          <div className="w-full h-full rounded-inherit overflow-hidden">
                                            <img
                                              src="https://images.prismic.io/ulaman/Zj2YskMTzAJOCrKK_eco-luxury-resort-indonesia.jpg?auto=format,compress"
                                              alt="romantic dinner outside of the room"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/Zj2WyUMTzAJOCrJ8_eco-resort-bali.jpg?auto=format,compress"
                                              alt="villa wide-angle inside"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/ZpHttR5LeNNTxIQb_flower-bath.jpg?auto=format,compress"
                                              alt="flower-bath"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>

                                          <nav className="absolute bottom-5 flex inset-x-3.5 items-center justify-between">
                                            <button
                                              className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 rotate-180 bg-dark text-light"
                                              disabled={false}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                            <nav>
                                              <ul className="flex gap-2">
                                                <li className="rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                              </ul>
                                            </nav>
                                            <button className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 bg-dark text-light">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                          </nav>
                                        </div>
                                      </div>
                                    </figure>
                                    <footer className="space-y-4">
                                      <header className="space-y-2.5 lg:space-y-3.5">
                                        <h3 className="display-5 leading-tight">
                                          Jungle Garden Pool
                                        </h3>
                                        <div className="pr-4 xl:pr-20 mt-3">
                                          <p>
                                            An{" "}
                                            <em>
                                              ultimate private pool retreat
                                            </em>{" "}
                                            at Ulaman.
                                          </p>
                                        </div>
                                      </header>
                                      <nav>
                                        <span className="ui-underline-anim reverse btn-primary capitalize">
                                          Discover
                                        </span>
                                      </nav>
                                    </footer>
                                  </div>
                                </article>
                              </a>
                            </div>
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 pl-4 basis-auto group sm:pl-7 last:pr-6 pb-1"
                            >
                              <a href="/rooms/ulin-poolside" className="">
                                <article className="-mr-7 pl-6 group-last:pr-6 sm:mr-0 sm:p-0">
                                  <div className="w-88 space-y-4 lg:w-112">
                                    <figure className="relative group aspect-[10/14] rounded-md overflow-hidden xl:aspect-[10/13]">
                                      <div className="rounded-inherit">
                                        <div className="absolute inset-0 flex justify-center rounded-inherit">
                                          <div className="w-full h-full rounded-inherit overflow-hidden">
                                            <img
                                              src="https://images.prismic.io/ulaman/Zlfnx6WtHYXtT6xP_ecoresort-bali.jpg?auto=format,compress"
                                              alt="inside of deluxe room from the back"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/ZlfnxaWtHYXtT6xN_eco-retreat.jpg?auto=format,compress"
                                              alt="deluxe room bathroom"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/ZpH8iR5LeNNTxIQk_ulaman.jpg?auto=format,compress"
                                              alt="deluxe room from the outside"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>
                                          <div
                                            style={{ display: "none" }}
                                            className="w-full h-full rounded-inherit overflow-hidden"
                                          >
                                            <img
                                              src="https://images.prismic.io/ulaman/ZlfnyaWtHYXtT6xR_luxury-eco-resort-bali.jpg?auto=format,compress"
                                              alt="inside of deluxe room"
                                              className="w-full h-full object-cover rounded-inherit"
                                              loading="lazy"
                                            />
                                          </div>

                                          <nav className="absolute bottom-5 flex inset-x-3.5 items-center justify-between">
                                            <button
                                              className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 rotate-180 bg-dark text-light"
                                              disabled={false}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                            <nav>
                                              <ul className="flex gap-2">
                                                <li className="rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                                <li className="opacity-50 rounded-full aspect-square bg-light w-3 cursor-pointer transition-opacity duration-300 hover:opacity-100"></li>
                                              </ul>
                                            </nav>
                                            <button className="aspect-square flex items-center justify-center w-14 rounded-md border border-current text-light-emphasis bg-light-emphasis/40 backdrop-blur-xl transition-opacity duration-300 disabled:opacity-50 xl:disabled:opacity-0 xl:opacity-0 xl:group-hover:opacity-100 group-hover:disabled:opacity-50 bg-dark text-light">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-move-right-icon w-6 stroke-1"
                                              >
                                                <path d="M18 8L22 12L18 16"></path>
                                                <path d="M2 12H22"></path>
                                              </svg>
                                            </button>
                                          </nav>
                                        </div>
                                      </div>
                                    </figure>
                                    <footer className="space-y-4">
                                      <header className="space-y-2.5 lg:space-y-3.5">
                                        <h3 className="display-5 leading-tight">
                                          Ulin Poolside
                                        </h3>
                                        <div className="pr-4 xl:pr-20 mt-3">
                                          <p>
                                            A{" "}
                                            <em>
                                              luxurious jungle ground-floor
                                              oasis
                                            </em>{" "}
                                            with direct access to the infinity
                                            pool.
                                          </p>
                                        </div>
                                      </header>
                                      <nav>
                                        <span className="ui-underline-anim reverse btn-primary capitalize">
                                          Discover
                                        </span>
                                      </nav>
                                    </footer>
                                  </div>
                                </article>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>
                <section
                  data-slice-type="call_to_action"
                  data-slice-variation="default"
                  className="app-container"
                >
                  <div className="space-y-5 mx-auto sm:space-y-6 xl:space-y-5 max-w-[31.25rem] lg:max-w-[40rem]">
                    <div
                      className="text-center space-y-em"
                      id="cta-4-text-block"
                    >
                      <h4 className="heading display-4">
                        <div>Experience a blend of nature, comfort and </div>
                        <div>luxury like never before.</div>
                      </h4>
                    </div>
                    <ul className="flex flex-wrap w-full justify-center items-center text-brand gap-x-5 gap-y-8">
                      <li className="inline-block cta-buttons">
                        <button
                          className="ui-underline-anim reverse btn-primary"
                          id="ygrf4o"
                        >
                          Book Your Stay
                        </button>
                      </li>
                    </ul>
                  </div>
                </section>
                <section
                  data-slice-type="arch_media"
                  data-slice-variation="default"
                  className="flex justify-center aspect-screen xl:h-[150vh] xl:aspect-auto sandikala-rounded-exception"
                >
                  <div
                    className="rounded-t-[50vw] h-full relative overflow-hidden rounded-b-none flex justify-center w-1/2 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url(&quot;https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress&quot;)",
                      width: "50.0151%",
                      borderRadius: "671px 671px 0px 0px",
                    }}
                  >
                    <div className="rounded-none w-screen h-screen object-cover xl:absolute">
                      <div
                        className="w-full h-full"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, -3211.56px)",
                          willChange: "transform",
                        }}
                        data-speed="0.01"
                        data-lag="0"
                      >
                        <img
                          src="https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress"
                          alt="Ulaman Bali"
                          loading="lazy"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  data-slice-type="packages_carousel"
                  data-slice-variation="withTitle"
                  className="space-y-11 lg:space-y-16"
                >
                  <header>
                    <div className="space-y-5 mx-auto sm:space-y-6 xl:space-y-5 max-w-[24.35rem] lg:max-w-[30rem] dark:prose-headings:text-light dark:prose-p:text-light">
                      <div
                        className="text-center space-y-em"
                        id="undefinedcta-titile-6-text-block"
                      >
                        <h4 className="heading display-4">
                          <div>Book one of our special </div>
                          <div>packages for a getaway you’ll </div>
                          <div>never forget.</div>
                        </h4>
                      </div>
                    </div>
                  </header>
                  <section className="sm:app-container sm:max-w-unset !pr-0">
                    <div
                      className="relative flex outline-none items-center sm:gap-9 lg:gap-20 2xl:gap-52"
                      role="region"
                      aria-roledescription="carousel"
                    >
                      <nav className="hidden sm:block">
                        <nav className="flex gap-5 sm:gap-3.5 lg:gap-6 flex-col text-brand">
                          <button
                            className="touch-manipulation p-0 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed static w-16 lg:w-20"
                            id="4civdx"
                            disabled={false}
                          >
                            <div className="aspect-square border-current border rounded w-full flex items-center justify-center rotate-180">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-move-right-icon w-7 stroke-1"
                              >
                                <path d="M18 8L22 12L18 16"></path>
                                <path d="M2 12H22"></path>
                              </svg>
                            </div>
                          </button>
                          <button
                            className="touch-manipulation p-0 text-brand disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed static w-16 lg:w-20"
                            id="g80hcq"
                            disabled={false}
                          >
                            <div className="aspect-square border-current border rounded w-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-move-right-icon w-7 stroke-1"
                              >
                                <path d="M18 8L22 12L18 16"></path>
                                <path d="M2 12H22"></path>
                              </svg>
                            </div>
                          </button>
                        </nav>
                      </nav>
                      <div className="flex-1 overflow-hidden">
                        <div className="overflow-hidden">
                          <div className="flex -ml-4 sm:dir-ltr">
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 pl-4 basis-auto group sm:pl-10 sm:last:pr-10 lg:pl-18 lg:last:pr-18 pb-1"
                            >
                              <article className="-mr-4 space-y-5 pl-6 group-last:pr-6 sm:mr-0 sm:px-0 pt-2.5 cursor-pointer">
                                <div className="w-[21.5rem] aspect-[10/10.6] sm:w-72 lg:w-[21.5rem] floating-element-decoration">
                                  <img
                                    src="https://images.prismic.io/ulaman/Zjrn-kMTzAJOCn4c_eco-luxury-hotel-bali.jpg?auto=format,compress"
                                    alt="drone shot of lake and sky villa at ulaman bali"
                                    className="w-full h-full object-cover relative z-10 rounded-lg"
                                    loading="lazy"
                                  />
                                </div>
                                <footer className="space-y-4">
                                  <h6 className="badge text-smallest glass bg-light-emphasis dark:text-dark">
                                    3&nbsp;Days / 2&nbsp;Nights{" "}
                                  </h6>
                                  <footer className="space-y-3 sm:space-y-3.5 lg:space-y-3">
                                    <h3 className="display-5 leading-tight dark:text-light">
                                      The Avatar Experience
                                    </h3>
                                    <nav>
                                      <span className="ui-underline-anim reverse btn-primary capitalize dark:text-light lg:text-smaller">
                                        Discover
                                      </span>
                                    </nav>
                                  </footer>
                                </footer>
                              </article>
                            </div>
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 pl-4 basis-auto group sm:pl-10 sm:last:pr-10 lg:pl-18 lg:last:pr-18 pb-1"
                            >
                              <article className="-mr-4 space-y-5 pl-6 group-last:pr-6 sm:mr-0 sm:px-0 pt-2.5 cursor-pointer">
                                <div className="w-[21.5rem] aspect-[10/10.6] sm:w-72 lg:w-[21.5rem] floating-element-decoration">
                                  <img
                                    src="https://images.prismic.io/ulaman/ZjebwkMTzAJOCiml_Ulaman-eco-retreat.jpg?auto=format,compress"
                                    alt="best romantic honeymoons getaway in ulaman bali"
                                    className="w-full h-full object-cover relative z-10 rounded-lg"
                                    loading="lazy"
                                  />
                                </div>
                                <footer className="space-y-4">
                                  <h6 className="badge text-smallest glass bg-light-emphasis dark:text-dark">
                                    3&nbsp;Days / 2&nbsp;Nights{" "}
                                  </h6>
                                  <footer className="space-y-3 sm:space-y-3.5 lg:space-y-3">
                                    <h3 className="display-5 leading-tight dark:text-light">
                                      The Ultimate Honeymoon
                                    </h3>
                                    <nav>
                                      <span className="ui-underline-anim reverse btn-primary capitalize dark:text-light lg:text-smaller">
                                        Discover
                                      </span>
                                    </nav>
                                  </footer>
                                </footer>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>
                <section
                  data-slice-type="curtain_reveal"
                  data-slice-variation="default"
                  className="!mt-28 [&amp;+*]:!mt-0"
                >
                  <div className="app-container flex relative w-full justify-center items-center aspect-screen sm:aspect-auto sm:min-h-[90vh] max-w-screen overflow-hidden xl:max-w-unset">
                    <div className="absolute w-full h-full flex justify-center py-14 2xl:py-0 items-center z-10 pointer-events-none">
                      <figure className="absolute w-96 aspect-[10/14]">
                        <img
                          src="https://images.prismic.io/ulaman/ZlQ_cik0V36pXpWM_ulaman-eco-resort.jpg?auto=format,compress"
                          alt="Reiki Healing"
                          className="relative -right-20 top-10 rotate-4 rounded-md w-full h-full object-cover"
                          loading="lazy"
                        />
                      </figure>
                      <figure className="absolute w-96 aspect-[10/14]">
                        <img
                          src="https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress"
                          alt="Ulaman Retreats"
                          className="relative -left-20 -top-10 -rotate-4 rounded-md w-full h-full object-cover"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div
                      className="opacity-0 space-y-5 max-w-md"
                      style={{ opacity: 0 }}
                    >
                      <div className="text-center max-w-92 lg:max-w-lg space-y-5">
                        <h4 className="heading display-4">
                          Discover your path to wellness and growth.
                        </h4>
                        <p>
                          At Ulaman we redefine luxury as an experience that not
                          only pampers the senses but also nurtures the soul.
                          Nestled in pristine nature, our eco-luxury retreat
                          offers a sanctuary for healing and transformation.
                          With personalized programs year-round, enjoy dedicated
                          attention and care, immersing yourself in relaxation,
                          rejuvenation, or profound inner change through
                          meticulously curated activities and treatments.{" "}
                          <em>Your transformative journey begins here.</em>
                        </p>
                      </div>
                      <ul className="flex flex-wrap w-full justify-center items-center text-brand gap-x-5 gap-y-8">
                        <li className="inline-block">
                          <a
                            href="/retreats"
                            className="ui-underline-anim reverse capitalize btn-primary"
                          >
                            Learn More
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section
                  data-slice-type="text_behind_image"
                  data-slice-variation="video"
                  className="relative flex items-center justify-center overflow-hidden"
                >
                  <ul className="w-full absolute h-auto">
                    <li className="min-w-full whitespace-nowrap font-brand leading-none text-brand opacity-10 flex even:justify-end text-90 space-y-3.5 sm:text-120 sm:space-y-5 lg:text-150 lg:space-y-3 xl:space-y-2.5 xl:text-206">
                      Balance - Relaxation
                    </li>
                    <li className="min-w-full whitespace-nowrap font-brand leading-none text-brand opacity-10 flex even:justify-end text-90 space-y-3.5 sm:text-120 sm:space-y-5 lg:text-150 lg:space-y-3 xl:space-y-2.5 xl:text-206">
                      Renewal - Healing
                    </li>
                  </ul>
                  <div className="relative cursor-pointer w-full">
                    <div>
                      <div className="flex justify-center">
                        <div className="max-w-[65vw] rounded-t-[500px] h-[90vw] sm:max-w-[53vw] sm:h-[74vw] xl:h-[49vw] xl:max-w-[37vw] transition-all duration-1000 flex justify-center items-center overflow-hidden relative">
                          <div className="aspect-[18/10] h-full relative">
                            <video
                              muted={true}
                              loop={true}
                              poster="https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress"
                              preload="auto"
                              className="object-cover w-full h-full rounded-lg"
                            >
                              <source src="https://ulaman.cdn.prismic.io/ulaman/ZnDvD5m069VX10t2_spa.mp4" />
                              <source src="https://ulaman.cdn.prismic.io/ulaman/ZnDvnJm069VX10uC_spa.webm" />
                              <img
                                src="https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress"
                                alt="riverside"
                                loading="lazy"
                              />
                            </video>
                          </div>
                          <div className="rounded-full badge glass bg-brand-lighter/60 text-light flex items-center gap-2 text-large absolute bottom-5 left-5 xl:hidden">
                            <span className="inline-block aspect-square w-2.5 bg-current rounded-full"></span>
                            <span>Play Video</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  data-slice-type="call_to_action"
                  data-slice-variation="default"
                  className="!-mb-18 sm:!-mb-14 lg:!-mb-20 xl:!-mb-18 app-container"
                >
                  <div className="space-y-5 mx-auto sm:space-y-6 xl:space-y-5 max-w-[31.25rem] lg:max-w-[40rem]">
                    <div
                      className="text-center space-y-em"
                      id="cta-9-text-block"
                    >
                      <h4 className="heading display-4">
                        <div>A world-class gastronomic journey where </div>
                        <div>nature’s finest ingredients meet culinary </div>
                        <div>craftsmanship.</div>
                      </h4>
                    </div>
                    <ul className="flex flex-wrap w-full justify-center items-center text-brand gap-x-5 gap-y-8">
                      <li className="inline-block cta-buttons">
                        <a
                          href="https://earthbyulaman.com/"
                          className="ui-underline-anim reverse btn-primary"
                        >
                          Visit The Website
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
                <section
                  data-slice-type="image_panel"
                  data-slice-variation="withLabels"
                >
                  <ul className="flex px-1.5 gap-1.5 sm:px-6 lg:px-9 lg:gap-3.5 xl:gap-5 xl:px-5">
                    <li className="aspect-[10/16] w-1/2 overflow-hidden rounded-md group sm:w-1/3 sm:aspect-[10/14]">
                      <figure className="w-full h-full relative">
                        <img
                          src="https://images.prismic.io/ulaman/ZoDNNB5LeNNTwp4J_earth.jpg?auto=format,compress"
                          alt="farm to table at Ulaman Bali"
                          data-speed="0.6"
                          loading="lazy"
                          className="object-cover w-full h-full scale-125"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform:
                              "translate(0px, -584.2px) scale(1.25, 1.25)",
                            willChange: "transform",
                          }}
                          data-lag="0"
                        />
                        <figcaption className="absolute opacity-0 bottom-5 inset-x-0 flex justify-center group-hover:opacity-100 transition-opacity duration-500">
                          <span className="badge glass bg-light/90 capitalize">
                            Ulaman Salad
                          </span>
                        </figcaption>
                      </figure>
                    </li>
                    <li className="aspect-[10/16] w-1/2 overflow-hidden rounded-md group sm:w-1/3 sm:aspect-[10/14]">
                      <figure className="w-full h-full relative">
                        <img
                          src="https://images.prismic.io/ulaman/ZpDtFx5LeNNTxF0v_Screenshot-2024-07-12-at-13.03.20.jpg?auto=format,compress"
                          alt="Chef Arik by Ulaman Bali"
                          data-speed="0.6"
                          loading="lazy"
                          className="object-cover w-full h-full scale-125"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform:
                              "translate(0px, -584.2px) scale(1.25, 1.25)",
                            willChange: "transform",
                          }}
                          data-lag="0"
                        />
                        <figcaption className="absolute opacity-0 bottom-5 inset-x-0 flex justify-center group-hover:opacity-100 transition-opacity duration-500">
                          <span className="badge glass bg-light/90 capitalize">
                            Our Chef: Arik
                          </span>
                        </figcaption>
                      </figure>
                    </li>
                    <li className="hidden sm:block aspect-[10/16] w-1/2 overflow-hidden rounded-md group sm:w-1/3 sm:aspect-[10/14]">
                      <figure className="w-full h-full relative">
                        <img
                          src="https://images.prismic.io/ulaman/ZoTULB5LeNNTwvNW_ulaman.jpg?auto=format,compress"
                          alt="Earth Restaurant By Ulaman"
                          data-speed="0.6"
                          loading="lazy"
                          className="object-cover w-full h-full scale-125"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform:
                              "translate(0px, -584.2px) scale(1.25, 1.25)",
                            willChange: "transform",
                          }}
                          data-lag="0"
                        />
                        <figcaption className="absolute opacity-0 bottom-5 inset-x-0 flex justify-center group-hover:opacity-100 transition-opacity duration-500">
                          <span className="badge glass bg-light/90 capitalize">
                            E.A.R.T.H Restaurant
                          </span>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </section>
                <section
                  data-slice-type="map_of_ulaman"
                  data-slice-variation="default"
                  className="relative"
                >
                  <div className="mx-auto">
                    <header className="max-w-7xl mx-auto px-6 space-y-4 lg:px-12">
                      <div>
                        <h3 className="heading display-3">
                          Discover Ulaman <br />
                          From Above
                        </h3>
                      </div>
                      <div className="w-fit bg-brand text-light rounded-full xl:flex items-center gap-1.5 p-2.5 pr-3">
                        <span className="bg-light rounded-full w-2 aspect-square"></span>
                        <span className="text-sm text-brand-cream-dark">
                          {" "}
                          Tap on an icon{" "}
                        </span>
                      </div>
                      <div className="block xl:hidden text-smaller text-brand-darker font-medium">
                        <span> * Use your finger to navigate </span>
                      </div>
                    </header>
                    <div className="flex items-center justify-center">
                      <div
                        id="scrollableDiv"
                        className="relative w-full h-full overflow-x-auto hide-scrollbar lg:show-scrollbar"
                      >
                        <div className="relative min-w-[80rem] mx-auto max-w-[108rem]">
                          <div className="whitespace-nowrap aspect-[14.8/10]">
                            <img
                              className="w-full h-full"
                              src="/_nuxt/ulaman.B-iYsIcw.jpg"
                              alt="map"
                              loading="lazy"
                            />
                          </div>
                          <ul>
                            <li>
                              <div
                                style={{ top: "8%", left: "56%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_oxZm069VX1y9A_Group6120.svg?auto=compress,format"
                                    alt="tennis court"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Tennis Court
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "17%", left: "53%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_jWpm069VX1y4H_Group5988.svg?auto=compress,format"
                                    alt="Ulaman gym"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Gym
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "24%", left: "33%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format"
                                    alt="Lake"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Bio-Filtered Lake
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "13%", left: "56%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg?auto=compress,format"
                                    alt="reception"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Reception
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "36%", left: "60%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                                    alt="Accomodation"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Ulin Poolside
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "31%", left: "47%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format"
                                    alt="riverside spa"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Tree House
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "37%", left: "41%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format"
                                    alt="yoga shala"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Cliffside Yoga Shala
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "39%", left: "63%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                                    alt="Accomodation"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Cocoon Jungle
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "26%", left: "10%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                                    alt="Accomodation"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Grand Lagoon Villa with Pool
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "18%", left: "14%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                                    alt="Accomodation"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Avatar Tree House
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "70%", left: "61%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg"
                                    alt="reception"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Ulaman Hall
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "42%", left: "52%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format"
                                    alt="earth restaurant"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    E.A.R.T.H Lounge &amp; Bar
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "30%", left: "28%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format"
                                    alt="riverside spa"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Riverside Spa
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "37%", left: "36%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format"
                                    alt="Lake"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Waterfall &amp; Waterfall Deck
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "46%", left: "71%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                                    alt="Accomodation"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Jungle Garden Pool
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "38%", left: "54%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format"
                                    alt="infinity pool"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    E.A.R.T.H Lounge Pool
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "12%", left: "65%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_t5pm069VX1y_y_Layer2.svg?auto=compress,format"
                                    alt="giftshop"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Gift Shop
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "21%", left: "25%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format"
                                    alt="Accomodation"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Floating Lake
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "21%", left: "42%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format"
                                    alt="earth restaurant"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    E.A.R.T.H Restaurant
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "23%", left: "48%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format"
                                    alt="infinity pool"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Waterfall Infinity Pool
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div
                                style={{ top: "57%", left: "65%" }}
                                className="cursor-pointer group absolute text-14 bg-light rounded-full flex items-center hover:gap-3 active-class:gap-3 justify-center max-w-fit w-full hover:z-20 active-class:z-10 h-9 px-2 text-brand active-class:bg-brand active-class:text-light transition-colors duration-300"
                              >
                                <div className="w-5 shrink-0">
                                  <img
                                    src="https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format"
                                    alt="yoga shala"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="font-medium overflow-hidden transition-[max-width] ease-in-out duration-300 w-full max-w-0 group-hover:max-w-[200px] [.group.active_&amp;]:max-w-[200px] whitespace-nowrap">
                                  <span className="invisible group-hover:visible [.group.active_&amp;]:visible text-smaller">
                                    Mandala Yoga Shala
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  data-slice-type="reviews_section"
                  data-slice-variation="default"
                >
                  <div
                    className="relative outline-none"
                    role="region"
                    aria-roledescription="carousel"
                  >
                    <header className="app-container">
                      <div className="border-b space-y-9 pb-8 sm:flex sm:justify-between sm:items-start sm:space-y-0">
                        <div className="space-y-8">
                          <div>
                            <h3 className="heading display-3">
                              What Our Guests <br />
                              Have To Say About Us
                            </h3>
                          </div>
                          <div className="flex gap-11 justify-between text-smaller text-brand sm:justify-start sm:gap-14">
                            <div className="xl:flex xl:gap-2 xl:items-center">
                              <span className="flex justify-between gap-x-3 items-center">
                                <span className="text-small flex items-center">
                                  <span>4.8&nbsp;</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-star-icon fill-current stroke-none aspect-square w-3.5"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                  </svg>
                                  <span>&nbsp;/</span>
                                </span>
                              </span>
                              <span className="sm:opacity-70">
                                295 Tripadvisor Reviews
                              </span>
                            </div>
                            <div className="xl:flex xl:gap-2 xl:items-center">
                              <span className="flex justify-between gap-x-3 items-center">
                                <span className="text-small flex items-center">
                                  <span>4.7&nbsp;</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-star-icon fill-current stroke-none aspect-square w-3.5"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                  </svg>
                                  <span>&nbsp;/</span>
                                </span>
                              </span>
                              <span className="sm:opacity-70">
                                742 Google Reviews
                              </span>
                            </div>
                          </div>
                        </div>
                        <nav>
                          <nav className="flex gap-5 sm:gap-3.5 lg:gap-6 text-brand outline-none">
                            <button
                              className="touch-manipulation p-0 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed relative"
                              id="wlcj2f"
                              disabled={false}
                            >
                              <div className="aspect-square border-current border rounded-md text-current p-0 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed px-6 rotate-180 flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="lucide lucide-move-right-icon w-7 stroke-1"
                                >
                                  <path d="M18 8L22 12L18 16"></path>
                                  <path d="M2 12H22"></path>
                                </svg>
                              </div>
                            </button>
                            <button
                              className="touch-manipulation p-0 text-brand disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed relative"
                              id="pa43s"
                            >
                              <div className="aspect-square border-current border rounded-md text-current p-0 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed px-6 flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="lucide lucide-move-right-icon w-7 stroke-1"
                                >
                                  <path d="M18 8L22 12L18 16"></path>
                                  <path d="M2 12H22"></path>
                                </svg>
                              </div>
                            </button>
                          </nav>
                        </nav>
                      </div>
                    </header>
                    <div className="overflow-hidden is-draggable">
                      <div
                        className="flex -ml-4"
                        style={{ transform: "translate3d(0px, 0px, 0px)" }}
                      >
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4 [&amp;.is-snapped]:opacity-100 opacity-0 transition-opacity duration-500 is-snapped is-in-view"
                        >
                          <article className="app-container pt-11 space-y-5 sm:flex sm:space-y-0 sm:gap-14 sm:justify-between xl:gap-44">
                            <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-rows-[auto_1fr] sm:grid-cols-[auto_auto] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                              <h3 className="display-6 text-dark-background col-span-1 order-first sm:order-none sm:text-vw-sm lg:text-largest">
                                Alsana Trawally
                              </h3>
                              <h5 className="display-6 text-dark-background sm:row-span-2 order-last sm:order-none sm:text-vw-sm lg:text-largest">
                                "Best Experience In Bali."
                              </h5>
                              <span className="block text-smallest order-1 sm:order-none">
                                <span>June</span>&nbsp; <span>2024</span>
                              </span>
                            </header>
                            <div className="space-y-5 sm:w-1/2 max-w-lg">
                              <div>
                                <p>
                                  "
                                  <em>
                                    Best experience I had in Bali out of all the
                                    resorts I've been to too,
                                  </em>{" "}
                                  customer service was impeccable and the staff
                                  were so kind, Mr. Komang made sure we had
                                  accommodations and did the best of his ability
                                  to make sure we had a warming welcoming, it's
                                  unbelievable that everything is made of
                                  bamboo"
                                </p>
                              </div>
                              <nav>
                                <a className="ui-underline-anim reverse inline-block btn-primary text-smaller"></a>
                              </nav>
                            </div>
                          </article>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4 [&amp;.is-snapped]:opacity-100 opacity-0 transition-opacity duration-500 is-in-view"
                        >
                          <article className="app-container pt-11 space-y-5 sm:flex sm:space-y-0 sm:gap-14 sm:justify-between xl:gap-44">
                            <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-rows-[auto_1fr] sm:grid-cols-[auto_auto] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                              <h3 className="display-6 text-dark-background col-span-1 order-first sm:order-none sm:text-vw-sm lg:text-largest">
                                Anne &amp; Steve
                              </h3>
                              <h5 className="display-6 text-dark-background sm:row-span-2 order-last sm:order-none sm:text-vw-sm lg:text-largest">
                                "A Truly Memorable Experience."
                              </h5>
                              <span className="block text-smallest order-1 sm:order-none">
                                <span>May</span>&nbsp; <span>2024</span>
                              </span>
                            </header>
                            <div className="space-y-5 sm:w-1/2 max-w-lg">
                              <div>
                                <p>
                                  "Fabulous architecture, beautiful natural
                                  setting and wonderful staff combine to provide
                                  a truly memorable experience. Our stay at
                                  Ulaman Eco Resort was one{" "}
                                  <em>we will remember forever. </em>We came to
                                  just relax in this amazing setting with its
                                  beautiful architecture set around a waterfall
                                  and surrounded by rice paddies...
                                </p>
                              </div>
                              <nav>
                                <a
                                  href="https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r949534794-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim reverse inline-block btn-primary text-smaller"
                                >
                                  Continue Reading
                                </a>
                              </nav>
                            </div>
                          </article>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4 [&amp;.is-snapped]:opacity-100 opacity-0 transition-opacity duration-500"
                        >
                          <article className="app-container pt-11 space-y-5 sm:flex sm:space-y-0 sm:gap-14 sm:justify-between xl:gap-44">
                            <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-rows-[auto_1fr] sm:grid-cols-[auto_auto] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                              <h3 className="display-6 text-dark-background col-span-1 order-first sm:order-none sm:text-vw-sm lg:text-largest">
                                Beata B
                              </h3>
                              <h5 className="display-6 text-dark-background sm:row-span-2 order-last sm:order-none sm:text-vw-sm lg:text-largest">
                                "Mind-Blowing Architecture And Top-Notch
                                Service!"
                              </h5>
                              <span className="block text-smallest order-1 sm:order-none">
                                <span>Apr.</span>&nbsp; <span>2024</span>
                              </span>
                            </header>
                            <div className="space-y-5 sm:w-1/2 max-w-lg">
                              <div>
                                <p>
                                  "From the moment you step into this incredible
                                  resort, you feel like you are in another
                                  world. A world where imagination has no limits
                                  and where your body and mind can recharge to
                                  the fullest.{" "}
                                  <em>
                                    We were blown away by the incredible
                                    architecture and design.
                                  </em>{" "}
                                  We loved our stay at Ulaman...
                                </p>
                              </div>
                              <nav>
                                <a
                                  href="https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r947955747-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim reverse inline-block btn-primary text-smaller"
                                >
                                  Continue Reading
                                </a>
                              </nav>
                            </div>
                          </article>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4 [&amp;.is-snapped]:opacity-100 opacity-0 transition-opacity duration-500"
                        >
                          <article className="app-container pt-11 space-y-5 sm:flex sm:space-y-0 sm:gap-14 sm:justify-between xl:gap-44">
                            <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-rows-[auto_1fr] sm:grid-cols-[auto_auto] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                              <h3 className="display-6 text-dark-background col-span-1 order-first sm:order-none sm:text-vw-sm lg:text-largest">
                                Conny H
                              </h3>
                              <h5 className="display-6 text-dark-background sm:row-span-2 order-last sm:order-none sm:text-vw-sm lg:text-largest">
                                "Perfect Place To Relax And Heal!"
                              </h5>
                              <span className="block text-smallest order-1 sm:order-none">
                                <span>Apr.</span>&nbsp; <span>2023</span>
                              </span>
                            </header>
                            <div className="space-y-5 sm:w-1/2 max-w-lg">
                              <div>
                                <p>
                                  "Loved this place so much,
                                  <em> I extended and stayed over a week. </em>
                                  This place is perfect to relax &amp; heal! The
                                  resort is so beautiful, peaceful, quiet and
                                  embedded into the nature. The food is
                                  delicious and the staff does an excellent
                                  service. The healing &amp; wellness options
                                  made it special: the spa was relaxing and I
                                  did yoga every day...
                                </p>
                              </div>
                              <nav>
                                <a
                                  href="https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r946363108-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim reverse inline-block btn-primary text-smaller"
                                >
                                  Continue Reading
                                </a>
                              </nav>
                            </div>
                          </article>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4 [&amp;.is-snapped]:opacity-100 opacity-0 transition-opacity duration-500"
                        >
                          <article className="app-container pt-11 space-y-5 sm:flex sm:space-y-0 sm:gap-14 sm:justify-between xl:gap-44">
                            <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-rows-[auto_1fr] sm:grid-cols-[auto_auto] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                              <h3 className="display-6 text-dark-background col-span-1 order-first sm:order-none sm:text-vw-sm lg:text-largest">
                                Janey V
                              </h3>
                              <h5 className="display-6 text-dark-background sm:row-span-2 order-last sm:order-none sm:text-vw-sm lg:text-largest">
                                “One Of The Most Beautiful Resorts In The
                                World.”
                              </h5>
                              <span className="block text-smallest order-1 sm:order-none">
                                <span>Jan.</span>&nbsp; <span>2024</span>
                              </span>
                            </header>
                            <div className="space-y-5 sm:w-1/2 max-w-lg">
                              <div>
                                <p>
                                  “Ulaman eco-resort is, without doubt,{" "}
                                  <em>
                                    one of the most beautiful resorts I have
                                    stayed at.{" "}
                                  </em>
                                  Just returned from an amazing 4 day stay on my
                                  own on a yoga wellness and healing experience.
                                  I cannot begin to describe how rested and
                                  rejuvenated I feel. Everything at this super
                                  beautiful resort...
                                </p>
                              </div>
                              <nav>
                                <a
                                  href="https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r935166642-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim reverse inline-block btn-primary text-smaller"
                                >
                                  Continue Reading
                                </a>
                              </nav>
                            </div>
                          </article>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4 [&amp;.is-snapped]:opacity-100 opacity-0 transition-opacity duration-500"
                        >
                          <article className="app-container pt-11 space-y-5 sm:flex sm:space-y-0 sm:gap-14 sm:justify-between xl:gap-44">
                            <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-rows-[auto_1fr] sm:grid-cols-[auto_auto] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                              <h3 className="display-6 text-dark-background col-span-1 order-first sm:order-none sm:text-vw-sm lg:text-largest">
                                Alex &amp; Regina
                              </h3>
                              <h5 className="display-6 text-dark-background sm:row-span-2 order-last sm:order-none sm:text-vw-sm lg:text-largest">
                                "Immerse Yourself In Nature."
                              </h5>
                              <span className="block text-smallest order-1 sm:order-none">
                                <span>Nov.</span>&nbsp; <span>2023</span>
                              </span>
                            </header>
                            <div className="space-y-5 sm:w-1/2 max-w-lg">
                              <div>
                                <p>
                                  "Our stay at the Ulaman resort was{" "}
                                  <em>truly exceptional.</em> The resort's
                                  commitment to eco-principles and sustainable
                                  practices is admirable. The bamboo
                                  architecture seamlessly blends with the
                                  natural surroundings, creating a serene
                                  atmosphere. The facilities, including the spa,
                                  tennis courts, pools, gym, yoga and
                                  restaurant...
                                </p>
                              </div>
                              <nav>
                                <a
                                  href="https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r926725773-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim reverse inline-block btn-primary text-smaller"
                                >
                                  Continue Reading
                                </a>
                              </nav>
                            </div>
                          </article>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4 [&amp;.is-snapped]:opacity-100 opacity-0 transition-opacity duration-500"
                        >
                          <article className="app-container pt-11 space-y-5 sm:flex sm:space-y-0 sm:gap-14 sm:justify-between xl:gap-44">
                            <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-rows-[auto_1fr] sm:grid-cols-[auto_auto] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                              <h3 className="display-6 text-dark-background col-span-1 order-first sm:order-none sm:text-vw-sm lg:text-largest">
                                Mikael R
                              </h3>
                              <h5 className="display-6 text-dark-background sm:row-span-2 order-last sm:order-none sm:text-vw-sm lg:text-largest">
                                "Out-Of-This-World Experience."
                              </h5>
                              <span className="block text-smallest order-1 sm:order-none">
                                <span>Aug.</span>&nbsp; <span>2023</span>
                              </span>
                            </header>
                            <div className="space-y-5 sm:w-1/2 max-w-lg">
                              <div>
                                <p>
                                  "This unique resort feels like
                                  <em> stepping into an Avatar movie set </em>
                                  with added 5* service and food. Supercool and
                                  comfortable rooms as well. All in all, truly
                                  amazing and highly recommended. Being very
                                  well-traveled, I have not experienced
                                  something like it ever."
                                </p>
                              </div>
                              <nav>
                                <a className="ui-underline-anim reverse inline-block btn-primary text-smaller"></a>
                              </nav>
                            </div>
                          </article>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4 [&amp;.is-snapped]:opacity-100 opacity-0 transition-opacity duration-500"
                        >
                          <article className="app-container pt-11 space-y-5 sm:flex sm:space-y-0 sm:gap-14 sm:justify-between xl:gap-44">
                            <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-rows-[auto_1fr] sm:grid-cols-[auto_auto] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                              <h3 className="display-6 text-dark-background col-span-1 order-first sm:order-none sm:text-vw-sm lg:text-largest">
                                Jody T
                              </h3>
                              <h5 className="display-6 text-dark-background sm:row-span-2 order-last sm:order-none sm:text-vw-sm lg:text-largest">
                                "Artistic Wonderland."
                              </h5>
                              <span className="block text-smallest order-1 sm:order-none">
                                <span>July</span>&nbsp; <span>2023</span>
                              </span>
                            </header>
                            <div className="space-y-5 sm:w-1/2 max-w-lg">
                              <div>
                                <p>
                                  "This is an artistic wonderland and a{" "}
                                  <em>once-in-a-lifetime experience</em>
                                  <strong>.</strong> The architect who designed
                                  this place is a genius, it is so funky and
                                  unique; the shapes and usage of different
                                  types of wood (mostly bamboo) make this a "not
                                  to miss" destination. The staff there are
                                  amazing, they are all so helpful, smart and
                                  friendly....
                                </p>
                              </div>
                              <nav>
                                <a
                                  href="https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r904290293-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim reverse inline-block btn-primary text-smaller"
                                >
                                  Continue Reading
                                </a>
                              </nav>
                            </div>
                          </article>
                        </div>
                        <div
                          role="group"
                          aria-roledescription="slide"
                          className="min-w-0 shrink-0 grow-0 basis-full pl-4 [&amp;.is-snapped]:opacity-100 opacity-0 transition-opacity duration-500"
                        >
                          <article className="app-container pt-11 space-y-5 sm:flex sm:space-y-0 sm:gap-14 sm:justify-between xl:gap-44">
                            <header className="grid grid-cols-[1fr_auto] gap-4 sm:grid-rows-[auto_1fr] sm:grid-cols-[auto_auto] sm:gap-x-11 sm:gap-y-2.5 xl:gap-x-36">
                              <h3 className="display-6 text-dark-background col-span-1 order-first sm:order-none sm:text-vw-sm lg:text-largest">
                                Francesco &amp; Veronica
                              </h3>
                              <h5 className="display-6 text-dark-background sm:row-span-2 order-last sm:order-none sm:text-vw-sm lg:text-largest">
                                "If I Only Could Give 6 Stars."
                              </h5>
                              <span className="block text-smallest order-1 sm:order-none">
                                <span>Feb.</span>&nbsp; <span>2023</span>
                              </span>
                            </header>
                            <div className="space-y-5 sm:w-1/2 max-w-lg">
                              <div>
                                <p>
                                  "This is definitely{" "}
                                  <em>
                                    one of the best resort we’ve ever been at,
                                  </em>{" "}
                                  my husband and I spent a 2-day “isolation-self
                                  love” retreat and it went way over our best
                                  expectations. Starting from the staff, who are
                                  so friendly, helpful and nice, continuing with
                                  the extraordinary architecture that surrounds
                                  you when you walk inside...
                                </p>
                              </div>
                              <nav>
                                <a
                                  href="https://www.tripadvisor.co.id/ShowUserReviews-g608496-d21058098-r879239527-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim reverse inline-block btn-primary text-smaller"
                                >
                                  Continue Reading
                                </a>
                              </nav>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  data-slice-type="experiences_catalog"
                  data-slice-variation="allExperiencesCollage"
                >
                  <div>
                    <div>
                      <div className="space-y-5 sm:space-y-2.5 lg:space-y-7 xl:space-y-5">
                        <div>
                          <figure className="columns-2 gap-1.5 space-y-2 md:columns-3 md:gap-2 xl:column">
                            <div className="aspect-[10/14] sm:aspect-[10/19] lg:aspect-[10/14] xl:aspect-[10/12.5]">
                              <div className="relative rounded-md overflow-hidden w-full h-full">
                                <article className="block rounded-md cursor-pointer overflow-hidden w-full h-full">
                                  <img
                                    src="https://images.prismic.io/ulaman/ZnWOMpbWFbowew-3_eco-reosrt.jpg?auto=format,compress"
                                    alt="girl playing tennis"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                  <footer className="absolute bottom-2.5 left-2.5 right-2.5">
                                    <h6 className="badge py-1 leading-tight glass backdrop-blur-3xl bg-light-background/40 text-light-emphasis font-medium text-tiny xl:text-smallest w-fit max-w-full">
                                      Private Tennis Coach
                                    </h6>
                                  </footer>
                                </article>
                              </div>
                            </div>
                            <div className="aspect-[10/13] sm:aspect-[10/16] lg:aspect-[10/12] xl:aspect-[10/9.5]">
                              <div className="relative rounded-md overflow-hidden w-full h-full">
                                <article className="block rounded-md cursor-pointer overflow-hidden w-full h-full">
                                  <img
                                    src="https://images.prismic.io/ulaman/ZoDImh5LeNNTwp39_restaurant.jpg?auto=format,compress"
                                    alt="earth dining space"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                  <footer className="absolute bottom-2.5 left-2.5 right-2.5">
                                    <h6 className="badge py-1 leading-tight glass backdrop-blur-3xl bg-light-background/40 text-light-emphasis font-medium text-tiny xl:text-smallest w-fit max-w-full">
                                      Romantic 5-Star Culinary Experience by
                                      Ulaman's Natural Waterfalls!
                                    </h6>
                                  </footer>
                                </article>
                              </div>
                            </div>
                            <div className="aspect-[10.8/10] sm:aspect-[10/15] lg:aspect-[10.7/10] xl:aspect-[10/9]">
                              <div className="relative rounded-md overflow-hidden w-full h-full">
                                <article className="block rounded-md cursor-pointer overflow-hidden w-full h-full">
                                  <img
                                    src="https://images.prismic.io/ulaman/Zlas5KWtHYXtT4Cm_yoga-in-bali.jpg?auto=format,compress"
                                    alt="Yoga Shala at Ulaman Eco Luxury Retreat: Bamboo sanctuary for yoga, meditation, and wellness in Bali’s lush nature."
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                  <footer className="absolute bottom-2.5 left-2.5 right-2.5">
                                    <h6 className="badge py-1 leading-tight glass backdrop-blur-3xl bg-light-background/40 text-light-emphasis font-medium text-tiny xl:text-smallest w-fit max-w-full">
                                      Private Yoga Session (Hatha, Yin or Fly
                                      High Yoga)
                                    </h6>
                                  </footer>
                                </article>
                              </div>
                            </div>
                            <div className="aspect-[10.3/10] sm:aspect-[10/20] lg:aspect-[10/16.7] xl:aspect-[10/13]">
                              <div className="relative rounded-md overflow-hidden w-full h-full">
                                <article className="block rounded-md cursor-pointer overflow-hidden w-full h-full">
                                  <img
                                    src="https://images.prismic.io/ulaman/ZlbB0KWtHYXtT4Fc_bali-hotels.jpg?auto=format,compress"
                                    alt="bed decorations"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                  <footer className="absolute bottom-2.5 left-2.5 right-2.5">
                                    <h6 className="badge py-1 leading-tight glass backdrop-blur-3xl bg-light-background/40 text-light-emphasis font-medium text-tiny xl:text-smallest w-fit max-w-full">
                                      Romantic Bed Decorations
                                    </h6>
                                  </footer>
                                </article>
                              </div>
                            </div>
                            <div className="aspect-[10/15.5] sm:aspect-[10/19.5] lg:aspect-[10/14] xl:aspect-[10/12.5]">
                              <div className="relative rounded-md overflow-hidden w-full h-full">
                                <article className="block rounded-md cursor-pointer overflow-hidden w-full h-full">
                                  <img
                                    src="https://images.prismic.io/ulaman/ZoZc3h5LeNNTwyC-_luxury-resort-bali.jpg?auto=format,compress"
                                    alt="helicopter flight"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                  <footer className="absolute bottom-2.5 left-2.5 right-2.5">
                                    <h6 className="badge py-1 leading-tight glass backdrop-blur-3xl bg-light-background/40 text-light-emphasis font-medium text-tiny xl:text-smallest w-fit max-w-full">
                                      VIP Airport Transfers via Helicopter
                                    </h6>
                                  </footer>
                                </article>
                              </div>
                            </div>
                            <div className="aspect-[10/11] sm:aspect-[10/15.5] lg:aspect-[10/12] xl:aspect-[10/9.5]">
                              <div className="relative rounded-md overflow-hidden w-full h-full">
                                <article className="block rounded-md cursor-pointer overflow-hidden w-full h-full">
                                  <img
                                    src="https://images.prismic.io/ulaman/ZlbDa6WtHYXtT4F-_eco-hotel-bali.jpg?auto=format,compress"
                                    alt="balloons and bed decoration"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                  <footer className="absolute bottom-2.5 left-2.5 right-2.5">
                                    <h6 className="badge py-1 leading-tight glass backdrop-blur-3xl bg-light-background/40 text-light-emphasis font-medium text-tiny xl:text-smallest w-fit max-w-full">
                                      Balloons and Sparkles
                                    </h6>
                                  </footer>
                                </article>
                              </div>
                            </div>
                          </figure>
                        </div>
                        <nav className="text-center">
                          <a
                            href="/activities"
                            className="btn-primary ui-underline-anim reverse"
                          >
                            Discover All Experiences
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  data-slice-type="experiences_catalog"
                  data-slice-variation="activitiesTimetable"
                >
                  <div>
                    <div>
                      <div>
                        <div className="mx-auto text-center pl-4">
                          <div className="left-0 max-w-[73.75rem] 2xl:max-w-pro mx-auto top-0">
                            <header>
                              <div className="space-y-4 pb-16">
                                <h2 className="heading display-2">
                                  Weekly Schedule
                                </h2>
                                <p>Advanced Booking Is Recommended</p>
                              </div>
                            </header>
                            <div className="overflow-auto relative">
                              <div className="grid grid-cols-[5rem_repeat(7,_1fr)] gap-0 w-max sm:w-auto">
                                <div className="p-6 border border-brand/50 bg-light-background border-x-0 border-t-0 tracking-wider sticky left-0 z-10"></div>

                                <div className="p-6 border border-brand/50 border-r-0 border-t-0 tracking-none bg-light-background text-brand text-smallest font-normal lg:text-smaller min-w-[7.5rem]">
                                  Monday
                                </div>
                                <div className="p-6 border border-brand/50 border-r-0 border-t-0 tracking-none bg-light-background text-brand text-smallest font-normal lg:text-smaller min-w-[7.5rem]">
                                  Tuesday
                                </div>
                                <div className="p-6 border border-brand/50 border-r-0 border-t-0 tracking-none bg-light-background text-brand text-smallest font-normal lg:text-smaller min-w-[7.5rem]">
                                  Wednesday
                                </div>
                                <div className="p-6 border border-brand/50 border-r-0 border-t-0 tracking-none bg-light-background text-brand text-smallest font-normal lg:text-smaller min-w-[7.5rem]">
                                  Thursday
                                </div>
                                <div className="p-6 border border-brand/50 border-r-0 border-t-0 tracking-none bg-light-background text-brand text-smallest font-normal lg:text-smaller min-w-[7.5rem]">
                                  Friday
                                </div>
                                <div className="p-6 border border-brand/50 border-r-0 border-t-0 tracking-none bg-light-background text-brand text-smallest font-normal lg:text-smaller min-w-[7.5rem]">
                                  Saturday
                                </div>
                                <div className="p-6 border border-brand/50 border-r-0 border-t-0 tracking-none bg-light-background text-brand text-smallest font-normal lg:text-smaller min-w-[7.5rem]">
                                  Sunday
                                </div>

                                <div className="grid-row group contents">
                                  <div className="pt-8 border border-brand/50 sticky left-0 z-10 tracking-wider border-x-0 border-t-0 text-smallest font-normal align-middle opacity-100 bg-light-background text-brand group-last:border-b-0 lg:text-smaller">
                                    7 AM
                                  </div>

                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#D7DEBF",
                                        height: "4rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Yoga (All Levels)
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#D7DEBF",
                                        height: "4rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Yoga (All Levels)
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#D7DEBF",
                                        height: "4rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Yoga (All Levels)
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#D7DEBF",
                                        height: "4rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Yoga (All Levels)
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#D7DEBF",
                                        height: "4rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Yoga (All Levels)
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#D7DEBF",
                                        height: "4rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Yoga (All Levels)
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#D7DEBF",
                                        height: "4rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Yoga (All Levels)
                                    </h4>
                                  </div>
                                </div>
                                <div className="grid-row group contents">
                                  <div className="pt-8 border border-brand/50 sticky left-0 z-10 tracking-wider border-x-0 border-t-0 text-smallest font-normal align-middle opacity-100 bg-light-background text-brand group-last:border-b-0 lg:text-smaller">
                                    12 PM
                                  </div>

                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#CED5CE",
                                        height: "5.5rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Sound Healing
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#CED5CE",
                                        height: "5.5rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Sound Healing
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#CED5CE",
                                        height: "5.5rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Sound Healing
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#CED5CE",
                                        height: "5.5rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Sound Healing
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#CED5CE",
                                        height: "5.5rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Sound Healing
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#CED5CE",
                                        height: "5.5rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Sound Healing
                                    </h4>
                                  </div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none">
                                    <h4
                                      className="m-auto text-left text-sm p-1 pointer-events-auto cursor-pointer pl-2 custom-width flex items-center rounded-md absolute text-smallest font-normal hover:opacity-80 transition-opacity duration-300"
                                      style={{
                                        backgroundColor: "#CED5CE",
                                        height: "5.5rem",
                                        marginTop: "0rem",
                                        width: "90%",
                                        left: "5%",
                                      }}
                                    >
                                      Sound Healing
                                    </h4>
                                  </div>
                                </div>
                                <div className="grid-row group contents">
                                  <div className="pt-8 border border-brand/50 sticky left-0 z-10 tracking-wider border-x-0 border-t-0 text-smallest font-normal align-middle opacity-100 bg-light-background text-brand group-last:border-b-0 lg:text-smaller">
                                    1 PM
                                  </div>

                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none"></div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none"></div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none"></div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none"></div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none"></div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none"></div>
                                  <div className="relative p-2 h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 pointer-events-none"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <footer className="flex justify-between text-smaller mt-10 sm:mt-11 lg:mt-10 app-container">
                          <nav>
                            <a
                              href="https://drive.google.com/file/d/1HOiTV2UmmH4joOGKhwJhYdPIeN3Y9NfK/view"
                              rel="noopener noreferrer"
                              target="_blank"
                              className="ui-underline-anim reverse btn-primary text-smaller"
                            >
                              Download PDF
                            </a>
                          </nav>
                        </footer>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  data-slice-type="call_to_action"
                  data-slice-variation="default"
                  className="app-container"
                >
                  <div className="space-y-5 mx-auto sm:space-y-6 xl:space-y-5 max-w-[24.35rem] lg:max-w-[30rem]">
                    <div
                      className="text-center space-y-em"
                      id="cta-15-text-block"
                    >
                      <h4 className="heading display-4">
                        <div>Reconnect With Yourself In </div>
                        <div>Luxurious Comfort.</div>
                      </h4>
                    </div>
                    <ul className="flex flex-wrap w-full justify-center items-center text-brand gap-x-5 gap-y-8">
                      <li className="inline-block cta-buttons">
                        <button
                          className="ui-underline-anim reverse btn-primary"
                          id="zprw0f"
                        >
                          Book Your Stay
                        </button>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>

              <footer className="mt-36 sm:mt-28 lg:mt-40 xl:mt-36">
                <article className="space-y-6 pb-2 lg:space-y-9 lg:pb-2.5 xl:pb-3">
                  <header className="text-center leading-none text-brand font-normal">
                    <a
                      href="https://www.instagram.com/ulamanbali/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      @ulamanbali
                    </a>
                  </header>
                  <div>
                    <div
                      className="relative outline-none"
                      role="region"
                      aria-roledescription="carousel"
                    >
                      <div className="overflow-hidden">
                        <div className="flex -ml-4"></div>
                      </div>
                    </div>
                  </div>
                </article>

                <div className="bg-dark-emphasis text-light-background dark">
                  <div className="py-20 xl:py-16">
                    <div className="app-container">
                      <section className="pt-20">
                        <div className="flex flex-col items-center justify-center">
                          <ul className="flex flex-col gap-y-3 items-center">
                            <li>
                              <a
                                href="https://www.google.com/travel/search?q=ulaman%20bali&amp;g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C10210222%2C72248047%2C72248049%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72462234%2C72470899%2C72471280%2C72472051%2C72473841%2C72481459%2C72485658%2C72486593%2C72494250%2C72499705%2C72513513%2C72536387%2C72549171%2C72569093%2C72570850%2C72602734%2C72616120%2C72619927%2C72620306%2C72620962%2C72634630%2C72648289%2C72653660%2C72658035%2C72661848%2C72662543%2C72671093%2C72673973&amp;hl=en-ID&amp;gl=id&amp;cs=1&amp;ssta=1&amp;ts=CAEaRwopEicyJTB4MmRkMjM5MjEzNjlkNTcxMzoweDg0ZjMzZTkzODU1NTBmZDQSGhIUCgcI6A8QCRgTEgcI6A8QCRgUGAEyAhAA&amp;qs=CAEyFENnc0kxSl9VcXJqU3pfbUVBUkFCOAJCCQnUD1WFkz7zhEIJCdQPVYWTPvOE&amp;ap=ugEHcmV2aWV3cw&amp;ictx=111&amp;ved=0CAAQ5JsGahcKEwiomPuP68GHAxUAAAAAHQAAAAAQCg"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="flex items-center gap-2"
                              >
                                <span className="flex items-center">
                                  4.7 &nbsp;
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-star-icon fill-current stroke-none aspect-square w-3.5"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                  </svg>
                                </span>
                                <span>/</span>
                                <span className="opacity-50">
                                  742 Google Reviews
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="flex items-center gap-2"
                              >
                                <span className="flex items-center">
                                  4.8 &nbsp;
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-star-icon fill-current stroke-none aspect-square w-3.5"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                  </svg>
                                </span>
                                <span>/</span>
                                <span className="opacity-50">
                                  295 TripAdvisor Reviews
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </section>
                      <div className="py-20">
                        <div className="app-container w-full overflow-visible flex flex-col max-w-screen-md space-y-8 sm:flex-row sm:justify-center md:space-y-0 md:px-0 md:mx-auto">
                          <div className="cursor-pointer flex border-light rounded-none items-center justify-between pb-6 sm:pb-0 sm:justify-start sm:w-1/3 sm:border-r">
                            <div className="relative h-min">
                              <span>Check In</span>
                            </div>
                            <div className="h-px bg-light w-20 ml-4 mr-5 sm:w-8"></div>
                            <div className="relative h-min">
                              <span>Check Out</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between sm:w-1/2 lg:w-2/3">
                            <div className="flex items-center gap-5 flex-1 flex justify-start sm:justify-center">
                              <label htmlFor="adult">Adult</label>
                              <div className="flex items-center space-x-4">
                                <button
                                  className="border border-light rounded-full aspect-square w-7 flex items-center justify-center transition-colors duration-300 hover:bg-brand hover:border-brand disabled:opacity-60 disabled:pointer-events-none"
                                  id="83xqbq"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1px"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-minus-icon w-5"
                                  >
                                    <path d="M5 12h14"></path>
                                  </svg>
                                </button>
                                <div className="text-center w-5">
                                  <span className="inline-block">2</span>
                                </div>
                                <input
                                  id="adult"
                                  name="adult"
                                  type="number"
                                  value="2"
                                  className="pointer-events-none hidden"
                                  aria-hidden="false"
                                />
                                <button
                                  disabled={false}
                                  className="border border-light rounded-full w-7 aspect-square flex items-center justify-center transition-colors duration-300 hover:bg-brand hover:border-brand disabled:opacity-50 disabled:pointer-events-none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1px"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-plus-icon w-5"
                                  >
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <button
                              className="h-12 px-12 flex justify items-center rounded-asymetrical border border-light hover:bg-brand hover:border-brand transition-colors duration-300"
                              id="24z3vn"
                            >
                              {" "}
                              Search{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                      <section className="flex flex-col items-center justify-between sm:gap-x-5 sm:flex-row-reverse">
                        <div className="flex w-full aspect-[11/10] h-80 items-center sm:w-auto overflow-hidden border-none lg:h-96 xl:items-left xl:w-[41rem] xl:h-auto">
                          <img
                            src="https://images.prismic.io/ulaman/ZpDw3R5LeNNTxF2w_ulaman-bali.jpg?auto=format,compress"
                            alt="ulaman bali map"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="space-y-4 pt-7 text-smallest prose:p:pr-10 sm:w-64 lg:w-1/3">
                          <h3 className="heading display-3">
                            Tucked Within Majestic Balinese Nature.
                          </h3>
                          <p>
                            Strategically located near popular areas like Canggu
                            and Ubud, experience tranquil nature and luxury.
                            With endless activities, you'll never want to leave
                            Ulaman.
                          </p>
                        </div>
                      </section>
                      <section className="pt-24">
                        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start">
                          <div className="py-2.5">
                            <div className="max-w-lg">
                              <div>
                                <h6 className="display-6 text-24">
                                  Get Notified On Our Offers
                                </h6>
                                <form
                                  className="sm:flex-col space-y-7"
                                  name="newsletter-signup"
                                >
                                  <input
                                    type="hidden"
                                    name="form-name"
                                    value="newsletter-signup"
                                  />
                                  <p className="hidden">
                                    <label>
                                      {" "}
                                      Don’t fill this out if you’re human:{" "}
                                      <input name="bot-field" />
                                    </label>
                                  </p>
                                  <label
                                    htmlFor="newsletter-name"
                                    className="sr-only"
                                  >
                                    {" "}
                                    Name{" "}
                                  </label>
                                  <div className="relative">
                                    <input
                                      type="text"
                                      name="name"
                                      id="newsletter-name"
                                      placeholder="Your Name*"
                                      required={true}
                                      className="input-field"
                                    />
                                    <span
                                      style={{ display: "none" }}
                                      className="absolute top-full p-1 left-0 text-warning text-smaller sm:text-smallest dark:text-light"
                                    >
                                      This field is required
                                    </span>
                                  </div>
                                  <label
                                    htmlFor="newsletter-email"
                                    className="sr-only"
                                  >
                                    {" "}
                                    Email address{" "}
                                  </label>
                                  <div className="relative">
                                    <input
                                      className="input-field"
                                      id="newsletter-email"
                                      placeholder="Your Email*"
                                      name="email"
                                      required={true}
                                      type="email"
                                    />
                                    <span
                                      style={{ display: "none" }}
                                      className="absolute top-full p-1 left-0 text-warning text-smaller sm:text-smallest dark:text-light"
                                    >
                                      Please enter a valid email address
                                    </span>
                                  </div>
                                  <button
                                    type="submit"
                                    className="ui-underline-anim reverse text-light disabled:opacity-50 disabled:hover:before:scale-x-100"
                                    disabled={false}
                                  >
                                    Submit
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                          <nav className="pt-20 xl:pt-0">
                            <h6 className="display-6">Explore</h6>
                            <ul className="grid grid-cols-2 pt-7 gap-x-12 gap-y-5">
                              <li>
                                <a
                                  aria-current="page"
                                  href="/"
                                  className="router-link-active before:scale-x-100 ui-underline-anim"
                                >
                                  Home
                                </a>
                              </li>
                              <li>
                                <a href="/rooms" className="ui-underline-anim">
                                  Villas
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://earthbyulaman.com/"
                                  className="ui-underline-anim"
                                >
                                  Dining
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://riversidespabyulaman.com/"
                                  className="ui-underline-anim"
                                >
                                  Spa
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/retreats"
                                  className="ui-underline-anim"
                                >
                                  Retreats
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/activities"
                                  className="ui-underline-anim"
                                >
                                  Experiences
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/facilities"
                                  className="ui-underline-anim"
                                >
                                  Facilities
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/ulaman-map"
                                  className="ui-underline-anim"
                                >
                                  Ulaman Map
                                </a>
                              </li>
                              <li>
                                <a href="/about" className="ui-underline-anim">
                                  About
                                </a>
                              </li>
                              <li>
                                <a href="/blog" className="ui-underline-anim">
                                  Articles
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/contact"
                                  className="ui-underline-anim"
                                >
                                  Contact
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/testimonials"
                                  className="ui-underline-anim"
                                >
                                  Video Testimonials
                                </a>
                              </li>
                            </ul>
                          </nav>
                          <nav className="pt-16 xl:pt-0">
                            <h6 className="display-6">Connect</h6>
                            <ul className="grid grid-cols-2 pt-7 gap-x-12 gap-y-5">
                              <li>
                                <a
                                  href="https://wa.me/6281227142854"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim"
                                >
                                  Whatsapp
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.google.com/maps/dir//Ulaman+Road,+Buwit,+Kediri,+Tabanan+Regency,+Bali+82121/@-8.5929565,115.048163,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd23921369d5713:0x84f33e9385550fd4!2m2!1d115.1305649!2d-8.5929653?entry=ttu"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim"
                                >
                                  Directions
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Resort-Tabanan_Bali.html"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim"
                                >
                                  TripAdvisor
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/ulamanbali"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim"
                                >
                                  Instagram
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.facebook.com/UlamanBali/"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  className="ui-underline-anim"
                                >
                                  Facebook
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </section>
                    </div>
                    <section className="max-w-screen overflow-hidden mt-24 mb-4">
                      <div className="relative w-fit animate-[slide_60s_infinite_linear]">
                        <ul className="flex gap-x-16 sm:gap-x-20 lg:gap-x-24 w-max pl-16 sm:pl-20 lg:pl-24">
                          <li>
                            <div className="h-full">
                              <img
                                src="https://images.prismic.io/ulaman/ZtB9TEaF0TcGJhOP_deluxe.png?auto=format,compress"
                                alt="Destination deluxe ulaman bali"
                                className="w-auto h-11 lg:h-14 xl:h-16"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="h-full">
                              <img
                                src="https://images.prismic.io/ulaman/ZtB82EaF0TcGJhNj_unesco.png?auto=format,compress"
                                alt="Unesco ulaman bali"
                                className="w-auto h-11 lg:h-14 xl:h-16"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="h-full">
                              <img
                                src="https://images.prismic.io/ulaman/ZtB8rkaF0TcGJhNW_kohler.png?auto=format,compress"
                                alt="Kohler bold design awards ulaman bali"
                                className="w-auto h-11 lg:h-14 xl:h-16"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="h-full">
                              <img
                                src="https://images.prismic.io/ulaman/ZtB9AUaF0TcGJhNw_loop.png?auto=format,compress"
                                alt="Loop awards ulaman bali"
                                className="w-auto h-11 lg:h-14 xl:h-16"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="h-full">
                              <img
                                src="https://images.prismic.io/ulaman/ZtB8YUaF0TcGJhMu_award.png?auto=format,compress"
                                alt="Interior design confederation Singapore awards ulaman bali"
                                className="w-auto h-11 lg:h-14 xl:h-16"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="h-full">
                              <img
                                src="https://images.prismic.io/ulaman/Z9vWIDiBA97GisV6_asfeatured_experiences_white.png?auto=format,compress"
                                alt="NATIONAL GEOGRAPHIC FEATURED ULAMAN BALI"
                                className="w-auto h-11 lg:h-14 xl:h-16"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="h-full">
                              <img
                                src="https://images.prismic.io/ulaman/Z9vXJTiBA97GisWj_Hotellogoblack.png?auto=format,compress"
                                alt="WORLD LUXURY HOTEL AWARDS ULAMAN BALI"
                                className="w-auto h-11 lg:h-14 xl:h-16"
                              />
                            </div>
                          </li>
                        </ul>
                        <div className="absolute top-0 pl-16 left-full flex sm:pl-20 lg:pl-24">
                          <ul className="flex gap-x-16 sm:gap-x-20 lg:gap-x-24 w-max h-full">
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/ZtB9TEaF0TcGJhOP_deluxe.png?auto=format,compress"
                                  alt="Destination deluxe ulaman bali"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/ZtB82EaF0TcGJhNj_unesco.png?auto=format,compress"
                                  alt="Unesco ulaman bali"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/ZtB8rkaF0TcGJhNW_kohler.png?auto=format,compress"
                                  alt="Kohler bold design awards ulaman bali"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/ZtB9AUaF0TcGJhNw_loop.png?auto=format,compress"
                                  alt="Loop awards ulaman bali"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/ZtB8YUaF0TcGJhMu_award.png?auto=format,compress"
                                  alt="Interior design confederation Singapore awards ulaman bali"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/Z9vWIDiBA97GisV6_asfeatured_experiences_white.png?auto=format,compress"
                                  alt="NATIONAL GEOGRAPHIC FEATURED ULAMAN BALI"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/Z9vXJTiBA97GisWj_Hotellogoblack.png?auto=format,compress"
                                  alt="WORLD LUXURY HOTEL AWARDS ULAMAN BALI"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                          </ul>
                          <ul className="pl-16 flex gap-x-16 sm:gap-x-20 lg:gap-x-24 sm:pl-20 lg:pl-24 w-max h-full">
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/ZtB9TEaF0TcGJhOP_deluxe.png?auto=format,compress"
                                  alt="Destination deluxe ulaman bali"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/ZtB82EaF0TcGJhNj_unesco.png?auto=format,compress"
                                  alt="Unesco ulaman bali"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/ZtB8rkaF0TcGJhNW_kohler.png?auto=format,compress"
                                  alt="Kohler bold design awards ulaman bali"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/ZtB9AUaF0TcGJhNw_loop.png?auto=format,compress"
                                  alt="Loop awards ulaman bali"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/ZtB8YUaF0TcGJhMu_award.png?auto=format,compress"
                                  alt="Interior design confederation Singapore awards ulaman bali"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/Z9vWIDiBA97GisV6_asfeatured_experiences_white.png?auto=format,compress"
                                  alt="NATIONAL GEOGRAPHIC FEATURED ULAMAN BALI"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="h-full">
                                <img
                                  src="https://images.prismic.io/ulaman/Z9vXJTiBA97GisWj_Hotellogoblack.png?auto=format,compress"
                                  alt="WORLD LUXURY HOTEL AWARDS ULAMAN BALI"
                                  className="w-auto h-11 lg:h-14 xl:h-16"
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                    <footer className="pt-20 app-container">
                      <nav>
                        <ul className="flex flex-row flex-wrap gap-x-1 gap-y-4 justify-between">
                          <li>
                            <a
                              href="/legal/terms"
                              className="text-smallest ui-underline-anim"
                            >
                              Terms
                            </a>
                          </li>
                          <li>
                            <a
                              href="/legal/privacy-policy"
                              className="text-smallest ui-underline-anim"
                            >
                              Privacy
                            </a>
                          </li>
                          <li>
                            <a
                              href="/contact/ulaman-bookings"
                              className="text-smallest ui-underline-anim"
                            >
                              Ulaman Bookings
                            </a>
                          </li>

                          <li>
                            <span className="text-smallest">
                              Kids under 6 are not advised.
                            </span>
                          </li>
                          <li>
                            <span className="text-smallest">
                              {" "}
                              © 2024-2025 Two Moons Studio for ulamanbali.com.
                              All Rights Reserved{" "}
                            </span>
                          </li>
                          <li className="order-3">
                            <a
                              href="https://www.twomoonsstudio.com"
                              target="_blank"
                              className="text-smallest no-heart-color ui-underline-anim"
                            >
                              {" "}
                              Made With ❤︎ By{" "}
                              <span className="opacity-100">
                                Two Moons Studio
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </footer>
                  </div>
                </div>
                <nav className="bg-light py-7 text-dark-emphasis max-w-screen overflow-hidden">
                  <div className="animate-slide flex w-max">
                    <ul className="flex gap-x-9 pl-9 xl:gap-x-10 xl:pl-10 justify-between">
                      <li className="flex gap-x-9">
                        <div>
                          <span className="aspect-square w-2 rounded-full inline-block bg-current"></span>
                        </div>
                        <button id="fnqrmj">
                          <span>The Avatar Experience</span>
                          <span>&nbsp;|&nbsp;</span>
                          <span>3 days 2 nights</span>
                        </button>
                      </li>
                      <li className="flex gap-x-9">
                        <div>
                          <span className="aspect-square w-2 rounded-full inline-block bg-current"></span>
                        </div>
                        <button id="nex625">
                          <span>The Ultimate Honeymoon</span>
                          <span>&nbsp;|&nbsp;</span>
                          <span>3 days 2 nights</span>
                        </button>
                      </li>
                    </ul>
                    <div className="absolute left-full flex pl-9 gap-x-9 xl:pl-10 xl:gap-x-10">
                      <ul className="flex gap-x-9 w-max xl:gap-x-10 justify-between">
                        <li className="flex gap-x-9">
                          <div>
                            <span className="aspect-square w-2 rounded-full inline-block bg-current"></span>
                          </div>
                          <button id="2bzyi9">
                            <span>The Avatar Experience</span>
                            <span>&nbsp;|&nbsp;</span>
                            <span>3 days 2 nights</span>
                          </button>
                        </li>
                        <li className="flex gap-x-9">
                          <div>
                            <span className="aspect-square w-2 rounded-full inline-block bg-current"></span>
                          </div>
                          <button id="20egz">
                            <span>The Ultimate Honeymoon</span>
                            <span>&nbsp;|&nbsp;</span>
                            <span>3 days 2 nights</span>
                          </button>
                        </li>
                      </ul>
                      <ul className="flex gap-x-9 w-max xl:gap-x-10 min-w-[50vw] justify-between">
                        <li className="flex gap-x-9">
                          <div>
                            <span className="aspect-square w-2 rounded-full inline-block bg-current"></span>
                          </div>
                          <button id="w0aeyy">
                            <span>The Avatar Experience</span>
                            <span>&nbsp;|&nbsp;</span>
                            <span>3 days 2 nights</span>
                          </button>
                        </li>
                        <li className="flex gap-x-9">
                          <div>
                            <span className="aspect-square w-2 rounded-full inline-block bg-current"></span>
                          </div>
                          <button id="h3zjb7">
                            <span>The Ultimate Honeymoon</span>
                            <span>&nbsp;|&nbsp;</span>
                            <span>3 days 2 nights</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </footer>
            </main>
          </div>
        </div>

        {/* <HeroSection hero={data.hero} />
        <ParallaxSlices slices={data.parallaxSlices} />
        <HighlightsGrid highlights={data.highlights} />
        <OfferingsList offerings={data.offerings} />
        <ArticlesGrid articles={data.articles} /> */}
      </main>
      <SiteFooter footer={data.footer} social={data.meta.social} />
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
