import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaCircle,
} from "react-icons/fa";
import Image from "next/image";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-linear-to-br from-[#F9FBFA] via-[#F0F4F3] to-[#E6ECEA] text-[#394045] px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 w-full py-20">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 bg-[#E0F5EF] text-[#13866F] text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-[#13866F]/20">
            <FaCircle size={8} className="animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-[#1B2B48] leading-tight">
            Hi, I&apos;m <span className="text-[#13866F]">Abhishek</span>
            <br />
            <span className="text-[#18475A]">Chahar</span>
          </h1>

          <p className="text-base sm:text-lg font-semibold text-[#496D75] mb-3 tracking-wide">
            Frontend Engineer &nbsp;·&nbsp; Full Stack Developer
          </p>

          <p className="text-base text-[#5a7a82] leading-relaxed mb-8 max-w-lg">
            I build clean, modern, and responsive web experiences using
            React.js, Redux &amp; Tailwind CSS — turning complex problems into
            elegant digital solutions.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-3 mb-8">
            <a
              href="https://github.com/abhishekChaharJaat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[#394045] hover:bg-[#13866F] hover:text-white hover:border-[#13866F] transition-all duration-200 shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="http://linkedin.com/in/abhishek-chahar-jaat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[#394045] hover:bg-[#13866F] hover:text-white hover:border-[#13866F] transition-all duration-200 shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[#394045] hover:bg-[#13866F] hover:text-white hover:border-[#13866F] transition-all duration-200 shadow-sm"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="#projects"
              className="bg-[#13866F] hover:bg-[#0f5a4c] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-[#13866F] text-[#13866F] hover:bg-[#13866F] hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-gray-200 bg-white text-[#394045] hover:border-[#13866F] hover:text-[#13866F] px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm"
            >
              <FaDownload size={14} />
              Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative shrink-0">
          <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-[#13866F]/30 hover:ring-[#13866F]/60 transition duration-300 relative">
            <Image
              src="/images/me3.jpg"
              alt="Abhishek Chahar"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative dashed ring */}
          <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#13866F]/20 -z-10 animate-spin-slow" />
        </div>
      </div>
    </section>
  );
};

export default Home;
