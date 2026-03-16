"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Topnav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a3d32]/95 backdrop-blur-md shadow-lg"
          : "bg-[#0f5a4c]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#13866F] flex items-center justify-center text-white font-bold text-sm group-hover:bg-[#1ca584] transition-colors shadow-md">
            AC
          </div>
          <span className="text-[#E6F4F1] font-semibold text-lg tracking-wide">
            Abhishek<span className="text-[#4CC9AB]">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-[#B8D8D0] hover:text-white px-3 py-2 rounded-md transition-colors group"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#4CC9AB] group-hover:w-4/5 transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#E6F4F1] p-2 rounded-md hover:bg-[#13866F]/30 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        } bg-[#0a3d32] border-t border-[#13866F]/30`}
      >
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center text-[#B8D8D0] hover:text-white hover:bg-[#13866F]/20 px-3 py-2.5 rounded-md transition font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Topnav;
