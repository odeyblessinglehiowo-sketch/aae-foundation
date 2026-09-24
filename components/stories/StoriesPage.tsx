"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

type Story = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImageUrl: string;
  author: string;
  publishedAt: Date | null;
};

type StoriesPageProps = {
  stories: Story[];
};

function formatDate(date: Date | null) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function StoriesPage({
  stories,
}: StoriesPageProps) {
  const [visibleStories, setVisibleStories] = useState(4);

  const featuredStory = stories[0];
  const remainingStories = stories.slice(1);

  const mobileStories = remainingStories.slice(
    0,
    visibleStories
  );

  const hasMoreStories =
    visibleStories < remainingStories.length;

  const loadMoreStories = () => {
    setVisibleStories((current) =>
      Math.min(current + 3, remainingStories.length)
    );
  };

  return (
    <main className="overflow-hidden bg-[var(--aae-background)]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[var(--aae-navy-deep)]">
        <div className="absolute inset-0">
          <img
            src="/images/stories-hero2.webp"
            alt=""
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[var(--aae-navy-deep)]/75" />

          <div className="absolute inset-0 bg-gradient-to-b from-[var(--aae-navy-deep)]/30 via-transparent to-[var(--aae-navy-deep)]/80" />
        </div>

        <div className="relative z-10 px-5 pb-20 pt-36 text-center sm:px-8 sm:pb-24 sm:pt-40 lg:px-10 lg:pb-28 lg:pt-44">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--aae-green)] sm:text-xs">
              Stories & Updates
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Stories That Bring Our Work{" "}
              <span className="text-[var(--aae-green)]">
                To Life.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
              Explore stories, experiences, conversations, and updates
              from the people, programmes, and partnerships connected
              to the AAE Foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <section className="py-8 sm:py-10 lg:py-14">
        <div className="mx-auto max-w-16xl px-5 sm:px-8 lg:px-2">

          {/* =================================================
              FEATURED STORY
          ================================================== */}
          {featuredStory ? (
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl overflow-hidden rounded-[1rem] border border-[var(--aae-border)] bg-white shadow-[0_20px_60px_rgba(16,42,67,0.07)]"
            >
              <div className="grid lg:grid-cols-[1fr_0.85fr]">

                {/* Cover image only */}
                <Link
                  href={`/stories/${featuredStory.slug}`}
                  className="group relative block aspect-[10/6] overflow-hidden lg:aspect-auto lg:min-h-[400px]"
                >
                  <img
                    src={featuredStory.coverImageUrl}
                    alt={featuredStory.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--aae-navy-deep)]/50 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    Latest Story
                  </span>
                </Link>

                {/* Story content */}
                <div className="flex items-center px-7 py-5 text-center sm:px-6 sm:py-6 lg:px-6 lg:text-left">
                  <div className="w-full">

                    <div className="flex flex-wrap items-center justify-center gap-2 text-xs lg:justify-start">
                      <span className="font-semibold text-[var(--aae-green-dark)]">
                        {featuredStory.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[var(--aae-green)]" />

                      <span className="text-[var(--aae-text-muted)]">
                        {formatDate(featuredStory.publishedAt)}
                      </span>
                    </div>

                    <Link href={`/stories/${featuredStory.slug}`}>
                      <h2 className="mt-3 text-xl font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--aae-navy)] transition-colors duration-300 hover:text-[var(--aae-green-dark)] sm:text-2xl">
                        {featuredStory.title}
                      </h2>
                    </Link>

                    <div className="mt-2 flex items-center justify-center gap-2 text-xs text-[var(--aae-text-muted)] lg:justify-start">
                      <CalendarDays size={14} />
                      <span>
                        By{" "}
                        <span className="font-semibold text-[var(--aae-navy)]">
                          {featuredStory.author}
                        </span>
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[var(--aae-text-muted)] sm:text-base sm:leading-7">
                      {featuredStory.excerpt}
                    </p>

                    <Link
                      href={`/stories/${featuredStory.slug}`}
                      className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--aae-green)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--aae-green-dark)]"
                    >
                      Read Story

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ) : (
            <div className="mx-auto max-w-2xl rounded-[2rem] border border-[var(--aae-border)] bg-white px-6 py-16 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--aae-green-dark)]">
                Stories & Updates
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-[var(--aae-navy)]">
                No stories published yet.
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--aae-text-muted)]">
                New stories and updates from the AAE Foundation will
                appear here.
              </p>
            </div>
          )}

          {/* =================================================
              MORE STORIES
          ================================================== */}
          {stories.length > 1 && (
            <div className="mx-auto mt-16 max-w-7xl sm:mt-15">

              <div className="text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)]">
                  From the Foundation
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[var(--aae-navy)] sm:text-3xl">
                  More Stories & Updates
                </h2>
              </div>

              {/* =================================================
                  MOBILE
              ================================================== */}
              <div className="mt-8 grid gap-5 sm:hidden">
                {mobileStories.map((story, index) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    index={index}
                  />
                ))}
              </div>

              {/* Mobile load more */}
              {hasMoreStories && (
                <div className="mt-8 text-center sm:hidden">
                  <button
                    type="button"
                    onClick={loadMoreStories}
                    className="group inline-flex items-center gap-3 rounded-full bg-[var(--aae-green)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--aae-green-dark)] active:scale-[0.98]"
                  >
                    See More News

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                </div>
              )}

              {/* =================================================
                  DESKTOP
              ================================================== */}
              <div className="mt-6 hidden gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-4">
                {remainingStories.map((story, index) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function StoryCard({
  story,
  index,
}: {
  story: Story;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-xs border border-[var(--aae-border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(16,42,67,0.08)]"
    >
      {/* Cover image only */}
      <Link
        href={`/stories/${story.slug}`}
        className="relative block aspect-[4/4] overflow-hidden"
      >
        <img
          src={story.coverImageUrl}
          alt={story.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-2">
        <div className="flex flex-wrap items-center gap-2 text-xs">

          <span className="h-1 w-1 rounded-full bg-[var(--aae-green)]" />

          <span className="text-[var(--aae-text-muted)]">
            {formatDate(story.publishedAt)}
          </span>
        </div>

        <Link href={`/stories/${story.slug}`}>
          <h3 className="mt-1 text-sm font-semibold leading-tight tracking-[-0.03em] text-[var(--aae-navy)] transition-colors duration-300 group-hover:text-[var(--aae-green-dark)]">
            {story.title}
          </h3>
        </Link>

        <div className="mt-2 text-xs text-[var(--aae-text-muted)]">
          By{" "}
          <span className="font-medium text-[var(--aae-navy)]">
            {story.author}
          </span>
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--aae-text-muted)]">
          {story.excerpt}
        </p>

        <Link
          href={`/stories/${story.slug}`}
          className="group/link mt-2 inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[var(--aae-navy)]"
        >
          Read More

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}