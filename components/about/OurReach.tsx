"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Users,
  GraduationCap,
  MapPin,
  Handshake,
} from "lucide-react";
import { useState } from "react";

const reachStats = [
  {
    value: "600+",
    label: "Women & Youth Empowered",
    description:
      "Through skill acquisition, entrepreneurship training, and empowerment initiatives.",
    icon: Users,
  },
  {
    value: "1,800+",
    label: "Students Supported",
    description:
      "Through educational scholarships, mentorship, and learning support.",
    icon: GraduationCap,
  },
  {
    value: "3+",
    label: "Communities Reached",
    description:
      "Through community outreach and development-focused programmes.",
    icon: MapPin,
  },
  {
    value: "20+",
    label: "Partner Organisations",
    description:
      "Local and international organisations working alongside us to advance gender equality and education.",
    icon: Handshake,
  },
];

const reachImages = [
  {
    src: "/images/carousel1.webp",
    alt: "AAE Foundation training programme",
  },
  {
    src: "/images/carousel2.webp",
    alt: "AAE Foundation empowerment initiative",
  },
  {
    src: "/images/carousel3.webp",
    alt: "AAE Foundation learning support",
  },
  {
    src: "/images/carousel4.webp",
    alt: "AAE Foundation community outreach",
  },
  {
    src: "/images/carousel5.webp",
    alt: "AAE Foundation community engagement",
  },
];

export default function OurReach() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % reachImages.length);
  };

  const previousImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + reachImages.length) % reachImages.length,
    );
  };

  return (
    <section className="relative overflow-hidden bg-[var(--aae-navy-deep)] py-10 text-white sm:py-12 lg:py-15">
      {/* =====================================================
          DECORATIVE GLOW
      ====================================================== */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--aae-green)]/[0.08] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full border border-white/[0.04]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green)] sm:text-xs"
          >
            Our Reach
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-2xl font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl"
          >
            Impact Is Measured In{" "}
            <span className="text-[var(--aae-green)]">People.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-2 max-w-2xl text-sm leading-5 text-white/60 sm:text-base sm:leading-6"
          >
            Our work reaches people through education, empowerment, community
            engagement, and partnerships that create opportunities for growth
            and participation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 flex items-center justify-center gap-3 sm:mt-7"
          >
            <span className="h-px w-10 bg-[var(--aae-green)]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
              Empower. Engage. Evolve.
            </span>

            <span className="h-px w-10 bg-[var(--aae-green)]" />
          </motion.div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* =====================================================
              LEFT — IMAGE SLIDER
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[0.4rem] border border-white/10 bg-white/5">
              {/* Image viewport */}
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/4]">
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
                  dragConstraints={{ left: 0, right: 0 }}
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
                  {reachImages.map((image, index) => (
                    <div
                      key={image.src}
                      className="relative h-full w-full shrink-0"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--aae-navy-deep)]/70 via-transparent to-transparent" />

                      {/* Image number */}
                      <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-[10px] font-semibold text-white backdrop-blur-md">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* =================================================
                  SLIDER CONTROLS
              ================================================= */}
              <div className="flex items-center justify-between px-4 py-2 sm:px-5 sm:py-2">
                {/* Previous */}
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] active:scale-95"
                >
                  <ArrowLeft size={16} />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {reachImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Go to image ${index + 1}`}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? "w-8 bg-[var(--aae-green)]"
                          : "w-2 bg-white/20"
                      }`}
                    />
                  ))}
                </div>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] active:scale-95"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — STATS
          ====================================================== */}
          <div className="grid sm:grid-cols-2">
            {reachStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="group relative border-t border-white/10 px-2 py-4 sm:px-7 sm:py-5 lg:px-8 lg:py-6"
                >
                  {/* Icon + arrow */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--aae-green)]/10 text-[var(--aae-green)] transition-all duration-300 group-hover:bg-[var(--aae-green)] group-hover:text-white">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--aae-green)]"
                    />
                  </div>

                  {/* Number */}
                  <div className="mt-4">
                    <span className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                      {stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em] text-white sm:text-xl">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/50 sm:leading-6">
                    {stat.description}
                  </p>

                  {/* Green hover line */}
                  <span className="absolute bottom-0 left-2 h-px w-0 bg-[var(--aae-green)] transition-all duration-500 group-hover:w-16 sm:left-7 lg:left-8" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}