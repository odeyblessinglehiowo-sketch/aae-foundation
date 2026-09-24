"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  GraduationCap,
  MapPin,
  Handshake,
} from "lucide-react";

const reachStats = [
  {
    value: "600+",
    label: "Women & Youth Empowered",
    description:
      "Through skill acquisition, entrepreneurship training, and empowerment initiatives.",
    icon: Users,
  },
  {
    value: "1,800+",
    label: "Students Supported",
    description:
      "Through educational scholarships, mentorship, and learning support.",
    icon: GraduationCap,
  },
  {
    value: "3+",
    label: "Communities Reached",
    description:
      "Through community outreach and development-focused programmes.",
    icon: MapPin,
  },
  {
    value: "20+",
    label: "Partner Organisations",
    description:
      "Local and international organisations working alongside us to advance gender equality and education.",
    icon: Handshake,
  },
];

export default function OurReach() {
  return (
    <section className="relative overflow-hidden bg-[var(--aae-navy-deep)] py-10 text-white sm:py-10 lg:py-12">
     

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--aae-green)]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full border border-white/[0.04]" />

      <div className="relative z-10 mx-auto max-w-10xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1.10fr] lg:gap-12">
          {/* =====================================================
              INTRO
          ====================================================== */}
          <div className="text-center lg:sticky lg:top-18 lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green)] sm:text-xs"
            >
              Our Reach
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-2xl font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-5xl lg:text-5xl"
            >
              Impact is measured in{" "}
              <span className="text-[var(--aae-green)]">
                people.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/60 sm:text-base sm:leading-8 lg:mx-0"
            >
              Our work reaches people through education, empowerment,
              community engagement, and partnerships that create opportunities
              for growth and participation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-4 flex items-center justify-center gap-3 sm:mt-8 lg:justify-start"
            >
              <span className="h-px w-10 bg-[var(--aae-green)]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
                Empower. Engage. Evolve.
              </span>
            </motion.div>
          </div>

          {/* =====================================================
              STATS
          ====================================================== */}
          <div className="grid sm:grid-cols-2">
            {reachStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className="group relative border-t border-white/10 px-2 py-3 sm:px-7 sm:py-5 lg:px-8 lg:py-6"
                >
                  {/* Icon + label */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--aae-green)]/10 text-[var(--aae-green)] transition-all duration-300 group-hover:bg-[var(--aae-green)] group-hover:text-white">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--aae-green)]"
                    />
                  </div>

                  {/* Number */}
                  <div className="mt-4">
                    <span className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                      {stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em] text-white sm:text-xl">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/50 sm:leading-6">
                    {stat.description}
                  </p>

                  {/* Green hover line */}
                  <span className="absolute bottom-0 left-2 h-px w-0 bg-[var(--aae-green)] transition-all duration-500 group-hover:w-16 sm:left-7 lg:left-8" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}