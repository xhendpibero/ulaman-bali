"use client";

const BACKGROUND_IMAGE =
  "https://images.prismic.io/ulaman/ZpZPRh5LeNNTxMAj_ulaman.jpg?auto=format,compress";

export function ArchitectureMediaSlice() {
  return (
    <section
      data-slice-type="arch_media"
      data-slice-variation="default"
      className="sandikala-rounded-exception flex aspect-screen justify-center xl:h-[150vh] xl:aspect-auto"
    >
      <div
        className="relative flex h-full w-1/2 justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          borderRadius: "671px 671px 0 0",
        }}
      >
        <div className="h-screen w-screen rounded-none object-cover xl:absolute">
          <div
            className="h-full w-full"
            style={{
              transform: "translate(0px, -3211.56px)",
              willChange: "transform",
            }}
            data-speed="0.01"
            data-lag="0"
          >
            <img
              src={BACKGROUND_IMAGE}
              alt="Ulaman Bali"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

