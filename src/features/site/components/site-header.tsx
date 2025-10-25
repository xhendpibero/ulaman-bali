"use client";
import Link from "next/link";
import { useState } from "react";
import type { NavigationItem } from "@/types/site";
type SiteHeaderProps = {
  navigation: NavigationItem[];
  siteName: string;
};
export function SiteHeader({ navigation, siteName }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      id="header"
      className="fixed top-0 z-last-absolute w-full h-screen pointer-events-none"
    >
      <div className="flex relative z-50 py-2 sm:py-4 app-container transition-[background] duration-300 lg:px-8 lg:justify-between lg:items-center xl:px-10 xl:max-w-unset text-light bg-transparent pointer-events-auto">
        <div className="flex-1 flex items-center">
          <div>
            <nav className="w-full flex items-center space-x-14">
              <button
                className="relative group py-5 hover:cursor-pointer focus:outline-none header-animation-target opacity-0"
                style={{ opacity: 1 }}
              >
                <span className="hidden" aria-hidden="false">
                  Open Menu
                </span>
                <div className="w-16 h-3 after:w-full before:w-6/12 before:left-0 after:left-0 lines relative after:bottom-px before:top-px group-hover:after:w-11/12 group-hover:before:w-11/12"></div>
              </button>
              <ul className="hidden space-x-9 xl:flex">
                <li
                  className="header-animation-target opacity-0"
                  style={{ opacity: 1 }}
                >
                  <a href="/rooms" className="ui-underline-anim">
                    Villas
                  </a>
                </li>
                <li
                  className="header-animation-target opacity-0"
                  style={{ opacity: 1 }}
                >
                  <a
                    href="https://riversidespabyulaman.com/"
                    className="ui-underline-anim"
                  >
                    Spa
                  </a>
                </li>
                <li
                  className="header-animation-target opacity-0"
                  style={{ opacity: 1 }}
                >
                  <a
                    href="https://earthbyulaman.com"
                    className="ui-underline-anim"
                  >
                    Dine
                  </a>
                </li>
                <li
                  className="header-animation-target opacity-0"
                  style={{ opacity: 1 }}
                >
                  <a href="/retreats" className="ui-underline-anim">
                    Retreats
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="flex-1 text-smallest hidden sm:block lg:block"
            style={{ display: "none" }}
          >
            <ul className="opacity-0 lg:opacity-100">
              <li>
                <a
                  href="https://www.google.com/travel/search?q=ulaman%20bali&amp;g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C10210222%2C72248047%2C72248049%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72462234%2C72470899%2C72471280%2C72472051%2C72473841%2C72481459%2C72485658%2C72486593%2C72494250%2C72499705%2C72513513%2C72536387%2C72549171%2C72569093%2C72570850%2C72602734%2C72616120%2C72619927%2C72620306%2C72620962%2C72634630%2C72648289%2C72653660%2C72658035%2C72661848%2C72662543%2C72671093%2C72673973&amp;hl=en-ID&amp;gl=id&amp;cs=1&amp;ssta=1&amp;ts=CAEaRwopEicyJTB4MmRkMjM5MjEzNjlkNTcxMzoweDg0ZjMzZTkzODU1NTBmZDQSGhIUCgcI6A8QCRgTEgcI6A8QCRgUGAEyAhAA&amp;qs=CAEyFENnc0kxSl9VcXJqU3pfbUVBUkFCOAJCCQnUD1WFkz7zhEIJCdQPVYWTPvOE&amp;ap=ugEHcmV2aWV3cw&amp;ictx=111&amp;ved=0CAAQ5JsGahcKEwiomPuP68GHAxUAAAAAHQAAAAAQCg"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center"
                >
                  <span>4.7</span>&nbsp;
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
                  <span>&nbsp;/&nbsp;</span>
                  <span>742 Google Reviews</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Retreat-Tabanan_Bali.html"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center"
                >
                  <span>4.8</span>&nbsp;
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
                  <span>&nbsp;/&nbsp;</span>
                  <span>295 Tripadvisor Reviews</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="flex justify-center items-center flex-1">
            <a
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active transition-opacity duration-300"
            >
              <figure
                className="transition-[width] duration-300 logo opacity-0 w-24 sm:w-28 lg:w-40 xl:w-32"
                style={{ opacity: 1 }}
              >
                <img
                  src="https://ulaman.cdn.prismic.io/ulaman/aAMlsuvxEdbNPPas_logo-new.svg"
                  alt=""
                  className="w-full h-auto"
                />
              </figure>
            </a>
          </div>
        </div>
        <div className="flex justify-end items-center flex-1 xl:items-start">
          <nav className="flex justify-end items-center xl:items-start pointer-events-auto">
            <div>
              <button
                className="rounded-asymetrical py-2 px-6 leading-none sm:py-4 lg:px-8 hover:bg-brand hover:border-brand hover:text-light transition-colors duration-300 header-animation-target opacity-0"
                style={{ opacity: 1 }}
              >
                <span className="sm:hidden">Book</span>
                <span className="hidden sm:inline-block">Stay With Us</span>
              </button>
            </div>
            <button style={{ display: "none" }} className="w-10 aspect-square">
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
                className="lucide lucide-xicon w-full h-full stroke-1"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
      <aside
        style={{ display: "none" }}
        className="bg-light-background text-brand absolute inset-0 pointer-events-auto pt-40 xl:flex xl:px-10 xl:gap-x-28 xl:pb-20 xl:pt-56 z-40"
      >
        <div className="flex flex-col items-end w-full h-full gap-y-8 xl:w-1/3">
          <div className="flex-1 flex flex-col justify-center sm:pr-16 lg:p-0 xl:hidden">
            <nav className="w-fit app-container display-4 sm:text-30 lg:text-45 sm:px-11 lg:px-20">
              <ul className="gap-x-2.5 gap-y-1.5 sm:gap-x-3.5 sm:gap-y-5 lg:gap-y-6 flex flex-wrap w-fit">
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <a
                    aria-current="page"
                    href="/"
                    className="router-link-active active active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Home
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/rooms"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Villas
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/packages-ulaman"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Packages
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="https://riversidespabyulaman.com/"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Spa
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/retreats"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Retreats
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="https://earthbyulaman.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Dine
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/activities"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Experiences
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/facilities"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Facilities
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/blog"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/testimonials"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Reviews
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/about"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    About
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/contact"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li
                  className="space-x-2.5 sm:space-x-3.5 lg:space-x-5 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/ulaman-map"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    The Map
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden flex-1 xl:flex flex-col justify-center">
            <nav className="w-fit display-4 text-40">
              <ul className="gap-3 flex flex-wrap w-fit">
                <li
                  className="space-x-3 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <a
                    aria-current="page"
                    href="/"
                    className="router-link-active active active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Home
                  </a>
                </li>
                <li
                  className="space-x-3 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/rooms"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Villas
                  </a>
                </li>
                <li
                  className="space-x-3 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/packages-ulaman"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Packages
                  </a>
                </li>
                <li
                  className="inline-block group space-x-3 menu-link opacity-0"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="https://riversidespabyulaman.com/"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Spa
                  </a>
                </li>
                <li
                  className="space-x-3 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/retreats"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Retreats
                  </a>
                </li>
                <li
                  className="space-x-3 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="https://earthbyulaman.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Dine
                  </a>
                </li>
                <li
                  className="space-x-3 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/activities"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Experiences
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="app-container flex items-center justify-between w-full sm:px-11 lg:px-20 xl:p-0">
            <nav className="w-fit text-smaller w-1/2 max-w-52 lg:max-w-72 xl:w-full">
              <ul className="gap-.5em flex flex-wrap w-fit">
                <li
                  className="space-x-.5em menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <a
                    href="https://wa.me/6281227142854"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Whatsapp
                  </a>
                </li>
                <li
                  className="space-x-.5em menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="https://www.google.com/maps/dir//Ulaman+Road,+Buwit,+Kediri,+Tabanan+Regency,+Bali+82121/@-8.5929565,115.048163,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd23921369d5713:0x84f33e9385550fd4!2m2!1d115.1305649!2d-8.5929653?entry=ttu"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Directions
                  </a>
                </li>
                <li
                  className="space-x-.5em menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="https://www.tripadvisor.com/Hotel_Review-g608496-d21058098-Reviews-Ulaman_Eco_Luxury_Resort-Tabanan_Bali.html"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    TripAdvisor
                  </a>
                </li>
                <li
                  className="space-x-.5em menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="https://www.instagram.com/ulamanbali"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li
                  className="space-x-.5em menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="https://www.facebook.com/UlamanBali/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </nav>
            <div className="w-20 text-light xl:hidden">
              <img
                src="https://ulaman.cdn.prismic.io/ulaman/ZpJWph5LeNNTxIU8_ulaman.svg?auto=compress,format"
                alt="Ulaman Bali"
                className="w-full h-auto menu-link opacity-0"
                loading="lazy"
                style={{ opacity: 0 }}
              />
            </div>
          </div>
          <div className="w-screen aspect-[15/10] rounded-t-full sm:aspect-video xl:hidden overflow-hidden">
            <img
              src="https://images.prismic.io/ulaman/Zjeq0EMTzAJOCirD_hotel.jpg?auto=format,compress"
              alt="ulaman bali from drone the best hotel in the world "
              className="w-full h-full object-cover menu-image opacity-0"
              loading="lazy"
              style={{ opacity: 0 }}
            />
          </div>
        </div>
        <div
          className="hidden xl:block xl:w-1/3 menu-image opacity-0"
          style={{ opacity: 0 }}
        >
          <figure className="relative w-full h-full object-cover rounded-t-full overflow-hidden">
            <div className="rounded-inherit">
              <div className="absolute inset-0 flex justify-center rounded-inherit">
                <div className="w-full h-full rounded-inherit overflow-hidden">
                  <img
                    src="https://images.prismic.io/ulaman/Zjeq0EMTzAJOCirD_hotel.jpg?auto=format,compress"
                    alt="ulaman bali from drone the best hotel in the world "
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
                    alt="ulaman bali the best bamboo hotel in the world "
                    className="w-full h-full object-cover rounded-inherit"
                    loading="lazy"
                  />
                </div>
                <div
                  style={{ display: "none" }}
                  className="w-full h-full rounded-inherit overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/Zo56cB5LeNNTw_Xy_ulaman-2.jpg?auto=format,compress"
                    alt="ulaman bali the best bamboo hotel in the world "
                    className="w-full h-full object-cover rounded-inherit"
                    loading="lazy"
                  />
                </div>
                <div
                  style={{ display: "none" }}
                  className="w-full h-full rounded-inherit overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress"
                    alt="riverside spa by ulaman bali the best bamboo hotel in the world "
                    className="w-full h-full object-cover rounded-inherit"
                    loading="lazy"
                  />
                </div>
                <div
                  style={{ display: "none" }}
                  className="w-full h-full rounded-inherit overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress"
                    alt="Ulaman Bali Retreats"
                    className="w-full h-full object-cover rounded-inherit"
                    loading="lazy"
                  />
                </div>
                <div
                  style={{ display: "none" }}
                  className="w-full h-full rounded-inherit overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZiSAvPPdc1huKqB-_restuarant-near-ubud.jpg?auto=format,compress"
                    alt="Earth by ulaman bali"
                    className="w-full h-full object-cover rounded-inherit"
                    loading="lazy"
                  />
                </div>
                <div
                  style={{ display: "none" }}
                  className="w-full h-full rounded-inherit overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZiR1p_Pdc1huKqBs_sound-healing-bali.jpg?auto=format,compress"
                    alt="sound healing in bali"
                    className="w-full h-full object-cover rounded-inherit"
                    loading="lazy"
                  />
                </div>
                <div
                  style={{ display: "none" }}
                  className="w-full h-full rounded-inherit overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZoafWB5LeNNTwyz5_yoga-shala.jpg?auto=format,compress"
                    alt="yoga-shala ulaman bali"
                    className="w-full h-full object-cover rounded-inherit"
                    loading="lazy"
                  />
                </div>
                <div
                  style={{ display: "none" }}
                  className="w-full h-full rounded-inherit overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/Zjr4hkMTzAJOCn6N_bali-architecture.jpg?auto=format,compress"
                    alt="the bamboo architecture ulaman bali"
                    className="w-full h-full object-cover rounded-inherit"
                    loading="lazy"
                  />
                </div>
                <div
                  style={{ display: "none" }}
                  className="w-full h-full rounded-inherit overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZpD3Ax5LeNNTxF6c_Ulaman.jpg?auto=format,compress"
                    alt="ulaman bali by drone"
                    className="w-full h-full object-cover rounded-inherit"
                    loading="lazy"
                  />
                </div>
                <div
                  style={{ display: "none" }}
                  className="w-full h-full rounded-inherit overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/ZiPocPPdc1huKp2I_Ulaman-bali.jpg?auto=format,compress"
                    alt="Ulaman bali entrance"
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
                    alt="infinity pool at sunset time ulaman bali"
                    className="w-full h-full object-cover rounded-inherit"
                    loading="lazy"
                  />
                </div>
                <div
                  style={{ display: "none" }}
                  className="w-full h-full rounded-inherit overflow-hidden"
                >
                  <img
                    src="https://images.prismic.io/ulaman/Zpct2h5LeNNTxOAy_skyvilla.jpg?auto=format,compress"
                    alt="sky bamboo villa ulaman bali"
                    className="w-full h-full object-cover rounded-inherit"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </figure>
        </div>
        <div className="hidden xl:w-1/3 xl:flex flex-col items-end">
          <div className="flex-1 flex flex-col justify-center">
            <nav className="w-fit display-4 text-40 w-fit">
              <ul className="gap-3 justify-end flex flex-wrap w-fit">
                <li
                  className="space-x-3 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <a
                    href="/facilities"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Facilities
                  </a>
                </li>
                <li
                  className="space-x-3 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/blog"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li
                  className="space-x-3 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/testimonials"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Reviews
                  </a>
                </li>
                <li
                  className="inline-block group space-x-3 menu-link opacity-0"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/about"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    About
                  </a>
                </li>
                <li
                  className="space-x-3 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/contact"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li
                  className="space-x-3 menu-link opacity-0 inline-block group"
                  style={{ opacity: 0 }}
                >
                  <span className="group-first:hidden">/</span>
                  <a
                    href="/ulaman-map"
                    className="active-class:opacity-50 hover:opacity-50 transition-opacity duration-300"
                  >
                    The Map
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-20 inline-block">
            <img
              src="https://ulaman.cdn.prismic.io/ulaman/ZpJWph5LeNNTxIU8_ulaman.svg?auto=compress,format"
              alt="Ulaman Bali"
              className="w-full h-auto menu-link opacity-0"
              loading="lazy"
              style={{ opacity: 0 }}
            />
          </div>
        </div>
      </aside>
    </header>
  );
}