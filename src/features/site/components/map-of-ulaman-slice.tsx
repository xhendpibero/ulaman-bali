"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type MapPointModalContent = {
  category: string;
  title: string;
  subtitle?: string;
  description: ReactNode;
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
  images: Array<{
    src: string;
    alt: string;
  }>;
};

type MapPoint = {
  top: string;
  left: string;
  icon: string;
  label: string;
  modal?: MapPointModalContent;
};

const MAP_POINT_DETAILS: Record<string, MapPointModalContent> = {
  "Ulaman Hall": {
    category: "Meeting Room",
    title: "Ulaman Hall",
    subtitle: "Opening Soon!",
    description: (
      <p>
        Our versatile meeting room, equipped with high-tech audio and visual
        systems, is perfect for corporate meetings and banquets. It can be
        divided into smaller spaces and accommodates up to 50 guests, ensuring
        a seamless and professional experience for all your events.
      </p>
    ),
    cta: { label: "Learn more", href: "/facilities" },
    images: [
      {
        src: "https://images.prismic.io/ulaman/Zo4FqR5LeNNTw-MB_ulaman.jpg?auto=format,compress",
        alt: "Ulaman Hall exterior",
      },
      {
        src: "https://images.prismic.io/ulaman/Zo4FqR5LeNNTw-MA_hall.jpg?auto=format,compress",
        alt: "Ulaman Hall meeting room interior",
      },
    ],
  },
  "Grand Lagoon Private Pool": {
    category: "Accommodation",
    title: "Grand Lagoon Private Pool",
    description: (
      <p>
        This beautifully designed, exclusive villa offers the best views in the
        entire resort — a breathtaking 180-degree panorama of Ulaman&apos;s
        jungle, lagoon river, rice fields, and terraces. Inside, you&apos;ll
        find expansive dining and living areas, a private saltwater pool, a
        sundeck with lounge seating, and a hammock — all thoughtfully arranged
        to create an effortless indoor-outdoor flow.
      </p>
    ),
    cta: { label: "Learn more", href: "/rooms/grand-lagoon-private-pool" },
    images: [
      {
        src: "https://images.prismic.io/ulaman/Zj16T0MTzAJOCrGZ_eco-luxury-retreat-bali.jpg?auto=format,compress",
        alt: "Grand Lagoon Private Pool villa exterior",
      },
      {
        src: "https://images.prismic.io/ulaman/Zj16UkMTzAJOCrGd_hotels-in-bali.jpg?auto=format,compress",
        alt: "Grand Lagoon Private Pool outdoor lounge",
      },
      {
        src: "https://images.prismic.io/ulaman/Zj16UUMTzAJOCrGb_hotels-bali.jpg?auto=format,compress",
        alt: "Grand Lagoon Private Pool interior living space",
      },
    ],
  },
  "Avatar Tree House": {
    category: "Accommodation",
    title: "Avatar Tree House",
    description: (
      <p>
        Elevated among the treetops, Ulaman&apos;s Avatar Tree House Villas
        offer a truly unique sanctuary surrounded by breathtaking rice field
        views and lush jungle landscapes. Perched 9 meters above ground and
        accessed via a striking bamboo-woven tunnel, these villas immerse guests
        in a seamless blend of architectural elegance and natural serenity.
      </p>
    ),
    cta: { label: "Learn more", href: "/rooms/avatar-tree-house" },
    images: [
      {
        src: "https://images.prismic.io/ulaman/ZpIOkB5LeNNTxIQ6_tree-house.jpg?auto=format,compress",
        alt: "Avatar Tree House villa among treetops",
      },
    ],
  },
  "Floating Lake": {
    category: "Accommodation",
    title: "Floating Lake",
    description: (
      <p>
        Set above Bali&apos;s only bio-filtered, koi-filled lake, Ulaman&apos;s
        Floating Lake Villas offer a serene and luxurious experience unlike any
        other. Each villa features a private floating deck and a sunken round
        hammock, thoughtfully designed for couples — perfect for stargazing or
        feeding the koi below.
      </p>
    ),
    cta: { label: "Learn more", href: "/rooms/floating-lake" },
    images: [
      {
        src: "https://images.prismic.io/ulaman/ZjHaf0MTzAJOCdga_ulaman-eco-retreat.jpg?auto=format,compress",
        alt: "Floating Lake villa overlooking koi lake",
      },
    ],
  },
  "Riverside Spa": {
    category: "Facilities",
    title: "Riverside Spa",
    description: (
      <p>
        Discover a sanctuary of wellness at our Riverside Spa. Enjoy hot and
        cold plunge pools, a steam room, and an infrared sauna, all complimentary
        for in-house guests. Indulge in signature treatments and relax in
        river-overhanging hammocks, serenaded by the soothing sounds of the
        flowing river below.
      </p>
    ),
    cta: { label: "Learn more", href: "/facilities" },
    images: [
      {
        src: "https://images.prismic.io/ulaman/ZiSAvPPdc1huKqB-_restuarant-near-ubud.jpg?auto=format,compress",
        alt: "Riverside spa relaxation area",
      },
    ],
  },
  "Bio-Filtered Lake": {
    category: "Nature",
    title: "Bio-Filtered Lake",
    description: (
      <p>
        Experience Ulaman’s biofiltration lake, a swimmable, eco-friendly
        sanctuary home to hundreds of vibrant koi fish. Fed by spring and well
        water, this only man-made lake in Tabanan offers the unique opportunity
        to paddleboard among Avatar-like villas and lush surrounding jungle.
      </p>
    ),
    cta: { label: "Learn more", href: "/experiences" },
    images: [
      {
        src: "https://images.prismic.io/ulaman/Zlas5KWtHYXtT4Cm_yoga-in-bali.jpg?auto=format,compress",
        alt: "Guests enjoying the bio-filtered lake at Ulaman",
      },
    ],
  },
};

