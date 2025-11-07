// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/project";
import Link from "next/link";

export default function ProjectsPage() {
  const perPage = 8;
  const displayedProjects = projects.slice(0, perPage); // you can later paginate this dynamically

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id}
            className={`
              ${index === 2 ? "md:col-span-2" : ""} 
              ${index > 2 && (index - 3) % 3 === 2 ? "md:col-span-2" : ""}
            `}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <Link
          href="#"
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          Previous
        </Link>
        <Link
          href="#"
          className="px-4 py-2 border border-gray-300 rounded-lg ml-3 text-gray-700 hover:bg-gray-100"
        >
          Next
        </Link>
      </div>
    </section>
  );
}
