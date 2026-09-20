"use client";

import { motion } from "framer-motion";

const items = [
  {
    label: "Our Vision",
    title: "A future shaped by empowered people.",
    text: "To create a society where empowered individuals drive sustainable development, equity, and innovation.",
    image: "/images/mission-vision.webp",
    type: "image",
  },
  {
    label: "Our Mission",
    title: "Empowering people to create change.",
    text: "To empower and engage women, youth, and communities through education, entrepreneurship, and leadership initiatives that foster personal growth and societal evolution.",
    type: "green",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-15">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-4 max-w-3xl text-center sm:mb-14"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--aae-green-dark)] sm:text-xs">
            Our Purpose
          </p>

          <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--aae-navy)] sm:text-4xl lg:text-5xl">
            What Guides Our Work.
          </h2>
        </motion.div>

        {/* Mission / Vision cards */}
        <div className="mt-2 mx-auto grid max-w-6xl overflow-hidden border border-[var(--aae-border)] sm:rounded-none lg:grid-cols-2">
          {items.map((item, index) => {
            const isImage = item.type === "image";

            return (
              <motion.article
                key={item.label}
                initial={{
                  opacity: 0,
                  x: index === 0 ? -25 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                className={`group relative min-h-[230px] overflow-hidden sm:min-h-[370px] lg:min-h-[400px] ${
                  isImage
                    ? "text-[var(--aae-navy)]"
                    : "bg-[var(--aae-green)] text-white"
                }`}
              >
                {/* Image background */}
                {isImage && (
                  <>
                    <div className="absolute inset-0">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* White veil */}
                    <div className="absolute inset-0 bg-white/90 transition-opacity duration-500 group-hover:bg-white/85" />

                    {/* Soft green tint */}
                    <div className="absolute inset-0 bg-[var(--aae-green)]/[0.03]" />
                  </>
                )}

                {/* Decorative circle */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border-[14px] ${
                    isImage
                      ? "border-[var(--aae-navy)]/[0.05]"
                      : "border-white/[0.07]"
                  }`}
                />

                <div
                  className={`pointer-events-none absolute -bottom-20 -right-12 h-48 w-48 rounded-full border-[14px] ${
                    isImage
                      ? "border-[var(--aae-green)]/[0.06]"
                      : "border-white/[0.07]"
                  }`}
                />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-center px-3 py-6 sm:px-10 sm:py-6 lg:px-16">
                  {/* Label */}
                  <div>
                    <p
                      className={`text-[14px] font-bold uppercase tracking-[0.24em] ${
                        isImage
                          ? "text-[var(--aae-green-dark)]"
                          : "text-white/75"
                      }`}
                    >
                      {item.label}
                    </p>

                    <div
                      className={`mt-2 h-[3px] w-12 ${
                        isImage
                          ? "bg-[var(--aae-green)]"
                          : "bg-white/80"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`mt-4 max-w-xl text-xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-[1.6rem] ${
                      isImage
                        ? "text-[var(--aae-navy)]"
                        : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-3 max-w-2xl text-base leading-6 sm:text-lg sm:leading-7 ${
                      isImage
                        ? "text-[var(--aae-text-muted)]"
                        : "text-white/75"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}