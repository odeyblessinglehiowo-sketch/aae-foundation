"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function GetInvolved() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* =========================================================
          SUBTLE BACKGROUND DETAILS
      ========================================================== */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--aae-green)]/[0.07]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--aae-green)]/[0.06]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[var(--aae-green)]/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[var(--aae-navy)]/[0.035] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)] sm:text-xs"
        >
          Get Involved
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="mx-auto mt-2 max-w-4xl text-2xl font-semibold leading-[1.03] tracking-[-0.03em] text-[var(--aae-navy)] sm:text-5xl lg:text-5xl"
        >
          Change Begins With{" "}
          <span className="text-[var(--aae-green-dark)]">
            People.
          </span>
        </motion.h2>

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--aae-text-muted)] sm:text-base sm:leading-7"
        >
          Whether through partnership, volunteering, or supporting our work,
          there are many ways to contribute to opportunities that empower
          women, youth, and communities.
        </motion.p>

        {/* Buttons */}
<motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
>
  <Link
    href="/get-involved"
    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--aae-green)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(88,185,71,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--aae-green-dark)] hover:shadow-[0_16px_35px_rgba(88,185,71,0.22)] sm:w-auto"
  >
    Get Involved

    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
      <ArrowUpRight
        size={14}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </span>
  </Link>

  <Link
    href="/contact"
    className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-[var(--aae-navy)]/15 px-6 py-3.5 text-sm font-semibold text-[var(--aae-navy)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--aae-navy)] hover:bg-[var(--aae-navy)] hover:text-white sm:w-auto"
  >
    Talk to Us

    <ArrowRight
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
</motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-7 max-w-md border-t border-[var(--aae-border)] pt-4 sm:mt-10"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--aae-text-light)]">
            Our philosophy
          </p>

          <p className="mt-3 text-lg font-semibold tracking-[-0.02em] text-[var(--aae-navy)] sm:text-xl">
            Empower{" "}
            <span className="text-[var(--aae-green)]">•</span>{" "}
            Engage{" "}
            <span className="text-[var(--aae-green)]">•</span>{" "}
            Evolve
          </p>
        </motion.div>
      </div>
    </section>
  );
}