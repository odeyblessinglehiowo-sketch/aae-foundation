import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StoryMediaGallery, {
  type StoryMedia,
} from "@/components/stories/StoryMediaGallery";

type StoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getStory(slug: string) {
  return prisma.story.findUnique({
    where: {
      slug,
    },
    include: {
      blocks: {
        orderBy: {
          sortOrder: "asc",
        },
      },
    },
  });
}

async function getRelatedStories(currentStoryId: string) {
  return prisma.story.findMany({
    where: {
      status: "PUBLISHED",
      id: {
        not: currentStoryId,
      },
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 4,
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      category: true,
      coverImageUrl: true,
      author: true,
      publishedAt: true,
    },
  });
}

function formatDate(date: Date | null) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStory(slug);

  if (!story) {
    return {
      title: "Story Not Found | AAE Foundation",
    };
  }

  return {
    title: `${story.title} | AAE Foundation`,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      type: "article",
      publishedTime: story.publishedAt?.toISOString(),
      images: [
        {
          url: story.coverImageUrl,
          alt: story.title,
        },
      ],
    },
  };
}

export default async function StoryPage({
  params,
}: StoryPageProps) {
  const { slug } = await params;

  const story = await getStory(slug);

  if (!story || story.status !== "PUBLISHED") {
    notFound();
  }

  const relatedStories = await getRelatedStories(story.id);

  const media: StoryMedia[] = [
    {
      id: `cover-${story.id}`,
      type: "IMAGE",
      url: story.coverImageUrl,
    },

    ...story.blocks
      .filter(
        (block) =>
          (block.type === "IMAGE" || block.type === "VIDEO") &&
          Boolean(block.mediaUrl)
      )
      .map((block) => ({
        id: block.id,
        type: block.type as "IMAGE" | "VIDEO",
        url: block.mediaUrl as string,
      })),
  ];

  const articleBlocks = story.blocks.filter(
    (block) =>
      block.type === "TEXT" || block.type === "HEADING"
  );

  return (
    <>
      <Navbar />

      <main className="bg-[var(--aae-background)]">

        <section className="relative min-h-[480px] overflow-hidden bg-[var(--aae-navy-deep)] sm:min-h-[540px] lg:min-h-[580px]">

          {/* Hero image */}
          <div className="absolute inset-0">
            <img
              src={story.coverImageUrl}
              alt=""
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-[var(--aae-navy-deep)]/65" />

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--aae-navy-deep)] via-[var(--aae-navy-deep)]/25 to-[var(--aae-navy-deep)]/30" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex min-h-[480px] items-end sm:min-h-[540px] lg:min-h-[580px]">
            <div className="mx-auto w-full max-w-7xl px-5 pb-14 text-center sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">

              {/* Back */}
              <Link
                href="/stories"
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/15 px-4 py-2 text-xs font-medium text-white/75 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-black/25 hover:text-white"
              >
                <ArrowLeft size={14} />
                Back to Stories
              </Link>

              {/* Category */}
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--aae-green)] sm:text-xs">
                {story.category}
              </p>

              {/* Title */}
              <h1 className="mx-auto mt-5 max-w-5xl text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {story.title}
              </h1>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-white/65 sm:text-sm">
                <span>
                  By{" "}
                  <span className="font-semibold text-white/90">
                    {story.author}
                  </span>
                </span>

                <span className="h-1 w-1 rounded-full bg-[var(--aae-green)]" />

                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  {formatDate(story.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MEDIA GALLERY
        ====================================================== */}
        <section className="bg-white px-5 py-4 sm:px-8 sm:py-4 lg:px-10 lg:py-6">
          <StoryMediaGallery
            media={media}
            title={story.title}
          />
        </section>

        {/* =====================================================
            STORY INTRO + BODY
        ====================================================== */}
        <article className="mx-auto max-w-5xl px-5 pb-10 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">

          {/* Excerpt + Meta */}
          <div className="mx-auto max-w-3xl border-t border-[var(--aae-border)] pt-8 sm:pt-10">

            <div className="border-l-[3px] border-[var(--aae-green)] pl-3 sm:pl-7">
              <p className="text-md font-medium leading-6 text-[var(--aae-navy)] sm:text-xl sm:leading-9">
                {story.excerpt}
              </p>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-[var(--aae-text-muted)] sm:justify-start sm:text-sm">
              <span>
                By{" "}
                <span className="font-semibold text-[var(--aae-navy)]">
                  {story.author}
                </span>
              </span>

              <span className="h-1 w-1 rounded-full bg-[var(--aae-green)]" />

              <span>{formatDate(story.publishedAt)}</span>
            </div>
          </div>

          {/* Article body */}
          <div className="mx-auto mt-60x max-w-3xl sm:mt-6">

            {articleBlocks.map((block) => {
              if (block.type === "HEADING") {
                return (
                  <h2
                    key={block.id}
                    className="mt-10 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[var(--aae-navy)] sm:mt-6 sm:text-2xl"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "TEXT") {
                return (
                  <div
                    key={block.id}
                    className="mt-4 text-[15px] leading-6 text-[var(--aae-text-muted)] sm:text-lg sm:leading-7"
                  >
                    {block.text?.split("\n").map(
                      (paragraph, index) => (
                        <p
                          key={index}
                          className={
                            index > 0 ? "mt-2" : ""
                          }
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </article>

        {/* =====================================================
            RELATED NEWS
        ====================================================== */}
        {relatedStories.length > 0 && (
          <section className="border-t border-[var(--aae-border)] bg-white px-5 py-6 sm:px-8 sm:py-10 lg:px-10 lg:py-14">

            <div className="mx-auto max-w-7xl">

              {/* Heading */}
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)] sm:text-xs">
                  Continue Reading
                </p>

                <div className="mx-auto mt-2 h-[2px] w-14 bg-[var(--aae-green)]" />

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--aae-navy)] sm:text-4xl">
                  Related News
                </h2>
              </div>

              {/* Related cards */}
              <div className="mx-auto mt-5 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {relatedStories.map((relatedStory, index) => (
                  <Link
                    key={relatedStory.id}
                    href={`/stories/${relatedStory.slug}`}
                    className="group flex h-full flex-col overflow-hidden border border-[var(--aae-border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(16,42,67,0.08)]"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={relatedStory.coverImageUrl}
                        alt={relatedStory.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--aae-navy-deep)]/40 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">

                      <div className="flex flex-wrap items-center gap-2 text-[11px]">
                        <span className="font-semibold text-[var(--aae-green-dark)]">
                          {relatedStory.category}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[var(--aae-green)]" />

                        <span className="text-[var(--aae-text-muted)]">
                          {formatDate(
                            relatedStory.publishedAt
                          )}
                        </span>
                      </div>

                      <h3 className="mt-3 text-sm font-semibold leading-tight tracking-[-0.025em] text-[var(--aae-navy)] transition-colors duration-300 group-hover:text-[var(--aae-green-dark)]">
                        {relatedStory.title}
                      </h3>

                      <div className="mt-auto flex items-center justify-between gap-3 pt-3 text-xs">
                        <span className="text-[var(--aae-text-muted)]">
                          By{" "}
                          <span className="font-semibold text-[var(--aae-navy)]">
                            {relatedStory.author}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-[var(--aae-navy)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  );
}