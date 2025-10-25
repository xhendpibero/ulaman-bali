"use client";

import Image from "next/image";
import {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
} from "react";

const PANEL_IMAGES = [
  {
    src: "https://images.prismic.io/ulaman/ZoDNNB5LeNNTwp4J_earth.jpg?auto=format,compress",
    alt: "Farm-to-table cuisine at Ulaman",
    label: "Ulaman Salad",
    hiddenOnMobile: false,
    speed: 0.35,
  },
  {
    src: "https://images.prismic.io/ulaman/ZpDtFx5LeNNTxF0v_Screenshot-2024-07-12-at-13.03.20.jpg?auto=format,compress",
    alt: "Chef Arik preparing a dish",
    label: "Our Chef: Arik",
    hiddenOnMobile: false,
    speed: 0.25,
  },
  {
    src: "https://images.prismic.io/ulaman/ZoTULB5LeNNTwvNW_ulaman.jpg?auto=format,compress",
    alt: "Earth restaurant by Ulaman",
    label: "E.A.R.T.H Restaurant",
    hiddenOnMobile: true,
    speed: 0.18,
  },
] as const;

export function ImagePanelSlice() {
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const animationFrame = useRef<number | null>(null);

  const setRef = useCallback((element: HTMLElement | null, index: number) => {
    panelRefs.current[index] = element;
  }, []);

  useEffect(() => {
    const updateParallax = () => {
      const viewportHeight = window.innerHeight || 1;

      panelRefs.current.forEach((panel, index) => {
        if (!panel) {
          return;
        }

        const rect = panel.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = elementCenter - viewportHeight / 2;
        const normalized = distanceFromCenter / viewportHeight;
        const speed = PANEL_IMAGES[index]?.speed ?? 0.25;
        const translateY = normalized * speed * -200;

        panel.style.setProperty(
          "--parallax-shift",
          `${translateY.toFixed(2)}px`,
        );
      });
    };

    const handleScroll = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      animationFrame.current = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      data-slice-type="image_panel"
      data-slice-variation="withLabels"
    >
      <ul className="flex gap-1.5 px-1.5 sm:gap-3.5 sm:px-6 lg:px-9 xl:gap-5 xl:px-5">
        {PANEL_IMAGES.map((image, index) => (
          <li
            key={image.src}
            className={[
              "group aspect-[10/16] w-1/2 overflow-hidden rounded-md sm:w-1/3 sm:aspect-[10/14]",
              image.hiddenOnMobile ? "hidden sm:block" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <figure
              ref={(element) => setRef(element, index)}
              className="group relative h-full w-full"
            >
              <div className="absolute inset-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 18rem, 50vw"
                  className="h-full w-full object-cover transition-transform duration-700 [transform-style:preserve-3d] group-hover:[--panel-scale:1.25]"
                  style={
                    {
                      transform:
                        "translate3d(0,var(--parallax-shift),0) scale(var(--panel-scale))",
                    } satisfies CSSProperties
                  }
                />
              </div>
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
