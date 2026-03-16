import { FaUniversity, FaMapMarkerAlt, FaCheckCircle, FaCalendarAlt, FaSpinner } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "GLA University",
    location: "Chaumuhan, Mathura, U.P.",
    period: "2022 – 2025",
    status: "Completed",
  },
  {
    degree: "Masters of Computer Applications (MCA)",
    institution: "GLA University",
    location: "Chaumuhan, Mathura, U.P.",
    period: "2025 – 2027",
    status: "Pursuing",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#F8FAFC] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.15em] mb-2 block">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Education
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-[#2563EB] rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-lg transition-all group"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Icon + Status */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                  <FaUniversity className="text-[#2563EB] group-hover:text-white transition-colors" size={20} />
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                    edu.status === "Pursuing"
                      ? "bg-amber-50 text-amber-600 border border-amber-200"
                      : "bg-blue-50 text-[#2563EB] border border-blue-100"
                  }`}
                >
                  {edu.status === "Pursuing" ? (
                    <FaSpinner className="animate-spin" size={10} />
                  ) : (
                    <FaCheckCircle size={10} />
                  )}
                  {edu.status}
                </span>
              </div>

              {/* Degree */}
              <h4 className="text-base font-extrabold text-[#0F172A] leading-snug mb-1">
                {edu.degree}
              </h4>

              {/* Institution */}
              <p className="text-sm font-semibold text-[#2563EB] mb-4">
                {edu.institution}
              </p>

              {/* Divider */}
              <div className="h-px bg-slate-100 mb-4" />

              {/* Meta */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <FaMapMarkerAlt size={11} className="shrink-0 text-slate-300" />
                  {edu.location}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <FaCalendarAlt size={11} className="shrink-0 text-slate-300" />
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
