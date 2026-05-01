"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/data/resume";
import { ExternalLink } from "lucide-react";

type Project = (typeof projects)[0];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative flex flex-col"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1000px" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-sm pointer-events-none"
        animate={{
          boxShadow: hovered
            ? "0 0 30px rgba(139,0,0,0.15), inset 0 0 0 1px rgba(197,163,85,0.15)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] rounded-t-sm pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0, background: "linear-gradient(90deg, transparent, #8B0000, transparent)" }}
        transition={{ duration: 0.3 }}
      />

      {/* Ink particle burst */}
      {hovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-sm">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ background: i % 2 === 0 ? "#8B0000" : "#C5A355", left: "50%", top: "50%" }}
              initial={{ x: 0, y: 0, scale: 0, opacity: 0.8 }}
              animate={{
                x: (Math.cos((i / 8) * Math.PI * 2) * 60),
                y: (Math.sin((i / 8) * Math.PI * 2) * 60),
                scale: [0, 1.5, 0],
                opacity: [0.8, 0.4, 0],
              }}
              transition={{ duration: 0.7 + i * 0.05, ease: "easeOut" }}
            />
          ))}
        </div>
      )}

      {/* Card content — plain <a> for reliable navigation */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex flex-col flex-1 p-6 border border-scroll/10 rounded-sm bg-ink-dark/30 hover:border-samurai-red/30 transition-colors duration-500 no-underline h-full"
        style={{ textDecoration: "none" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs text-samurai-red/50 font-mono">{project.language}</span>
          <ExternalLink size={12} className={`transition-colors duration-300 ${hovered ? "text-gold/70" : "text-scroll/20"}`} />
        </div>

        <h3 className={`font-japanese text-lg transition-colors duration-300 mb-1 ${hovered ? "text-gold" : "text-scroll"}`}>
          {project.title}
        </h3>
        <p className="text-scroll/40 text-xs mb-3 font-mincho">{project.subtitle}</p>
        <p className="text-scroll/60 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className={`text-[10px] border px-2 py-0.5 rounded-sm transition-colors duration-300 ${
                hovered ? "border-gold/15 text-scroll/60" : "border-scroll/8 text-scroll/40"
              }`}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] text-scroll/25">+{project.tech.length - 4}</span>
          )}
        </div>
      </a>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="font-japanese text-samurai-red/40 text-4xl">武器</span>
          <h2 className="font-japanese text-3xl md:text-5xl text-scroll mt-2 mb-4">Projects Armory</h2>
          <div className="brush-divider w-32 mx-auto mb-4" />
          <p className="text-scroll/30 text-sm font-mincho">
            Click any card to view on GitHub ↗
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
