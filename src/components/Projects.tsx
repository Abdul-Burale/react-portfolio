import ProjectCard from "./ProjectCard";
import type { ProjectType } from "../types/project";
import projectsData from "../data/AbdihakimBurale.json";
import { motion } from "framer-motion";

const projects = projectsData as ProjectType[];

export default function Projects({
  onScrollToExperience,
}: {
  onScrollToExperience?: () => void;
}) {
  return (
    <section
      id="projects"
      className="relative z-10 h-screen flex items-center overflow-hidden bg-[#f5f3ef] border-t border-[#e7e3dc] py-16"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
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

      <motion.button
        type="button"
        onClick={onScrollToExperience}
        aria-label="Scroll to experience section"
        className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#0d0c0a] transition-colors cursor-pointer bg-transparent border-0 p-0"
        animate={{ x: [0, 10, 0] }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          x: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            type: "spring",
            stiffness: 260,
            damping: 18,
          },
        }}
      >
        <span className="text-3xl text-red-200">⇢</span>
      </motion.button>
    </section>
  );
}