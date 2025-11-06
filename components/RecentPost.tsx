import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/Blogpost";
import { MdArrowOutward } from "react-icons/md";

type Props = {
  posts: BlogPost[];
};

export default function RecentPosts({ posts }: Props) {
  if (!posts || posts.length === 0) return null;

  const [featured, ...others] = posts;

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-10 py-16">

      {/* smaller devices */}

      <div className="lg:hidden">
 <div className="mb-5">
        <h1 className="font-semibold text-xl md:text-[22px] text-[#1a1a1a]">
          Recent blog posts
        </h1>
      </div>

      {/* Featured post */}
      <div className="mb-12">
        <Link href={`/blog/${featured.slug}`}
        className="block group">
            <div className="w-full overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#6941C6] dark:text-gray-400">
                {featured.date} 
              </p>
              <div className="flex justify-between mt-2">
                <h2 className="text-2xl font-semibold text-[#1A1A1A] dark:text-white">
                {featured.title}
              </h2>
               <MdArrowOutward className="font-extrabold text-2xl transition-transform duration-300 hover:scale-125 hover:text-3xl hover:text-[#6941c6]"/>
              </div>
              <p className="mt-2 text-[#667085] dark:text-gray-300">{featured.excerpt}</p>
              <p className="text-sm mt-4 font-medium text-[#6941C6] bg-[#F9F5FF] inline-block  px-3 py-1 rounded-full">{featured.category}</p>
            </div>
        </Link>
      </div>

      {/* Other posts */}
      <div className="space-y-12">
        {others.map((post, index) => (
          <Link key={post.id} href={`/blog/${post.slug}`}
          className="flex flex-col-reverse md:flex-row-reverse items-center md:items-start gap-6 group">
              {/* Text */}
              <div className="md:w-1/2">
                <p className="text-sm font-semibold text-[#6941C6] dark:text-gray-400">
                  {post.date}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-[#1A1A1A] dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-[#667085] dark:text-gray-300">{post.excerpt}</p>
                <p className="text-sm mt-4 font-medium text-[#3538CD] bg-[#EEF4FF] inline-block  px-3 py-1 rounded-full">{post.category}</p>
              </div>

              {/* Image */}
              <div className="md:w-1/2 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className=" object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
          </Link>
        ))}
      </div>


      </div>

     

            {/* Wide screens */}

      <div className="gap-6 hidden lg:flex">
      <div className=" w-1/2">
        <Link href={`/blog/${featured.slug}`}
        className="block group xl:space-y-8">
            <div className="w-full overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold text-[#6941C6] dark:text-gray-400">
                {featured.writer} • {featured.date.split(", ").slice(1).join(", ")}
              </p>
              <div className="flex justify-between mt-2">
                <h2 className="text-2xl font-semibold text-[#1A1A1A] dark:text-white">
                {featured.title}
              </h2>
               <MdArrowOutward className="font-extrabold text-2xl transition-transform duration-300 hover:scale-125 hover:text-3xl hover:text-[#6941c6]"/>
              </div>
              <p className="mt-2 text-[#667085] dark:text-gray-300">{featured.excerpt}</p>
              <p className="text-sm mt-4 font-medium text-[#6941C6] bg-[#F9F5FF] inline-block  px-3 py-1 rounded-full">{featured.category}</p>
            </div>
        </Link>
      </div>

     
      <div className="space-y-4 w-1/2">
        {others.map((post, index) => (
          <Link key={post.id} href={`/blog/${post.slug}`}
          className="flex flex-col-reverse md:flex-row-reverse items-center md:items-start gap-3 group">
              {/* Text */}
              <div className="md:w-1/2">
                <p className="text-xs font-semibold text-[#6941C6] dark:text-gray-400">
                  {post.writer} • {post.date.split(", ").slice(1).join(", ")}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-[#1A1A1A] dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-1 text-xs text-[#667085] dark:text-gray-300">{post.excerpt}</p>
                <p className="text-xs mt-3 font-medium text-[#3538CD] bg-[#EEF4FF] inline-block  px-2 py-1 rounded-full">{post.category}</p>
              </div>

              {/* Image */}
              <div className="md:w-1/2 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className=" object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
          </Link>
        ))}
      </div>
      </div>
      
    </section>
  );
}
