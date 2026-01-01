# One-Shot Implementation Instructions

Complete implementation guide for Sanjana's Portfolio — all milestones combined.

---

## Milestone 1: Foundation

### 1.1 Project Setup

Create a new React project with Vite and TypeScript:

```bash
npm create vite@latest portfolio -- --template react-ts
cd portfolio
npm install
npm install -D tailwindcss @tailwindcss/vite
npm install react-router-dom lucide-react
```

### 1.2 Tailwind CSS v4 Configuration

Update `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Create `src/index.css`:

```css
@import 'tailwindcss';

@theme {
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}
```

### 1.3 Google Fonts

Add to `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### 1.4 Routing Setup

Create `src/App.tsx`:

```tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from './shell/AppShell'
import { WhoAmIPage } from './pages/WhoAmIPage'
import { MyToolboxPage } from './pages/MyToolboxPage'
import { MutualFitPage } from './pages/MutualFitPage'
import { ContactMePage } from './pages/ContactMePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/who-am-i" replace />} />
        <Route path="/who-am-i" element={<AppShell><WhoAmIPage /></AppShell>} />
        <Route path="/my-toolbox" element={<AppShell><MyToolboxPage /></AppShell>} />
        <Route path="/mutual-fit" element={<AppShell><MutualFitPage /></AppShell>} />
        <Route path="/contact-me" element={<AppShell><ContactMePage /></AppShell>} />
      </Routes>
    </BrowserRouter>
  )
}
```

---

## Milestone 2: Application Shell

### 2.1 Shell Components

Copy components from `product-plan/shell/components/`:

- `AppShell.tsx` — Main layout with header (h-16) and content area
- `MainNav.tsx` — Desktop navigation (hidden on mobile)
- `MobileMenu.tsx` — Hamburger menu with overlay (visible on mobile)

### 2.2 Navigation Items

```tsx
const navItems = [
  { label: 'Who Am I?', href: '/who-am-i' },
  { label: 'My Toolbox', href: '/my-toolbox' },
  { label: 'Mutual Fit', href: '/mutual-fit' },
  { label: 'Contact Me', href: '/contact-me' },
]
```

### 2.3 Active State

Highlight current nav item with amber color (`text-amber-600 dark:text-amber-400`).

---

## Milestone 3: Who Am I? Section

### 3.1 Layout

3-row grid layout:
- **Row 1: Journey** — 3 cards showing background/story
- **Row 2: Education** — 2 wider cards
- **Row 3: Experience** — 3 cards (most recent first)

### 3.2 Grid Structure

```tsx
<div className="flex min-h-[calc(100vh-4rem)] flex-col gap-px bg-stone-200 md:h-[calc(100vh-4rem)] dark:bg-stone-800">
  {/* Each row */}
  <div className="grid flex-1 grid-cols-1 gap-px md:grid-cols-[8rem_1fr_1fr_1fr]">
    {/* Row label + cards */}
  </div>
</div>
```

### 3.3 Component

Copy from `product-plan/sections/who-am-i/components/WhoAmI.tsx`

### 3.4 Types & Data

- Types: `product-plan/sections/who-am-i/types.ts`
- Sample Data: `product-plan/sections/who-am-i/data.json`

---

## Milestone 4: My Toolbox Section

### 4.1 Layout

4-row grid with 4 skills per row:
- **Product** (stone) — Strategy, Roadmapping, Discovery, Go-to-Market
- **AI** (blue) — LLM Apps, Prompt Engineering, Evaluation, AI Agents
- **Tech** (amber) — Frontend, Backend, APIs, Data
- **User & Soft Skills** (green) — Research, Communication, Leadership, Problem Solving

### 4.2 Grid Structure

```tsx
<div className="grid flex-1 grid-cols-1 gap-px md:grid-cols-[8rem_1fr_1fr_1fr_1fr]">
```

### 4.3 Color Mapping

