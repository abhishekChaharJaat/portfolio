import React from "react";
import { FaExternalLinkAlt, FaShoppingCart, FaComments, FaTasks } from "react-icons/fa";

const projects = [
  {
    name: "Ecommerce Website",
    subtitle: "Full Stack · E-Commerce Platform",
    description:
      "Full-featured ecommerce platform with user and admin panels. Supports product management, cart, orders, and authentication.",
    projectUrl: "https://abhishekshopshare.netlify.app/",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    Icon: FaShoppingCart,
    techStack: ["React", "Redux", "Tailwind", "Node.js", "Express.js", "MongoDB"],
  },
  {
    name: "Chat App",
    subtitle: "Real-time · Messaging Platform",
    description:
      "Real-time chat application with user authentication via Clerk. Supports instant messaging with live connection management.",
    projectUrl: "https://abhishekschatapp.netlify.app/home",
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    Icon: FaComments,
    techStack: ["React", "Redux", "Tailwind", "Clerk", "Node.js", "Express.js", "MongoDB"],
  },
  {
    name: "Task Manager",
    subtitle: "Productivity · Task Management",
    description:
      "Task management app with full CRUD operations. Users can add, edit, prioritize, and delete tasks with a clean intuitive interface.",
    projectUrl: "https://abhishektaskmanager.netlify.app/",
    gradient: "from-orange-400 via-amber-500 to-yellow-500",
    Icon: FaTasks,
    techStack: ["React", "Redux", "Tailwind", "Node.js", "Express.js", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#F8FFFE] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1B2B48]">Projects</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#13866F] rounded-full" />
          <p className="mt-4 text-[#5a7a82] text-base max-w-xl mx-auto">
            A selection of projects I&apos;ve built — from full-stack platforms
            to real-time applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.Icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                {/* Browser Chrome */}
                <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-3 border-b border-gray-200">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white border border-gray-200 rounded text-xs text-gray-400 px-3 py-1 truncate select-none">
                    {project.projectUrl.replace("https://", "")}
                  </div>
                </div>

                {/* Project Preview Mockup */}
                <div
                  className={`h-44 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center overflow-hidden relative`}
                >
                  {/* Decorative UI lines */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-3 left-5 w-20 h-1.5 bg-white rounded" />
                    <div className="absolute top-7 left-5 w-32 h-1.5 bg-white rounded" />
                    <div className="absolute top-11 left-5 w-16 h-1.5 bg-white rounded" />
                    <div className="absolute bottom-5 right-5 w-16 h-6 bg-white rounded" />
                    <div className="absolute bottom-5 left-5 w-20 h-6 bg-white rounded" />
                  </div>
                  <Icon
                    size={42}
                    className="text-white/80 drop-shadow-lg mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-white font-bold text-lg drop-shadow">
                    {project.name}
                  </p>
                  <p className="text-white/70 text-xs mt-1">{project.subtitle}</p>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[#4a5568] text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#E8F5F0] text-[#13866F] text-xs px-2.5 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#13866F] text-white rounded-lg hover:bg-[#0f5a4c] transition text-sm font-medium shadow-sm"
                  >
                    Live Demo <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
