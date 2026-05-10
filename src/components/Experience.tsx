import { motion } from "framer-motion";
import experiencesData from "../data/Experience.json";
import type { ExperienceType } from "../types/experience";
import ExperienceCard from "./ExperienceCard";

const experiences = experiencesData as ExperienceType[];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Experience() {
  return (
    <div
      id="experience"
      className="h-screen bg-[#f5f3ef] text-[#0d0c0a] flex items-center border-t border-[#e7e3dc]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="-mt-32"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
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
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        >
          <motion.div
            className="absolute left-0 right-0 top-0 h-[3px] rounded-full bg-[#151513] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative flex w-full justify-center pt-16"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.55,
                  delay: 0.35 + index * 0.15,
                  ease: "easeOut",
                }}
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