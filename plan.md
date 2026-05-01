# 🏯 Samurai Portfolio — Master Build Plan

## Project Overview
A cinematic, Samurai-themed interactive portfolio for **Vedansh Kapoor** — Data Scientist / AI Engineer.  
Built with Next.js 14 (App Router), TailwindCSS, Framer Motion, GSAP, Three.js, and Lenis.  
Deployable on Vercel (static/frontend-only).

---

## 📋 Session Breakdown

### SESSION 1 — Foundation & Scaffolding
**Goal:** Project setup, config, folder structure, global styles, fonts, base layout.

**Tasks:**
1. Initialize Next.js 14 project with App Router (`npx create-next-app@latest`)
2. Install all dependencies:
   - `tailwindcss`, `framer-motion`, `gsap`, `@studio-freight/lenis`, `three`, `@react-three/fiber`, `@react-three/drei`
   - `shadcn-ui` init, `lucide-react`, `react-icons`
   - `next-themes` (dark mode)
3. Configure Tailwind with custom theme:
   - Colors: `temple-black: #0a0a0a`, `samurai-red: #8B0000`, `gold: #C5A355`, `ink: #1a1a2e`, `scroll: #f5e6c8`, `fog: #2a2a3a`
   - Fonts: `Noto Serif JP` (headings), `Inter` (body), `Shippori Mincho` (accents)
4. Set up folder structure:
   ```
   /app
     layout.tsx          — root layout with Lenis, cursor, particles
     page.tsx            — landing temple
     /about/page.tsx
     /skills/page.tsx
     /projects/page.tsx
     /experience/page.tsx
     /achievements/page.tsx
     /github/page.tsx
     /contact/page.tsx
   /components
     /ui               — ShadCN components
     /layout            — Navbar, Footer, PageTransition
     /animations        — CherryBlossoms, FogEffect, InkRipple, KatanaSlash, KatanaCursor
     /sections          — page-specific section components
     /three             — Three.js scenes (TempleScene, Mountains)
   /data
     resume.ts          — all resume/content data
     projects.ts        — project details
     skills.ts          — skills data
   /hooks
     useScrollProgress.ts
     useLenis.ts
     useKonamiCode.ts
   /lib
     github.ts          — GitHub API helpers
     utils.ts
   /public
     /fonts
     /images
     /sounds            — ambient audio (optional)
     /textures          — paper, ink textures
   /styles
     globals.css
   ```
5. Create `data/resume.ts` with all content populated from resume:
   - Personal info, experiences, skills, projects, achievements, education
6. Set up root layout with:
   - Dark theme default
   - Custom cursor provider
   - Cherry blossom particle system
   - Lenis smooth scroll
   - Page transition wrapper (GSAP katana slash)
7. Create reusable `PageTransition` component with katana slash animation

**Deliverables:** Bootable project with routing, global styles, data files, base layout.

---

### SESSION 2 — Landing Temple (Page 1) & Navigation
**Goal:** Hero section, cinematic intro, navigation system.

**Tasks:**
1. **Fog Background** — CSS + Framer Motion layered fog animation (translucent gradient divs moving slowly)
2. **Cherry Blossom Particles** — Canvas-based particle system, pink petals falling with wind physics
3. **Parallax Mountains** — SVG layered mountains with scroll-based parallax (Framer Motion `useScroll`)
4. **Hero Content:**
   - Large `"Vedansh Kapoor"` with brush-stroke text reveal animation (GSAP SplitText style)
   - Subtitle `"AI Engineer | Data Scientist"` fades in
   - Katana slash animation reveals navigation links
5. **Navigation Bar:**
   - Fixed top, transparent → solid on scroll
   - Links styled as Japanese characters / temple markers
   - Mobile hamburger → sliding panel with ink brush animation
   - Active section indicator (glowing red dot)
6. **Ink Ripple Effect** — On click anywhere, ink ripple SVG animation expands from click point
7. **Katana Cursor** — Custom cursor: small katana icon follows mouse, trail effect on movement
8. **Temple Gate Scroll Trigger** — Scrolling down triggers a gate-opening animation (two panels slide apart) revealing About section
9. **Optional Audio Toggle** — Small icon top-right, plays ambient Japanese flute loop

**Deliverables:** Fully animated landing page, working navigation, custom cursor.

---

### SESSION 3 — About the Samurai (Page 2) & Experience Scroll (Page 5)
**Goal:** Storytelling sections with scroll-based animations.

**Tasks:**
1. **About Section — Scroll UI:**
   - Background: parchment/scroll texture
   - Content container styled as an unrolling scroll (CSS clip-path animated on scroll)
   - Narrative text with staggered reveal:
     > "From the halls of IIT Bhilai to the forges of industry, a data samurai was forged..."
   - Short bio paragraphs with ink-splash hover
