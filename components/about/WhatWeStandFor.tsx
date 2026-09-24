"use client";

import { motion } from "framer-motion";

const values = [
  {
    label: "Our Vision",
    title: "A future shaped by empowered people.",
    text:
      "To create a society where empowered individuals drive sustainable development, equity, and innovation.",
  },
  {
    label: "Our Mission",
    title: "Empowering people to create change.",
    text:
      "To empower and engage women, youth, and communities through education, entrepreneurship, and leadership initiatives that foster personal growth and societal evolution.",
  },
];

export default function WhatWeStandFor() {
  return (
    <section className="relative overflow-hidden bg-[var(--aae-background)] py-12 sm:py-12 lg:py-12">
     
      <div className="absolute inset-0">
        <img
          src="/images/mission-vision.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />

        {/* Strong overall navy wash */}
        <div className="absolute inset-0 bg-[var(--aae-navy-deep)]/62" />

        {/* Subtle directional fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--aae-navy-deep)]/80 via-[var(--aae-navy-deep)] to-[var(--aae-navy-deep)]/65" />

        {/* Bottom depth */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--aae-navy-deep)] to-transparent" />
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--aae-green)]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[var(--aae-green)]/[0.06] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================================================
            HEADING
        ========================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green)] sm:text-xs"
          >
            What We Stand For
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-2xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
          >
            The Purpose Behind{" "}
            <span className="text-[var(--aae-green)]">
              The Work.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-2 max-w-2xl text-sm leading-5 text-white/60 sm:text-base sm:leading-6"
          >
            Our vision and mission shape how we serve people, build
            opportunities, and pursue meaningful change.
          </motion.p>
        </div>

        {/* =========================================================
            VISION + MISSION
        ========================================================== */}
        <div className="mx-auto mt-5 grid max-w-6xl gap-4 sm:mt-10 lg:grid-cols-2">
          {values.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
              }}
              className="group relative flex min-h-[120px] flex-col justify-between overflow-hidden rounded-[0.5rem] border border-white/10 bg-black/20 p-7 backdrop-blur-sm sm:min-h-[200px] sm:p-9 lg:p-10"
            >
              {/* Soft internal glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--aae-green)]/[0.10] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[14px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green)]">
                  {item.label}
                </span>

                <span className="text-5xl font-semibold tracking-[-0.06em] text-white/[0.08] sm:text-6xl">
                  0{index + 1}
                </span>
              </div>

              {/* Main content */}
              <div className="relative z-10 mt-3">
                <h3 className="max-w-xl text-xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl lg:text-[1.7rem]">
                  {item.title}
                </h3>

                <div className="mt-3 h-px w-10 bg-[var(--aae-green)] transition-all duration-500 group-hover:w-16" />

                <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-7">
                  {item.text}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="relative z-10 mt-5">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                  Empower. Engage. Evolve.
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}