import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Ecommerce Website",
    description:
      "Full-featured ecommerce platform with both user and admin panels. Built with React, Redux, Tailwind CSS (frontend), and Node.js, Express.js, MongoDB (backend).",
    projectUrl: "https://abhishekshopshare.netlify.app/",
    techStack: ["React", "Redux", "Tailwind", "Node.js", "Express.js", "MongoDB"],
  },
  {
    name: "Chat App",
    description:
      "Real-time chat app with user authentication using Clerk. Built with React, Redux, Tailwind CSS (frontend), and Node.js, Express.js, MongoDB (backend).",
    projectUrl: "https://abhishekschatapp.netlify.app/home",
    techStack: ["React", "Redux", "Tailwind", "Clerk", "Node.js", "Express.js", "MongoDB"],
  },
  {
    name: "Task Manager",
    description:
      "Task management app with full CRUD operations. Users can add, edit, and delete tasks. Built using React, Redux, Tailwind CSS, Node.js, Express.js, and MongoDB.",
    projectUrl: "https://abhishektaskmanager.netlify.app/",
    techStack: ["React", "Redux", "Tailwind", "Node.js", "Express.js", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-12"
    >
      <h3 className="text-2xl font-bold text-center mb-10 border-b border-[#13866F] inline-block">
        Projects
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 p-4"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <h4 className="text-[#18475A] font-medium text-[17px] md:text-[20px] mb-1 flex items-center justify-between">
              {project.name}
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#13866F] rounded-full px-2 md:px-3 py-1 text-[11px] font-semibold shadow-sm border border-transparent hover:border-[#0f5a4c] hover:shadow-md transition duration-200 bg-[#E0F2F1]"
              >
                View Work <FaExternalLinkAlt size={11} />
              </a>
            </h4>
            <p className="text-[#1B2B48] text-lg font-sans mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#f2f6f6] text-[#669a90] px-2 py-[2px] text-[11px] rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
