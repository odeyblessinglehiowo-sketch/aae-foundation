"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

type Programme = {
  title: string;
  category: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
};

type ProgrammeSectionProps = {
  programme: Programme;
  reverse?: boolean;
};

export default function ProgrammeSection({
  programme,
  reverse = false,
}: ProgrammeSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const totalImages = programme.images.length;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const previousImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + totalImages) % totalImages,
    );
  };

  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-4">

          {/* =====================================================
              TEXT
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: reverse ? 30 : -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`order-1 ${
              reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="max-w-xl">
              {/* Category */}
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[var(--aae-green)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)] sm:text-xs">
                  {programme.category}
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-3 text-2xl font-semibold leading-[1.03] tracking-[-0.045em] text-[var(--aae-navy)] sm:text-4xl lg:text-4xl">
                {programme.title}
              </h2>

              {/* Divider */}
              <div className="mt-2 sm:mt-3 h-px w-14 bg-[var(--aae-green)]" />

              {/* Description */}
              <p className="mt-3 max-w-xl text-sm leading-5 text-[var(--aae-text-muted)] sm:text-base sm:leading-8">
                {programme.description}
              </p>

              {/* Footer detail */}
              <div className="mt-6 sm:mt-8 flex items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--aae-text-light)]">
                  AAE Foundation
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-[var(--aae-green-dark)]"
                />
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              IMAGE SLIDER
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: reverse ? -30 : 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`order-2 ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative">
              {/* Decorative backing */}
              <div
                className={`pointer-events-none absolute -inset-3 rounded-[1.5rem] border border-[var(--aae-green)]/[0.08] ${
                  reverse ? "translate-x-2" : "-translate-x-2"
                } translate-y-2`}
              />

              {/* Image frame */}
              <div className="relative overflow-hidden rounded-[0.5rem] border border-[var(--aae-border)] bg-white shadow-[0_25px_70px_rgba(16,42,67,0.1)]">
                {/* IMAGE VIEWPORT */}
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/11]">
                  <motion.div
                    className="flex h-full"
                    animate={{
                      x: `-${currentImage * 100}%`,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    drag="x"
                    dragConstraints={{
                      left: 0,
                      right: 0,
                    }}
                    dragElastic={0.08}
                    onDragEnd={(_, info) => {
                      if (
                        info.offset.x < -70 ||
                        info.velocity.x < -500
                      ) {
                        nextImage();
                      }

                      if (
                        info.offset.x > 70 ||
                        info.velocity.x > 500
                      ) {
                        previousImage();
                      }
                    }}
                  >
                    {programme.images.map((image) => (
                      <div
                        key={image.src}
                        className="relative h-full w-full shrink-0"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />

                        {/* Subtle image treatment */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--aae-navy-deep)]/45 via-transparent to-transparent" />
                      </div>
                    ))}
                  </motion.div>

                  {/* Image count */}
                  <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-[10px] font-semibold text-white backdrop-blur-md">
                      {String(currentImage + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    CONTROLS
                ================================================== */}
                <div className="flex items-center justify-between px-4 py-4 sm:px-5 sm:py-2">
                  {/* Previous */}
                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label={`Previous image for ${programme.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--aae-border)] bg-white text-[var(--aae-navy)] transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white active:scale-95"
                  >
                    <ArrowLeft size={16} />
                  </button>

                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {programme.images.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setCurrentImage(index)}
                        aria-label={`Go to image ${index + 1}`}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === currentImage
                            ? "w-8 bg-[var(--aae-green)]"
                            : "w-2 bg-[var(--aae-border)]"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Next */}
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label={`Next image for ${programme.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--aae-border)] bg-white text-[var(--aae-navy)] transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white active:scale-95"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}