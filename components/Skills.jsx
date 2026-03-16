"use client";

import { useEffect, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiFastapi,
  SiLangchain,
} from "react-icons/si";
import { FaServer, FaCode, FaDatabase, FaBrain } from "react-icons/fa";

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js",     Icon: SiReact,      level: 70, iconColor: "#61DAFB", bar: "from-cyan-400 to-blue-500" },
      { name: "Next.js",      Icon: SiNextdotjs,  level: 65, iconColor: "#000000", bar: "from-slate-600 to-slate-400" },
      { name: "Redux",        Icon: SiRedux,       level: 80, iconColor: "#764ABC", bar: "from-purple-500 to-violet-400" },
      { name: "JavaScript",   Icon: SiJavascript,  level: 65, iconColor: "#F7DF1E", bar: "from-yellow-400 to-orange-400" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, level: 75, iconColor: "#06B6D4", bar: "from-cyan-500 to-teal-400" },
      { name: "HTML & CSS",   Icon: SiHtml5,       level: 85, iconColor: "#E34F26", bar: "from-orange-500 to-red-400" },
    ],
  },
  {
    label: "Backend & Tools",
    skills: [
      { name: "Node.js",    Icon: SiNodedotjs, level: 50, iconColor: "#339933", bar: "from-green-500 to-emerald-400" },
      { name: "Express.js", Icon: FaServer,    level: 55, iconColor: "#64748B", bar: "from-slate-500 to-slate-400" },
      { name: "MongoDB",    Icon: SiMongodb,   level: 55, iconColor: "#47A248", bar: "from-green-600 to-lime-400" },
      { name: "REST APIs",  Icon: FaDatabase,  level: 70, iconColor: "#2563EB", bar: "from-blue-500 to-indigo-400" },
      { name: "Java",       Icon: FaCode,      level: 60, iconColor: "#EA580C", bar: "from-red-500 to-orange-400" },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      { name: "Python",    Icon: SiPython,    level: 65, iconColor: "#3776AB", bar: "from-blue-500 to-yellow-400" },
      { name: "FastAPI",   Icon: SiFastapi,   level: 60, iconColor: "#009688", bar: "from-teal-500 to-emerald-400" },
      { name: "LangChain", Icon: SiLangchain, level: 55, iconColor: "#1C3C3C", bar: "from-emerald-600 to-teal-400" },
      { name: "LLMs",      Icon: FaBrain,     level: 55, iconColor: "#7C3AED", bar: "from-violet-500 to-purple-400" },
    ],
  },
];

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="skills" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.15em] mb-2 block">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Skills
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-[#2563EB] rounded-full" />
          <p className="mt-4 text-slate-500 text-base">
            Technologies I build with every day
          </p>
        </div>

        <div className="space-y-14 max-w-5xl mx-auto">
          {categories.map(({ label, skills }) => (
            <div key={label}>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                <span>{label}</span>
                <span className="flex-1 h-px bg-slate-100" />
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map(({ name, Icon, level, iconColor, bar }, i) => (
                  <div
                    key={i}
                    className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 hover:border-blue-200 hover:shadow-md transition group"
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-blue-200 transition">
                        <Icon size={18} style={{ color: iconColor }} />
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <span className="text-sm font-semibold text-[#1E293B]">{name}</span>
                        <span className="text-xs font-bold text-[#2563EB] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                          {level}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full bg-linear-to-r ${bar} rounded-full transition-all duration-[2000ms] ease-out`}
                        style={{ width: mounted ? `${level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
