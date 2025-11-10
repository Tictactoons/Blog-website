"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageExtension from "@tiptap/extension-image";

const categories = [
  "Web Development",
  "UI/UX Design",
  "AI Automation",
  "Marketing",
  "Freelancing",
  "No-code",
  "Mobile Development",
  "Frontend Development",
  "Backend Development",
  "Fullstack Development",
  "Data Science",
  "Machine Learning",
  "Blockchain",
  "Cybersecurity",
  "Cloud Computing",
  "Software Engineering",
  "Game Development",
  "Programming Languages",
  "Productivity Tools",
  "Digital Transformation",
  "Tech Reviews"
];

export default function WritePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, ImageExtension],
    content: "",
    immediatelyRender: false,
  });

  const handleCategoryToggle = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/YOUR_CLOUDINARY_CLOUD_NAME/image/upload`,
      { method: "POST", body: formData }
    );
    const data = await res.json();
    return data.secure_url;
  };

  const handlePublish = async () => {
    if (!editor) return;
    setUploading(true);

    let imageUrl = null;
    if (file) imageUrl = await uploadImage(file);

    const postData = {
      title,
      content: editor.getHTML(),
      categories: selectedCategories.join(","), // comma-separated
      image: imageUrl,
      status: "PUBLISHED", // optional drafts support later
    };

    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });

    alert("Post published!");
    setUploading(false);
    setTitle("");
    editor.commands.setContent("");
    setSelectedCategories([]);
    setFile(null);
    router.push("/blog"); // redirect to blog listing
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold mb-5">Write a Post</h1>

      {/* Title */}
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      {/* Category Selector */}
      <div className="mb-4 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryToggle(cat)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedCategories.includes(cat)
                ? "bg-[#090D1F] text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Upload */}
      <div className="my-6">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
        />
        {file && <p className="mt-2">Selected file: {file.name}</p>}
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="border p-4 rounded mb-4 bg-white dark:bg-gray-800 min-h-[300px]"
      />

      {/* Publish Button */}
      <button
        onClick={handlePublish}
        disabled={uploading}
        className="bg-[#090D1F] text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        {uploading ? "Publishing..." : "Publish"}
      </button>
    </div>
  );
}
