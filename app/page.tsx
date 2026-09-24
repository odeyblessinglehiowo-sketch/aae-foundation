import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import WhoWeAre from "@/components/home/WhoWeAre";
import ProgrammesPreview from "@/components/home/ProgrammesPreview";
import MissionVision from "@/components/home/MissionVision";
import GetInvolved from "@/components/home/GetInvolved";
import StoriesPreview from "@/components/home/StoriesPreview";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

export default async function HomePage() {
  const stories = await prisma.story.findMany({
    where: {
      status: "PUBLISHED",
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

  const homepageStories = stories.map((story) => ({
    id: story.id,
    title: story.title,
    slug: story.slug,
    excerpt: story.excerpt,
    category: story.category,
    image: story.coverImageUrl,
    author: story.author,
    date: story.publishedAt
      ? new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(story.publishedAt)
      : "",
  }));

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ImpactStats />
        <WhoWeAre />
        <ProgrammesPreview />
        <MissionVision />
        <GetInvolved />
        <StoriesPreview stories={homepageStories} />
      </main>

      <Footer />
    </>
  );
}