```tsx
const colorMap = {
  stone: 'text-stone-600 dark:text-stone-400',
  blue: 'text-blue-600 dark:text-blue-400',
  amber: 'text-amber-600 dark:text-amber-400',
  green: 'text-green-600 dark:text-green-400',
}
```

### 4.4 Component & Data

- Component: `product-plan/sections/my-toolbox/components/MyToolbox.tsx`
- Types: `product-plan/sections/my-toolbox/types.ts`
- Sample Data: `product-plan/sections/my-toolbox/data.json`

---

## Milestone 5: Mutual Fit Section

### 5.1 Layout

2-row grid:
- **What I Bring** (purple) — 4 items
- **What I Look For** (green) — 4 items

### 5.2 Color Mapping

```tsx
const colorMap = {
  purple: 'text-purple-600 dark:text-purple-400',
  green: 'text-green-600 dark:text-green-400',
}
```

### 5.3 Component & Data

- Component: `product-plan/sections/mutual-fit/components/MutualFit.tsx`
- Types: `product-plan/sections/mutual-fit/types.ts`
- Sample Data: `product-plan/sections/mutual-fit/data.json`

---

## Milestone 6: Contact Me Section

### 6.1 Layout

Horizontal split (vertical on mobile):
- **Left: Identity** — Name, email, phone
- **Right: Socials** — LinkedIn, GitHub, Twitter/X

### 6.2 Structure

```tsx
<div className="flex min-h-[calc(100vh-4rem)] flex-col gap-px md:flex-row">
  {/* Identity column */}
  {/* Socials column */}
</div>
```

### 6.3 Component & Data

- Component: `product-plan/sections/contact-me/components/ContactMe.tsx`
- Types: `product-plan/sections/contact-me/types.ts`
- Sample Data: `product-plan/sections/contact-me/data.json`

---

## Mobile Responsiveness

All sections use responsive breakpoints:

- `grid-cols-1 md:grid-cols-[...]` — Single column on mobile, multi-column on desktop
- `flex-col md:flex-row` — Vertical stack on mobile, horizontal on desktop
- `min-h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)]` — Scrollable on mobile, fixed on desktop
- `py-3 md:py-0` — Extra padding for row labels on mobile

---

## Dark Mode

All components support dark mode with `dark:` variants:

- Backgrounds: `bg-stone-50 dark:bg-stone-950`
- Borders: `bg-stone-200 dark:bg-stone-800`
- Text: `text-stone-900 dark:text-stone-100`
- Muted: `text-stone-600 dark:text-stone-400`
- Accent: `text-amber-600 dark:text-amber-400`

---

## Deployment

### Static Site Hosting (Render, Netlify, Vercel)

For SPA routing, configure redirects:

**Render Dashboard:**
- Redirects/Rewrites: `/*` → `/index.html` (Rewrite)

**Netlify `_redirects`:**
```
/* /index.html 200
```

**Vercel `vercel.json`:**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## File Structure

```
src/
├── App.tsx
├── index.css
├── main.tsx
├── shell/
│   ├── AppShell.tsx
│   ├── MainNav.tsx
│   └── MobileMenu.tsx
├── pages/
│   ├── WhoAmIPage.tsx
│   ├── MyToolboxPage.tsx
│   ├── MutualFitPage.tsx
│   └── ContactMePage.tsx
├── sections/
│   ├── who-am-i/
│   │   ├── components/WhoAmI.tsx
│   │   └── types.ts
│   ├── my-toolbox/
│   │   ├── components/MyToolbox.tsx
│   │   └── types.ts
│   ├── mutual-fit/
│   │   ├── components/MutualFit.tsx
│   │   └── types.ts
│   └── contact-me/
│       ├── components/ContactMe.tsx
│       └── types.ts
└── data/
    ├── who-am-i.json
    ├── my-toolbox.json
    ├── mutual-fit.json
    └── contact-me.json
```