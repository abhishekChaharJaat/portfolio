"use client";

import React, { useEffect, useState } from "react";

const skills = [
  { name: "React.js", level: 70, color: "from-blue-500 to-cyan-400" },
  { name: "Redux", level: 80, color: "from-purple-600 to-indigo-500" },
  { name: "JavaScript", level: 65, color: "from-yellow-400 to-orange-500" },
  { name: "Tailwind CSS", level: 75, color: "from-teal-500 to-green-400" },
  { name: "HTML & CSS", level: 85, color: "from-pink-500 to-red-400" },
  { name: "Node.js", level: 50, color: "from-green-600 to-lime-400" },
  { name: "REST APIs", level: 70, color: "from-indigo-400 to-blue-500" },
  { name: "Java", level: 60, color: "from-red-500 to-orange-400" },
];

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1B2B48]">Skills</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#13866F] rounded-full" />
          <p className="mt-4 text-[#5a7a82] text-base">
            Technologies I work with on a daily basis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-7 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[15px] font-semibold text-[#1B2B48]">
                  {skill.name}
                </span>
                <span className="text-[12px] text-[#13866F] font-semibold bg-[#E8F5F0] px-2.5 py-0.5 rounded-full">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-[2500ms] ease-out rounded-full`}
                  style={{ width: mounted ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
