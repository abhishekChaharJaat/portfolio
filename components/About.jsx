import React from "react";
import {
  FaCode,
  FaLayerGroup,
  FaPlug,
  FaServer,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "3+", label: "Projects Built" },
  { value: "8+", label: "Technologies" },
  { value: "FS", label: "Full Stack" },
];

const highlights = [
  { icon: FaCode, text: "Modern UI with React, Redux & Tailwind CSS" },
  { icon: FaPlug, text: "RESTful API integration & data-driven UIs" },
  { icon: FaLayerGroup, text: "Complex state management & component architecture" },
  { icon: FaServer, text: "Backend with Node.js, Express & MongoDB" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#1B2B48]">About Me</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#13866F] rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Left: Bio + Highlights */}
          <div className="lg:col-span-2 space-y-5" data-aos="fade-right">
            <p className="text-[17px] leading-relaxed text-[#4a5568]">
              I am a{" "}
              <span className="font-semibold text-[#13866F]">Software Engineer</span>{" "}
              specializing in{" "}
              <span className="font-semibold text-[#13866F]">Frontend Development</span>{" "}
              who builds scalable, high-performance web interfaces using{" "}
              <span className="font-semibold text-[#13866F]">React.js</span>,{" "}
              <span className="font-semibold text-[#13866F]">Redux</span>, and{" "}
              <span className="font-semibold text-[#13866F]">Tailwind CSS</span>.
              I focus on writing clean, reusable code with strong attention to
              responsiveness, accessibility, and performance.
            </p>

            <p className="text-[17px] leading-relaxed text-[#4a5568]">
              I collaborate closely with cross-functional teams across multiple
              time zones to deliver new features and refine UI components,
              integrating{" "}
              <span className="font-semibold text-[#13866F]">RESTful APIs</span>{" "}
              and authentication with{" "}
              <span className="font-semibold text-[#13866F]">Clerk</span> to
              create interactive, data-driven user experiences and manage complex
              state effectively.
            </p>

            <p className="text-[17px] leading-relaxed text-[#4a5568]">
              I also have solid backend experience with{" "}
              <span className="font-semibold text-[#13866F]">Node.js</span>,{" "}
              <span className="font-semibold text-[#13866F]">Express.js</span>, and{" "}
              <span className="font-semibold text-[#13866F]">MongoDB</span>,
              having built several full-stack projects that demonstrate both
              efficient API development and scalable state management.
            </p>

            {/* What I Bring */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="text-xs font-bold text-[#1B2B48] uppercase tracking-widest mb-4">
                What I Bring
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map(({ icon: Icon, text }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F7FFFE] border border-[#E0F2EE] hover:border-[#13866F]/50 hover:shadow-sm transition"
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                  >
                    <Icon
                      className="text-[#13866F] mt-0.5 flex-shrink-0"
                      size={15}
                    />
                    <span className="text-sm text-[#4a5568] leading-relaxed">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats + Cards */}
          <div className="space-y-5" data-aos="fade-left">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#F0FAF7] to-[#E6F5F0] rounded-xl p-5 text-center border border-[#D0EDE6] hover:shadow-md transition"
                  data-aos="zoom-in"
                  data-aos-delay={i * 80}
                >
                  <p className="text-3xl font-bold text-[#13866F]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#4a5568] mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Current Role Card */}
            <div
              className="bg-[#1B2B48] rounded-xl p-5 text-white"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaBriefcase className="text-[#4CC9AB]" size={14} />
                <span className="text-xs font-bold text-[#4CC9AB] uppercase tracking-wider">
                  Currently Working At
                </span>
              </div>
              <p className="font-bold text-lg">Inhouse AI Inc.</p>
              <p className="text-[#8aadba] text-sm mt-1">
                Frontend Engineer &nbsp;·&nbsp; Full-time
              </p>
              <p className="text-[#8aadba] text-xs mt-1">Dec 2024 – Present</p>
            </div>

            {/* Open to Opportunities */}
            <div
              className="flex items-center gap-3 bg-[#E0F5EF] rounded-xl p-4 border border-[#B3E5D8]"
              data-aos="fade-up"
            >
              <FaRocket className="text-[#13866F] flex-shrink-0" size={18} />
              <div>
                <p className="text-sm font-semibold text-[#13866F]">
                  Open to Opportunities
                </p>
                <p className="text-xs text-[#4a5568] mt-0.5">
                  Frontend &amp; Full Stack roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
