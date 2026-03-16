import { HiOutlineBriefcase } from "react-icons/hi";
import { FaExternalLinkAlt } from "react-icons/fa";

import Image from "next/image";

const workProjects = [
  {
    name: "Inhouse AI — Website",
    url: "https://www.inhouse.ai/",
    screenshot: "/images/inhouse.png",
    description: "Developed the official marketing website for Inhouse AI, highlighting the platform's product, features, pricing, and vision. Built using Next.js and Go with a strong focus on performance, SEO optimization, and fast user experience.",
    tags: ["Next.js", "Go", "Tailwind CSS"],
    highlights: [
      "Built with Next.js for fast, SEO-optimised page rendering",
      "Clean, conversion-focused marketing UI with smooth animations",
      "Fully responsive design across all devices",
      "Integrated with Go backend for dynamic content and APIs",
    ],
  },
  {
    name: "Inhouse Platform — App",
    url: "https://platform.inhouse.ai/",
    screenshot: "/images/platfrom.png",
    description: "Built the frontend from scratch for platform.inhouse.ai — an AI-powered legal services platform. Developed the UI for key product journeys including AI Ask, AI Draft, and attorney consultations, delivering a seamless and responsive experience for real-time legal guidance and document generation.",
    tags: ["Next.js", "React.js", "Redux", "Clerk", "AI"],
    highlights: [],
  },
  {
    name: "AI Feedback Tool",
    url: "https://ai-feedback.inhouse.ai",
    screenshot: "/images/internal-tool.png",
    description: "An internal tool built for Inhouse to review and improve AI performance. It loads full conversation threads — user messages, AI responses, and tool usage logs — allowing the team to rate AI messages, leave feedback, and use those insights to fix and improve the AI model on the backend.",
    tags: [],
    highlights: [],
  },
];

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
    description: [
      "Working as a Frontend Engineer at Inhouse AI Inc., I build and maintain scalable, high-performance web applications using React.js, Next.js, Redux, and Tailwind CSS. I develop server-side rendered and statically generated pages to improve performance and SEO, while integrating RESTful APIs and Clerk authentication to deliver secure, data-driven user experiences. I collaborate with cross-functional teams across different time zones, writing clean, modular code with a strong focus on responsiveness and performance — working closely with the lead engineer to ship production-ready features in a fast-paced, agile environment.",
      "I also solely designed and developed an internal AI Feedback Tool — building the complete frontend and backend independently. The backend was built with Python and FastAPI, with dedicated routes to load conversation messages from both development and production environments, feedback submission and deletion routes, and MongoDB to persist all feedback data for the team to use in improving the AI model.",
    ],
  },
];

const formatPeriod = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const fmt = (d) => d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  const dur = `${years ? `${years} yr${years > 1 ? "s" : ""}` : ""}${rem ? ` ${rem} mo` : ""}`;
  return `${fmt(start)} – ${endDate ? fmt(end) : "Present"} · ${dur}`;
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#F8FAFC] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.15em] mb-2 block">
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Experience
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-[#2563EB] rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-12 border-l-2 border-blue-100 space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative" data-aos="fade-up" data-aos-delay={i * 100}>
              {/* Timeline dot */}
              <div className="absolute -left-[2.15rem] sm:-left-[2.55rem] top-6 w-8 h-8 bg-[#2563EB] text-white rounded-full flex items-center justify-center shadow-md shadow-blue-200">
                <HiOutlineBriefcase size={16} />
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Logo */}
                  <div className="relative w-12 h-12 rounded-xl border border-slate-100 bg-slate-50 shrink-0 overflow-hidden">
                    <Image src={exp.logo} alt={`${exp.company} logo`} fill className="object-contain p-1.5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h4 className="text-xl font-extrabold text-[#0F172A]">{exp.title}</h4>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2563EB] font-semibold hover:underline text-sm"
                        >
                          {exp.company}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {exp.label && (
                          <span className="bg-blue-50 text-[#2563EB] border border-blue-100 text-xs font-bold px-3 py-1 rounded-full">
                            {exp.label}
                          </span>
                        )}
                        {exp.workLink && (
                          <a
                            href={exp.workLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-3 py-1 rounded-full transition shadow-sm shadow-blue-200"
                          >
                            View Live <FaExternalLinkAlt size={9} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 font-medium mb-5 mt-1">
                      {formatPeriod(exp.startDate, exp.endDate)}
                    </p>

                    <div className="space-y-3">
                      {exp.description.map((para, k) => (
                        <p key={k} className="text-sm text-slate-600 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Work Projects */}
        <div className="mt-16" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Projects at Inhouse
            </p>
            <span className="flex-1 h-px bg-slate-100" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
            {workProjects.map((proj, i) => (
              <div
                key={i}
                className="bg-white border border-slate-300 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
                {/* Browser chrome */}
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center gap-2.5">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-md text-[11px] text-slate-400 px-3 py-0.5 truncate select-none">
                    {proj.url.replace("https://", "")}
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden border-b border-slate-200">
                  <img
                    src={proj.screenshot}
                    alt={`${proj.name} preview`}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-[#0F172A]/50 transition-all duration-300 flex items-center justify-center">
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-[#0F172A] text-xs font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-50 transition opacity-0 group-hover:opacity-100"
                    >
                      <FaExternalLinkAlt size={11} /> Visit Site
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="text-base font-extrabold text-[#0F172A]">{proj.name}</h4>
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#2563EB] transition shrink-0 mt-0.5"
                      aria-label={`Visit ${proj.name}`}
                    >
                      <FaExternalLinkAlt size={13} />
                    </a>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {proj.description}
                  </p>


                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
