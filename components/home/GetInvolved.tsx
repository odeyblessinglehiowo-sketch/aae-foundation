"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function GetInvolved() {
  return (
    <section className="relative overflow-hidden bg-[var(--aae-navy-deep)] py-10 sm:py-14 lg:py-18">
      {/* Subtle background details */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[var(--aae-green)]/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[var(--aae-green)]/[0.07] blur-3xl" />

      {/* Decorative rings */}
      <div className="pointer-events-none absolute right-[-100px] top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full border border-white/[0.05] sm:block" />
      <div className="pointer-events-none absolute right-[-50px] top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full border border-white/[0.05] sm:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--aae-green)] sm:text-xs">
            Get Involved
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Change Begins With{" "}
            <span className="text-[var(--aae-green)]">People.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
            Whether you want to partner with us, support our work, volunteer,
            or learn more about our programmes, there is a place for you in
            the AAE Foundation community.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/get-involved"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--aae-green)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--aae-green-dark)] sm:w-auto"
            >
              Get Involved
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/85 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.06] hover:text-white sm:w-auto"
            >
              Talk to Us
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.div>

        {/* Closing philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-5xl border-t border-white/10 pt-7 sm:mt-16"
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
              AAE Foundation
            </p>

            <div className="flex items-center gap-3 text-sm font-semibold text-white/60">
              <span>Empower</span>
              <span className="text-[var(--aae-green)]">•</span>
              <span>Engage</span>
              <span className="text-[var(--aae-green)]">•</span>
              <span>Evolve</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}