2. **Animated Timeline (About):**
   - Vertical timeline with nodes: IIT Bhilai → Research Fellowship → Tech Mahindra → Matrice AI → Farmart AI Agent
   - Each node: floating paper card with date, role, brief description
   - Cards animate in from alternating sides (Framer Motion `whileInView`)
   - Brush stroke connector lines between nodes
3. **Experience Scroll (Page 5):**
   - Full vertical scroll timeline, ancient Japanese scroll aesthetic
   - Each experience block:
     - Company name in brush font
     - Role, dates
     - Key bullet points
     - Tech stack tags
   - Click to expand → paper unfolding animation (height + opacity + scale)
   - Brush stroke transitions between entries
   - Experiences from `data/resume.ts`:
     - **Farmart** — AI/ML Engineer (current) — LLM agents, Bhashini API, RAG pipelines
     - **Tech Mahindra** — AI/Data Engineer — GenAI microservices, chiller optimization
     - **Matrice AI** — ML Intern — YOLO, ResNet, satellite imagery

**Deliverables:** About page with scroll UI, experience page with expandable timeline.

---

### SESSION 4 — Skills Dojo (Page 3) & Achievements Shrine (Page 6)
**Goal:** Interactive skill visualization, achievement showcase.

**Tasks:**
1. **Skills Dojo:**
   - Visual concept: A dojo room with weapon racks
   - Skill categories displayed as sections/racks:
     - **Languages:** Python, SQL, C++, JavaScript
     - **ML/AI:** PyTorch, TensorFlow, Scikit-learn, HuggingFace, LangChain, LlamaIndex, CrewAI
     - **MLOps:** MLflow, Docker, Kubernetes, AWS SageMaker, Airflow
     - **Data Engineering:** Spark, Kafka, PostgreSQL, MongoDB, Redis
     - **Tools:** Git, Linux, Jupyter, VS Code, Tableau
   - Each skill = katana/weapon icon on a rack
   - Hover → skill name + proficiency bar with ink fill animation
   - Animated radial/radar chart per category (Framer Motion SVG)
   - Stats counters (animated on scroll):
     - Models Trained: 50+
     - Projects Built: 20+
     - Competitions: 10+
2. **Achievements Shrine (Page 6):**
   - Temple shrine aesthetic — dark background with warm lantern glow
   - Each achievement = glowing artifact (medal/trophy icon with golden glow)
   - Achievements:
     - 🏆 Hack-A-Sol Winner — Road Infrastructure Prediction
     - 🥇 Amazon ML Challenge — Top 0.5% (rank 265/75k)
     - 🥉 International Physics Olympiad — Bronze Medal
     - 🎓 KVPY Fellow — Govt. of India
   - Hover → details expand with soft light animation
   - Lantern particles in background (floating warm light dots)
   - Subtle shrine bell sound on hover (optional)

**Deliverables:** Skills dojo with interactive weapons rack, achievements shrine with glowing artifacts.

---

### SESSION 5 — Projects Armory (Page 4)
**Goal:** The most interactive section — project showcase.

**Tasks:**
1. **Project Cards:**
   - Each project = weapon scroll card with 3D tilt effect (CSS perspective + mouse tracking)
   - Cards arranged in a staggered grid
   - Ink explosion animation on card click (SVG splatter)
   - Projects from GitHub + resume:
     - **LLM Legal Assistant** — RAG chatbot for legal PDFs (Python, LangChain, FAISS)
     - **Skill Swap Platform** — Odoo-based skill exchange (Python, Odoo)
     - **Blog Planner Agent** — AI agent for technical blog creation (Python, CrewAI)
     - **Road Infrastructure Prediction** — Satellite imagery ML (PyTorch, YOLO)
     - **Smart Chiller Optimization** — Energy prediction (Python, ML)
     - **Webcam Agent** — Vision-based AI agent (Python)
2. **Project Modal:**
   - Expandable overlay with scroll-unfurl animation
   - Sections: Overview, Tech Stack (tag chips), Architecture (placeholder diagram), GitHub Link, Live Demo
   - Close with katana slash animation
3. **GitHub Stats Integration:**
   - Fetch repo data from GitHub API (stars, forks, language)
   - Display on each card
4. **Filter/Sort:**
   - Filter by tech/category
   - Ink brush underline on active filter

**Deliverables:** Interactive project armory with modals, GitHub integration, 3D tilt cards.

---

### SESSION 6 — GitHub Observatory (Page 7) & Contact Gate (Page 8)
**Goal:** GitHub visualization, contact form.

