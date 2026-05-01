"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/resume";

// Load Three.js scene only on client (no SSR)
const KatanaScene = dynamic(() => import("@/components/animations/KatanaScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="font-japanese text-samurai-red/30 text-4xl animate-pulse">剣</span>
    </div>
  ),
});

const timeline = [
  { year: "2022 – 2026", label: "IIT Bhilai", desc: "Foundation laid — B.Tech begins", kanji: "始", color: "#C5A355" },
  { year: "2024", label: "IIT Bombay", desc: "Blade sharpened — UAV vision research", kanji: "研", color: "#8B0000" },
  { year: "2025", label: "Matrice AI", desc: "First battle — vision at scale", kanji: "戦", color: "#C5A355" },
  { year: "2025", label: "Tech Mahindra", desc: "Steel tempered — GenAI systems", kanji: "鍛", color: "#8B0000" },
  { year: "2025–26", label: "Farmart", desc: "Mastery — AI transforms agriculture", kanji: "極", color: "#C5A355" },
];

function TimelineItem({ item, index }: { item: (typeof timeline)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.6], [0, 1]), { stiffness: 80, damping: 20 });
  const y = useSpring(useTransform(scrollYProgress, [0, 0.6], [60, 0]), { stiffness: 80, damping: 20 });
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.6], [0.7, 1]), { stiffness: 80, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className="group relative text-center flex flex-col items-center"
    >
      {/* Kanji circle */}
      <motion.div
        className="relative w-16 h-16 rounded-full border-2 bg-temple-black flex items-center justify-center mb-4 transition-all duration-500 cursor-default"
        style={{ borderColor: item.color + "60" }}
        whileHover={{
          scale: 1.15,
          boxShadow: `0 0 30px ${item.color}60`,
        }}
      >
        {/* Spinning ring */}
        <motion.div
          className="absolute inset-[-5px] rounded-full border border-dashed"
          style={{ borderColor: item.color + "35" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <span className="font-japanese text-2xl" style={{ color: item.color }}>
          {item.kanji}
        </span>
      </motion.div>

      {/* Pulse dot */}
      <motion.div
        className="w-1.5 h-1.5 rounded-full mb-3"
        style={{ background: item.color }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
      />

      <div className="font-mono text-[10px] mb-1" style={{ color: item.color + "99" }}>
        {item.year}
      </div>
      <div className="font-japanese text-sm text-scroll group-hover:text-gold transition-colors mb-1">
        {item.label}
      </div>
      <div className="text-scroll/40 text-xs font-mincho leading-snug px-1">{item.desc}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.65], ["0%", "100%"]);
  const bgY1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32 scroll-texture overflow-hidden">
      {/* Parallax ink blobs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(139,0,0,0.06)", y: bgY1 }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(197,163,85,0.05)", y: bgY2 }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="font-japanese text-samurai-red/40 text-4xl block"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            侍
          </motion.span>
          <h2 className="font-japanese text-3xl md:text-5xl text-scroll mt-2 mb-4">About the Samurai</h2>
          <div className="brush-divider w-32 mx-auto" />
        </motion.div>

        {/* Split: 3D katana + bio */}
        <div className="grid md:grid-cols-2 gap-12 mb-28 items-center">
          {/* 3D Scene */}
          <motion.div
            className="relative h-[380px] md:h-[460px] rounded-sm border border-samurai-red/15 overflow-hidden bg-temple-black/90"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <KatanaScene />
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/20 pointer-events-none" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold/20 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-gold/20 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-temple-black/50 via-transparent to-temple-black/10 pointer-events-none" />
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
              <span className="text-scroll/20 text-[10px] tracking-[0.3em] uppercase">Interactive · 3D</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative p-8 border border-scroll/10 rounded-sm bg-ink-dark/20 h-full flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-samurai-red/30" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-samurai-red/30" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-samurai-red/30" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-samurai-red/30" />
              <p className="font-mincho text-lg text-scroll/80 leading-relaxed mb-8">{personalInfo.bio}</p>
              <div className="flex gap-4 text-center">
                {[
                  { n: "4", l: "Years\nML/AI" },
                  { n: "20+", l: "Projects\nBuilt" },
                  { n: "11", l: "GitHub\nRepos" },
                ].map(({ n, l }, i) => (
                  <motion.div
                    key={l}
                    className="flex-1 border border-scroll/10 p-3 rounded-sm group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ borderColor: "rgba(197,163,85,0.3)" }}
                  >
                    <div className="font-japanese text-2xl text-gold">{n}</div>
                    <div className="text-scroll/40 text-[10px] leading-tight mt-1 whitespace-pre">{l}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <div>
          <motion.h3
            className="font-japanese text-2xl text-scroll text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-samurai-red/40 mr-3">道</span>The Journey
          </motion.h3>
          <motion.p
            className="text-scroll/30 text-xs text-center font-mincho mb-12 tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            — each step forged by fire —
          </motion.p>

          {/* Animated line */}
          <div className="hidden md:block relative h-[1px] mb-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-samurai-red/10 to-transparent" />
            <motion.div
              className="absolute top-0 left-0 h-full"
              style={{
                width: lineWidth,
                background: "linear-gradient(to right, transparent, rgba(139,0,0,0.5), transparent)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 mt-10">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
