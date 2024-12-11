import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "EZStay",
    description: "Seamless hotel booking platform.",
    link: "https://github.com/harsh-m-patil/ezstay",
    tech: ["EJS", "ExpressJS", "Node.js", "MongoDB"],
    image:
      "https://github.com/harsh-m-patil/EZStay/raw/stable/views/images/screenshots/biz.png",
  },
  {
    title: "GitTrack",
    description: "CLI for GitHub insights.",
    link: "https://github.com/harsh-m-patil/gittrack",
    tech: ["Golang", "Cobra", "Github API"],
    image:
      "https://github.com/harsh-m-patil/gittrack/blob/main/assets/gitrack.png?raw=true",
  },
  {
    title: "WorkSphere",
    description: "Freelancing and client management.",
    link: "https://github.com/harsh-m-patil/worksphere",
    tech: ["React", "Tailwind CSS", "ExpressJS", "Node.js", "MongoDB"],
    image:
      "https://github.com/harsh-m-patil/WorkSphere/blob/main/assets/worksphere.png?raw=true",
  },
  {
    title: "Portfolio",
    description: "Showcasing skills and projects.",
    link: "https://harshmpatil.vercel.app",
    tech: ["React", "Tailwind CSS", "Next.js", "AceternityUI"],
    image:
      "https://github.com/harsh-m-patil/portfolio/blob/main/assets/port.png?raw=true",
  },
];

const page = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white py-5 ">
        <span>These are my Projects</span>
      </h2>
      <div className="grid grid-cols-2 mx-auto max-w-4xl">
        {projects.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default page;
