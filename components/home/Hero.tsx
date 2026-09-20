"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--aae-navy-deep)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt=""
          className="h-full w-full object-cover object-center sm:object-center"
        />

        {/* Main overlay */}
        <div className="absolute inset-0 bg-[var(--aae-navy-deep)]/55 sm:bg-[var(--aae-navy-deep)]/50" />

        {/* Extra mobile contrast */}
        <div className="absolute inset-0 bg-[var(--aae-navy-deep)]/10 sm:hidden" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--aae-navy-deep)]/85 via-[var(--aae-navy-deep)]/20 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center justify-center px-5 pb-10 pt-28 text-center sm:px-8 sm:pb-16 sm:pt-32 lg:px-10 lg:pb-20">
        <div className="mx-auto w-full max-w-6xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--aae-green)] sm:mb-6 sm:text-sm"
          >
            Abasiama Affiong Etuk Foundation
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="whitespace-nowrap text-[clamp(1.80rem,7.2vw,5.5rem)] font-bold leading-none tracking-[-0.045em] text-white"
          >
            Empower. Engage.{" "}
            <span className="text-[var(--aae-green)]">Evolve.</span>
          </motion.h1>

          {/* Supporting content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-5 flex max-w-2xl flex-col items-center sm:mt-8"
          >
            <p className="max-w-[340px] text-md leading-6 text-white/80 sm:max-w-xl sm:text-lg sm:leading-7">
              At AAE, we believe that real and lasting change begins with
              people. We empower women, youth, and communities through
              education, entrepreneurship, leadership, and meaningful
              engagement.
            </p>

            <Link
              href="/programmes"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--aae-navy)] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--aae-green)] hover:text-white sm:mt-8"
            >
              Explore Our Work

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 lg:flex"
      >
        <span>Scroll to explore</span>
        <ArrowDown size={15} className="animate-bounce" />
      </motion.div>
    </section>
  );
}