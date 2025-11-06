import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/Blogpost";
import { MdArrowOutward } from "react-icons/md";

export default function BlogPreviewList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="group  rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          <div className="overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4 sm:p-3">
            <p className="text-sm lg:text-xs font-semibold text-[#6941C6] mb-1">
              {post.date}
            </p>
            <div className="flex justify-between mt-2">
              <h2 className="text-lg font-semibold text-[#1A1A1A] dark:text-white group-hover:text-[#6941C6] transition-colors">
                {post.title}
              </h2>
              <MdArrowOutward className="text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:text-[#6941C6]" />
            </div>
            <p className="text-[#667085] dark:text-[#C0C5D0] text-sm lg:text-xs mt-2">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.category.map((cat: string, i: number) => {
                // Optional: define some color combinations
                const colors = [
                  { bg: "bg-[#EEF4FF]", text: "text-[#3538CD]" },
                  { bg: "bg-[#FDF2FA]", text: "text-[#C11574]" },
                  { bg: "bg-[#F0F9FF]", text: "text-[#026AA2]" },
                  { bg: "bg-[#F9F5FF]", text: "text-[#6941C6]" },
                  { bg: "bg-[#FFF6E5]", text: "text-[#B54708]" },
                ];

                // Assign random or indexed color
                const color = colors[i % colors.length];

                return (
                  <span
                    key={i}
                    className={`text-xs font-medium ${color.text} ${color.bg} px-3 py-1 rounded-full`}
                  >
                    {cat}
                  </span>
                );
              })}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
