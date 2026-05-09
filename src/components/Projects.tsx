import ProjectCard from "./ProjectCard";
import type { ProjectType } from "../types/project";
import projectsData from "../data/AbdihakimBurale.json"
import { motion } from "framer-motion"

const projects = projectsData as ProjectType[];

export default function Projects() {
  return (
    <section id="projects" className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 tracking-[-0.03em] text-[#0d0c0a]">
          Personal Projects
        </h1>

        {/* 🧩 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {projects.map((p) => (
            <motion.article
              whileHover={{ y: -20 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-full max-w-[400px] h-[550px] bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col overflow-hidden"
            >
              <ProjectCard key={p.id} project={p} />
            </motion.article>

          ))}
        </div>
      </div>
    </section>
  );
}

