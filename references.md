# 📚 References — Samurai Portfolio

## Portfolio Repos Studied & Key Takeaways

### 1. developerFolio (saadpasta)
- **Takeaway:** Section structure, GitHub API integration pattern, skills visualization
- **Adapt:** GitHub project cards, contribution stats display

### 2. Brittany Chiang v4 (bchiang7)
- **Takeaway:** Gold standard for dev portfolios — clean nav, sticky sections, subtle animations
- **Adapt:** Navigation interaction pattern, section spacing, hover effects

### 3. ByteGrad Portfolio
- **Takeaway:** Clean Next.js App Router architecture, great page transitions
- **Adapt:** Component organization, animation patterns with Framer Motion

### 4. gatsby-simplefolio (cobidev)
- **Takeaway:** Minimal elegance, great typography hierarchy
- **Adapt:** Section spacing, project grid layout

### 5. Portfoliify (Yog9)
- **Takeaway:** Auto-generate portfolio from GitHub data
- **Adapt:** GitHub API integration for dynamic project loading

### 6. react-portfolio-template (RyanFitzgerald)
- **Takeaway:** Recruiter readability, clean project sections
- **Adapt:** Project presentation structure, skill grouping

### 7. NextJS-Portfolio-Template (sachinbhujel)
- **Takeaway:** Modern Next.js + Tailwind responsive patterns
- **Adapt:** Responsive component layout, performance patterns

---

## Design Inspiration (Non-GitHub)
- Japanese ink wash painting (Sumi-e) aesthetics
- Samurai Champloo anime — visual style reference
- Traditional Japanese scroll (emakimono) storytelling
- Zen garden minimalism
- Award-winning interactive sites on Awwwards.com

---

## Technical References
- **Framer Motion:** https://www.framer.com/motion/
- **GSAP:** https://gsap.com/docs/
- **Lenis:** https://github.com/studio-freight/lenis
- **Three.js:** https://threejs.org/docs/
- **React Three Fiber:** https://docs.pmnd.rs/react-three-fiber
- **ShadCN UI:** https://ui.shadcn.com/
- **GitHub REST API:** https://docs.github.com/en/rest
- **Formspree:** https://formspree.io/ (contact form backend)

---

## Key Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| Next.js App Router | Modern React, file-based routing, easy Vercel deploy |
| Client-side GitHub API | No backend needed, public endpoints sufficient |
| GSAP for transitions | More control than Framer Motion for cinematic effects |
| Framer Motion for scroll | Better React integration for scroll-triggered animations |
| Lenis over native | Buttery smooth scroll, easy to integrate |
| Three.js minimal | Only landing page bg — lazy loaded to avoid perf hit |
| Formspree for contact | Free tier, no backend, easy setup |
| CSS textures over images | Better performance, no external asset loading |
