"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Users,
  Handshake,
  Lightbulb,
  Megaphone,
} from "lucide-react";

const programmes = [
  {
    number: "01",
    title: "Education & Capacity Building",
    description:
      "Creating access to learning, mentorship, training, and resources that help people develop the knowledge and skills to thrive.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Women & Youth Empowerment",
    description:
      "Supporting women and young people with opportunities that strengthen confidence, skills, and economic independence.",
    icon: Users,
  },
  {
    number: "03",
    title: "Community Development & Engagement",
    description:
      "Working with communities to encourage participation, advocacy, and sustainable local development.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Leadership & Entrepreneurship",
    description:
      "Equipping emerging leaders and entrepreneurs with mentorship, support, and opportunities to create impact.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Advocacy & Partnerships",
    description:
      "Building meaningful partnerships that advance inclusion, gender equity, education, and opportunity.",
    icon: Megaphone,
  },
];

export default function ProgrammesPreview() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProgramme = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % programmes.length);
  };

  const previousProgramme = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + programmes.length) % programmes.length
    );
  };

  const activeProgramme = programmes[current];
  const ActiveIcon = activeProgramme.icon;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/programmes-bg.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />

        {/* Main overlay */}
        <div className="absolute inset-0 bg-[var(--aae-navy-deep)]/65" />

        {/* Subtle green layer */}
        <div className="absolute inset-0 bg-[var(--aae-green-dark)]/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--aae-green)] sm:text-xs"
          >
            What We Do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl"
          >
            Creating Pathways to{" "}
            <span className="text-[var(--aae-green)]">
              Lasting Impact.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-5 text-white/65 sm:text-base sm:leading-6"
          >
            Through education, empowerment, community engagement, leadership,
            and partnerships, we create opportunities for people and
            communities to thrive.
          </motion.p>
        </div>

        {/* =========================================================
            MOBILE PROGRAMME SLIDER
        ========================================================= */}
        <div className="mt-5 sm:hidden">
          <div className="relative mx-auto max-w-md">
            {/* Card viewport */}
            <div className="overflow-hidden rounded-[1rem]">
              <AnimatePresence
                mode="wait"
                custom={direction}
                initial={false}
              >
                <motion.div
                  key={activeProgramme.number}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="flex min-h-[200px] flex-col rounded-[1rem] border border-white/15 bg-white/[0.1] p-2 text-center backdrop-blur-sm"
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.15em] text-white/35">
                      {activeProgramme.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/75">
                      <ActiveIcon size={18} strokeWidth={1.7} />
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="my-auto px-2">
                    <h3 className="text-md font-semibold leading-tight tracking-[-0.025em] text-white">
                      {activeProgramme.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {activeProgramme.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="pt-3">
                    <div className="mx-auto h-px w-10 bg-[var(--aae-green)]/60" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-5 flex items-center justify-between">
              <button
                type="button"
                onClick={previousProgramme}
                aria-label="Previous programme"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white transition-all duration-300 active:scale-95 hover:border-[var(--aae-green)]/50 hover:bg-[var(--aae-green)]"
              >
                <ArrowLeft size={17} />
              </button>

              {/* Progress */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.12em] text-white/70">
                  {String(current + 1).padStart(2, "0")}
                </span>

                <div className="flex gap-1.5">
                  {programmes.map((programme, index) => (
                    <button
                      key={programme.number}
                      type="button"
                      onClick={() => {
                        setDirection(index > current ? 1 : -1);
                        setCurrent(index);
                      }}
                      aria-label={`Go to programme ${index + 1}`}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === current
                          ? "w-6 bg-[var(--aae-green)]"
                          : "w-2 bg-white/25"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-xs font-semibold tracking-[0.12em] text-white/35">
                  05
                </span>
              </div>

              <button
                type="button"
                onClick={nextProgramme}
                aria-label="Next programme"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white transition-all duration-300 active:scale-95 hover:border-[var(--aae-green)]/50 hover:bg-[var(--aae-green)]"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            TABLET / DESKTOP PROGRAMMES
        ========================================================= */}
        <div className="mx-auto mt-10 hidden max-w-6xl grid-cols-2 gap-4 sm:mt-12 sm:grid lg:grid-cols-5">
          {programmes.map((programme, index) => {
            const Icon = programme.icon;

            return (
              <motion.div
                key={programme.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                className="group flex min-h-[350px] flex-col rounded-[1.5rem] border border-white/15 bg-white/[0.08] p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--aae-green)]/50 hover:bg-white/[0.12] lg:p-6"
              >
                {/* Number + Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-white/35">
                    {programme.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-all duration-300 group-hover:border-[var(--aae-green)]/50 group-hover:bg-[var(--aae-green)] group-hover:text-white">
                    <Icon size={17} strokeWidth={1.7} />
                  </span>
                </div>

                {/* Content */}
                <div className="my-auto">
                  <h3 className="text-lg font-semibold leading-tight tracking-[-0.025em] text-white">
                    {programme.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/55">
                    {programme.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="pt-7">
                  <div className="mx-auto h-px w-10 bg-[var(--aae-green)]/50 transition-all duration-300 group-hover:w-16 group-hover:bg-[var(--aae-green)]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-center sm:mt-10"
        >
          <Link
            href="/programmes"
            className="group inline-flex items-center gap-3 rounded-full bg-[var(--aae-green)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--aae-green-dark)]"
          >
            Explore Our Programmes

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}