"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

export default function Founder() {
  return (
    <section className="relative overflow-hidden bg-[var(--aae-background)] py-12 sm:py-10 lg:py-12">
      {/* Decorative background */}
      <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[var(--aae-green)]/[0.10]" />
      <div className="pointer-events-none absolute right-[-110px] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[var(--aae-green)]/[0.08]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section intro */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)] sm:text-xs"
          >
            Our Founder & Chairman
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mx-auto mt-4 max-w-5xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[var(--aae-navy)] sm:text-4xl lg:text-5xl"
          >
            Leadership Grounded In{" "}
            <span className="text-[var(--aae-green-dark)]">
              Service And Purpose.
            </span>
          </motion.h2>
        </div>

        {/* Main composition */}
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Portrait side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-xl"
            >
              {/* Green block */}
              <div className="absolute left-0 top-10 bottom-0 w-[72%] rounded-[1rem] bg-[var(--aae-green)] sm:top-14" />

              {/* Portrait frame */}
              <div className="relative z-10 ml-6 sm:ml-10">
                <div className="aspect-[4/5] overflow-hidden rounded-[1rem] bg-[var(--aae-navy-deep)] shadow-[0_30px_80px_rgba(16,42,67,0.15)]">
                  <img
                    src="/images/founder.webp"
                    alt="Hon. Dr. Mrs. Judith Mayen Etuk-Ogbara"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Name plate */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="relative z-20 -mt-5 ml-2 max-w-sm rounded-[1rem] bg-[var(--aae-navy-deep)] px-2 py-2 text-white shadow-[0_20px_50px_rgba(7,26,43,0.18)] sm:-mt-20 sm:ml-6 sm:px-4 sm:py-3"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--aae-green)]">
                  Founder / Chairman
                </p>

                <h3 className="mt-2 text-base font-semibold leading-tight tracking-[-0.025em] sm:text-2xl">
                  Hon. Dr. Mrs. Judith Mayen Etuk Ogbara
                </h3>
              </motion.div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="text-left lg:text-left"
            >

              <p className="text-lg font-medium leading-6 tracking-[-0.02em] text-[var(--aae-navy)] sm:text-xl sm:leading-7">
                The Foundation was built on a simple belief: sustainable
                development begins with empowered people.
              </p>

              <div className="mt-5 space-y-2 text-base leading-6 text-[var(--aae-text-muted)] sm:text-base sm:leading-7">
                <p>
                  Founded by Hon. Dr. Mrs. Judith Mayen Etuk-Ogbara, the AAE
                  Foundation works to advance education, empowerment, and equal
                  opportunity for all — especially women and youth.
                </p>

                <p>
                  Her vision for the Foundation is centred on building
                  capacities, inspiring leadership, and creating opportunities
                  that enable individuals and communities to contribute
                  meaningfully to society.
                </p>

                <p>
                  Through education, entrepreneurship, mentorship, and community
                  engagement, the Foundation continues to pursue practical
                  pathways towards a more equitable and empowered society.
                </p>
              </div>

              {/* Philosophy line */}
              <div className="mt-6 border-t border-[var(--aae-border)] pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--aae-green-dark)]">
                  Her leadership philosophy
                </p>

                <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[var(--aae-navy)] sm:text-2xl">
                  Service that creates{" "}
                  <span className="text-[var(--aae-green-dark)]">
                    lasting impact.
                  </span>
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <Link
                  href="/programmes"
                  className="group inline-flex items-center gap-3 rounded-full border border-[var(--aae-navy)]/15 px-6 py-3 text-sm font-semibold text-[var(--aae-navy)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white"
                >
                  Explore Our Impact

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--aae-navy)]/[0.06] transition-colors duration-300 group-hover:bg-white/15">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Large background word */}
          <div className="pointer-events-none absolute -bottom-4 left-1/2 hidden -translate-x-1/2 select-none text-[clamp(5rem,14vw,11rem)] font-bold uppercase leading-none tracking-[-0.08em] text-[var(--aae-navy)]/[0.025] lg:block">
            Judith
          </div>
        </div>
      </div>
    </section>
  );
}