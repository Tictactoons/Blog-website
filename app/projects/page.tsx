

"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import {projects} from "@/lib/project";
import Pagination from "@/components/Pagination";

type Props = {
  showPagination?: boolean; 
};

export default function ProjectsPage({showPagination = true}: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section className="py-12 max-w-7xl mx-auto px-5 sm:px-10 pt-16">
      <div className="w-full max-w-7xl h-[2px] bg-[#d4d8e0]"></div>

        <div className="pt-6 pb-6 text-center">
        <b className="text-[#1A1A1A] dark:text-white md:font-bold text-5xl font-extrabold md:text-8xl 2xl:text-[150px]">
            PROJECTS
        </b>
    </div>

    <div className="w-full max-w-7xl h-[2px] bg-[#d4d8e0]"></div>

      <h1 className="mt-12 mb-4 font-semibold text-xl md:text-[22px] dark:text-white text-[#1a1a1a]">List Projects</h1>

      {/* 🧱 Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project, index) => (
          <div
            key={project.id}
            className={`${
              currentPage === 1 && index === 3 ? "lg:col-span-2" : ""
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* 📄 Pagination */}
      {showPagination && <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />}
    </section>
  );
}
