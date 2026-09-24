import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stories = await prisma.story.findMany({
      orderBy: {
        publishedAt: "desc",
      },
      include: {
        blocks: true,
      },
    });

    return NextResponse.json(stories);
  } catch (error) {
    console.error("Failed to fetch stories:", error);

    return NextResponse.json(
      { error: "Failed to fetch stories" },
      { status: 500 }
    );
  }
}