"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "600+",
    label: "Women & Youth Empowered",
  },
  {
    value: "1,800+",
    label: "Students Supported",
  },
  {
    value: "3+",
    label: "Communities Reached",
  },
  {
    value: "20+",
    label: "Partner Organizations",
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-[var(--aae-background)] py-9 sm:py-10 lg:py-12">
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
    {/* Intro */}
    <div className="mx-auto max-w-2xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--aae-green-dark)]"
      >
        Our Impact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-3xl font-semibold tracking-[-0.035em] text-[var(--aae-navy)] sm:text-4xl lg:text-5xl"
      >
        Our Work, in Numbers.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-3 max-w-xl text-base leading-6 text-[var(--aae-text-muted)] sm:text-lg"
      >
        Every number represents a person, a community, or a partnership
        moving closer to a more equitable and empowered society.
      </motion.p>
    </div>

    {/* Stats */}
    <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 border-t border-[var(--aae-border)] lg:mt-10 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
          className={`
            group flex flex-col items-center justify-center
            border-b border-[var(--aae-border)]
            px-4 py-5 text-center
            transition-colors duration-300
            sm:px-6 sm:py-9
            lg:border-b-0 lg:border-r lg:px-8 lg:py-10
            lg:last:border-r-0
            ${index >= 2 ? "lg:border-b-0" : ""}
          `}
        >
          {/* Accent */}
          <span className="mb-3 h-1.5 w-1.5 rounded-full bg-[var(--aae-green)] transition-transform duration-300 group-hover:scale-[2]" />

          {/* Number */}
          <span className="text-3xl font-semibold tracking-[-0.05em] text-[var(--aae-navy)] transition-colors duration-300 group-hover:text-[var(--aae-green-dark)] sm:text-4xl lg:text-5xl">
            {stat.value}
          </span>

          {/* Label */}
          <p className="mx-auto mt-2 max-w-[150px] text-sm font-medium leading-5 text-[var(--aae-text-muted)]">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}