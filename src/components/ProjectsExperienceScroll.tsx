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

  const x = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["0vw", "0vw", "-100vw"]
  );

  const experienceProgress = useTransform(
    scrollYProgress,
    [0.25, 1],
    [0, 1],
    { clamp: true }
  );

  const scrollToExperience = () => {
    if (!targetRef.current) return;

    const sectionTop = targetRef.current.offsetTop;
    const sectionHeight = targetRef.current.offsetHeight;
    const targetScroll = sectionTop + sectionHeight - window.innerHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section ref={targetRef} className="relative h-[260vh] bg-[#f5f3ef]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-screen w-[200vw]">
          <section className="h-screen w-screen shrink-0 overflow-hidden bg-[#f5f3ef]">
            <Projects onScrollToExperience={scrollToExperience} />
          </section>

          <section className="h-screen w-screen shrink-0 overflow-hidden bg-[#f5f3ef]">
            <Experience scrollProgress={experienceProgress} />
          </section>
        </motion.div>
      </div>
    </section>
  );
}