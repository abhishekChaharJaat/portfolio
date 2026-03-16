import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white font-bold text-xs">
                AC
              </div>
              <span className="text-white font-bold text-base">
                Abhishek<span className="text-[#2563EB]">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 flex items-center justify-center md:justify-start gap-1">
              Crafted with <FaHeart className="text-[#2563EB]" size={10} /> using Next.js &amp; Tailwind CSS
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["#about", "#projects", "#skills", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                className="text-slate-500 hover:text-white capitalize transition text-xs font-medium"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-2.5">
            {[
              { href: "https://github.com/abhishekChaharJaat",        Icon: FaGithub,   label: "GitHub" },
              { href: "https://linkedin.com/in/abhishek-chahar-jaat", Icon: FaLinkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#2563EB] text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Abhishek Chahar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
