import ProjectCard from "./ProjectCard";
import type { ProjectType } from "../types/project";
import projectsData from "../data/AbdihakimBurale.json";
import { motion } from "framer-motion";

const projects = projectsData as ProjectType[];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 py-20 overflow-hidden bg-[#f5f3ef] border-t border-[#e7e3dc]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-[-0.03em] text-[#0d0c0a]">
          Personal Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-full max-w-[400px]"
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}