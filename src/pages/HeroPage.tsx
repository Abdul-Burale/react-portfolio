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

const Hero = () => {
  const scrollToProjects = () => {
    const projects = document.getElementById("projects");

    if (projects) {
      projects.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
          <a
            href="https://www.linkedin.com/in/abdul-burale/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-800 hover:text-black transition-colors"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/Abdul-Burale/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-800 hover:text-black transition-colors"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="/Curriculum_Vitae_Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Curriculum Vitae"
            className="text-slate-800 hover:text-black transition-colors"
          >
            <TbFileCv size={28} />
          </a>
        </motion.nav>
      </div>

      <motion.button
        type="button"
        onClick={scrollToProjects}
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#e05252] hover:text-[#0d0c0a] transition-colors cursor-pointer bg-transparent border-0 p-0"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-2xl">⌄</span>
      </motion.button>
    </section>
  );
};

export default Hero;