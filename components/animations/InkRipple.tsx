"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function InkRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 900);
    };
    window.addEventListener("click", handler, { passive: true });
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div className="fixed inset-0 z-[5] pointer-events-none">
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: r.x - 30,
              top: r.y - 30,
              width: 60,
              height: 60,
              background: "radial-gradient(circle, rgba(139,0,0,0.2) 0%, transparent 70%)",
            }}
            initial={{ scale: 0, opacity: 0.7 }}
            animate={{ scale: 5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
