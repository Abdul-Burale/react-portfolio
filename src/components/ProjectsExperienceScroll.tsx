import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Projects from "./Projects";
import Experience from "./Experience";

export default function ProjectsExperienceScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-100vw"]);

  return (
    <section ref={targetRef} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-screen w-[200vw]">
          <section className="h-screen w-screen shrink-0 overflow-y-auto bg-[#fafaf9]">
            <Projects />
          </section>

          <section className="h-screen w-screen shrink-0 bg-[#0d0c0a] text-white">
            <Experience />
          </section>
        </motion.div>
      </div>
    </section>
  );
}