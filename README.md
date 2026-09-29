# heyjared.co

Marketing site for Jared, the AI coworker that lives in Slack. Vite + React, no other runtime deps.

```bash
npm install
npm run dev     # local dev
npm run build   # static output in dist/
```

Deploys as a static site (Vercel: framework preset "Vite", output `dist`).

## Design

Built on the "Ready" style system: warm off-white canvas, near-black ink (`#333`), one periwinkle accent (`#7366fe`), lavender highlight on one phrase per headline, 32px radii, a single soft shadow for floating product mocks. Tokens live at the top of `src/styles.css`.

Fonts: the system calls for GT Walsheim (headlines) and GT America (body). Both are licensed, so Inter stands in. Self-host the GT woff2 files and add `@font-face` rules; the stacks already list them first.

## Content

- `src/App.jsx` — page sections and copy
- `src/demoScript.jsx` — the scripted Slack tour (demo data only)
- `src/logos.jsx` — integration marks (Simple Icons, CC0)
