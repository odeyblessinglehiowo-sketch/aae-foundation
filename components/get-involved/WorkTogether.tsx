"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WorkTogether() {
  return (
    <section className="relative overflow-hidden bg-[var(--aae-green)] py-12 sm:py-20 lg:py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full border border-white/[0.12]" />

      <div className="pointer-events-none absolute -right-24 bottom-[-100px] h-80 w-80 rounded-full bg-[var(--aae-navy)]/[0.08] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-8xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* =====================================================
              IMAGE
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative">
              {/* Decorative backing */}
              <div className="pointer-events-none absolute -inset-3 translate-x-3 translate-y-3 rounded-[1rem] border border-white/[0.18]" />

              <div className="relative overflow-hidden rounded-[0.5rem] border border-white/[0.15] bg-white/[0.08]">
                <div className="relative aspect-[4/4] sm:aspect-[16/11]">
                  <img
                    src="/images/about-us.webp"
                    alt="AAE Foundation community engagement"
                    className="h-full w-full object-cover"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-[var(--aae-navy-deep)]/20" />

                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--aae-navy-deep)]/50 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              CONTENT
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/75 sm:text-xs"
            >
              Let's Work Together
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.05,
              }}
              className="mt-3 text-2xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl"
            >
              Together, We Can Create{" "}
              <span className="text-[var(--aae-navy)]">
                Greater Impact.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-8"
            >
              Whether you are an individual, organisation, development
              partner, or community advocate, there is an opportunity to
              contribute to work that empowers people and strengthens
              communities.
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 56 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="mt-7 h-px bg-white/60"
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--aae-navy)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--aae-navy)] hover:text-white sm:w-auto"
              >
                Talk to Us

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--aae-navy)]/10 transition-colors duration-300 group-hover:bg-white/10">
                  <ArrowUpRight size={14} />
                </span>
              </Link>

              <Link
                href="/programmes"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/[0.08] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.16] sm:w-auto"
              >
                Explore Our Work
              </Link>
            </motion.div>

            {/* Philosophy */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-xs"
            >
              Empower. Engage. Evolve.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}