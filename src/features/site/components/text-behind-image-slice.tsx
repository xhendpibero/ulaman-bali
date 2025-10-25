"use client";

const BANNER_WORDS = ["Balance - Relaxation", "Renewal - Healing"] as const;

const VIDEO_SOURCES = [
  {
    src: "https://ulaman.cdn.prismic.io/ulaman/ZnDvD5m069VX10t2_spa.mp4",
    type: "video/mp4",
  },
  {
    src: "https://ulaman.cdn.prismic.io/ulaman/ZnDvnJm069VX10uC_spa.webm",
    type: "video/webm",
  },
] as const;

const POSTER =
  "https://images.prismic.io/ulaman/ZpH-Kx5LeNNTxIQm_riverside.jpg?auto=format,compress";

export function TextBehindImageSlice() {
  return (
    <section
      data-slice-type="text_behind_image"
      data-slice-variation="video"
      className="relative flex items-center justify-center overflow-hidden"
    >
      <ul className="absolute h-auto w-full">
        {BANNER_WORDS.map((word, index) => (
          <li
            key={word}
            className="flex min-w-full whitespace-nowrap text-90 font-brand leading-none text-brand opacity-10 sm:space-y-5 sm:text-120 lg:space-y-3 lg:text-150 xl:space-y-2.5 xl:text-206"
            style={{ justifyContent: index % 2 === 1 ? "flex-end" : undefined }}
          >
            {word}
          </li>
        ))}
      </ul>

      <div className="relative w-full cursor-pointer">
        <div className="flex justify-center">
          <div className="relative flex h-[90vw] max-w-[65vw] items-center justify-center overflow-hidden rounded-t-[500px] transition-all duration-1000 sm:h-[74vw] sm:max-w-[53vw] xl:h-[49vw] xl:max-w-[37vw]">
            <div className="relative h-full aspect-[18/10]">
              <video
                muted
                loop
                poster={POSTER}
                preload="auto"
                className="h-full w-full rounded-lg object-cover"
              >
                {VIDEO_SOURCES.map((source) => (
                  <source key={source.src} src={source.src} type={source.type} />
                ))}
                <img src={POSTER} alt="Riverside spa pavilion" loading="lazy" />
              </video>
            </div>
            <div className="badge absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-brand-lighter/60 px-4 py-2 text-large text-light shadow-xl backdrop-blur xl:hidden">
              <span className="inline-block aspect-square w-2.5 rounded-full bg-current" />
              <span>Play Video</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

