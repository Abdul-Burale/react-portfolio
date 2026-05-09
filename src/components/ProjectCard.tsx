import { Link } from "react-router-dom";
import type { ProjectType } from "../types/project";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <article className="w-full max-w-[400px] h-[575px] bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col overflow-hidden">
      <div className="flex items-center justify-center bg-gray-100 border-b border-gray-200 -mb-3">
        <img
          src={project.image.src}
          alt={project.image.alt}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-gray-500 underline over:text-purple-700 hover:underline mb-3 text-sm font-medium transition-colors duration-200"
        ><span className="h-2 w-2 rounded-full bg-red-500"></span>
          Read Documents
        </Link>

        <p className="text-sm text-gray-600 mb-3 flex-1">
          {project.description}
        </p>

        {project.impact && (
          <p className="text-xs italic text-gray-500 mb-3">
            {project.impact}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-800 text-xs text-white px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}