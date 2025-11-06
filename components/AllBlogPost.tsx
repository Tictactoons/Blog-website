'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/Blogpost";
import { MdArrowOutward } from "react-icons/md";
import Pagination from "@/components/Pagination"; 
type Props = {
  posts: BlogPost[];
  showPagination?: boolean; 
};

export default function AllPosts({ posts, showPagination = true }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  if (!posts || posts.length === 0) return null;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-10 pt-16">
      <h1 className="font-semibold text-xl md:text-[22px] text-[#1a1a1a] dark:text-white mb-5">
        All Blog Posts
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
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
              <p className="text-[#667085] dark:text-[#C0C5D0] text-sm lg:text-xs mt-2">{post.excerpt}</p>
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

      {showPagination && <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />}
      
    </section>
  );
}
