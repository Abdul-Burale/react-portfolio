import ProjectCard from "./ProjectCard";
import type { ProjectType } from "../types/project";
import projectsData from "../data/AbdihakimBurale.json"

const projects = projectsData as ProjectType[];

export default function Projects() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Personal Projects
        </h1>
        {/* 🧩 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