const BASE_MAP_POINTS: Array<Omit<MapPoint, "modal">> = [
  {
    top: "8%",
    left: "56%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_oxZm069VX1y9A_Group6120.svg?auto=compress,format",
    label: "Tennis Court",
  },
  {
    top: "17%",
    left: "53%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_jWpm069VX1y4H_Group5988.svg?auto=compress,format",
    label: "Gym",
  },
  {
    top: "24%",
    left: "33%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format",
    label: "Bio-Filtered Lake",
  },
  {
    top: "13%",
    left: "56%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg?auto=compress,format",
    label: "Reception",
  },
  {
    top: "36%",
    left: "60%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Ulin Poolside",
  },
  {
    top: "31%",
    left: "47%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format",
    label: "Avatar Tree House",
  },
  {
    top: "37%",
    left: "41%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format",
    label: "Cliffside Yoga Shala",
  },
  {
    top: "39%",
    left: "63%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Cocoon Jungle",
  },
  {
    top: "26%",
    left: "10%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Grand Lagoon Private Pool",
  },
  {
    top: "18%",
    left: "14%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Avatar Tree House Outlook",
  },
  {
    top: "70%",
    left: "61%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg?auto=compress,format",
    label: "Ulaman Hall",
  },
  {
    top: "42%",
    left: "52%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format",
    label: "E.A.R.T.H Lounge & Bar",
  },
  {
    top: "30%",
    left: "28%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format",
    label: "Riverside Spa",
  },
  {
    top: "37%",
    left: "36%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format",
    label: "Waterfall & Waterfall Deck",
  },
  {
    top: "46%",
    left: "71%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Jungle Garden Pool",
  },
  {
    top: "38%",
    left: "54%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format",
    label: "E.A.R.T.H Lounge Pool",
  },
  {
    top: "12%",
    left: "65%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_t5pm069VX1y_y_Layer2.svg?auto=compress,format",
    label: "Gift Shop",
  },
  {
    top: "21%",
    left: "25%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Floating Lake",
  },
  {
    top: "21%",
    left: "42%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format",
    label: "E.A.R.T.H Restaurant",
  },
  {
    top: "23%",
    left: "48%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format",
    label: "Waterfall Infinity Pool",
  },
  {
    top: "57%",
    left: "65%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format",
    label: "Mandala Yoga Shala",
  },
];

