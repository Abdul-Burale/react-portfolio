import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* 🏷️ Title */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Personal Projects
        </h1>

        {/* 🧩 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
