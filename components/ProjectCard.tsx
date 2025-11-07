// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition">
      <Link href={`/projects/${project.slug}`}>
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-blue-600 font-medium">{project.category}</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">{project.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{project.excerpt}</p>
        </div>
      </Link>
    </div>
  );
}