**Tasks:**
1. **GitHub Observatory:**
   - Fetch from GitHub API (`https://api.github.com/users/vedanshkap2692/repos`)
   - Contribution heatmap (custom SVG grid with green-to-gold color scale)
   - Repository constellation — repos as stars in a night sky, size = stars, connections = shared languages
   - Language breakdown (donut chart, animated)
   - Stats: total repos, total stars, top languages
   - Repo cards with hover expand
2. **Contact Gate:**
   - Minimal, elegant dark page
   - Scroll/parchment styled form:
     - Name, Email, Message fields
     - Submit button: "Send the Scroll" with brush stroke underline
   - Contact links: Email, LinkedIn, GitHub, Resume download
   - Form submission via Formspree or similar (frontend-only)
   - Ink calligraphy animation on focus
3. **Footer:**
   - Minimal, Japanese aesthetic
   - "Crafted with discipline" tagline
   - Social links

**Deliverables:** GitHub stats page, contact form, footer.

---

### SESSION 7 — Three.js, Easter Egg, Polish & Performance
**Goal:** 3D elements, Konami code, final polish.

**Tasks:**
1. **Three.js Temple Background:**
   - Subtle 3D scene behind landing page (fog + floating torii gate or temple silhouette)
   - Low-poly, performant, react-three-fiber
   - Responds to mouse movement (subtle parallax)
2. **Konami Code Easter Egg:**
   - `useKonamiCode` hook listens for ↑↑↓↓←→←→BA
   - Activates "Samurai Mode":
     - Katana slashes across full screen (GSAP animation)
     - Matrix-style code rain (canvas animation, green characters)
     - Lasts 5 seconds then fades
3. **Performance Optimization:**
   - Lazy load all heavy components (Three.js, particle systems)
   - `next/image` for all images
   - Dynamic imports for page-specific animations
   - Check Lighthouse score target: 90+
   - Reduce bundle size — tree-shake unused libs
4. **Responsive Polish:**
   - Test all pages at 320px, 768px, 1024px, 1440px
   - Disable heavy animations on mobile (reduce particles, simplify Three.js)
   - Touch-friendly interactions
5. **Accessibility:**
   - Proper heading hierarchy
   - Alt text
   - Keyboard navigation
   - Reduced motion media query support
6. **SEO & Meta:**
   - OpenGraph tags
   - Favicon (katana/samurai icon)
   - Meta description

**Deliverables:** 3D elements, easter egg, polished responsive site.

---

### SESSION 8 — Deployment & Documentation
**Goal:** Ship it.

**Tasks:**
1. Final testing across browsers (Chrome, Firefox, Safari)
2. `vercel.json` if needed
3. Deploy to Vercel
4. Write `README.md`:
   - Screenshots
   - Installation: `npm install && npm run dev`
   - Customization guide (how to change data/resume.ts)
   - Deployment: `vercel --prod`
   - Asset credits
5. Update `changelog.md` with final entry
6. Create `CUSTOMIZATION.md` — guide for swapping content

**Deliverables:** Live site on Vercel, full documentation.

---

## 📊 Data & Content Reference

### Personal Info
- **Name:** Vedansh Kapoor
- **Title:** AI Engineer | Data Scientist
- **GitHub:** github.com/vedanshkap2692
- **Location:** India

### Education
- **IIT Bhilai** — B.Tech (Expected 2025)

### Experience
1. **Farmart** — AI/ML Engineer
   - Built multilingual LLM voice agent (Bhashini API)
   - RAG pipeline for agricultural advisory
   - Agentic workflows with LangGraph
   
2. **Tech Mahindra** — AI/Data Engineer
   - GenAI microservices architecture
   - Smart chiller energy optimization (15% reduction)
   - NLP classification pipeline
   
3. **Matrice AI** — ML Intern
   - Satellite image segmentation (YOLO, ResNet)
   - Custom object detection models
   - Edge deployment optimization

