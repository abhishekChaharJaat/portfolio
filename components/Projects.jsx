"use client";

import { useState } from "react";
import { FaExternalLinkAlt, FaShoppingCart, FaComments, FaTasks, FaRobot } from "react-icons/fa";

const projects = [
  {
    name: "Sera",
    subtitle: "AI Assistant",
    description:
      "An intelligent AI assistant built with a RAG system. It retrieves relevant context to deliver accurate, grounded responses — providing a smart, conversational experience powered by LLMs and a FastAPI backend.",
    projectUrl: "https://try-sera.vercel.app/",
    gradient: "from-emerald-500 to-teal-600",
    Icon: FaRobot,
    category: "AI",
    techStack: ["Next.js", "Python", "FastAPI", "LLM", "RAG", "LangChain"],
  },
  {
    name: "Ecommerce Website",
    subtitle: "Full Stack E-Commerce",
    description:
      "A full-featured ecommerce platform with separate user and admin panels. Includes product management, cart, order flow, and secure authentication.",
    projectUrl: "https://abhishekshopshare.netlify.app/",
    gradient: "from-blue-600 to-cyan-500",
    Icon: FaShoppingCart,
    category: "Full Stack",
    techStack: ["React", "Redux", "Tailwind", "Node.js", "Express.js", "MongoDB"],
  },
  {
    name: "Chat App",
    subtitle: "Real-time Messaging",
    description:
      "Real-time chat application with Clerk authentication. Supports live messaging, user presence, and instant connection management.",
    projectUrl: "https://abhishekschatapp.netlify.app/home",
    gradient: "from-violet-600 to-purple-500",
    Icon: FaComments,
    category: "Full Stack",
    techStack: ["React", "Redux", "Tailwind", "Clerk", "Node.js", "Express.js", "MongoDB"],
  },
  {
    name: "Task Manager",
    subtitle: "Productivity App",
    description:
      "A clean task management app with full CRUD support. Users can add, edit, prioritize and delete tasks via an intuitive and responsive interface.",
    projectUrl: "https://abhishektaskmanager.netlify.app/",
    gradient: "from-rose-500 to-orange-500",
    Icon: FaTasks,
    category: "Full Stack",
    techStack: ["React", "Redux", "Tailwind", "Node.js", "Express.js", "MongoDB"],
  },
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const categories = ["All", "AI", "Full Stack"];
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-[#F8FAFC] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.15em] mb-2 block">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Projects
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-[#2563EB] rounded-full" />
          <p className="mt-4 text-slate-500 text-base max-w-lg mx-auto">
            A collection of real-world apps I&apos;ve built from scratch.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === cat
                  ? "bg-[#2563EB] text-white border-[#2563EB] shadow-sm shadow-blue-200"
                  : "bg-white text-slate-500 border-slate-200 hover:border-blue-200 hover:text-[#2563EB]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, index) => {
            const Icon = project.Icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Browser chrome */}
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center gap-2.5">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-md text-[11px] text-slate-400 px-3 py-0.5 truncate select-none">
                    {project.projectUrl.replace("https://", "")}
                  </div>
                </div>

                {/* Preview area */}
                {project.image ? (
                  <div className="relative h-44 overflow-hidden border-b border-slate-200">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-[#0F172A] text-xs font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-50 transition"
                      >
                        <FaExternalLinkAlt size={11} /> Visit Site
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className={`h-44 bg-linear-to-br ${project.gradient} relative overflow-hidden flex flex-col items-center justify-center`}>
                    <div className="absolute inset-0 opacity-10 pointer-events-none space-y-2 p-4">
                      <div className="h-2 bg-white rounded w-3/4" />
                      <div className="h-2 bg-white rounded w-1/2" />
                      <div className="h-2 bg-white rounded w-2/3" />
                    </div>
                    <Icon size={44} className="text-white/80 mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white font-bold text-base drop-shadow">{project.name}</p>
                    <p className="text-white/65 text-xs mt-0.5">{project.subtitle}</p>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#0F172A]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-[#0F172A] text-xs font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-50 transition"
                      >
                        <FaExternalLinkAlt size={11} /> Visit Site
                      </a>
                    </div>
                  </div>
                )}

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((t, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-[#2563EB] border border-blue-100 text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

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
