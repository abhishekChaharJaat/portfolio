import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f1923] text-gray-400 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-white font-semibold text-base">Abhishek Chahar</p>
          <p className="text-sm mt-1 flex items-center justify-center md:justify-start gap-1">
            Built with{" "}
            <FaHeart className="text-[#13866F]" size={12} />
            {" "}using Next.js &amp; Tailwind CSS
          </p>
        </div>

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Abhishek Chahar. All rights reserved.
        </p>

        <div className="flex gap-3">
          <a
            href="https://github.com/abhishekChaharJaat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#13866F] text-gray-400 hover:text-white transition-all duration-200"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/abhishek-chahar-jaat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#13866F] text-gray-400 hover:text-white transition-all duration-200"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#13866F] text-gray-400 hover:text-white transition-all duration-200"
          >
            <FaTwitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
