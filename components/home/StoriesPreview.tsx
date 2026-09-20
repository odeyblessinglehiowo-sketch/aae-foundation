"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const stories = [
  {
    id: "1",
    category: "Education",
    title: "Creating opportunities through education",
    date: "15 Sept 2026",
    author: "AAE Foundation",
    readTime: "3 min read",
    excerpt:
      "Discover how education, mentorship, and access to learning can open new possibilities for individuals and communities.",
    image: "/images/stories/story-1.webp",
  },
  {
    id: "2",
    category: "Empowerment",
    title: "Building confidence, skills, and opportunity",
    date: "10 Sept 2026",
    author: "AAE Foundation",
    readTime: "5 min read",
    excerpt:
      "Stories of people gaining the knowledge, skills, and confidence to take meaningful steps toward their future.",
    image: "/images/stories/story-2.webp",
  },
  {
    id: "3",
    category: "Community",
    title: "Working together to create lasting change",
    date: "27 Aug 2026",
    author: "AAE Foundation",
    readTime: "4 min read",
    excerpt:
      "See how meaningful engagement and collaboration can strengthen communities and create pathways for sustainable development.",
    image: "/images/stories/story-3.webp",
  },
  {
    id: "4",
    category: "Leadership",
    title: "Equipping the next generation of changemakers",
    date: "19 Aug 2026",
    author: "AAE Foundation",
    readTime: "4 min read",
    excerpt:
      "Exploring the role of leadership, mentorship, and entrepreneurship in helping people create positive change around them.",
    image: "/images/stories/story-4.webp",
  },
];

export default function StoriesPreview() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStory = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % stories.length);
  };

  const previousStory = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + stories.length) % stories.length
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
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--aae-green-dark)] sm:text-xs"
          >
            Stories & Updates
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[var(--aae-navy)] sm:text-4xl lg:text-5xl"
          >
            Stories From The Work We Do.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--aae-text-muted)] sm:text-base sm:leading-7"
          >
            Explore the latest stories, conversations, and updates from the
            AAE Foundation.
          </motion.p>
        </div>

        {/* =========================
            MOBILE SLIDER
        ========================= */}
        <div className="mt-4 sm:hidden">
          <div className="mx-auto max-w-md">
            <div className="overflow-hidden">
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
                  className="overflow-hidden border border-[var(--aae-border)] bg-white"
                >
                  {/* Image */}
                  <Link
                    href={`/stories/${story.id}`}
                    className="group relative block aspect-[16/10] overflow-hidden"
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--aae-navy-deep)]/40 via-transparent to-transparent" />
                  </Link>

                  {/* Content */}
                  <div className="p-5 text-left">
                    {/* Category + Date */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-semibold text-[var(--aae-green-dark)]">
                        {story.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[var(--aae-green)]" />

                      <span className="text-[var(--aae-text-muted)]">
                        {story.date}
                      </span>
                    </div>

                    <Link href={`/stories/${story.id}`}>
                      <h3 className="mt-2 text-md font-semibold leading-tight tracking-[-0.025em] text-[var(--aae-navy)]">
                        {story.title}
                      </h3>
                    </Link>

                    {/* Meta */}
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[var(--aae-text-muted)]">
                      <span>
                        By{" "}
                        <span className="font-medium text-[var(--aae-navy)]">
                          {story.author}
                        </span>
                      </span>

                      <span>•</span>

                      <span>{story.readTime}</span>
                    </div>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--aae-text-muted)]">
                      {story.excerpt}
                    </p>

                    <Link
                      href={`/stories/${story.id}`}
                      className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--aae-navy)]"
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* Mobile controls */}
            <div className="mt-5 flex items-center justify-between">
              <button
                type="button"
                onClick={previousStory}
                aria-label="Previous story"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--aae-border)] text-[var(--aae-navy)] transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white active:scale-95"
              >
                <ArrowLeft size={16} />
              </button>

              <div className="flex items-center gap-1.5">
                {stories.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setDirection(index > current ? 1 : -1);
                      setCurrent(index);
                    }}
                    aria-label={`View story ${index + 1}`}
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--aae-border)] text-[var(--aae-navy)] transition-all duration-300 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white active:scale-95"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* =========================
            DESKTOP STORIES
        ========================= */}
        <div className="mx-auto mt-12 hidden max-w-6xl gap-4 sm:grid sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
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
              className="group flex h-full flex-col overflow-hidden border border-[var(--aae-border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(16,42,67,0.09)]"
            >
              {/* Image */}
              <Link
                href={`/stories/${story.id}`}
                className="group relative block aspect-[4/4] overflow-hidden"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--aae-navy-deep)]/40 via-transparent to-transparent" />
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 text-left">
                {/* Category + Date */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-[var(--aae-green-dark)]">
                    {story.category}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[var(--aae-green)]" />

                  <span className="text-[var(--aae-text-muted)]">
                    {story.date}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/stories/${story.id}`}>
                  <h3 className="mt-3 text-lg font-semibold leading-tight tracking-[-0.025em] text-[var(--aae-navy)] transition-colors duration-300 group-hover:text-[var(--aae-green-dark)]">
                    {story.title}
                  </h3>
                </Link>

                {/* Meta */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[var(--aae-text-muted)]">
                  <span>
                    By{" "}
                    <span className="font-medium text-[var(--aae-navy)]">
                      {story.author}
                    </span>
                  </span>

                  <span>•</span>

                  <span>{story.readTime}</span>
                </div>

                {/* Excerpt */}
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-[var(--aae-text-muted)]">
                  {story.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={`/stories/${story.id}`}
                  className="group/link mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--aae-navy)]"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all stories */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center sm:mt-10"
        >
          <Link
            href="/stories"
            className="group inline-flex items-center gap-3 rounded-full bg-[var(--aae-green)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--aae-green-dark)]"
          >
            View All Stories
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