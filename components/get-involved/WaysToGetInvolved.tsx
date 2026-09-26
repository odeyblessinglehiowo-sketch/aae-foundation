"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  Handshake,
  Megaphone,
  Users,
} from "lucide-react";

const ways = [
  {
    title: "Volunteer",
    description:
      "Share your time, skills, experience, and energy to support programmes, outreach activities, and initiatives that create opportunities for others.",
    icon: Users,
  },
  {
    title: "Partner With Us",
    description:
      "Work with AAE Foundation to support initiatives that promote education, empowerment, inclusion, and meaningful community development.",
    icon: Handshake,
  },
  {
    title: "Support Our Work",
    description:
      "Contribute resources that can help us extend our programmes and reach more women, young people, students, and underserved communities.",
    icon: HeartHandshake,
  },
  {
    title: "Spread the Word",
    description:
      "Help amplify our work by sharing our programmes, stories, initiatives, and opportunities with people and communities who may benefit.",
    icon: Megaphone,
  },
];

export default function WaysToGetInvolved() {
  return (
   <section
  id="ways-to-help"
  className="relative overflow-hidden py-10 sm:py-14 lg:py-18"
>
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="/images/AAE.webp"
      alt=""
      className="h-full w-full object-cover"
    />

    {/* White overlay */}
    <div className="absolute inset-0 bg-white/70" />
  </div>
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[var(--aae-green)]/[0.04] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full border border-[var(--aae-green)]/[0.06]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)] sm:text-xs"
          >
            Ways to Get Involved
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.05,
            }}
            className="mt-2 text-2xl font-semibold leading-[1.06] tracking-[-0.045em] text-[var(--aae-navy)] sm:text-4xl lg:text-5xl"
          >
            There Is A Place For{" "}
            <span className="text-[var(--aae-green-dark)]">
              You Here.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mx-auto mt-2 max-w-2xl text-sm leading-5 text-[var(--aae-navy)] sm:text-base sm:leading-7"
          >
            Meaningful change takes people working together. Choose a way to
            contribute that aligns with your skills, resources, or desire to
            make a difference.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {ways.map((way, index) => {
            const Icon = way.icon;

            return (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-[1rem] border border-[var(--aae-border)] bg-[var(--aae-background)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--aae-green)]/25 hover:bg-white hover:shadow-[0_20px_55px_rgba(16,42,67,0.08)] sm:p-7">
                  {/* Top accent */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[var(--aae-green)] transition-all duration-500 group-hover:w-full" />

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--aae-green)]/10 text-[var(--aae-green-dark)] transition-all duration-300 group-hover:bg-[var(--aae-green)] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-[var(--aae-navy)]">
                    {way.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[var(--aae-text-muted)]">
                    {way.description}
                  </p>

                  {/* Bottom detail */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="h-px w-7 bg-[var(--aae-green)] transition-all duration-300 group-hover:w-11" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--aae-text-light)]">
                      AAE Foundation
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}