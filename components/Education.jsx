import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import {
  FaSchool,
  FaUniversity,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const education = [
  {
    icon: FaSchool,
    degree: "High School",
    institution: "Delhi Public School",
    location: "Refinery Nagar Township, Mathura, U.P.",
    startDate: "2007",
    endDate: "2017",
    status: "Completed",
  },
  {
    icon: FaSchool,
    degree: "Intermediate (10+2)",
    institution: "Delhi Public School",
    location: "Refinery Nagar Township, Mathura, U.P.",
    startDate: "2017",
    endDate: "2019",
    status: "Completed",
  },
  {
    icon: FaUniversity,
    degree: "Bachelor of Arts (B.A)",
    institution: "Dr. Bhimrao Ambedkar University",
    location: "Agra, U.P.",
    startDate: "2019",
    endDate: "2022",
    status: "Completed",
  },
  {
    icon: FaUniversity,
    degree: "Bachelor of Computer Applications",
    institution: "GLA University",
    location: "Chaumuhan, Mathura, U.P.",
    startDate: "2022",
    endDate: "2025",
    status: "Completed",
  },
  {
    icon: FaUniversity,
    degree: "Masters of Computer Applications",
    institution: "GLA University",
    location: "Chaumuhan, Mathura, U.P.",
    startDate: "2025",
    endDate: "2027",
    status: "Pursuing",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#F8FFFE] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1B2B48]">Education</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#13866F] rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central vertical line */}
          <div className="absolute left-1/2 -translate-x-px bg-[#13866F] w-0.5 h-full z-0" />

          <ul className="space-y-12">
            {[...education].reverse().map((edu, idx) => {
              const Icon = edu.icon || HiOutlineAcademicCap;
              return (
                <li
                  key={idx}
                  className={`relative flex flex-col md:flex-row md:items-center cursor-pointer ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={`${idx * 100}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#13866F] border-2 border-white shadow-md z-10" />

                  {/* Card */}
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 md:p-6 md:w-5/12 z-20 border border-gray-100">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#13866F]" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#1B2B48] leading-snug">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-[#13866F] font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-1.5 mb-1">
                      <FaMapMarkerAlt className="text-gray-400 shrink-0" size={12} />
                      {edu.location}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      {edu.startDate} – {edu.endDate}
                      <span
                        className={`font-semibold flex items-center gap-1 ${
                          edu.status === "Pursuing"
                            ? "text-amber-600"
                            : "text-[#13866F]"
                        }`}
                      >
                        · {edu.status}
                        {edu.status === "Completed" && (
                          <FaCheckCircle size={12} />
                        )}
                      </span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
