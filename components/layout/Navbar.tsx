"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "殿", name: "Temple", href: "#hero" },
  { label: "侍", name: "About", href: "#about" },
  { label: "道場", name: "Skills", href: "#skills" },
  { label: "武器", name: "Projects", href: "#projects" },
  { label: "巻物", name: "Experience", href: "#experience" },
  { label: "神社", name: "Achievements", href: "#achievements" },
  { label: "星", name: "GitHub", href: "#github" },
  { label: "門", name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md bg-temple-black/70 border-b border-samurai-red/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-japanese text-gold text-lg font-bold tracking-wider">
          VK
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative px-3 py-2 text-sm text-scroll/70 hover:text-gold transition-colors duration-300"
            >
              <span className="font-japanese text-xs text-samurai-red/50 group-hover:text-samurai-red block leading-none transition-colors">
                {item.label}
              </span>
              <span className="text-xs tracking-wide">{item.name}</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </div>
        <MobileMenu />
      </div>
    </motion.nav>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <details className="group">
        <summary className="list-none cursor-pointer text-scroll p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </summary>
        <div className="absolute right-4 top-14 bg-ink-dark/95 backdrop-blur-lg border border-samurai-red/20 rounded-lg p-4 flex flex-col gap-3 min-w-[160px]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-scroll/80 hover:text-gold text-sm transition-colors"
              onClick={(e) => {
                const details = (e.target as HTMLElement).closest("details");
                if (details) details.removeAttribute("open");
              }}
            >
              <span className="font-japanese text-samurai-red/60 mr-2 text-xs">{item.label}</span>
              {item.name}
            </a>
          ))}
        </div>
      </details>
    </div>
  );
}
