import { name, skills, position, projects } from "../../data/constants";
import TechCard from "../ui/TechCard"; // Adjust the import path as necessary

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)] bg-gray-800 text-white">
      {/* Left Section: Photo and Intro */}
      <div className="flex-1 md:flex-[0.3] flex flex-col justify-start items-center p-8 sticky top-0">
        {/* Adjust 'top' to the navbar height */}
        <img
          src="https://avatars.githubusercontent.com/u/135024692?v=4"
          alt={name}
          className="w-2/3 md:w-1/2 rounded-full mb-6 shadow-lg"
        />
        <h1 className="text-3xl font-bold ">
          Hello, I&apos;m <span className="text-green-400">{name}</span>
        </h1>
        <p className="text-2xl mt-4 text-center">
          a <span className="font-bold text-green-400">{position}</span>
        </p>

        {/* Tech Stack Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <ul className="flex flex-wrap justify-center space-x-4">
            {skills.map((skill, index) => (
              <TechCard key={index} image={skill.image} name={skill.name} />
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section: Projects */}
      <div className="flex-1 md:flex-[0.7] bg-gray-900 p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">My Projects</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <li
              key={index}
              className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Preview with Hover Effect */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-6"
                />

                {/* Project Description (Appears on Hover - only on the image) */}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-90 text-white p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                  <p className="text-sm text-center">{project.description}</p>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-4 text-white">
                {project.title}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full transition-transform transform hover:scale-105"
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
                className="text-green-400 font-semibold hover:underline hover:text-green-500 transition-colors duration-200"
              >
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
