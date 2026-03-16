"use client";

import { useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
  FaBriefcase,
  FaCalendarAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NODES = canvas.width < 640 ? 20 : 55;
    const MAX_DIST = 140;

    const nodes = Array.from({ length: NODES }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(180, 60, 5, ${alpha * 2})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180, 60, 5, 0.75)";
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative bg-white scroll-mt-20 overflow-hidden"
    >
      {/* Neural network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* ── Hero ── */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-20 w-full px-6 min-h-screen py-32 z-10">
        {/* Top on mobile / Right on desktop: Image + Card */}
        <div className="shrink-0 relative flex flex-col items-center gap-4 md:order-2">
          {/* Soft glow */}
          <div className="absolute w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-blue-100 opacity-40 blur-3xl" />

          {/* Circular image */}
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-blue-100 z-10">
            <Image
              src="/images/me3.jpg"
              alt="Abhishek Chahar"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Current Role card */}
          <div className="relative z-10 bg-white rounded-xl px-4 py-3 border border-slate-200 shadow-md w-full max-w-xs md:max-w-65">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center">
                  <FaBriefcase className="text-[#2563EB]" size={9} />
                </div>
                <div>
                  <p className="font-bold text-[#0F172A] text-xs leading-snug">
                    Inhouse AI Inc.
                  </p>
                  <p className="text-slate-500 text-[10px]">
                    Frontend Engineer · Full-time
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-green-600 font-medium">
                  Active
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <FaCalendarAlt className="text-slate-400" size={9} />
              <p className="text-slate-400 text-[10px]">Dec 2024 – Present</p>
            </div>
          </div>
        </div>

        {/* Bottom on mobile / Left on desktop: Text */}
        <div className="flex-1 text-center md:text-left md:order-1">
          {/* Role badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-bold px-4 py-1.5 rounded-full mb-6 mx-auto md:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            Software Engineer · Full Stack · AI
          </div>

          {/* Heading */}
          <h1
            style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
            className="text-2xl sm:text-4xl lg:text-5xl leading-[1.15] text-[#0F172A] mb-5"
          >
            <span className="text-[#0F172A] italic">Abhishek Chahar</span>
          </h1>

          {/* Bio */}
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-4 max-w-lg mx-auto md:mx-0">
            I&apos;m a{" "}
            <span className="font-semibold text-[#0F172A]">
              Software Engineer
            </span>{" "}
            passionate about crafting fast, accessible, and visually polished
            web experiences. I work with{" "}
            <span className="font-semibold text-[#0F172A]">React.js</span>,{" "}
            <span className="font-semibold text-[#0F172A]">Next.js</span>,{" "}
            <span className="font-semibold text-[#0F172A]">Redux</span>, and{" "}
            <span className="font-semibold text-[#0F172A]">Tailwind CSS</span> —
            turning complex requirements into clean, maintainable UIs.
          </p>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            On the backend I build reliable APIs with{" "}
            <span className="font-semibold text-[#0F172A]">Node.js</span>,{" "}
            <span className="font-semibold text-[#0F172A]">Python</span> &amp;{" "}
            <span className="font-semibold text-[#0F172A]">MongoDB</span>, and
            work with <span className="font-semibold text-[#0F172A]">LLMs</span>
            , <span className="font-semibold text-[#0F172A]">LangChain</span>{" "}
            &amp; <span className="font-semibold text-[#0F172A]">FastAPI</span>{" "}
            to build intelligent AI-powered products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg shadow-blue-200 text-sm"
            >
              View My Work <FaArrowRight size={12} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600 bg-white px-6 py-3 rounded-full font-semibold transition-all duration-200 text-sm"
            >
              <FaDownload size={12} /> Resume
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-100 max-w-sm mx-auto md:mx-0 mb-6" />

          {/* Social links */}
          <div className="flex justify-center md:justify-start items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">
              Find me on
            </span>
            {[
              {
                href: "https://github.com/abhishekChaharJaat",
                Icon: FaGithub,
                label: "GitHub",
              },
              {
                href: "http://linkedin.com/in/abhishek-chahar-jaat",
                Icon: FaLinkedin,
                label: "LinkedIn",
              },
              {
                href: "https://leetcode.com/u/abhishekchahar200",
                Icon: SiLeetcode,
                label: "LeetCode",
              },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 z-10">
        <div className="w-4 h-7 rounded-full border-2 border-slate-400 flex items-start justify-center pt-1">
          <div className="w-0.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
        </div>
        <span className="text-[9px] text-slate-400 font-medium tracking-widest uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Home;
