"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKonamiCode } from "@/hooks/useKonamiCode";

function MatrixRain({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "武士道剣侍忍者力心技体0123456789ABCDEF";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#8B0000";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = Math.random() > 0.5 ? "#8B0000" : "#C5A355";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[300]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Katana slashes */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="absolute w-[200%] h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ x: "-100%", rotate: -30 }}
          animate={{ x: "100%" }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
        <motion.div
          className="absolute w-[200%] h-[3px] bg-gradient-to-r from-transparent via-samurai-red to-transparent"
          initial={{ x: "100%", rotate: 30 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="font-japanese text-6xl text-gold text-glow-gold"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        >
          侍モード
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function SamuraiMode() {
  const active = useKonamiCode();

  return (
    <AnimatePresence>
      {active && <MatrixRain active={active} />}
    </AnimatePresence>
  );
}
