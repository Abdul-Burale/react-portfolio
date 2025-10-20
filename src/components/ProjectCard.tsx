const ProjectCard = () => {
    return (
      <div className="w-full max-w-[400px] h-[500px] bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col overflow-hidden">
        {/* 🖼️ Image Section */}
        <div className="h-40 flex items-center justify-center bg-gray-100 border-b border-gray-200">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Project"
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>
  
        {/* 📄 Content Section */}
        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-xl font-semibold mb-2">Sample Project</h2>
  
          <a
            href="#"
            className="inline-flex items-center text-gray-500 hover:underline mb-3 text-sm"
          >
            Live Project
          </a>
  
          <p className="text-sm text-gray-600 mb-3 flex-1">
            This is a simple static card layout. You can replace this text later
            with a project description.
          </p>
  
          <p className="text-xs italic text-gray-500 mb-3">
            Impact: Demonstrates card styling in Tailwind.
          </p>
  
          {/* 🧩 Tags Section */}
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="bg-gray-800 text-xs text-white px-2 py-1 rounded">
              React
            </span>
            <span className="bg-gray-800 text-xs text-white px-2 py-1 rounded">
              Tailwind
            </span>
            <span className="bg-gray-800 text-xs text-white px-2 py-1 rounded">
              UI
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  