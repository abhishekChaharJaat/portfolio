import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12 px-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Abhishek Chahar. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-xl text-gray-400">
          <a
            href="https://github.com/abhishekChaharJaat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/abhishek-chahar-jaat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
