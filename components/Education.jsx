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
    location: "Refinary Nagar Township, Mathura, U.P.",
    startDate: "2007",
    endDate: "2017",
    status: "Completed",
  },
  {
    icon: FaSchool,
    degree: "Intermediate (10+2)",
    institution: "Delhi Public School",
    location: "Refinary Nagar Township, Mathura, U.P.",
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
    <section
      id="education"
      className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-12"
    >
      <h3 className="text-2xl font-bold text-center mb-10 border-b-2 border-[#13866F] inline-block">
        Education
      </h3>

      <div className="relative max-w-5xl mx-auto">
        {/* Central vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1 bg-[#13866F] w-1 h-full z-0"></div>

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
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#13866F] w-3 h-3 rounded-full z-10"></div>

                {/* Card */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 md:p-6 md:w-5/12 z-20">
                  <div className="flex items-center gap-4 mb-2">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#13866F]" />
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-[#18475A]">
                        {edu.degree}
                      </h4>
                      <p className="text-sm md:text-md text-[#13866F] font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 flex items-center gap-1">
                    <FaMapMarkerAlt className="text-gray-500" /> {edu.location}
                  </p>
                  <p className="text-base md:text-lg text-gray-500 mt-1 flex items-center gap-2">
                    {edu.startDate} - {edu.endDate} |
                    <span
                      className={`font-semibold flex items-center gap-1 ${
                        edu.status === "Pursuing"
                          ? "text-yellow-600"
                          : "text-[#13866F]"
                      }`}
                    >
                      {edu.status}
                      {edu.status === "Completed" && (
                        <FaCheckCircle className="text-[#13866F]" />
                      )}
                    </span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Education;
