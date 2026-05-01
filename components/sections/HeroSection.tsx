"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax mountain layers */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path d="M0 400 L0 300 Q200 200 400 280 Q600 180 800 250 Q1000 150 1200 220 Q1350 180 1440 200 L1440 400Z" fill="#1a1a2e" opacity="0.5" />
          <path d="M0 400 L0 320 Q300 250 500 300 Q700 220 900 280 Q1100 200 1300 260 L1440 240 L1440 400Z" fill="#1a1a2e" opacity="0.7" />
          <path d="M0 400 L0 350 Q250 300 500 340 Q750 290 1000 330 Q1200 300 1440 320 L1440 400Z" fill="#0a0a0a" />
        </svg>
      </div>

      {/* Central content */}
      <div className="relative z-20 text-center px-4">
        {/* Japanese characters decoration */}
        <motion.div
          className="font-japanese text-samurai-red/30 text-6xl md:text-8xl mb-4 select-none"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          武士道
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-japanese text-5xl md:text-7xl lg:text-8xl font-bold text-scroll mb-4 tracking-wider"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Brush stroke divider */}
        <motion.div
          className="w-48 h-[2px] mx-auto mb-6 bg-gradient-to-r from-transparent via-samurai-red to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />

        {/* Title */}
        <motion.p
          className="font-mincho text-xl md:text-2xl text-gold tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {personalInfo.title}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <span className="text-scroll/40 text-xs tracking-[0.3em] uppercase">Enter the Temple</span>
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-samurai-red to-transparent"
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Ambient red glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-samurai-red/5 blur-[100px] pointer-events-none" />
    </section>
  );
}
