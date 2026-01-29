import { FaGithub, FaLinkedin} from "react-icons/fa";
import {TbFileCv} from "react-icons/tb"
const Hero = () => {
    return (
        <div className="flex flex-col h-screen">
        <div className="flex flex-col flex-grow items-center justify-center">
            <h1 className="font-bold text-4xl md:text-6xl tracking-tight">
                Abdihakim Burale
            </h1>

            <h2 className="pt-4 text-slate-600 text-base  md:text-2xl font-medium tracking-wide">
                Student Software Developer
            </h2>

            <h3 className="pt-2 text-slate-500 text-xs md:text-lg font-normal">
                London, United Kingdom
            </h3>
            
            <div className="w-12 h-px bg-slate-300/60 my-4"></div>

            <nav className="flex gap-6 pt-4">
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
                href="https://abdihakimburale.com/resume.pdf/"
                target="_blank" 
                aria-label="Curriculum Vitae"
                className="text-slate-800 hover:text-black transition-colors"
                >
            <TbFileCv size={28} />
            </a>
            </nav>
        </div>
        </div>
    )
};
export default Hero;