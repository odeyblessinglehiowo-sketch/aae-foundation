"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#f1f8ee] py-8 sm:py-14 lg:py-16">
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[var(--aae-green)]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[var(--aae-navy)]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)] sm:text-xs"
          >
            Who We Are
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-2xl font-semibold leading-[1.08] tracking-[-0.045em] text-[var(--aae-navy)] sm:text-4xl lg:text-5xl"
          >
            A Foundation Built Around{" "}
            <span className="text-[var(--aae-green-dark)]">
              People And Possibility.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-2 max-w-2xl text-sm leading-5 text-[var(--aae-text-muted)] sm:text-base sm:leading-7"
          >
            We believe sustainable development begins with empowered people.
            Our work focuses on creating the knowledge, skills, opportunities,
            and support people need to move forward.
          </motion.p>
        </div>

        {/* Main content */}
        <div className="mx-auto mt-4 max-w-6xl sm:mt-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-[0.4rem] border border-[var(--aae-border)] bg-white shadow-[0_20px_70px_rgba(16,42,67,0.06)]"
          >
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              {/* Side statement */}
              <div className="relative flex items-center justify-center overflow-hidden bg-[var(--aae-navy-deep)] px-4 py-6 text-center sm:px-8 lg:px-10 lg:py-2">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[var(--aae-green)]/15" />
                <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full border border-white/5" />

                <div className="relative z-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--aae-green)]">
                    Our Belief
                  </p>

                  <h3 className="mx-auto mt-5 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                    Sustainable development begins with empowered people.
                  </h3>

                  <div className="mx-auto mt-2 h-px w-12 bg-[var(--aae-green)]" />

                  <p className="mt-4 text-sm leading-6 text-white/60">
                    Empowerment is the foundation of progress. Engagement is
                    the bridge to inclusion. Evolution is the path to a
                    sustainable future.
                  </p>
                </div>
              </div>

              {/* About copy */}
              <div className="px-3 py-4 sm:px-8 sm:py-4 lg:px-10 lg:py-6">
                <div className="space-y-4 text-left lg:text-left">
                  <p className="text-base leading-6 text-[var(--aae-text-muted)] sm:text-lg">
                    The AAE Foundation is a non-governmental, non-profit
                    organization dedicated to advancing education, empowerment,
                    and equal opportunity for all — especially women and youth.
                  </p>

                  <p className="text-base leading-6 text-[var(--aae-text-muted)] sm:text-lg">
                    Founded on the belief that sustainable development begins
                    with empowered people, the Foundation works to build
                    capacities, inspire leadership, and drive social
                    transformation across communities.
                  </p>

                  <p className="text-base leading-6 text-[var(--aae-text-muted)] sm:text-lg">
                    Through strategic programmes in Gender Equality, Education,
                    Engagement, Empowerment, and Entrepreneurship, the
                    Foundation empowers individuals to lead change in their
                    lives, communities, and nation.
                  </p>

                  <p className="text-base leading-6 text-[var(--aae-text-muted)] sm:text-lg">
                    We partner with schools, grassroots organizations,
                    government agencies, and development partners to create
                    initiatives that promote education, leadership training,
                    mentorship, and economic inclusion.
                  </p>
                </div>

                {/* Philosophy */}
                <div className="mt-5 border-t border-[var(--aae-border)] pt-5 text-center lg:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--aae-green-dark)]">
                    Our philosophy
                  </p>

                  <p className="mt-2 text-xl font-semibold tracking-[-0.035em] text-[var(--aae-navy)] sm:text-3xl">
                    Empower{" "}
                    <span className="text-[var(--aae-green)]">•</span>{" "}
                    Engage{" "}
                    <span className="text-[var(--aae-green)]">•</span>{" "}
                    Evolve
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}