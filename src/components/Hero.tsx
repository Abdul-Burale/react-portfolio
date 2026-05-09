import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 12,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const Hero = () => {
    return (
        <section className="relative flex flex-col h-screen">
            <div className="flex flex-col flex-grow items-center justify-center px-4">
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="font-black text-5xl md:text-7xl tracking-[-0.04em] text-slate-950"
                >
                    Abdihakim Burale
                </motion.h1>

                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    className="pt-5 text-slate-700 text-lg md:text-2xl font-semibold tracking-tight"
                >
                    Student{" "}
                    <motion.span
                        animate={{ color: ["#334155", "#020617", "#334155"] }}
                        transition={{
                            duration: 3.5,
                            delay: 1.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="font-bold"
                    >
                        Software Developer
                    </motion.span>
                </motion.h2>

                <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="pt-3 text-slate-600 text-sm md:text-lg font-medium tracking-normal"
                >
                    London, United Kingdom
                </motion.h3>

                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 48, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                    className="h-px bg-slate-300/60 my-4"
                />

                <motion.nav
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="flex gap-6 pt-4"
                >
                    <motion.a
                        href="https://www.linkedin.com/in/abdul-burale/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        whileHover={{ y: -3, scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="text-slate-800 hover:text-black transition-colors"
                    >
                        <FaLinkedin size={28} />
                    </motion.a>

                    <motion.a
                        href="https://github.com/Abdul-Burale/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        whileHover={{ y: -3, scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="text-slate-800 hover:text-black transition-colors"
                    >
                        <FaGithub size={28} />
                    </motion.a>

                    <motion.a
                        href="/Curriculum_Vitae_Portfolio.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Curriculum Vitae"
                        whileHover={{ y: -3, scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="text-slate-800 hover:text-black transition-colors"
                    >
                        <TbFileCv size={28} />
                    </motion.a>
                </motion.nav>
            </div>

            <motion.button
                type="button"
                onClick={() => {
                    document.getElementById("projects")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
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