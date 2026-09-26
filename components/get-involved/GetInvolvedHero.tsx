"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function GetInvolvedHero() {
  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-[var(--aae-navy-deep)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/about-us.webp"
          alt=""
          className="h-full w-full object-cover"
        />

        {/* Overall darkening */}
        <div className="absolute inset-0 bg-[var(--aae-navy-deep)]/70" />

        {/* Left-heavy gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--aae-navy-deep)]/50 via-[var(--aae-navy-deep)]/65 to-[var(--aae-navy-deep)]/50" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--aae-navy-deep)] via-transparent to-transparent" />
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-[var(--aae-green)]/[0.10] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full border border-white/[0.06]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl items-center justify-center px-5 pb-20 pt-32 text-center sm:px-8 sm:pb-24 lg:px-10">
  <div className="flex max-w-3xl flex-col items-center">
    {/* Eyebrow */}
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--aae-green)] sm:text-xs"
    >
      Get Involved
    </motion.p>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.06,
      }}
      className="mt-5 text-3xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-6xl"
    >
      Change Begins With{" "}
      <span className="text-[var(--aae-green)]">
        People.
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.14,
      }}
      className="mt-5 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-8 lg:text-lg"
    >
      Whether through your time, skills, resources, or partnerships,
      there are many ways to support the work of creating opportunities
      and strengthening communities.
    </motion.p>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.22,
      }}
      className="mt-6 flex flex-wrap items-center justify-center gap-4"
    >
      <Link
        href="/contact"
        className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--aae-navy)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--aae-green)] hover:text-white"
      >
        Start a Conversation

        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--aae-navy)]/10 transition-colors duration-300 group-hover:bg-white/15">
          <ArrowUpRight size={14} />
        </span>
      </Link>

      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
        Empower. Engage. Evolve.
      </span>
    </motion.div>
  </div>
</div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <ArrowDown
          size={20}
          className="text-white/40"
        />
      </motion.div>
    </section>
  );
}