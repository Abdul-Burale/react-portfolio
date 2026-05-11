import { motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import experiencesData from "../data/Experience.json";
import type { ExperienceType } from "../types/experience";
import ExperienceCard from "./ExperienceCard";

const experiences = experiencesData as ExperienceType[];

export default function Experience({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  const titleOpacity = useTransform(scrollProgress, [0.42, 0.54, 1], [0, 1, 1]);
  const titleY = useTransform(scrollProgress, [0.42, 0.54, 1], [28, 0, 0]);

  const timelineOpacity = useTransform(
    scrollProgress,
    [0.48, 0.62, 1],
    [0, 1, 1]
  );
  const timelineY = useTransform(scrollProgress, [0.48, 0.62, 1], [30, 0, 0]);
  const timelineScaleX = useTransform(
    scrollProgress,
    [0.5, 0.68, 1],
    [0, 1, 1]
  );

  const cardOpacity = useTransform(scrollProgress, [0.56, 0.72, 1], [0, 1, 1]);
  const cardY = useTransform(scrollProgress, [0.56, 0.72, 1], [30, 0, 0]);

  return (
    <div
      id="experience"
      className="h-screen bg-[#f5f3ef] text-[#0d0c0a] flex items-center border-t border-[#e7e3dc]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="-mt-32"
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
          className="relative mt-32"
          style={{ opacity: timelineOpacity, y: timelineY }}
        >
          <motion.div
            className="absolute left-0 right-0 top-0 h-[3px] rounded-full bg-[#151513] origin-left"
            style={{ scaleX: timelineScaleX }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                className="relative flex w-full justify-center pt-16"
                style={{ opacity: cardOpacity, y: cardY }}
              >
                <span className="absolute top-0 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e05252] ring-8 ring-[#f5f3ef]" />

                <div className="absolute top-0 left-1/2 h-16 w-[3px] -translate-x-1/2 bg-[#151513]" />

                <ExperienceCard {...experience} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}