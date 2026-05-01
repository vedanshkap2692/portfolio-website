"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";

const contactLinks = [
	{
		label: "Email",
		kanji: "書",
		value: personalInfo.email,
		href: `mailto:${personalInfo.email}`,
		desc: "Send a message",
	},
	{
		label: "LinkedIn",
		kanji: "縁",
		value: "vedansh-kapoor",
		href: personalInfo.linkedin,
		desc: "Professional network",
	},
	{
		label: "GitHub",
		kanji: "刀",
		value: "vedanshkap2692",
		href: personalInfo.github,
		desc: "Code repository",
	},
];

export default function ContactSection() {
	return (
		<section id="contact" className="relative py-24 md:py-40">
			{/* Ambient glow */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-samurai-red/4 blur-[100px]" />
			</div>

			<div className="max-w-2xl mx-auto px-4 relative z-10">
				{/* Header */}
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
				>
					<span className="font-japanese text-samurai-red/40 text-5xl">門</span>
					<h2 className="font-japanese text-3xl md:text-5xl text-scroll mt-3 mb-4">
						Contact Gate
					</h2>
					<div className="brush-divider w-32 mx-auto mb-6" />
					<p className="text-scroll/40 font-mincho text-base leading-relaxed">
						The gate is open. Step through.
					</p>
				</motion.div>

				{/* Contact links */}
				<div className="space-y-4">
					{contactLinks.map((link, i) => (
						<motion.a
							key={link.label}
							href={link.href}
							target={
								link.href.startsWith("mailto") ? undefined : "_blank"
							}
							rel="noopener noreferrer"
							className="group flex items-center gap-6 p-6 border border-scroll/8 rounded-sm hover:border-gold/25 transition-all duration-500 relative overflow-hidden"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.12 }}
							whileHover={{ x: 4 }}
						>
							{/* Hover sweep */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-samurai-red/5 to-transparent pointer-events-none"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							/>

							{/* Kanji circle */}
							<div className="flex-shrink-0 w-14 h-14 rounded-full border border-samurai-red/20 group-hover:border-gold/30 flex items-center justify-center transition-colors duration-500 bg-temple-black/60">
								<span className="font-japanese text-2xl text-samurai-red/50 group-hover:text-gold transition-colors duration-300">
									{link.kanji}
								</span>
							</div>

							<div className="flex-1 min-w-0">
								<div className="text-xs text-scroll/30 uppercase tracking-widest mb-1">
									{link.label}
								</div>
								<div className="text-scroll/80 group-hover:text-gold transition-colors duration-300 font-medium truncate">
									{link.value}
								</div>
								<div className="text-scroll/30 text-xs font-mincho mt-0.5">
									{link.desc}
								</div>
							</div>

							<div className="text-scroll/20 group-hover:text-gold/50 transition-colors flex-shrink-0">
								→
							</div>
						</motion.a>
					))}
				</div>
			</div>

			{/* Footer */}
			<motion.div
				className="mt-24 text-center border-t border-scroll/5 pt-8 px-4"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
			>
				<p className="font-japanese text-samurai-red/20 text-2xl mb-2">
					武士道
				</p>
				<p className="text-scroll/20 text-xs tracking-widest font-mincho">
					Crafted with discipline · 2026 · Vedansh Kapoor
				</p>
			</motion.div>
		</section>
	);
}
