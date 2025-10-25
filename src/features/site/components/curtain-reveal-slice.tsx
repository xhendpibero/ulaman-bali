"use client";

import Image from "next/image";
import Link from "next/link";

const CURTAIN_IMAGES = [
  {
    src: "https://images.prismic.io/ulaman/ZlQ_cik0V36pXpWM_ulaman-eco-resort.jpg?auto=format,compress",
    alt: "Reiki healing ritual at Ulaman",
    figureClass: "-right-20 top-10 rotate-4",
  },
  {
    src: "https://images.prismic.io/ulaman/ZiPZhfPdc1huKp0x_eco-retreat.jpg?auto=format,compress",
    alt: "Guests gathering at Ulaman eco retreat",
    figureClass: "-left-20 -top-10 -rotate-4",
  },
] as const;

export function CurtainRevealSlice() {
  return (
    <section
      data-slice-type="curtain_reveal"
      data-slice-variation="default"
      className="!mt-28 [&+*]:!mt-0"
    >
      <div className="app-container relative flex w-full max-w-screen items-center justify-center overflow-hidden aspect-screen sm:aspect-auto sm:min-h-[90vh] xl:max-w-unset">
        <div className="pointer-events-none absolute z-10 flex h-full w-full items-center justify-center py-14 2xl:py-0">
          {CURTAIN_IMAGES.map((image) => (
            <figure
              key={image.src}
              className={`absolute aspect-[10/14] w-96 rounded-md shadow-xl ${image.figureClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1280px) 24rem, 18rem"
                className="rounded-md object-cover"
              />
            </figure>
          ))}
        </div>

        <div className="relative z-20 mx-auto max-w-md space-y-5 text-center">
          <div className="mx-auto max-w-92 space-y-5 lg:max-w-lg">
            <h4 className="display-4 heading">
              Discover your path to wellness and growth.
            </h4>
            <p>
              At Ulaman we redefine luxury as an experience that not only
              pampers the senses but also nurtures the soul. Nestled in pristine
              nature, our eco-luxury retreat offers a sanctuary for healing and
              transformation. With personalized programs year-round, enjoy
              dedicated attention and care, immersing yourself in relaxation,
              rejuvenation, or profound inner change through meticulously
              curated activities and treatments.{" "}
              <em>Your transformative journey begins here.</em>
            </p>
          </div>

          <ul className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-8 text-brand">
            <li>
              <Link
                href="/retreats"
                className="btn-primary inline-block capitalize ui-underline-anim reverse"
              >
                Learn More
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
