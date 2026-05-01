# ⚔️ Vedansh Kapoor — Samurai Portfolio

> *"A data samurai forged in the halls of IIT Bhilai — mastering machine learning, wielding LLMs, and crafting intelligent systems."*

**Live site →** [https://portfolio-website-three-lime-74.vercel.app](https://portfolio-website-three-lime-74.vercel.app)

---

## 🗡️ Overview

A cinematic, Samurai-themed personal portfolio for **Vedansh Kapoor** (AI Engineer / Data Scientist). Built with Next.js 14, Tailwind CSS v4, and Framer Motion. Features a fully animated Canvas 2D katana scene, scroll-triggered timeline, GitHub activity calendar, expandable experience cards, and 11 project cards that link directly to GitHub.

---

## ✨ Features

- **Animated Katana Scene** — Canvas 2D metallic blade with traveling gleam, floating orbs, kanji, ink particles
- **Hero Section** — Animated typewriter title, brush-stroke reveal, CTA buttons
- **About Section** — Bio + 3D-feel canvas scene + scroll-triggered Journey timeline (5 milestones)
- **Skills Dojo** — 5-tab category switcher (Languages / ML·AI / MLOps / Data Eng / Tools) with energy bars
- **Projects Armory** — 11 projects, 3D tilt cards, click → opens GitHub in new tab
- **Experience Scroll** — 4 expandable accordion cards (Farmart, Tech Mahindra, Matrice AI, IIT Bombay)
- **Achievements** — Hackathon wins, competition rankings, LOR badge
- **GitHub Section** — Live GitHub contribution calendar + language breakdown
- **Contact** — Minimal links: Email · LinkedIn · GitHub
- **Ambient FX** — Cherry blossoms, fog layer, ink ripple on click, Konami code Easter egg (↑↑↓↓←→←→BA)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@theme inline` custom tokens) |
| Animations | Framer Motion v12, GSAP v3 |
| Canvas | Canvas 2D (KatanaScene) |
| Icons | Lucide React |
| Fonts | Noto Serif JP, Shippori Mincho (Google Fonts) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Tailwind v4 theme tokens, custom classes
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Main page — assembles all sections
├── components/
│   ├── animations/
│   │   ├── KatanaScene.tsx  # Canvas 2D katana + particles + kanji
│   │   ├── CherryBlossoms.tsx
│   │   ├── FogEffect.tsx
│   │   ├── InkRipple.tsx
│   │   └── SamuraiMode.tsx  # Konami code Easter egg
│   ├── layout/
│   │   └── Navbar.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── AchievementsSection.tsx
│       ├── GitHubSection.tsx
│       └── ContactSection.tsx
├── data/
│   └── resume.ts            # ✏️ Edit this file to update all content
├── hooks/
│   └── useKonamiCode.ts
├── types/
│   └── github-calendar.d.ts
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18+**
- npm v9+

### Clone & Install

```bash
# 1. Clone the repo
git clone https://github.com/vedanshkap2692/portfolio-website.git
cd portfolio-website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Customising Content

**All personal data lives in one file: `data/resume.ts`**

Edit that file to update:
- `personalInfo` — name, bio, GitHub URL, LinkedIn, email
- `experiences` — job roles, highlights, tech stack
- `projects` — project cards, GitHub links, descriptions
- `skills` — categorised skill lists

No other files need to be touched for content changes.

---

## 🎨 Customising Theme

Custom colour tokens are defined in `app/globals.css` under `@theme inline`:

```css
--color-temple-black: #0a0a0a;   /* page background */
--color-samurai-red:  #8B0000;   /* accent red */
--color-gold:         #C5A355;   /* gold highlight */
--color-scroll:       #f5e6c8;   /* warm text */
--color-ink-dark:     #1a1a2e;   /* card backgrounds */
--color-cherry:       #FFB7C5;   /* cherry blossom */
--color-fog:          #2a2a3a;   /* fog overlay */
```

---

## 🏗️ Build for Production

```bash
npm run build   # creates optimised build in .next/
npm run start   # serves the production build locally
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel --prod
```

### Option B — GitHub Integration (recommended for auto-deploy)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your `portfolio-website` repository
4. Click **Deploy** — Vercel auto-detects Next.js, zero config needed

Every push to `main` will auto-redeploy.

---

## 🥚 Easter Egg

Type the **Konami Code** on any page: `↑ ↑ ↓ ↓ ← → ← → B A`

---

## 📄 License

MIT — feel free to fork and customise for your own portfolio.

---

*Built with ⚔️ by Vedansh Kapoor*
