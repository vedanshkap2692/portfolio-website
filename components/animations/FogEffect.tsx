"use client";

import { motion } from "framer-motion";

export default function FogEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 fog-layer"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(42,42,58,0.4) 0%, transparent 70%)",
        }}
        animate={{ x: ["-5%", "5%", "-5%"], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 fog-layer-2"
        style={{
          background:
            "radial-gradient(ellipse at 70% 60%, rgba(42,42,58,0.3) 0%, transparent 60%)",
        }}
        animate={{ x: ["5%", "-5%", "5%"], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.8), transparent)",
        }}
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
