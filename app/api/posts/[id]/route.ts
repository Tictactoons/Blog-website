import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismaClient";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { title, content, categories, image, status } = await req.json();
  const { id } = params;

  const updatedPost = await prisma.post.update({
    where: { id },
    data: {
      title,
      content,
      categories: categories?.join(",") || "",
      image,
      status,
      updatedAt: new Date(),
      publishedAt: status === "PUBLISHED" ? new Date() : null,
    },
  });

  return NextResponse.json({ post: updatedPost });
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  await prisma.post.delete({ where: { id } });
  return NextResponse.json({ message: "Deleted successfully" });
}
