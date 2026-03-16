import React from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import Image from "next/image";

const experiences = [
  {
    company: "Inhouse AI Inc.",
    title: "Frontend Engineer",
    startDate: "2024-12-01",
    endDate: null,
    logo: "/images/inhouse-logo.png",
    companyUrl: "https://www.inhouse.app",
    label: "Full-time",
    workLink: "https://platform.inhouse.app/",
    description:
      "Working as a frontend engineer where I focus on building and maintaining scalable, high-performance web interfaces using React.js, Redux, and Tailwind CSS. I collaborate with cross-functional teams across different time zones to deliver new features and enhance existing UI components. My responsibilities include integrating RESTful APIs to create interactive, data-driven user experiences while managing complex state efficiently. I consistently write clean, reusable code with a strong emphasis on responsiveness, accessibility, and performance. I also take an active role in UI/UX discussions, ensuring frontend best practices are followed throughout the development process. Additionally, I work closely with the lead frontend engineer to ship production-ready features in a fast-paced, product-driven environment.",
  },
];

const formatExperiencePeriod = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", { year: "numeric", month: "short" });

  const durationStr = `${years ? `${years} yr${years > 1 ? "s" : ""}` : ""}${
    remMonths ? ` ${remMonths} mo` : ""
  }`;

  return `${formatDate(start)} - ${
    endDate ? formatDate(end) : "Present"
  } · ${durationStr}`;
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-12"
    >
      <h3 className="text-2xl font-bold text-center mb-10 border-b border-[#13866F] inline-block">
        Experience
      </h3>

      <div className="relative pl-6 sm:pl-10 space-y-8 border-l-4 border-[#13866F]">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="absolute -left-[1.3rem] sm:-left-[1.7rem] top-3 bg-[#13866F] text-white p-1.5 rounded-full shadow-md">
              <HiOutlineBriefcase size={20} />
            </div>

            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:flex md:items-start md:gap-6">
              {/* Logo */}
              <div className="flex flex-col items-start mb-1 md:mb-0 md:items-center">
                <div className="relative w-10 h-10 mb-2">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-[#18475A]">
                      {exp.title}
                    </h4>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md text-[#13866F] font-medium hover:underline"
                    >
                      {exp.company}
                    </a>
                  </div>

                  {exp.label && (
                    <span className="ml-2 mt-2 sm:mt-0 px-2 py-1 text-xs font-semibold text-white bg-[#13866F] rounded-full">
                      {exp.label}
                    </span>
                  )}
                </div>

                <p className="text-[14px] md:text-[16px] text-[#949494] mt-2 mb-3">
                  {formatExperiencePeriod(exp.startDate, exp.endDate)}
                </p>

                <p className="text-lg font-sans text-[#1B2B48] leading-relaxed whitespace-pre-line">
                  {exp.description}
                </p>

                {exp.workLink && (
                  <a
                    href={exp.workLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-[#13866F] text-white rounded hover:bg-[#0f5a4c] transition"
                  >
                    View Work
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
