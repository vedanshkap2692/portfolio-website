"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/resume";
import { Trophy, Medal, Award, ScrollText } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  scroll: ScrollText,
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      {/* Lantern glow bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[20%] w-32 h-32 rounded-full bg-gold/10 lantern blur-[40px]" />
        <div className="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-gold/8 lantern blur-[30px]" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-[40%] w-28 h-28 rounded-full bg-samurai-red/8 lantern blur-[35px]" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="font-japanese text-samurai-red/40 text-4xl">神社</span>
          <h2 className="font-japanese text-3xl md:text-5xl text-scroll mt-2 mb-4">Achievements Shrine</h2>
          <div className="brush-divider w-32 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] || Trophy;
            return (
              <motion.div
                key={i}
                className="group relative p-8 border border-gold/10 rounded-sm bg-ink-dark/20 text-center hover:border-gold/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-sm bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon size={28} className="text-gold group-hover:text-gold-light transition-colors" />
                  </div>
                  <h3 className="font-japanese text-xl text-scroll group-hover:text-gold transition-colors mb-2">
                    {a.title}
                  </h3>
                  <p className="text-scroll/50 font-mincho">{a.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
