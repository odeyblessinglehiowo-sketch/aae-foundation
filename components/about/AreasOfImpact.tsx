"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Handshake,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

const impactAreas = [
  {
    title: "Expanding Access to Education",
    description:
      "Supporting access to education through scholarships, learning resources, mentorship, training, and practical workshops, with a strong focus on creating opportunities for girls and young people.",
    icon: BookOpen,
  },
  {
    title: "Empowering Women & Young People",
    description:
      "Equipping women and young people with entrepreneurship opportunities, digital skills, economic pathways, and the confidence to build more independent and productive futures.",
    icon: Users,
  },
  {
    title: "Strengthening Communities",
    description:
      "Working with communities, local leaders, and partners to strengthen participation, encourage sustainable development, and support initiatives that respond to local needs.",
    icon: HeartHandshake,
  },
  {
    title: "Nurturing Leaders & Entrepreneurs",
    description:
      "Developing emerging leaders and entrepreneurs through mentorship, start-up support, leadership forums, and opportunities for young changemakers to turn ideas into action.",
    icon: Lightbulb,
  },
  {
    title: "Advancing Inclusion & Equity",
    description:
      "Using advocacy and public engagement to advance inclusion, gender equity, and greater access to opportunities for underserved and marginalised groups.",
    icon: ShieldCheck,
  },
  {
    title: "Building Partnerships for Impact",
    description:
      "Building meaningful partnerships with government, the private sector, civil society, and development organisations to extend the reach and sustainability of our work.",
    icon: Handshake,
  },
];

const desktopSlides = [
  [impactAreas[0], impactAreas[1]],
  [impactAreas[2], impactAreas[3]],
  [impactAreas[4], impactAreas[5]],
];

export default function AreasOfImpact() {
  const [desktopSlide, setDesktopSlide] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);

  const [desktopDirection, setDesktopDirection] = useState(1);
  const [mobileDirection, setMobileDirection] = useState(1);

  const nextDesktop = () => {
    setDesktopDirection(1);
    setDesktopSlide((prev) => (prev + 1) % desktopSlides.length);
  };

  const previousDesktop = () => {
    setDesktopDirection(-1);
    setDesktopSlide(
      (prev) =>
        (prev - 1 + desktopSlides.length) % desktopSlides.length
    );
  };

  const nextMobile = () => {
    setMobileDirection(1);
    setMobileSlide((prev) => (prev + 1) % impactAreas.length);
  };

  const previousMobile = () => {
    setMobileDirection(-1);
    setMobileSlide(
      (prev) =>
        (prev - 1 + impactAreas.length) % impactAreas.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 90 : -90,
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? -90 : 90,
      opacity: 0,
    }),
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}
      <div className="absolute inset-0">
        <img
          src="/images/rise-training.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />

        {/* Keeps the section predominantly white */}
        <div className="absolute inset-0 bg-white/86" />

        {/* Slight green wash for brand continuity */}
        <div className="absolute inset-0 bg-[var(--aae-green)]/[0.035]" />
      </div>

      {/* Soft atmospheric glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--aae-green)]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[var(--aae-navy)]/[0.04] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)] sm:text-xs"
          >
            Our Areas of Impact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-2 text-2xl font-semibold leading-[1.08] tracking-[-0.045em] text-[var(--aae-navy)] sm:text-4xl lg:text-5xl"
          >
            Where Purpose Becomes{" "}
            <span className="text-[var(--aae-green-dark)]">
              Action.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-5 text-[var(--aae-navy)] sm:text-base sm:leading-6"
          >
            We work across interconnected areas that create opportunities,
            strengthen communities, and help people build more sustainable
            futures.
          </motion.p>
        </div>

        {/* =========================================================
            DESKTOP — TWO CARDS PER VIEW
        ========================================================== */}
        <div className="mx-auto mt-6 hidden max-w-6xl sm:mt-9 lg:block">
  {/* Carousel viewport */}
  <div className="overflow-hidden">
    <motion.div
      className="flex"
      animate={{
        x: `-${desktopSlide * 100}%`,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {desktopSlides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          className="grid w-full shrink-0 grid-cols-2 gap-5"
        >
          {slide.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group relative flex min-h-[410px] flex-col overflow-hidden rounded-[0.5rem] border border-[var(--aae-border)] bg-white p-7 shadow-[0_20px_55px_rgba(16,42,67,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(16,42,67,0.11)] sm:p-8 lg:p-10"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-bl-[5rem] bg-[var(--aae-green)]/[0.045] transition-all duration-500 group-hover:bg-[var(--aae-green)]/[0.08]" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--aae-green)]/10 text-[var(--aae-green-dark)] transition-all duration-300 group-hover:bg-[var(--aae-green)] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--aae-green-dark)]">
                    Our Work
                  </span>
                </div>

                <div className="relative z-10 mt-auto pt-12">
                  <h3 className="max-w-xl text-2xl font-semibold leading-[1.08] tracking-[-0.035em] text-[var(--aae-navy)] sm:text-[1.8rem]">
                    {area.title}
                  </h3>

                  <div className="mt-2 h-px w-10 bg-[var(--aae-green)] transition-all duration-500 group-hover:w-16" />

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--aae-text-muted)] sm:text-base sm:leading-8">
                    {area.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-[var(--aae-border)] pt-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--aae-text-light)]">
                    AAE Foundation
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--aae-border)] text-[var(--aae-navy)] transition-all duration-300 group-hover:border-[var(--aae-green)] group-hover:bg-[var(--aae-green)] group-hover:text-white">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      ))}
    </motion.div>
  </div>

  {/* Desktop navigation */}
  <div className="mt-7 flex items-center justify-between">
    <button
      type="button"
      onClick={previousDesktop}
      aria-label="Previous impact areas"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--aae-border)] bg-white text-[var(--aae-navy)] shadow-sm transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white active:scale-95"
    >
      <ArrowLeft size={17} />
    </button>

    <div className="flex items-center gap-2">
      {desktopSlides.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setDesktopSlide(index)}
          aria-label={`Go to impact slide ${index + 1}`}
          className={`h-1 rounded-full transition-all duration-300 ${
            index === desktopSlide
              ? "w-8 bg-[var(--aae-green)]"
              : "w-2 bg-[var(--aae-border)]"
          }`}
        />
      ))}
    </div>

    <button
      type="button"
      onClick={nextDesktop}
      aria-label="Next impact areas"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--aae-border)] bg-white text-[var(--aae-navy)] shadow-sm transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white active:scale-95"
    >
      <ArrowRight size={17} />
    </button>
  </div>
