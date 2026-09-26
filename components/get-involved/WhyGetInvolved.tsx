"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WhyGetInvolved() {
  return (
    <section className="relative overflow-hidden bg-[var(--aae-background)] py-10 sm:py-12 lg:py-18">
      {/* Decorative element */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[var(--aae-green)]/[0.08]" />

      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[var(--aae-green)]/[0.05] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)] sm:text-xs"
        >
          Why Get Involved
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            delay: 0.05,
          }}
          className="mt-3 text-2xl font-semibold leading-[1.06] tracking-[-0.045em] text-[var(--aae-navy)] sm:text-4xl lg:text-5xl"
        >
          Be Part Of{" "}
          <span className="text-[var(--aae-green-dark)]">
            Meaningful Change.
          </span>
        </motion.h2>

        {/* Main copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="mx-auto mt-3 max-w-3xl text-sm leading-5 text-[var(--aae-text-muted)] sm:text-base sm:leading-6"
        >
          AAE Foundation&apos;s work is built around creating practical
          opportunities for women, youth, students, and communities. Getting
          involved means helping extend that impact to more people and places.
        </motion.p>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.16,
          }}
          className="mx-auto mt-6 max-w-3xl rounded-[0.5rem] border border-[var(--aae-border)] bg-white px-4 py-4 shadow-[0_20px_60px_rgba(16,42,67,0.06)] sm:px-10 sm:py-4"
        >
          <div className="mx-auto h-px w-12 bg-[var(--aae-green)]" />

          <p className="mt-6 text-base font-medium leading-6 text-[var(--aae-navy)] sm:text-lg sm:leading-8">
            Every contribution matters — whether it is your time, your
            expertise, your resources, or your willingness to help connect
            people to opportunities.
          </p>

          <p className="mt-4 text-sm leading-5 text-[var(--aae-text-muted)] sm:text-base sm:leading-5">
            Together, we can help more people access the support, knowledge,
            skills, and opportunities they need to move forward.
          </p>

          <Link
            href="#ways-to-help"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--aae-green-dark)] transition-colors duration-300 hover:text-[var(--aae-navy)]"
          >
            Explore ways to help

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}