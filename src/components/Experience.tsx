import { motion, useMotionValue, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import experiencesData from "../data/Experience.json";
import type { ExperienceType } from "../types/experience";
import ExperienceCard from "./ExperienceCard";

const experiences = experiencesData as ExperienceType[];

export default function Experience({
  scrollProgress,
}: {
  scrollProgress?: MotionValue<number>;
}) {
  /*
    Desktop receives scrollProgress from ProjectsExperienceScroll.
    Mobile does not, so fallbackProgress keeps the section fully visible.
  */
  const fallbackProgress = useMotionValue(1);
  const progress = scrollProgress ?? fallbackProgress;

  const titleOpacity = useTransform(progress, [0.15, 0.32, 1], [0, 1, 1]);
  const titleY = useTransform(progress, [0.15, 0.32, 1], [28, 0, 0]);

  const timelineOpacity = useTransform(progress, [0.22, 0.4, 1], [0, 1, 1]);
  const timelineY = useTransform(progress, [0.22, 0.4, 1], [30, 0, 0]);
  const timelineScaleX = useTransform(progress, [0.24, 0.46, 1], [0, 1, 1]);

  const cardOpacity = useTransform(progress, [0.3, 0.52, 1], [0, 1, 1]);
  const cardY = useTransform(progress, [0.3, 0.52, 1], [30, 0, 0]);

  return (
    <div
      id="experience"
      className="min-h-screen md:h-screen bg-[#f5f3ef] text-[#0d0c0a] flex items-start md:items-center border-t border-[#e7e3dc] py-20 md:py-0"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="md:-mt-32"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">
            Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-[0.95]">
            Technical Experience
          </h2>
        </motion.div>

        <motion.div
          className="relative mt-20 md:mt-32"
          style={{ opacity: timelineOpacity, y: timelineY }}
        >
          <motion.div
            className="hidden md:block absolute left-0 right-0 top-0 h-[3px] rounded-full bg-[#151513] origin-left"
            style={{ scaleX: timelineScaleX }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 justify-items-center">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                className="relative flex w-full justify-center md:pt-16"
                style={{ opacity: cardOpacity, y: cardY }}
              >
                <span className="hidden md:block absolute top-0 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e05252] ring-8 ring-[#f5f3ef]" />

                <div className="hidden md:block absolute top-0 left-1/2 h-16 w-[3px] -translate-x-1/2 bg-[#151513]" />

                <ExperienceCard {...experience} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}