"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { experiences } from "@/data/resume";
import { ChevronDown, Award } from "lucide-react";

const companyColors: Record<string, string> = {
  Farmart: "#2d5a1b",
  "Tech Mahindra": "#1a2d5a",
  "Matrice AI": "#5a1a1a",
  "IIT Bombay Research": "#3a1a5a",
};

const companyKanji: Record<string, string> = {
  Farmart: "農",
  "Tech Mahindra": "技",
  "Matrice AI": "視",
  "IIT Bombay Research": "学",
};

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-samurai-red/3 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gold/3 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="font-japanese text-samurai-red/40 text-4xl">巻物</span>
          <h2 className="font-japanese text-3xl md:text-5xl text-scroll mt-2 mb-4">Experience Scroll</h2>
          <div className="brush-divider w-32 mx-auto" />
          <p className="text-scroll/30 text-sm font-mincho mt-4">Click to unfurl each scroll</p>
        </motion.div>

        {/* Experience cards — animated paper scrolls */}
        <div className="space-y-6">
          {experiences.map((exp, i) => {
            const isOpen = expanded === i;
            const accentColor = companyColors[exp.company] || "#1a1a2e";
            const kanji = companyKanji[exp.company] || "業";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                <motion.div
                  className="relative border rounded-sm cursor-pointer overflow-hidden"
                  style={{
                    borderColor: isOpen ? "rgba(197,163,85,0.25)" : "rgba(245,230,200,0.08)",
                    background: isOpen
                      ? `linear-gradient(135deg, ${accentColor}22, rgba(10,10,10,0.9))`
                      : "rgba(26,26,46,0.2)",
                  }}
                  animate={{ y: isOpen ? -2 : 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setExpanded(isOpen ? null : i)}
                  whileHover={{ boxShadow: "0 0 30px rgba(139,0,0,0.08)" }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500"
                    style={{ background: isOpen ? "#C5A355" : "rgba(139,0,0,0.3)" }}
                  />

                  {/* Header row */}
                  <div className="pl-6 pr-5 py-5 flex items-center gap-4">
                    {/* Company kanji circle */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border"
                      style={{
                        background: `${accentColor}40`,
                        borderColor: isOpen ? "rgba(197,163,85,0.3)" : "rgba(245,230,200,0.1)",
                      }}
                    >
                      <span className="font-japanese text-xl" style={{ color: isOpen ? "#C5A355" : "rgba(245,230,200,0.5)" }}>
                        {kanji}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                        <h3 className={`font-japanese text-lg transition-colors duration-300 ${isOpen ? "text-gold" : "text-scroll"}`}>
                          {exp.company}
                          {exp.lor && (
                            <span className="ml-2 inline-flex items-center gap-1 text-[10px] text-gold/70 border border-gold/20 px-2 py-0.5 rounded-sm align-middle">
                              <Award size={9} /> LOR
                            </span>
                          )}
                        </h3>
                        <span className="text-gold/50 text-xs font-mono">{exp.period}</span>
                      </div>
                      <p className="text-samurai-red/60 text-sm mt-0.5">{exp.role}</p>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown size={16} className="text-scroll/30" />
                    </motion.div>
                  </div>

                  {/* Expanded content — scroll unfurl */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 pr-5 pb-6 border-t border-scroll/5">
                          {/* Brief description */}
                          <p className="text-scroll/60 text-sm leading-relaxed mt-4 mb-5 font-mincho italic border-l-2 border-samurai-red/20 pl-3">
                            {exp.description}
                          </p>

                          {/* LOR notice */}
                          {exp.lor && (
                            <div className="mb-4 flex items-start gap-2 p-3 border border-gold/15 rounded-sm bg-gold/5">
                              <Award size={14} className="text-gold mt-0.5 flex-shrink-0" />
                              <p className="text-gold/70 text-xs leading-relaxed">{exp.lorText}</p>
                            </div>
                          )}

                          {/* Highlights */}
                          <div className="space-y-3 mb-5">
                            {exp.highlights.map((h, j) => (
                              <motion.div
                                key={j}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.06 }}
                              >
                                <span className="text-samurai-red mt-1 text-xs flex-shrink-0">▸</span>
                                <span className="text-scroll/70 text-sm leading-relaxed">{h}</span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t) => (
                              <span key={t} className="text-[10px] text-gold/50 border border-gold/10 px-2 py-0.5 rounded-sm">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
