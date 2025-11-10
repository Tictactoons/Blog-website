import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismaClient";

export async function GET() {
  const posts = await prisma.post.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ posts });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, content, categories, image, status } = body;

  if (!title || !content) {
    return NextResponse.json({ error: "Title and content required" }, { status: 400 });
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      categories: categories?.join(",") || "",
      image,
      status: status || "PUBLISHED",
      slug,
      publishedAt: status === "PUBLISHED" ? new Date() : null,
    },
  });

  return NextResponse.json({ post: newPost });
}
