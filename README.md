# Mohammad Azril Sugiarto — Portfolio

Personal portfolio website built with React + TypeScript + Tailwind CSS.

## Tech Stack
- **React 18** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Vite** — Fast build tool

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```

## Deploy

### Vercel (Recommended — Free)
1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Click Deploy — done!

### Netlify (Alternative — Free)
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repo → Deploy

### GitHub Pages
```bash
npm run build
# Then push the dist/ folder to gh-pages branch
```

## Customization
All content is in `src/data.ts` — update your info there.

## Project Structure
```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx        ← Typewriter effect, stats
│   ├── About.tsx       ← Bio + timeline
│   ├── Skills.tsx      ← Tech stack cards
│   ├── Experience.tsx  ← Work history accordion
│   ├── Projects.tsx    ← Key achievements
│   ├── Contact.tsx     ← Contact info + CTA
│   └── Footer.tsx
├── data.ts             ← All your content lives here
├── App.tsx
├── main.tsx
└── index.css
```
