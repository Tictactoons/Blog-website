'use client'


import posts from "@/lib/Blogpost"; // Import directly from your blog data file
import AllPosts from "@/components/AllBlogPost";
import BlogPreviewList from "./BlogPreviewList";

export default function NewsletterPage() {
  // Get the 3 most recent posts (assuming newest are last in your array)
  const latestPosts = posts.slice(1, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Newsletter section */}
      <div className="text-center mb-16">
        <p className="text-sm lg:text-xs font-semibold text-[#6941C6] mb-1">Newsletters</p>
        <h1 className="text-4xl font-semibold text-[#1A1A1A] dark:text-white group-hover:text-[#6941C6] transition-colors mb-6">
          Stories and interviews
        </h1>
        <p className="mb-6 max-w-sm md:max-w-md mx-auto text-[#667085] dark:text-[#C0C5D0] text-sm lg:text-xs mt-2">
          Subscribe to learn about new product features, the latest in technology, solutions, and updates.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row justify-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[280px] h-10 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       focus:ring-2 text-xs focus:ring-[#6941C6] outline-none bg-white dark:bg-white"
            required
          />
          <button
            type="submit"
            className="px-4 py-[12px] bg-[#7F56D9] text-white text-xs font-semibold rounded-lg hover:bg-[#6941C6] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Dynamically generated blog posts */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
        <h2 className="font-semibold text-xl md:text-[22px] text-[#1a1a1a] dark:text-white mb-5">
          Recent from the Blog
        </h2>

        <BlogPreviewList posts={latestPosts} />
      </div>
    </section>
  );
}
