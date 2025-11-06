import Hero from "@/components/Hero";
import RecentPosts from "@/components/RecentPost";
import posts from "@/lib/Blogpost";


const allOtherPosts = posts.slice(3); 

export default function Home() {
  return (
    <main className="flex items-center flex-col mx-auto overflow-hidden">
        <div className="max-w-7xl pt-20 ">
          <div className="absolute left-0 w-full h-[2px] bg-[#d4d8e0]"></div>
          <Hero />
          <div className="absolute left-0 w-full h-[2px] bg-[#d4d8e0]"></div>
          <RecentPosts posts={posts}/>
        </div>
    </main>
  );
}
