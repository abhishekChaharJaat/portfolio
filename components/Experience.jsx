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
    bullets: [
      "Build and maintain scalable, high-performance web interfaces using React.js, Redux, and Tailwind CSS",
      "Collaborate with cross-functional teams across different time zones to deliver new features and enhance existing UI components",
      "Integrate RESTful APIs and Clerk authentication to create interactive, data-driven user experiences",
      "Write clean, reusable code with strong emphasis on responsiveness, accessibility, and performance",
      "Actively participate in UI/UX discussions, ensuring frontend best practices throughout the development process",
      "Work closely with the lead frontend engineer to ship production-ready features in a fast-paced, product-driven environment",
    ],
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

  return `${formatDate(start)} – ${
    endDate ? formatDate(end) : "Present"
  } · ${durationStr}`;
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#F8FFFE] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1B2B48]">Experience</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#13866F] rounded-full" />
        </div>

        <div className="relative pl-6 sm:pl-10 space-y-8 border-l-4 border-[#13866F]">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="absolute -left-[1.3rem] sm:-left-[1.7rem] top-5 bg-[#13866F] text-white p-1.5 rounded-full shadow-md">
                <HiOutlineBriefcase size={20} />
              </div>

              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:flex md:items-start md:gap-6 border border-gray-100">
                {/* Logo */}
                <div className="mb-4 md:mb-0 shrink-0">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h4 className="text-xl font-bold text-[#1B2B48]">
                        {exp.title}
                      </h4>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#13866F] font-medium hover:underline text-base"
                      >
                        {exp.company}
                      </a>
                    </div>
                    {exp.label && (
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-[#13866F] rounded-full self-start">
                        {exp.label}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-400 mb-4 mt-1">
                    {formatExperiencePeriod(exp.startDate, exp.endDate)}
                  </p>

                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-[15px] text-[#4a5568] leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#13866F] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.workLink && (
                    <a
                      href={exp.workLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-[#13866F] text-white rounded-lg hover:bg-[#0f5a4c] transition text-sm font-medium shadow-sm"
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
    </section>
  );
};

export default Experience;
