import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { stories } from "../lib/story-content";

const connectionString =
  process.env.DIRECT_URL || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DIRECT_URL or DATABASE_URL must be defined in .env"
  );
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function syncStories() {
  if (stories.length === 0) {
    console.log("No stories found in lib/story-content.ts");
    return;
  }

  console.log(`Syncing ${stories.length} story/stories...\n`);

  for (const storyData of stories) {
    const {
      title,
      slug,
      excerpt,
      category,
      coverImageUrl,
      status,
      publishedAt,
      author,
      blocks,
    } = storyData;

    const existingStory = await prisma.story.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        publishedAt: true,
      },
    });

    const resolvedPublishedAt =
      publishedAt !== undefined
        ? new Date(publishedAt)
        : existingStory?.publishedAt ??
          (status === "PUBLISHED" ? new Date() : null);

    const story = await prisma.story.upsert({
      where: {
        slug,
      },

      create: {
        title,
        slug,
        excerpt,
        category,
        coverImageUrl,
        author: author ?? "AAE Tech Team",
        status,
        publishedAt: resolvedPublishedAt,
      },

      update: {
        title,
        excerpt,
        category,
        coverImageUrl,
        author: author ?? "AAE Tech Team",
        status,
        publishedAt: resolvedPublishedAt,
      },
    });

    // Keep StoryBlock content synchronized with the code file.
    await prisma.storyBlock.deleteMany({
      where: {
        storyId: story.id,
      },
    });

    if (blocks.length > 0) {
      await prisma.storyBlock.createMany({
        data: blocks.map((block, index) => ({
          storyId: story.id,
          type: block.type,
          text: block.text ?? null,
          mediaUrl: block.mediaUrl ?? null,
          sortOrder: index,
        })),
      });
    }

    console.log(`✓ ${status}: ${title}`);
  }

  console.log("\nStory sync complete.");
}

syncStories()
  .catch((error) => {
    console.error("\nStory sync failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });