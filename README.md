# Prajwal Devaraj — Digital Universe V3

A cinematic, visual personal portfolio built with React + Vite for GitHub Pages.

## What is new

- Prajwal's real 1:23 voice introduction at the top (`public/audio/prajwal-intro.m4a`)
- Shweta Kaddi appears first in the recommendations / Voices section
- Education moved near the top, before Research
- Dark-only visual identity; no theme switch
- Less text and smaller typography
- Visual project artwork and icons
- Featured project cards are clickable; GitHub/live projects open directly
- Complete experience remains in the timeline
- Animated text chatbot companion **P** remains available in the bottom-right
- Story mode, research lab, skills, milestones, social links and contact information

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

The repo includes `.github/workflows/deploy.yml` and Vite is configured for:

`/PrajwalDevaraj_Portfolio/`

On GitHub, set **Settings → Pages → Source → GitHub Actions**.

## Key files

- `src/data/content.js` — profile, experience, projects, research, recommendations, skills
- `src/components/Portfolio.jsx` — main site structure
- `src/components/ProjectUniverse.jsx` — visual/clickable project universe
- `src/components/AICompanion.jsx` — animated text guide/chatbot
- `src/components/Visuals.jsx` — inline visual icon/art system
- `src/styles/global.css` — cinematic visual system and animations
- `public/audio/prajwal-intro.m4a` — Prajwal's recorded introduction
