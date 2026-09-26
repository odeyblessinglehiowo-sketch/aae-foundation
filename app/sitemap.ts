import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const siteUrl = "https://aaefoundation.org.ng";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const stories = await prisma.story.findMany({
    where: {
      status: "PUBLISHED",
    },
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/programmes`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/get-involved`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${siteUrl}/stories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const storyPages: MetadataRoute.Sitemap = stories.map((story) => ({
    url: `${siteUrl}/stories/${story.slug}`,
    lastModified: story.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...storyPages];
}