"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#f1f8ee] py-10 sm:py-10 lg:py-12">
      {/* Subtle brand detail */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--aae-green)]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[var(--aae-navy)]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Intro */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--aae-green-dark)] sm:text-xs"
          >
            Who We Are
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="mx-auto max-w-4xl text-2xl font-semibold leading-[1.08] tracking-[-0.025em] text-[var(--aae-navy)] sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Creating Opportunities for People to{" "}
            <span className="text-[var(--aae-green-dark)]">
              Thrive and Lead.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--aae-text-muted)] sm:text-base sm:leading-6"
          >
            We work to build knowledge, strengthen communities, and create
            pathways to a more equitable and empowered society.
          </motion.p>
        </div>

        {/* Visual + floating content */}
        <div className="relative mx-auto mt-6 max-w-6xl sm:mt-6 lg:mt-8">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="relative aspect-[10/9] overflow-hidden rounded-[0.6rem] sm:rounded-[1rem] lg:aspect-[14/7.5]"
          >
            <img
              src="/images/about-us.webp"
              alt="AAE Foundation empowering women, youth and communities"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--aae-navy-deep)]/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating content card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative z-10 mx-4 -mt-15 rounded-[1rem] bg-white p-3 shadow-[0_20px_60px_rgba(16,42,67,0.10)] sm:mx-10 sm:-mt-16 sm:rounded-[1rem] sm:p-10 lg:mx-auto lg:-mt-20 lg:max-w-4xl lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">

              {/* Text */}
              <div className="text-center lg:text-left">
                <p className="text-base leading-5 text-[var(--aae-text-muted)] sm:text-lg sm:leading-7">
                  The AAE Foundation is a non-governmental, non-profit
                  organisation dedicated to advancing education, empowerment,
                  and equal opportunity for all — especially women and youth.
                </p>

                <p className="mt-3 text-base leading-5 text-[var(--aae-text-muted)] sm:text-lg sm:leading-8">
                  Through education, entrepreneurship, leadership, and
                  community engagement, we equip people with the knowledge,
                  skills, and confidence to shape their own futures and
                  contribute meaningfully to society.
                </p>
              </div>

              {/* CTA */}
              <div className="flex justify-center lg:justify-end">
                <Link
                  href="/about"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--aae-green)] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--aae-green-dark)]"
                >
                  Discover AAE
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </div>
            </div>

            {/* Bottom philosophy */}
            <div className="mt-3 border-t border-[var(--aae-border)] pt-6 text-center lg:text-left">
              <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--aae-text-light)]">
                  Our philosophy
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--aae-navy)]">
                  <span>Empower</span>
                  <span className="text-[var(--aae-green)]">•</span>
                  <span>Engage</span>
                  <span className="text-[var(--aae-green)]">•</span>
                  <span>Evolve</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}