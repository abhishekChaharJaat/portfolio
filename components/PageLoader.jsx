"use client";

import { useEffect } from "react";

// The visible loader lives in layout.jsx as static HTML (rendered on first paint).
// This component only removes it from the DOM after the CSS fade-out finishes.
const PageLoader = () => {
  useEffect(() => {
    const el = document.getElementById("page-loader");
    if (!el) return;
    const timer = setTimeout(() => el.remove(), 2400);
    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default PageLoader;
