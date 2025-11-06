import AllBlogPost from "@/components/AllBlogPost";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentPosts from "@/components/RecentPost";
import posts from "@/lib/Blogpost";

export default function Home() {
  const featuredPosts = posts.slice(0, 3);
  const allOtherPosts = posts.slice(3);

  return (
    <div>

      <main className="flex items-center flex-col mx-auto overflow-hidden">
        <div className="pt-16 max-w-7xl relative">
          <div className="absolute left-0 w-full h-[2px] bg-[#d4d8e0]"></div>
          <Hero />
          <div className="absolute left-0 w-full h-[2px] bg-[#d4d8e0]"></div>
          <RecentPosts posts={featuredPosts} />
          <AllBlogPost posts={allOtherPosts} />
        </div>
       
      </main>
    </div>
  );
}
