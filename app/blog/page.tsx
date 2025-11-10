"use client";

import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  categories: string;
  slug: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data.posts))
      .catch(err => console.error(err));
  }, []);

  if (!posts.length) return <p className="text-center mt-10">No posts yet.</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      {posts.map(post => (
        <div key={post.id} className="border p-4 rounded mb-4">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          {post.categories && (
            <p className="text-gray-500">
              Categories: {post.categories.split(",").join(", ")}
            </p>
          )}
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      ))}
    </div>
  );
}
