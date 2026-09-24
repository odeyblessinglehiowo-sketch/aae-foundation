import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StoriesPage from "@/components/stories/StoriesPage";
import { prisma } from "@/lib/prisma";

export default async function Stories() {
const stories = await prisma.story.findMany({
  where: {
    status: "PUBLISHED",
  },
  orderBy: {
    publishedAt: "desc",
  },
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

  return (
    <>
      <Navbar />
      <StoriesPage stories={stories} />
      <Footer />
    </>
  );
}