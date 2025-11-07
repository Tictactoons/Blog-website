// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden  bg-white shadow-sm hover:shadow-md transition max-w-7xl">
      <Link href={`/projects/${project.slug}`}>
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="p-4 dark:bg-[#090D1F]">
          <div className="flex flex-wrap gap-2 mb-4">
                {project.category.map((cat: string, i: number) => {
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
          <h3 className="mt-2text-lg font-semibold text-[#1A1A1A] dark:text-white group-hover:text-[#6941C6] transition-colors">{project.title}</h3>
          <p className="text-[#667085] dark:text-[#C0C5D0] text-sm lg:text-xs mt-2">{project.excerpt}</p>
        </div>
      </Link>
    </div>
  );
}
