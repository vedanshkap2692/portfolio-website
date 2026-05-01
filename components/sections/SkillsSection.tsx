"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { skills, stats } from "@/data/resume";

const skillCategories = [
	{
		name: "Languages",
		kanji: "言語",
		icon: "⚔",
		items: skills.languages,
		proficiency: [92, 85, 75, 70, 68],
	},
	{
		name: "ML / AI",
		kanji: "人工知能",
		icon: "🧠",
		items: skills.mlai,
		proficiency: [
			90, 85, 88, 87, 86, 82, 80, 85, 88, 86, 75, 83,
		],
	},
	{
		name: "MLOps",
		kanji: "運用",
		icon: "⚙",
		items: skills.mlops,
		proficiency: [80, 88, 75, 72, 70, 82],
	},
	{
		name: "Data Engineering",
		kanji: "データ",
		icon: "📊",
		items: skills.data,
		proficiency: [78, 75, 85, 82, 78, 84],
	},
	{
		name: "Tools",
		kanji: "道具",
		icon: "🔧",
		items: skills.tools,
		proficiency: [92, 88, 90, 90, 72, 70],
	},
];

function AnimatedCounter({
	target,
	label,
}: {
	target: number;
	label: string;
}) {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;
		let start = 0;
		const duration = 1800;
		const step = (timestamp: number) => {
			start = start || timestamp;
			const progress = Math.min(
				(timestamp - start) / duration,
				1
			);
			setCount(Math.floor(progress * target));
			if (progress < 1) requestAnimationFrame(step);
		};
		requestAnimationFrame(step);
	}, [isInView, target]);

	return (
		<div ref={ref} className="text-center group">
			<div className="font-japanese text-4xl md:text-5xl text-gold text-glow-gold">
				{count}+
			</div>
			<div className="text-scroll/50 text-sm mt-1 tracking-wider">
				{label}
			</div>
		</div>
	);
}

function SkillBar({
	skill,
	proficiency,
	delay,
}: {
	skill: string;
	proficiency: number;
	delay: number;
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div ref={ref} className="group">
			<div className="flex justify-between items-center mb-1">
				<span className="text-sm text-scroll/70 group-hover:text-gold transition-colors duration-300">
					{skill}
				</span>
				<span className="text-xs text-scroll/30 group-hover:text-gold/50 transition-colors">
					{proficiency}%
				</span>
			</div>
			<div className="h-[3px] bg-scroll/5 rounded-full overflow-hidden">
				<motion.div
					className="h-full rounded-full"
					style={{
						background: `linear-gradient(90deg, #8B0000, #C5A355)`,
						boxShadow: "0 0 6px rgba(197,163,85,0.3)",
					}}
					initial={{ width: 0 }}
					animate={
						isInView ? { width: `${proficiency}%` } : { width: 0 }
					}
					transition={{ duration: 1.2, delay, ease: "easeOut" }}
				/>
			</div>
		</div>
	);
}

export default function SkillsSection() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section
			id="skills"
			className="relative py-24 md:py-32 bg-ink-dark/30"
		>
			<div className="max-w-6xl mx-auto px-4">
				{/* Header */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
				>
					<span className="font-japanese text-samurai-red/40 text-4xl">
						道場
					</span>
					<h2 className="font-japanese text-3xl md:text-5xl text-scroll mt-2 mb-4">
						Skills Dojo
					</h2>
					<div className="brush-divider w-32 mx-auto" />
				</motion.div>

				{/* Stats */}
				<motion.div
					className="grid grid-cols-3 gap-8 mb-20 max-w-lg mx-auto"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
				>
					<AnimatedCounter
						target={stats.modelsTrained}
						label="Models Trained"
					/>
					<AnimatedCounter
						target={stats.projectsBuilt}
						label="Projects Built"
					/>
					<AnimatedCounter
						target={stats.competitions}
						label="Competitions"
					/>
				</motion.div>

				{/* Dojo board — category tabs */}
				<div className="flex overflow-x-auto gap-2 mb-8 pb-2 justify-center">
					{skillCategories.map((cat, i) => (
						<button
							key={cat.name}
							onClick={() => setActiveTab(i)}
							className={`flex-shrink-0 px-4 py-2 text-sm border rounded-sm transition-all duration-300 ${
								activeTab === i
									? "border-samurai-red/50 text-gold bg-samurai-red/10"
									: "border-scroll/10 text-scroll/50 hover:text-scroll hover:border-scroll/20"
							}`}
						>
							<span className="font-japanese text-xs mr-1 opacity-50">
								{cat.kanji}
							</span>
							{cat.name}
						</button>
					))}
				</div>

				{/* Skill bars — active category */}
				<motion.div
					key={activeTab}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className="max-w-2xl mx-auto"
				>
					<div className="p-8 border border-scroll/10 rounded-sm bg-temple-black/40">
						<div className="flex items-center gap-3 mb-6">
							<span className="font-japanese text-samurai-red/40 text-2xl">
								{skillCategories[activeTab].kanji}
							</span>
							<h3 className="font-japanese text-xl text-scroll">
								{skillCategories[activeTab].name}
							</h3>
							{/* Katana rack decoration */}
							<div className="flex-1 flex items-center justify-end gap-1">
								{[...Array(3)].map((_, i) => (
									<div
										key={i}
										className="w-[1px] h-4 bg-samurai-red/20 rotate-12"
									/>
								))}
							</div>
						</div>
						<div className="space-y-4">
							{skillCategories[activeTab].items.map((skill, i) => (
								<SkillBar
									key={skill}
									skill={skill}
									proficiency={
										skillCategories[activeTab].proficiency[i] ?? 75
									}
									delay={i * 0.06}
								/>
							))}
						</div>
					</div>
				</motion.div>

				{/* All skills tag cloud */}
				<motion.div
					className="mt-12 text-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
				>
					<p className="text-scroll/30 text-xs uppercase tracking-widest mb-4 font-mincho">
						Full Arsenal
					</p>
					<div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
						{[
							...skills.languages,
							...skills.mlai,
							...skills.mlops,
							...skills.data,
							...skills.tools,
						].map((s) => (
							<motion.span
								key={s}
								className="px-3 py-1 text-xs border border-scroll/8 rounded-sm text-scroll/50 hover:text-gold hover:border-gold/20 transition-all duration-300 cursor-default"
								whileHover={{ y: -2 }}
							>
								{s}
							</motion.span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
