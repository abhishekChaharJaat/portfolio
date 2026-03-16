import { FaCode, FaLayerGroup, FaPlug, FaServer, FaBriefcase, FaCalendarAlt, FaBrain, FaRobot } from "react-icons/fa";

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "3+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
];

const highlights = [
  { icon: FaCode,       text: "Modern UI with React.js, Next.js & Tailwind CSS" },
  { icon: FaPlug,       text: "RESTful API integration & data-driven UIs" },
  { icon: FaLayerGroup, text: "State management & scalable architecture" },
  { icon: FaServer,     text: "Backend: Node.js, Express, Python & MongoDB" },
  { icon: FaBrain,      text: "AI/ML: LangChain, LLMs & FastAPI" },
  { icon: FaRobot,      text: "Building intelligent full-stack AI applications" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.15em] mb-2 block">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            About Me
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-[#2563EB] rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Left: Bio + Highlights */}
          <div className="lg:col-span-2 space-y-5" data-aos="fade-right">
            <p className="text-[17px] leading-relaxed text-slate-600">
              I&apos;m a{" "}
              <span className="font-semibold text-[#2563EB]">Software Engineer</span>{" "}
              passionate about crafting fast, accessible, and visually polished web
              experiences. I work primarily with{" "}
              <span className="font-semibold text-[#2563EB]">React.js</span>,{" "}
              <span className="font-semibold text-[#2563EB]">Next.js</span>,{" "}
              <span className="font-semibold text-[#2563EB]">Redux</span>, and{" "}
              <span className="font-semibold text-[#2563EB]">Tailwind CSS</span> —
              turning complex requirements into clean, maintainable UIs that users
              actually enjoy.
            </p>

            <p className="text-[17px] leading-relaxed text-slate-600">
              On the backend, I build reliable APIs and services using{" "}
              <span className="font-semibold text-[#2563EB]">Node.js</span>,{" "}
              <span className="font-semibold text-[#2563EB]">Express.js</span>,{" "}
              <span className="font-semibold text-[#2563EB]">Python</span>, and{" "}
              <span className="font-semibold text-[#2563EB]">MongoDB</span>. I&apos;m
              experienced integrating{" "}
              <span className="font-semibold text-[#2563EB]">RESTful APIs</span> and
              third-party services like{" "}
              <span className="font-semibold text-[#2563EB]">Clerk</span> to power
              seamless, data-driven user experiences.
            </p>

            <p className="text-[17px] leading-relaxed text-slate-600">
              I&apos;m also deeply interested in AI — I work with{" "}
              <span className="font-semibold text-[#2563EB]">LLMs</span>,{" "}
              <span className="font-semibold text-[#2563EB]">LangChain</span>, and{" "}
              <span className="font-semibold text-[#2563EB]">FastAPI</span> to build
              intelligent applications that go beyond traditional software — from
              AI-powered workflows to production-ready full-stack products.
            </p>

            {/* Core Strengths */}
            <div className="pt-6 mt-2 border-t border-slate-200">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Core Strengths
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map(({ icon: Icon, text }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-sm transition"
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="text-[#2563EB]" size={13} />
                    </div>
                    <span className="text-sm text-slate-600 leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats + Current Role */}
          <div className="space-y-4" data-aos="fade-left">

            {/* Stats — 3 cards in a column */}
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-200 hover:shadow-md transition flex items-center gap-4"
                data-aos="zoom-in"
                data-aos-delay={i * 80}
              >
                <p className="text-3xl font-extrabold text-[#2563EB] leading-none">{s.value}</p>
                <p className="text-sm text-slate-500 font-medium leading-snug">{s.label}</p>
              </div>
            ))}

            {/* Current Role Card */}
            <div
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-200 hover:shadow-md transition"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                  <FaBriefcase className="text-[#2563EB]" size={13} />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Current Role
                </span>
              </div>
              <p className="font-bold text-[#0F172A] text-base leading-snug">Inhouse AI Inc.</p>
              <p className="text-slate-500 text-sm mt-1">Frontend Engineer · Full-time</p>
              <div className="flex items-center gap-1.5 mt-2">
                <FaCalendarAlt className="text-slate-400" size={11} />
                <p className="text-slate-400 text-xs">Dec 2024 – Present</p>
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-600 font-medium">Active</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
