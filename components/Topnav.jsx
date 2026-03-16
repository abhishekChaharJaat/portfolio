"use client";

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaCode,
  FaGraduationCap,
  FaImages,
  FaEnvelope,
} from "react-icons/fa";

const Topnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "#home", icon: <FaHome size={16} /> },
    { name: "About", href: "#about", icon: <FaUser size={16} /> },
    { name: "Experience", href: "#experience", icon: <FaBriefcase size={16} /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram size={16} /> },
    { name: "Skills", href: "#skills", icon: <FaCode size={16} /> },
    { name: "Education", href: "#education", icon: <FaGraduationCap size={16} /> },
    { name: "Gallery", href: "#gallery", icon: <FaImages size={16} /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope size={16} /> },
  ];

  return (
    <header className="w-full bg-[#0f5a4c] text-[#E6F4F1] fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">Abhishek</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-[#D1EDEA] transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        } bg-white text-[#0f5a4c] px-4 shadow-md`}
      >
        <div className="py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 hover:text-[#13866F] font-medium"
              onClick={() => setIsOpen(false)}
            >
              <span>{item.icon}</span>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Topnav;
