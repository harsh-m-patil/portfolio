const ProjectCard = ({ project }) => {
  return (
    <li className="relative rounded-lg bg-gray-800 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-800">
      {/* Project Preview with Hover Effect */}
      <div className="group relative">
        <img
          src={project.image}
          alt={project.title}
          className="mb-6 h-40 w-full rounded-md object-cover"
        />

        {/* Project Description (Appears on Hover - only on the image) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-md bg-gray-900 bg-opacity-90 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-center text-sm">{project.description}</p>
        </div>
      </div>

      {/* Project Title */}
      <h3 className="mb-4 text-xl font-semibold text-green-400">{`{ ${project.title} }`}</h3>

      {/* Tech Stack */}
      <div className="mb-6 flex flex-wrap gap-3">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="transform rounded-full bg-gray-700 px-3 py-1 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub Link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-green-400 transition-colors duration-200 hover:text-green-500 hover:underline"
      >
        View on GitHub
      </a>
    </li>
  );
};

export default ProjectCard;
