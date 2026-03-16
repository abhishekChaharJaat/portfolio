"use client";

import { useEffect, useState } from "react";

const PageLoader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);
    const hideTimer = setTimeout(() => setVisible(false), 1800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-300 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="mb-6">
        <span
          style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
          className="text-3xl italic text-[#0F172A]"
        >
          Abhishek Chahar
        </span>
      </div>

      {/* Animated bar */}
      <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-[#2563EB] rounded-full animate-[loading_1.5s_ease-in-out_forwards]" />
      </div>

      <style>{`
        @keyframes loading {
          0%   { width: 0% }
          100% { width: 100% }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
