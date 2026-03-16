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
    <div
      id="skills"
      className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 shadow-sm scroll-mt-12"
    >
      <h3 className="text-2xl font-bold text-center mb-10 border-b border-[#13866F] inline-block">
        Skills
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-20 cursor-pointer">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group transition-transform duration-300 hover:scale-[1.02]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex justify-between mb-1">
              <span className="text-[14px] md:text-[16px] font-semibold text-[#1B2B48]">
                {skill.name}
              </span>
              <span className="text-[14px] md:text-[16px] text-[#13866F] font-semibold">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-[3000ms] ease-in-out`}
                style={{ width: mounted ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