</div>

        {/* =========================================================
            MOBILE — ONE CARD PER VIEW + SWIPE
        ========================================================== */}
        <div className="mt-10 sm:hidden">
  <div className="overflow-hidden">
    <motion.div
      className="flex"
      animate={{
        x: `-${mobileSlide * 100}%`,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.08}
      onDragEnd={(_, info) => {
        if (info.offset.x < -60 || info.velocity.x < -500) {
          nextMobile();
        }

        if (info.offset.x > 60 || info.velocity.x > 500) {
          previousMobile();
        }
      }}
    >
      {impactAreas.map((area) => {
        const Icon = area.icon;

        return (
          <div
            key={area.title}
            className="w-full shrink-0 px-0"
          >
            <article className="group relative flex min-h-[190px] flex-col overflow-hidden rounded-[0.5rem] border border-[var(--aae-border)] bg-white p-6 shadow-[0_18px_50px_rgba(16,42,67,0.07)]">
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-[4rem] bg-[var(--aae-green)]/[0.05]" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--aae-green)]/10 text-[var(--aae-green-dark)]">
                  <Icon size={19} strokeWidth={1.8} />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--aae-green-dark)]">
                  Our Work
                </span>
              </div>

              <div className="relative z-10 mt-auto pt-3">
                <h3 className="text-md font-semibold leading-[1.08] tracking-[-0.035em] text-[var(--aae-navy)]">
                  {area.title}
                </h3>

                <div className="mt-2 h-px w-10 bg-[var(--aae-green)]" />

                <p className="mt-3 text-sm leading-6 text-[var(--aae-text-muted)]">
                  {area.description}
                </p>
              </div>

              <div className="relative z-10 mt-4 flex items-center justify-between border-t border-[var(--aae-border)] pt-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--aae-text-light)]">
                  AAE Foundation
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--aae-border)] text-[var(--aae-navy)]">
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </article>
          </div>
        );
      })}
    </motion.div>
  </div>

  {/* Mobile navigation */}
  <div className="mt-4 flex items-center justify-between">
    <button
      type="button"
      onClick={previousMobile}
      aria-label="Previous impact area"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--aae-border)] bg-white text-[var(--aae-navy)] shadow-sm transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white active:scale-95"
    >
      <ArrowLeft size={17} />
    </button>

    <div className="flex items-center gap-2">
      {impactAreas.map((area, index) => (
        <button
          key={area.title}
          type="button"
          onClick={() => setMobileSlide(index)}
          aria-label={`Go to impact area ${index + 1}`}
          className={`h-1 rounded-full transition-all duration-300 ${
            index === mobileSlide
              ? "w-7 bg-[var(--aae-green)]"
              : "w-2 bg-[var(--aae-border)]"
          }`}
        />
      ))}
    </div>

    <button
      type="button"
      onClick={nextMobile}
      aria-label="Next impact area"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--aae-border)] bg-white text-[var(--aae-navy)] shadow-sm transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white active:scale-95"
    >
      <ArrowRight size={17} />
    </button>
  </div>
</div>

        {/* =========================================================
            CLOSING STATEMENT
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-2 max-w-4xl text-center sm:mt-2"
        >
          <p className="text-sm font-medium leading-4 tracking-[-0.02em] text-[var(--aae-navy)] sm:text-xl sm:leading-9">
            Together, these pathways help us turn opportunity into action and
            action into{" "}
            <span className="text-[var(--aae-green-dark)]">
              lasting change.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}