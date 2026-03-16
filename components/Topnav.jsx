"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Topnav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-[#2563EB] transition-all duration-300 ${
        scrolled ? "shadow-md shadow-blue-300" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center group">
          <span
            style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
            className="text-white italic text-xl"
          >
            Abhishek Chahar
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-3 py-2 rounded-md transition-colors duration-200 group ${
                activeSection === item.href.replace("#", "")
                  ? "text-white font-semibold"
                  : "text-blue-100 hover:text-white"
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-white transition-all duration-300 rounded-full ${
                activeSection === item.href.replace("#", "") ? "w-3/4" : "w-0 group-hover:w-3/4"
              }`} />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-md transition ${
            isOpen
              ? "bg-white text-[#2563EB]"
              : "text-white hover:bg-blue-500"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 shadow-lg ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2.5 rounded-lg transition text-sm font-medium ${
                activeSection === item.href.replace("#", "")
                  ? "text-[#2563EB] bg-blue-50 font-semibold"
                  : "text-slate-600 hover:text-[#2563EB] hover:bg-blue-50"
              }`}
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
