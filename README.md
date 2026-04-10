# Retro Lo-Fi Portfolio — Next.js

A retro/lo-fi aesthetic developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✦ Design Highlights

- **Retro / lo-fi aesthetic** — paper texture, grain overlay, scanlines, sepia tones
- **Special Elite** display font paired with **Courier Prime** mono and **Spectral** serif
- Typewriter animation in the hero section
- Scroll-triggered reveal animations for every section
- Animated skill bars
- Torn paper decorative edges
- Stamp badges and letterpress-style details
- Dark contact section with warm paper hero/body contrast

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open in browser
http://localhost:3000
```

## 📁 Structure

```
app/
  layout.tsx       — Root layout + metadata
  page.tsx         — Assembles all sections
  globals.css      — Fonts, base styles, grain/scanline effects

components/
  Navbar.tsx       — Fixed nav with scroll detection
  Hero.tsx         — Typewriter hero with grid background
  About.tsx        — Bio, quick facts, photo placeholder
  Projects.tsx     — 4-card project grid with tags and links
  Skills.tsx       — Animated skill bars + tag cloud
  Contact.tsx      — Email CTA + social links (dark bg)
```

## 🎨 Theme Colors

| Variable | Hex       | Usage               |
| -------- | --------- | ------------------- |
| `paper`  | `#f5f0e8` | Background          |
| `ink`    | `#1a1209` | Text, dark bg       |
| `sepia`  | `#8b6914` | Accents, labels     |
| `rust`   | `#b84c1a` | CTAs, highlights    |
| `sage`   | `#5a7a5a` | Frontend tags       |
| `faded`  | `#c4b89a` | Borders, muted text |

## 🔧 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Google Fonts: Special Elite, Courier Prime, Spectral
