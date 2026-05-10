import { Link, useParams } from "react-router-dom";
import projectsData from "../data/AbdihakimBurale.json";
import type { ProjectType } from "../types/project";
import PageTransition from "./PageTransition";

const projects = projectsData as ProjectType[];

const projectDetails: Record<
  string,
  {
    subtitle: string;
    overview: string;
    sections: {
      title: string;
      body: string;
    }[];
    highlights: string[];
  }
> = {
  "portfolio-energy-research": {
    subtitle: "Compiler optimisation research on real low-power hardware",
    overview:
      "This project investigates how LLVM compiler optimisation settings affect runtime, average power draw, and estimated energy consumption when loop-intensive programs run on a Raspberry Pi 5.",
    sections: [
      {
        title: "Project Aim",
        body:
          "The aim was to evaluate whether LLVM optimisation behaviour, including software-pipelining-related loop optimisation, could reduce total system energy consumption on real hardware rather than relying only on simulation-based analysis.",
      },
      {
        title: "Experimental Framework",
        body:
          "I built an automated framework using LLVM/Clang, PolyBench/C, Python scripts, and Raspberry Pi 5 PMIC power readings. The framework compiled benchmark programs, executed them under controlled optimisation settings, logged power data, and exported CSV files for analysis.",
      },
      {
        title: "Benchmarks and Optimisation Settings",
        body:
          "The experiment used four PolyBench/C kernels: 2mm, 3mm, corr, and gemm. Each benchmark was compiled using O0, O2, O3, and O3_no_vec, where O3_no_vec disables loop and SLP vectorisation while keeping aggressive optimisation enabled.",
      },
      {
        title: "Results",
        body:
          "The results showed that optimised configurations generally increased average power during execution, but reduced runtime enough to lower total estimated energy. The strongest result was observed in gemm, where O3 reduced estimated energy by approximately 82.8% compared with O0.",
      },
      {
        title: "What I Learned",
        body:
          "The project strengthened my understanding of compiler optimisation, ARM-based low-power hardware, experimental design, automation, data logging, and performance-energy trade-offs. It also showed the importance of cautious interpretation because O2 and O3 apply multiple compiler transformations at the same time.",
      },
    ],
    highlights: [
      "Built a Raspberry Pi 5 energy measurement framework",
      "Used LLVM/Clang 18.1.0 and PolyBench/C",
      "Automated benchmark execution with Python",
      "Collected PMIC power readings and exported CSV logs",
      "Measured runtime, average power, and estimated energy",
      "Observed up to 82.8% estimated energy reduction",
    ],
  },

  "portfolio-multi-tenant-api": {
    subtitle: "Secure backend API for multi-tenant business operations",
    overview:
      "This project is a backend API that allows multiple businesses to manage users, products, orders, and Stripe payment links while keeping tenant data isolated.",
    sections: [
      {
        title: "Project Aim",
        body:
          "The aim was to design a backend system that supports multiple businesses in one application while enforcing strict separation between each tenant’s users, products, orders, and payment data.",
      },
      {
        title: "Core Features",
        body:
          "The API includes user management, product management, order management, Stripe payment link generation, Firebase authentication, and role-based access control.",
      },
      {
        title: "Multi-Tenant Design",
        body:
          "Each request is scoped to a tenant so that one business cannot access another business’s data. This makes the system suitable for SaaS-style backend architecture.",
      },
      {
        title: "Security",
        body:
          "The project focuses on authentication, authorisation, role-based permissions, and data isolation. These are important backend concerns for real business applications.",
      },
      {
        title: "What I Learned",
        body:
          "This project improved my backend development skills in Go, MongoDB data modelling, API design, authentication, payment integration, and secure multi-tenant architecture.",
      },
    ],
    highlights: [
      "Built with Go and MongoDB",
      "Stripe payment link integration",
      "Firebase authentication",
      "Role-based access control",
      "Tenant-scoped data access",
      "REST API backend architecture",
    ],
  },

  "portfolio-ctrl-jump": {
    subtitle: "Browser-playable 2D platformer built with Python and Pygame",
    overview:
      "Ctrl + Jump is a pixel-art 2D platformer built in Python with Pygame. The game includes movement physics, jumping, wall-sliding, dashing, enemies, projectiles, particles, screenshake, level transitions, and a browser-playable deployment using Pygbag/WebAssembly.",
    sections: [
      {
        title: "Project Aim",
        body:
          "The aim was to build a complete 2D platformer from scratch using Python and Pygame, focusing on responsive movement, game feel, enemy behaviour, level progression, and polished visual effects.",
      },
      {
        title: "Gameplay Systems",
        body:
          "The game includes classic platformer movement such as running, jumping, wall-sliding, and dashing. It also includes enemy patrols, projectile attacks, player death and respawn behaviour, level transitions, and camera scrolling.",
      },
      {
        title: "Rendering and Effects",
        body:
          "The rendering system uses layered surfaces to separate the background, foreground, silhouettes, particles, sparks, and transition effects. Screenshake, dash trails, leaves, sparks, and particle animations were added to improve the feel and visual feedback of the game.",
      },
      {
        title: "Level and Asset Structure",
        body:
          "Levels are loaded from JSON-based tilemaps, with tiles, spawners, enemies, and decorative elements defined as map data. The project separates game logic into modules for entities, tilemaps, particles, sparks, clouds, animations, and utility functions.",
      },
      {
        title: "Browser Deployment",
        body:
          "The game was packaged for the browser using Pygbag, allowing the Python/Pygame project to run through WebAssembly. The deployed version can be played directly from a URL without installing Python or Pygame.",
      },
      {
        title: "What I Learned",
        body:
          "This project strengthened my understanding of game loops, collision handling, animation systems, tilemaps, entity behaviour, particle effects, audio, camera movement, and Python game deployment to the web.",
      },
    ],
    highlights: [
      "Built with Python and Pygame",
      "Browser-playable through Pygbag/WebAssembly",
      "Implemented run, jump, wall-slide, and dash movement",
      "Created enemy patrol and projectile systems",
      "Added particles, sparks, screenshake, and transitions",
      "Used JSON tilemaps for level progression",
    ],
  },
};

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);
  const detail = id ? projectDetails[id] : undefined;

  if (!project || !detail) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-white px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="text-sm text-gray-500 hover:underline">
              ← Back to portfolio
            </Link>

            <h1 className="text-3xl font-bold mt-8">Project not found</h1>
            <p className="text-gray-600 mt-3">
              This project page does not exist yet.
            </p>
          </div>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <Link to="/" className="text-sm text-gray-500 hover:underline">
            ← Back to portfolio
          </Link>

          <section className="mt-8">
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="w-full rounded-2xl border border-gray-200 shadow-lg object-cover"
            />

            <div className="mt-10">
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Project Case Study
              </p>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
                {project.title}
              </h1>

              <p className="text-xl text-gray-600 mt-4">{detail.subtitle}</p>

              <p className="text-gray-700 leading-7 mt-6 max-w-3xl">
                {detail.overview}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {detail.highlights.map((item) => (
              <div
                key={item}
                className="border border-gray-200 rounded-xl bg-gray-50 p-4 text-sm text-gray-700"
              >
                {item}
              </div>
            ))}
          </section>

          <section className="mt-14 space-y-10">
            {detail.sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="text-gray-700 leading-7 mt-3">{section.body}</p>
              </article>
            ))}
          </section>

          <section className="border-t border-gray-200 mt-14 pt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                {link.label}
              </a>
            ))}
          </section>
        </div>
      </main>
    </PageTransition>
  );
}