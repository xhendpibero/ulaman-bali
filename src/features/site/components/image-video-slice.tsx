"use client";

import { useCallback, useEffect, useRef } from "react";

const VIDEO_ID = "pqkVOxt7Tk4";
const VIDEO_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&autoplay=1&loop=1&controls=0&rel=0&playlist=${VIDEO_ID}&vq=hd1440&mute=1`;

export function ImageVideoSlice() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const postPlayerCommand = useCallback((func: string) => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) {
      return;
    }

    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func,
        args: [],
      }),
      "*",
    );
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        postPlayerCommand("playVideo");
      } else {
        postPlayerCommand("pauseVideo");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [postPlayerCommand]);

  const handleIframeLoad = () => {
    postPlayerCommand("mute");
    postPlayerCommand("playVideo");
  };

  return (
    <section
      data-slice-type="image_video_slice"
      data-slice-variation="video"
    >
      <div className="relative rounded-none">
        <div className="aspect-screen w-full">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <iframe
              id={`player${VIDEO_ID}`}
              ref={iframeRef}
              className="pointer-events-none absolute"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={false}
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ulaman"
              width="2126.222222222222"
              height="1196"
              src={VIDEO_SRC}
              onLoad={handleIframeLoad}
            />
            <div className="absolute left-0 top-0 hidden h-full w-full bg-light">
              <img
                src="https://images.prismic.io/ulaman/ZiO2APPdc1huKpxk_eco-resort-bali.jpg?auto=format,compress"
                alt="Experience sustainable luxury amidst Bali's lush jungle at Ulaman Eco Luxury Retreat"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
