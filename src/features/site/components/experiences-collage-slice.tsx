"use client";

import Image from "next/image";

type ExperienceTile = {
  image: {
    src: string;
    alt: string;
  };
  label: string;
  wrapperClass: string;
};

const EXPERIENCES: ExperienceTile[] = [
  {
    image: {
      src: "https://images.prismic.io/ulaman/ZnWOMpbWFbowew-3_eco-reosrt.jpg?auto=format,compress",
      alt: "Private tennis session at Ulaman",
    },
    label: "Private Tennis Coach",
    wrapperClass: "aspect-[10/14] sm:aspect-[10/19] lg:aspect-[10/14] xl:aspect-[10/12.5]",
  },
  {
    image: {
      src: "https://images.prismic.io/ulaman/ZoDImh5LeNNTwp39_restaurant.jpg?auto=format,compress",
      alt: "Romantic dining by Ulaman's natural waterfalls",
    },
    label: "Romantic 5-Star Culinary Experience by Ulaman's Natural Waterfalls!",
    wrapperClass: "aspect-[10/13] sm:aspect-[10/16] lg:aspect-[10/12] xl:aspect-[10/9.5]",
  },
  {
    image: {
      src: "https://images.prismic.io/ulaman/Zlas5KWtHYXtT4Cm_yoga-in-bali.jpg?auto=format,compress",
      alt: "Yoga shala at Ulaman Eco Luxury Retreat",
    },
    label: "Private Yoga Session (Hatha, Yin or Fly High Yoga)",
    wrapperClass: "aspect-[10.8/10] sm:aspect-[10/15] lg:aspect-[10.7/10] xl:aspect-[10/9]",
  },
  {
    image: {
      src: "https://images.prismic.io/ulaman/ZlbB0KWtHYXtT4Fc_bali-hotels.jpg?auto=format,compress",
      alt: "Romantic bed decorations",
    },
    label: "Romantic Bed Decorations",
    wrapperClass: "aspect-[10.3/10] sm:aspect-[10/20] lg:aspect-[10/16.7] xl:aspect-[10/13]",
  },
  {
    image: {
      src: "https://images.prismic.io/ulaman/ZoZc3h5LeNNTwyC-_luxury-resort-bali.jpg?auto=format,compress",
      alt: "Helicopter over Bali rice terraces",
    },
    label: "VIP Airport Transfers via Helicopter",
    wrapperClass: "aspect-[10/15.5] sm:aspect-[10/19.5] lg:aspect-[10/14] xl:aspect-[10/12.5]",
  },
  {
    image: {
      src: "https://images.prismic.io/ulaman/ZlbDa6WtHYXtT4F-_eco-hotel-bali.jpg?auto=format,compress",
      alt: "Celebratory balloons and bed decoration",
    },
    label: "Balloons and Sparkles",
    wrapperClass: "aspect-[10/11] sm:aspect-[10/15.5] lg:aspect-[10/12] xl:aspect-[10/9.5]",
  },
];

export function ExperiencesCollageSlice() {
  return (
    <section
      data-slice-type="experiences_catalog"
      data-slice-variation="allExperiencesCollage"
    >
      <div>
        <div>
          <div className="space-y-5 sm:space-y-2.5 lg:space-y-7 xl:space-y-5">
            <div>
              <figure className="columns-2 gap-1.5 space-y-2 md:columns-3 md:gap-2 xl:column">
                {EXPERIENCES.map((experience) => (
                  <div key={experience.label} className={experience.wrapperClass}>
                    <div className="relative h-full w-full overflow-hidden rounded-md">
                      <article className="block h-full w-full cursor-pointer overflow-hidden rounded-md">
                        <Image
                          src={experience.image.src}
                          alt={experience.image.alt}
                          fill
                          loading="lazy"
                          className="h-full w-full object-cover"
                          sizes="(min-width: 1280px) 20rem, (min-width: 768px) 30vw, 50vw"
                        />
                        <footer className="absolute inset-x-2.5 bottom-2.5">
                          <h6 className="badge w-fit max-w-full bg-light-background/40 py-1 text-tiny font-medium leading-tight text-light-emphasis backdrop-blur-3xl xl:text-smallest">
                            {experience.label}
                          </h6>
                        </footer>
                      </article>
                    </div>
                  </div>
                ))}
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
  );
}
