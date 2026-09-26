"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[68svh] overflow-hidden bg-[var(--aae-navy-deep)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/about-us.webp"
          alt=""
          className="h-full w-full object-cover"
        />

        {/* Overall overlay */}
        <div className="absolute inset-0 bg-[var(--aae-navy-deep)]/50" />

        {/* Centered dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--aae-navy-deep)]/80 via-[var(--aae-navy-deep)]/55 to-[var(--aae-navy-deep)]/90" />
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--aae-green)]/[0.10] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full border border-white/[0.06]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[68svh] max-w-4xl items-center justify-center px-5 pb-20 pt-32 text-center sm:px-8 sm:pb-24">
        <div className="flex max-w-3xl flex-col items-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--aae-green)] sm:text-xs"
          >
            Contact Us
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.06,
            }}
            className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Let's Start A{" "}
            <span className="text-[var(--aae-green)]">
              Conversation.
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
            className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/65 sm:leading-7 sm:text-base sm:leading-8 lg:text-lg"
          >
            Whether you want to learn more about our programmes, explore a
            partnership, support our work, or simply reach out, we would be
            glad to hear from you.
          </motion.p>

          {/* Philosophy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.22,
            }}
            className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-xs"
          >
            Empower. Engage. Evolve.
          </motion.p>
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