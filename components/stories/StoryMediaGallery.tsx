"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Play,
} from "lucide-react";

export type StoryMedia = {
  id: string;
  type: "IMAGE" | "VIDEO";
  url: string;
};

type StoryMediaGalleryProps = {
  media: StoryMedia[];
  title: string;
};

export default function StoryMediaGallery({
  media,
  title,
}: StoryMediaGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const activeMedia = media[current];

  const nextMedia = () => {
    setDirection(1);
    setPlayingVideo(null);

    setCurrent((prev) =>
      prev === media.length - 1 ? 0 : prev + 1
    );
  };

  const previousMedia = () => {
    setDirection(-1);
    setPlayingVideo(null);

    setCurrent((prev) =>
      prev === 0 ? media.length - 1 : prev - 1
    );
  };

  const goToMedia = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setPlayingVideo(null);
    setCurrent(index);
  };

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(
      ([id, video]) => {
        if (id !== activeMedia?.id && video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    );
  }, [activeMedia]);

  const toggleVideo = async (id: string) => {
    const video = videoRefs.current[id];

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setPlayingVideo(id);
      } catch (error) {
        console.error("Unable to play video:", error);
      }
    } else {
      video.pause();
      setPlayingVideo(null);
    }
  };

  if (!media.length) {
    return null;
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 70 : -70,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -70 : 70,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full">

      {/* =====================================================
          MOBILE
      ====================================================== */}
      <div className="sm:hidden">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[var(--aae-navy-deep)]">

          <AnimatePresence
            mode="wait"
            custom={direction}
            initial={false}
          >
            <motion.div
              key={activeMedia.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="relative aspect-[4/3]"
            >
              {activeMedia.type === "IMAGE" ? (
                <img
                  src={activeMedia.url}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="relative h-full w-full">
                  <video
                    ref={(element) => {
                      videoRefs.current[activeMedia.id] = element;
                    }}
                    src={activeMedia.url}
                    playsInline
                    preload="metadata"
                    controls={playingVideo === activeMedia.id}
                    onPause={() => setPlayingVideo(null)}
                    className="h-full w-full object-cover"
                  />

                  {playingVideo !== activeMedia.id && (
                    <button
                      type="button"
                      onClick={() => toggleVideo(activeMedia.id)}
                      aria-label="Play video"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[var(--aae-navy)] shadow-xl transition-transform duration-300 hover:scale-105">
                        <Play
                          size={21}
                          fill="currentColor"
                          className="ml-0.5"
                        />
                      </span>
                    </button>
                  )}

                  <span className="absolute bottom-4 left-4 rounded-md bg-[var(--aae-green-dark)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Video
                  </span>
                </div>
              )}

              {/* Counter */}
              <span className="absolute bottom-4 right-4 rounded-md bg-[var(--aae-navy-deep)]/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                {current + 1} / {media.length}
              </span>

              {/* Previous */}
              {media.length > 1 && (
                <button
                  type="button"
                  onClick={previousMedia}
                  aria-label="Previous media"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--aae-navy-deep)]/80 text-white backdrop-blur-md transition-all duration-300 active:scale-95"
                >
                  <ArrowLeft size={17} />
                </button>
              )}

              {/* Next */}
              {media.length > 1 && (
                <button
                  type="button"
                  onClick={nextMedia}
                  aria-label="Next media"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--aae-navy-deep)]/80 text-white backdrop-blur-md transition-all duration-300 active:scale-95"
                >
                  <ArrowRight size={17} />
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

    
        {/* Dots */}
        {media.length > 1 && (
          <div className="mt-4 flex justify-center gap-1.5">
            {media.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToMedia(index)}
                aria-label={`View media ${index + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-7 bg-[var(--aae-green)]"
                    : "w-2 bg-[var(--aae-border)]"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* =====================================================
          DESKTOP
      ====================================================== */}
      <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {media.map((item, index) => (
          <motion.figure
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.05,
            }}
            className="group overflow-hidden rounded-xl bg-[var(--aae-navy-deep)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">

              {item.type === "IMAGE" ? (
                <img
                  src={item.url}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="relative h-full w-full">
                  <video
                    ref={(element) => {
                      videoRefs.current[item.id] = element;
                    }}
                    src={item.url}
                    playsInline
                    preload="metadata"
                    controls={playingVideo === item.id}
                    onPause={() => {
                      if (playingVideo === item.id) {
                        setPlayingVideo(null);
                      }
                    }}
                    className="h-full w-full object-cover"
                  />

                  {playingVideo !== item.id && (
                    <button
                      type="button"
                      onClick={() => toggleVideo(item.id)}
                      aria-label={`Play video ${index + 1}`}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[var(--aae-navy)] shadow-xl transition-transform duration-300 hover:scale-105">
                        <Play
                          size={20}
                          fill="currentColor"
                          className="ml-0.5"
                        />
                      </span>
                    </button>
                  )}

                  <span className="absolute bottom-3 left-3 rounded-md bg-[var(--aae-green-dark)] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.17em] text-white">
                    Video
                  </span>
                </div>
              )}

              {index === 0 && item.type === "IMAGE" && (
                <span className="absolute bottom-3 left-3 rounded-md bg-[var(--aae-navy-deep)]/80 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.17em] text-white backdrop-blur-md">
                  Cover
                </span>
              )}
            </div>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}