### Key Projects (All 11 GitHub Repos)
1. **GEOSTOCKS** — Geopolitical Market Intelligence System. Predicts sector-level stock movements using GDELT events, news sentiment, macroeconomic indicators. XGBoost + LightGBM ensemble, LLM integration, Next.js dashboard. *(Jupyter Notebook, Python, TypeScript)*
2. **Container Yard Optimizer** *(hiring_assignment_candidate_v2)* — DP World assignment. Oracle RI-Zero with 3-Pass Pre-Simulation strategy. Score: 35.3/40, 73-78% reshuffle reduction vs greedy baseline, 42/42 tests passing. *(Python)*
3. **LLM Legal Assistant** *(legal-chat-bot-RAG-LLM)* — RAG chatbot for legal PDFs with reasoning capabilities. *(Python, LangChain, FAISS)*
4. **Blog Planner Agent** — AI agent that plans and creates technical blogs with images and web research. *(Python, CrewAI)*
5. **Skill Swap Platform** *(odoo_skill_swap)* — Odoo-based skill exchange marketplace. *(Python, Odoo)*
6. **Amazon ML Challenge** *(amazon_ml)* — Amazon ML hackathon solution, Top 0.5%. *(Python)*
7. **Atlan Customer Copilot** — AI copilot for Atlan platform customer support. *(Python)*
8. **Banking RAG** *(Banking_Rag)* — RAG pipeline for banking domain Q&A. *(Python)*
9. **Webcam Agent** — Vision-based AI agent using webcam input. *(Python)*
10. **Smart Chiller Optimization** *(Smart_Chiller_energy_consuption)* — Energy consumption prediction ML model. *(Jupyter Notebook, Python)*
11. **Road Infrastructure Prediction** *(Road_connectivity_Hackasol)* — Hack-A-Sol winning project, satellite imagery analysis. *(Jupyter Notebook, Python)*

### Skills
- **Languages:** Python, SQL, C++, JavaScript
- **ML/AI:** PyTorch, TensorFlow, Scikit-learn, HuggingFace, LangChain, LlamaIndex, CrewAI, LangGraph
- **MLOps:** MLflow, Docker, Kubernetes, AWS SageMaker, Airflow
- **Data:** Spark, Kafka, PostgreSQL, MongoDB, Redis
- **Tools:** Git, Linux, Jupyter, VS Code, Tableau

### Achievements
- 🏆 Hack-A-Sol Winner — Road Connectivity/Infrastructure
- 🥇 Amazon ML Challenge — Top 0.5% (265/75,000)
- 🥉 International Physics Olympiad — Bronze Medal
- 🎓 KVPY Fellow — Government of India Scholarship

---

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `temple-black` | `#0a0a0a` | Primary background |
| `ink-dark` | `#1a1a2e` | Secondary background |
| `samurai-red` | `#8B0000` | Primary accent |
| `blood-red` | `#DC143C` | Hover/active accent |
| `gold` | `#C5A355` | Highlights, achievements |
| `gold-light` | `#D4AF37` | Glows |
| `scroll` | `#f5e6c8` | Text on dark, scroll bg |
| `fog` | `#2a2a3a` | Fog/mist overlays |
| `cherry` | `#FFB7C5` | Blossom particles |

### Fonts
- **Headings:** Noto Serif JP (700)
- **Body:** Inter (400, 500)
- **Accent/Japanese:** Shippori Mincho (500)

---

## 📦 Dependencies

```json
{
  "next": "^14",
  "react": "^18",
  "tailwindcss": "^3",
  "framer-motion": "^11",
  "gsap": "^3",
  "@studio-freight/lenis": "^1",
  "three": "^0.160",
  "@react-three/fiber": "^8",
  "@react-three/drei": "^9",
  "lucide-react": "^0.300",
  "react-icons": "^5",
  "next-themes": "^0.3",
  "class-variance-authority": "^0.7",
  "clsx": "^2",
  "tailwind-merge": "^2"
}
```

---

## ✅ Revision Pass — Completed 2026-05-01

All 10 revision tasks applied in one continuous session:

| # | Task | Status |
|---|------|--------|
| 1 | GitHub Calendar (samurai theme, no repo cards) | ✅ |
| 2 | About Section — ink particle canvas + katana scene | ✅ |
| 3 | Timeline dates corrected | ✅ |
| 4 | Projects — click→GitHub, 3D tilt, no modals | ✅ |
| 5 | Skills — RL added, energy bars, dojo tabs | ✅ |
| 6 | Experience — animated scroll card redesign | ✅ |
| 7 | Experience content — 4 experiences updated + LOR | ✅ |
| 8 | Contact — minimal, 3 links, no form | ✅ |
| 9 | Self-evaluation — all categories 9+/10 | ✅ |
| 10 | Bug fixes + clean TypeScript build | ✅ |

---

| Session | Duration | Status |
|---------|----------|--------|
| 1 — Foundation | ~45 min | ✅ Complete |
| 2 — Landing & Nav | ~60 min | ✅ Complete |
| 3 — About & Experience | ~45 min | ✅ Complete |
| 4 — Skills & Achievements | ~45 min | ✅ Complete |
| 5 — Projects Armory | ~60 min | ✅ Complete |
| 6 — GitHub & Contact | ~45 min | ✅ Complete |
| 7 — 3D, Easter Egg, Polish | ~60 min | ✅ Complete |
| 8 — Deploy & Docs | ~30 min | ✅ Complete |

**Total Estimated: ~6.5 hours**
