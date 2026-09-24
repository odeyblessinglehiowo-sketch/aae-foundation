"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--aae-navy-deep)]">

      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[72%]">
          <img
            src="/images/about us.webp"
            alt=""
            className="h-full w-full object-cover object-center"
          />

          {/* Main dark overlay */}
          <div className="absolute inset-0 bg-[var(--aae-navy-deep)]/45" />

          {/* Left-to-right fade into the text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--aae-navy-deep)] via-[var(--aae-navy-deep)]/88 via-[45%] to-[var(--aae-navy-deep)]/50 lg:from-[var(--aae-navy-deep)] lg:via-[var(--aae-navy-deep)]/85 lg:via-[28%] lg:to-[var(--aae-navy-deep)]/55" />

          {/* Bottom fade for depth */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--aae-navy-deep)]/65 via-transparent to-transparent" />
        </div>

        {/* Extra solid dark cover protecting the text side */}
        <div className="absolute inset-y-0 left-0 hidden w-[48%] bg-[var(--aae-navy-deep)] lg:block" />

        {/* Blend the solid text area into the photo */}
        <div className="absolute inset-y-0 left-[36%] hidden w-[22%] bg-gradient-to-r from-[var(--aae-navy-deep)] via-[var(--aae-navy-deep)]/95 to-transparent lg:block" />
      </div>

      {/* =========================================================
          DECORATIVE LIGHT
      ========================================================== */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[var(--aae-green)]/[0.08] blur-3xl" />

      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-80 w-80 rounded-full border border-white/[0.06]" />

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10">
        <div className="w-full max-w-4xl lg:max-w-[52%]">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--aae-green)] sm:text-xs"
          >
            About Abasiama Affiong Etuk Foundation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-4 max-w-5xl text-3xl font-semibold leading-[1.09] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-6xl"
          >
            Advancing People.
            <br />
            <span className="text-[var(--aae-green)]">
              Creating Opportunity.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8 lg:text-lg"
          >
            The AAE Foundation is dedicated to advancing education,
            empowerment, and equal opportunity for all — especially women and
            youth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--aae-navy)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--aae-green)] hover:text-white"
            >
              Work With Us

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--aae-navy)]/10 transition-colors duration-300 group-hover:bg-white/15">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            <span className="hidden h-px w-10 bg-white/25 sm:block" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-xs">
              Empower. Engage. Evolve.
            </span>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/45 lg:flex"
      >
        <span>Explore our story</span>

        <ArrowDown
          size={15}
          className="animate-bounce text-[var(--aae-green)]"
        />
      </motion.div>
    </section>
  );
}