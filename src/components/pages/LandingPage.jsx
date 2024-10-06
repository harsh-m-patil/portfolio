import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { name, skills, position, projects } from "../../data/constants";
import ProjectCard from "../ui/ProjectCard";
import TechCard from "../ui/TechCard"; // Adjust the import path as necessary

const LandingPage = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col bg-gray-800 text-white md:flex-row">
      {/* Left Section: Photo and Intro */}
      <div className="flex flex-1 flex-col items-center justify-between p-8 sm:h-max md:h-fit md:flex-[0.3]">
        <span className="text-gray-400">AI Generated</span>
        <img
          src="https://avatars.githubusercontent.com/u/135024692?v=4"
          alt={name}
          className="mb-6 w-2/3 rounded-full shadow-lg md:w-1/2"
        />
        <h1 className="text-3xl font-bold">
          Hello, I&apos;m <span className="text-green-400">{name}</span>
        </h1>
        <p className="mt-4 text-center text-2xl">
          a <span className="font-bold text-green-400">{position}</span>
        </p>

        {/* Tech Stack Section */}
        <div className="mt-12">
          <h2 className="mb-2 text-center text-2xl font-semibold">
            Tech Stack
          </h2>
          <ul className="flex flex-wrap justify-center space-x-4">
            {skills.map((skill, index) => (
              <TechCard key={index} image={skill.image} name={skill.name} />
            ))}
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="mb-4 mt-auto flex gap-4 p-8">
          <a
            href="https://github.com/harsh-m-patil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-green-400"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshmpatil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-green-400"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://discord.com/users/harshwardhan_patil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-green-400"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
        </div>
      </div>

      {/* Right Section: Projects */}
      <div className="flex-1 bg-gray-900 p-8 md:flex-[0.7]">
        <h2 className="mb-4 text-center text-2xl font-bold">My Projects</h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
