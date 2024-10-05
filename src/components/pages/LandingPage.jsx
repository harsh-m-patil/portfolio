import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { name, skills, position, projects } from "../../data/constants";
import ProjectCard from "../ui/ProjectCard";
import TechCard from "../ui/TechCard"; // Adjust the import path as necessary

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)] bg-gray-800 text-white">
      {/* Left Section: Photo and Intro */}
      <div className="flex-1 md:flex-[0.3] flex flex-col justify-between items-center p-8 sm:h-max md:h-fit">
        <span className="text-gray-900">AI Generated</span>
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
          <h2 className="text-2xl text-center font-semibold mb-2">Tech Stack</h2>
          <ul className="flex flex-wrap justify-center space-x-4">
            {skills.map((skill, index) => (
              <TechCard key={index} image={skill.image} name={skill.name} />
            ))}
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="mt-auto flex gap-4 mb-4 p-8">
          <a
            href="https://github.com/harsh-m-patil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshmpatil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://discord.com/users/harshwardhan_patil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
        </div>
      </div>

      {/* Right Section: Projects */}
      <div className="flex-1 md:flex-[0.7] bg-gray-900 p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">My Projects</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