const MAP_POINTS: MapPoint[] = BASE_MAP_POINTS.map((point) => ({
  ...point,
  modal:
    MAP_POINT_DETAILS[point.label] ??
    ({
      category: "Discover",
      title: point.label,
      description: (
        <p>
          We&apos;re crafting a detailed highlight for this space. Check back
          soon to explore more about {point.label}.
        </p>
      ),
      images: [
        {
          src: "/ulaman.B-iYsIcw.jpg",
          alt: "Ulaman Bali aerial map",
        },
      ],
    } satisfies MapPointModalContent),
}));

export function MapOfUlamanSlice() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleOpenModal = useCallback((index: number) => {
    setActiveIndex(index);
    setActiveSlide(0);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handlePointKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLDivElement>, index: number) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleOpenModal(index);
      }
    },
    [handleOpenModal],
  );

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, handleCloseModal]);

  const activePoint =
    activeIndex !== null ? MAP_POINTS[activeIndex] : undefined;
  const modalContent = activePoint?.modal;
  const images = modalContent?.images ?? [];
  const hasMultipleImages = images.length > 1;

  return (
    <section
      data-slice-type="map_of_ulaman"
      data-slice-variation="default"
      className="relative"
    >
      <div className="mx-auto">
        <header className="mx-auto max-w-7xl space-y-4 px-6 lg:px-12">
          <div>
            <h3 className="display-3 heading">
              Discover Ulaman <br />
              From Above
            </h3>
          </div>
          <div className="flex w-fit items-center gap-1.5 rounded-full bg-brand p-2.5 pr-3 text-light xl:flex">
            <span className="aspect-square w-2 rounded-full bg-light" />
            <span className="text-sm text-brand-cream-dark">Tap on an icon</span>
          </div>
          <div className="block text-smaller font-medium text-brand-darker xl:hidden">
            <span>* Use your finger to navigate</span>
          </div>
        </header>

        <div className="flex items-center justify-center">
          <div className="hide-scrollbar relative h-full w-full overflow-x-auto lg:show-scrollbar">
            <div className="relative mx-auto min-w-[80rem] max-w-[108rem]">
              <div className="aspect-[14.8/10] whitespace-nowrap">
                <Image
                  src="/ulaman.B-iYsIcw.jpg"
                  alt="Map of Ulaman Eco-Luxury Retreat"
                  width={1728}
                  height={1167}
                  priority
                  className="h-full w-full object-cover"
                />

                <ul>
                  {MAP_POINTS.map((point, index) => (
                    <li key={`${point.label}-${point.top}-${point.left}`}>
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => handleOpenModal(index)}
                        onKeyDown={(event) =>
                          handlePointKeyDown(event, index)
                        }
                        className="active-class:bg-brand active-class:text-light active-class:gap-3 absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-light px-2 text-14 text-brand transition-colors duration-300 hover:z-20 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand group"
                        style={{ top: point.top, left: point.left }}
                        aria-label={`Explore ${point.label}`}
                      >
                        <div className="w-5 shrink-0">
                          <Image
                            src={point.icon}
                            alt={point.label}
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="w-full max-w-0 overflow-hidden transition-[max-width] duration-300 ease-in-out group-hover group-hover:max-w-[220px] [.group.active_&]:max-w-[220px]">
                          <span className="invisible text-smaller group-hover:visible [.group.active_&]:visible">
                            {point.label}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {activePoint && modalContent ? (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-dark/70 px-4 py-8"
            role="dialog"
            aria-modal="true"
            aria-label={modalContent.title}
            onClick={handleCloseModal}
          >
            <article
              className="relative flex w-screen max-w-[50rem] flex-col overflow-hidden bg-light text-brand shadow-2xl sm:mx-5 sm:flex-row"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleCloseModal}
                className="fixed right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-light text-brand shadow sm:absolute"
                aria-label="Close location details"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-xicon h-full w-full stroke-current"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              {images.length > 0 ? (
                <div className="aspect-square sm:aspect-auto">
                  <figure className="relative aspect-square h-full min-h-[25rem] w-80 overflow-hidden sm:aspect-auto">
                    {images.map((image, index) => (
                      <div
                        key={image.src}
                        className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                          index === activeSlide ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 640px) 20rem, 100vw"
                          className="rounded-none object-cover"
                        />
                      </div>
                    ))}

                    {hasMultipleImages ? (
                      <div className="absolute inset-x-3.5 bottom-5 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveSlide((current) =>
                              current === 0
                                ? current
                                : Math.max(current - 1, 0)
                            )
                          }
                          disabled={activeSlide === 0}
                          className="flex h-12 w-12 items-center justify-center rounded-md border border-current bg-dark text-light transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-50"
                          aria-label="Previous image"
                        >
                          <ArrowIcon className="rotate-180" />
                        </button>
                        <nav aria-label="Image pagination">
                          <ul className="flex gap-2">
                            {images.map((image, index) => (
                              <li key={`${image.src}-${index}`}>
                                <button
                                  type="button"
                                  onClick={() => setActiveSlide(index)}
                                  className={`h-3 w-3 rounded-full transition-opacity duration-300 ${
                                    index === activeSlide
                                      ? "bg-light opacity-100"
                                      : "bg-light opacity-50"
                                  }`}
                                  aria-label={`Go to image ${index + 1}`}
                                />
                              </li>
                            ))}
                          </ul>
                        </nav>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveSlide((current) =>
                              current === images.length - 1
                                ? current
                                : Math.min(current + 1, images.length - 1)
                            )
                          }
                          disabled={activeSlide === images.length - 1}
                          className="flex h-12 w-12 items-center justify-center rounded-md border border-current bg-dark text-light transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-50"
                          aria-label="Next image"
                        >
                          <ArrowIcon />
                        </button>
                      </div>
                    ) : null}
                  </figure>
                </div>
              ) : null}

              <div className="relative flex flex-1 flex-col space-y-4 overflow-auto px-7 py-10 md:space-y-5 md:py-14 md:pl-12 md:pr-9">
                <div className="space-y-3">
                  <p className="text-sm text-brand/70">{modalContent.category}</p>
                  <h4 className="heading display-4">{modalContent.title}</h4>
                  {modalContent.subtitle ? (
                    <p className="italic text-brand">{modalContent.subtitle}</p>
                  ) : null}
                  <div className="space-y-3 text-sm leading-relaxed text-brand/90">
                    {modalContent.description}
                  </div>
                </div>

                {modalContent.cta ? (
                  <a
                    href={modalContent.cta.href}
                    target={modalContent.cta.external ? "_blank" : undefined}
                    rel={
                      modalContent.cta.external ? "noopener noreferrer" : undefined
                    }
                    className="ui-underline-anim reverse btn-primary inline-block text-smaller font-medium"
                  >
                    {modalContent.cta.label}
                  </a>
                ) : null}
              </div>
            </article>
          </div>
        </ModalPortal>
      ) : null}
    </section>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-move-right-icon h-6 w-6 stroke-1 ${className ?? ""}`}
      aria-hidden="true"
    >
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </svg>
  );
}

function ModalPortal({ children }: { children: ReactNode }) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const node = document.createElement("div");
    node.setAttribute("data-modal-root", "ulaman-map-modal");
    document.body.appendChild(node);
    setContainer(node);

    return () => {
      document.body.removeChild(node);
    };
  }, []);

  if (!container) {
    return null;
  }

  return createPortal(children, container);
}
