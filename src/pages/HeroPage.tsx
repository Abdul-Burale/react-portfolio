import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const iconHover = {
  y: -6,
  rotate: -6,
  scale: 1.08,
};

const iconTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 18,
};

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative flex min-h-screen flex-col">
      <div className="flex flex-grow flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h1 className="font-black text-3xl sm:text-4xl md:text-7xl tracking-[-0.04em] text-slate-950 whitespace-nowrap">
            Abdihakim Burale
          </h1>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="pt-4 text-slate-600 text-base md:text-2xl font-medium tracking-wide"
        >
          Student Software Developer
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          className="pt-2 text-slate-400 text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.08em] uppercase"
        >
          BSc Computer Science · Predicted First Class Honours
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
          className="w-12 h-px bg-slate-300/60 my-4"
        />

        <motion.nav
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55, delay: 0.36, ease: "easeOut" }}
          className="flex gap-6 pt-4"
        >
          <motion.a
            href="https://www.linkedin.com/in/abdul-burale/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-800 hover:text-black transition-colors"
            whileHover={iconHover}
            whileTap={{ scale: 0.95 }}
            transition={iconTransition}
          >
            <FaLinkedin size={28} />
          </motion.a>

          <motion.a
            href="https://github.com/Abdul-Burale/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-800 hover:text-black transition-colors"
            whileHover={iconHover}
            whileTap={{ scale: 0.95 }}
            transition={iconTransition}
          >
            <FaGithub size={28} />
          </motion.a>

          <motion.a
            href="/CV_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Curriculum Vitae"
            className="text-slate-800 hover:text-black transition-colors"
            whileHover={iconHover}
            whileTap={{ scale: 0.95 }}
            transition={iconTransition}
          >
            <TbFileCv size={28} />
          </motion.a>
        </motion.nav>
      </div>

      <motion.button
        type="button"
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer bg-transparent border-0 p-0"
        aria-label="Scroll to projects"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-slate-300 relative"
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#e05252]" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;