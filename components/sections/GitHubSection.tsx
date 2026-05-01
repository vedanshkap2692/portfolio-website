"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/resume";

const langColors: Record<string, string> = {
  Python: "#8B0000",
  "Jupyter Notebook": "#C5A355",
  TypeScript: "#3178C6",
  JavaScript: "#D4AF37",
  Shell: "#FFB7C5",
};

interface Repo {
  name: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=30`)
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setRepos(data); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    // Dynamically load github-calendar after mount
    let link: HTMLLinkElement | null = null;
    import("github-calendar").then((mod) => {
      const GitHubCalendar = mod.default;
      // Inject samurai-themed overrides
      link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css";
      document.head.appendChild(link);

      GitHubCalendar(".github-calendar-container", personalInfo.githubUsername, {
        responsive: true,
        tooltips: true,
        global_stats: false,
      });
    }).catch(() => {});

    return () => { if (link) link.remove(); };
  }, []);

  // Language breakdown
  const langCounts: Record<string, number> = {};
  repos.forEach((r) => {
    if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1;
  });
  const totalLangs = Object.values(langCounts).reduce((a, b) => a + b, 0);

  return (
    <section id="github" className="relative py-24 md:py-32 bg-ink-dark/30">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="font-japanese text-samurai-red/40 text-4xl">星</span>
          <h2 className="font-japanese text-3xl md:text-5xl text-scroll mt-2 mb-4">GitHub Observatory</h2>
          <div className="brush-divider w-32 mx-auto" />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { val: repos.length || 11, label: "Repositories" },
            { val: repos.reduce((a, r) => a + r.stargazers_count, 0) || 8, label: "Total Stars" },
            { val: Object.keys(langCounts).length || 4, label: "Languages" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="font-japanese text-3xl text-gold">{val}</div>
              <div className="text-scroll/50 text-sm mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Commit Calendar */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-japanese text-lg text-scroll/60 mb-6 text-center">
            <span className="text-samurai-red/40 mr-2">暦</span>Commit Chronicle
          </h3>
          <div className="p-6 border border-scroll/10 rounded-sm bg-temple-black/60 overflow-x-auto github-calendar-wrapper">
            <div className="github-calendar-container text-scroll/70 min-h-[120px] flex items-center justify-center">
              <span className="text-scroll/30 text-sm font-mincho">Loading calendar...</span>
            </div>
          </div>
        </motion.div>

        {/* Language bar */}
        {totalLangs > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <h3 className="font-japanese text-lg text-scroll/60 mb-4 text-center">
              <span className="text-samurai-red/40 mr-2">言</span>Languages
            </h3>
            <div className="flex rounded-full overflow-hidden h-2 mb-4">
              {Object.entries(langCounts).sort((a, b) => b[1] - a[1]).map(([lang, count]) => (
                <div key={lang} className="h-full transition-all"
                  style={{ width: `${(count / totalLangs) * 100}%`, backgroundColor: langColors[lang] || "#555" }} />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {Object.entries(langCounts).sort((a, b) => b[1] - a[1]).map(([lang, count]) => (
                <div key={lang} className="flex items-center gap-1.5 text-xs text-scroll/60">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: langColors[lang] || "#555" }} />
                  {lang} ({Math.round((count / totalLangs) * 100)}%)
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-samurai-red/30 text-scroll/70 hover:text-gold hover:border-gold/30 transition-all duration-300 text-sm"
          >
            View Full Profile on GitHub →
          </a>
        </motion.div>
      </div>

      {/* Samurai-themed calendar overrides */}
      <style>{`
        .github-calendar-wrapper .calendar rect[fill="#ebedf0"] { fill: #1a1a2e !important; }
        .github-calendar-wrapper .calendar rect[fill="#9be9a8"] { fill: #4a0000 !important; }
        .github-calendar-wrapper .calendar rect[fill="#40c463"] { fill: #7a0000 !important; }
        .github-calendar-wrapper .calendar rect[fill="#30a14e"] { fill: #8B0000 !important; }
        .github-calendar-wrapper .calendar rect[fill="#216e39"] { fill: #C5A355 !important; }
        .github-calendar-wrapper .calendar text { fill: #f5e6c8 !important; opacity: 0.5; }
        .github-calendar-wrapper .contrib-footer { display: none !important; }
      `}</style>
    </section>
  );
}
