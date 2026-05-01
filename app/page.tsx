"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import ContactSection from "@/components/sections/ContactSection";

const CherryBlossoms = dynamic(() => import("@/components/animations/CherryBlossoms"), { ssr: false });
const FogEffect = dynamic(() => import("@/components/animations/FogEffect"), { ssr: false });
const InkRipple = dynamic(() => import("@/components/animations/InkRipple"), { ssr: false });
const SamuraiMode = dynamic(() => import("@/components/animations/SamuraiMode"), { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      <FogEffect />
      <CherryBlossoms />
      <InkRipple />
      <SamuraiMode />
      <Navbar />

      <HeroSection />

      <div className="brush-divider mx-auto max-w-md" />
      <AboutSection />

      <div className="brush-divider mx-auto max-w-md" />
      <SkillsSection />

      <div className="brush-divider mx-auto max-w-md" />
      <ProjectsSection />

      <div className="brush-divider mx-auto max-w-md" />
      <ExperienceSection />

      <div className="brush-divider mx-auto max-w-md" />
      <AchievementsSection />

      <div className="brush-divider mx-auto max-w-md" />
      <GitHubSection />

      <div className="brush-divider mx-auto max-w-md" />
      <ContactSection />
    </main>
  );
}
