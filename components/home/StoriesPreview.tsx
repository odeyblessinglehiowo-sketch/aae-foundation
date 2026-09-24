"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

type HomepageStory = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
};

type StoriesPreviewProps = {
  stories: HomepageStory[];
};

export default function StoriesPreview({
  stories,
}: StoriesPreviewProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  if (stories.length === 0) {
    return null;
  }

  const nextStory = () => {
    setDirection(1);

    setCurrent((prev) =>
      prev === stories.length - 1 ? 0 : prev + 1
    );
  };

  const previousStory = () => {
    setDirection(-1);

    setCurrent((prev) =>
      prev === 0 ? stories.length - 1 : prev - 1
    );
  };

  const story = stories[current];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 70 : -70,
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? -70 : 70,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-18">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-2">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--aae-green-dark)] sm:text-xs"
          >
            Stories of Change
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-2xl font-semibold leading-[1.08] tracking-[-0.045em] text-[var(--aae-navy)] sm:text-4xl lg:text-5xl"
          >
            The People Behind The Work.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[var(--aae-text-muted)] sm:text-base sm:leading-7"
          >
            Every programme begins with people. Explore some of the stories,
            experiences, and moments that bring our work to life.
          </motion.p>
        </div>

        {/* =========================================================
            MOBILE SLIDER
        ========================================================= */}
        <div className="mt-5 sm:hidden">
          <div className="mx-auto max-w-md overflow-hidden">

            <AnimatePresence
              mode="wait"
              custom={direction}
              initial={false}
            >
              <motion.article
                key={story.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                }}
                className="overflow-hidden rounded-[0.5rem] border border-[var(--aae-border)] bg-white shadow-[0_15px_45px_rgba(16,42,67,0.07)]"
              >
                {/* Image */}
                <Link
                  href={`/stories/${story.slug}`}
                  className="group relative block aspect-[6/4] overflow-hidden"
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>

                {/* Content */}
                <div className="p-3 text-left">

                  <div className="flex items-left justify-left gap-2 text-xs">
                    <span className="font-semibold text-[var(--aae-green-dark)]">
                      {story.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[var(--aae-green)]" />

                    <span className="text-[var(--aae-text-muted)]">
                      {story.date}
                    </span>
                  </div>

                  <h3 className="mt-2 text-sm font-semibold leading-tight tracking-[-0.03em] text-[var(--aae-navy)]">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm leading-5 text-[var(--aae-text-muted)]">
                    {story.excerpt}
                  </p>

                  <Link
                    href={`/stories/${story.slug}`}
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--aae-navy)]"
                  >
                    Read Story

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Mobile controls */}
            {stories.length > 1 && (
              <div className="mt-5 flex items-center justify-between">

                <button
                  type="button"
                  onClick={previousStory}
                  aria-label="Previous story"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--aae-border)] text-[var(--aae-navy)] transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white active:scale-95"
                >
                  <ArrowLeft size={17} />
                </button>

                <div className="flex items-center gap-2">
                  {stories.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setDirection(
                          index > current ? 1 : -1
                        );

                        setCurrent(index);
                      }}
                      aria-label={`Go to story ${index + 1}`}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === current
                          ? "w-7 bg-[var(--aae-green)]"
                          : "w-2 bg-[var(--aae-border)]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextStory}
                  aria-label="Next story"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--aae-border)] text-[var(--aae-navy)] transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white active:scale-95"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================
            DESKTOP STORIES
        ========================================================= */}
        <div className="mx-auto mt-12 hidden max-w-10xl gap-5 sm:grid sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {stories.map((story, index) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group flex h-full flex-col overflow-hidden rounded-[0.5rem] border border-[var(--aae-border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(16,42,67,0.09)]"
            >
              {/* Image */}
              <Link
                href={`/stories/${story.slug}`}
                className="relative block aspect-[3/3] overflow-hidden"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col p-3 text-left">

                <div className="flex items-left justify-left gap-1 text-xs">
                  <span className="font-semibold text-[var(--aae-green-dark)]">
                    {story.category}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[var(--aae-green)]" />

                  <span className="text-[var(--aae-text-muted)]">
                    {story.date}
                  </span>
                </div>

                <Link
                  href={`/stories/${story.slug}`}
                  className="mt-2"
                >
                  <h3 className="text-sm font-semibold leading-tight tracking-[-0.025em] text-[var(--aae-navy)] transition-colors duration-300 group-hover:text-[var(--aae-green-dark)]">
                    {story.title}
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm leading-5 text-[var(--aae-text-muted)]">
                  {story.excerpt}
                </p>

                <Link
                  href={`/stories/${story.slug}`}
                  className="group/link mt-auto inline-flex items-center justify-center gap-2 pt-2 text-sm font-semibold text-[var(--aae-navy)]"
                >
                  Read Story

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 text-center sm:mt-11"
        >
          <Link
            href="/stories"
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--aae-navy)]/15 px-6 py-3 text-sm font-semibold text-[var(--aae-navy)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white"
          >
            View All Stories

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}