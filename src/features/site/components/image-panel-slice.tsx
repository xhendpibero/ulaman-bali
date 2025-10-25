"use client";

import Image from "next/image";

const PANEL_IMAGES = [
  {
    src: "https://images.prismic.io/ulaman/ZoDNNB5LeNNTwp4J_earth.jpg?auto=format,compress",
    alt: "Farm-to-table cuisine at Ulaman",
    label: "Ulaman Salad",
    hiddenOnMobile: false,
  },
  {
    src: "https://images.prismic.io/ulaman/ZpDtFx5LeNNTxF0v_Screenshot-2024-07-12-at-13.03.20.jpg?auto=format,compress",
    alt: "Chef Arik preparing a dish",
    label: "Our Chef: Arik",
    hiddenOnMobile: false,
  },
  {
    src: "https://images.prismic.io/ulaman/ZoTULB5LeNNTwvNW_ulaman.jpg?auto=format,compress",
    alt: "Earth restaurant by Ulaman",
    label: "E.A.R.T.H Restaurant",
    hiddenOnMobile: true,
  },
] as const;

export function ImagePanelSlice() {
  return (
    <section
      data-slice-type="image_panel"
      data-slice-variation="withLabels"
    >
      <ul className="flex gap-1.5 px-1.5 sm:gap-3.5 sm:px-6 lg:px-9 xl:gap-5 xl:px-5">
        {PANEL_IMAGES.map((image) => (
          <li
            key={image.src}
            className={[
              "group aspect-[10/16] w-1/2 overflow-hidden rounded-md sm:w-1/3 sm:aspect-[10/14]",
              image.hiddenOnMobile ? "hidden sm:block" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <figure className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 18rem, 50vw"
                className="h-full w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <figcaption className="absolute inset-x-0 bottom-5 flex justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="badge glass bg-light/90 capitalize">{image.label}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
