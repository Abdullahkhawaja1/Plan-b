# Plan B — Shift Coverage Platform

> A shift breaks. Plan B fills it.

Plan B is a Next.js 14 + TypeScript starter for hospitality venues to coordinate last-minute shift cover when staff call in sick. It includes a responsive landing page, a demo open-shift board, and an interactive coverage-request form.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Current scope

- Responsive landing page for restaurants, cafés, hotels, and hospitality teams.
- Demo board of open shifts with search.
- Interactive coverage request / staff interest forms (client-side demo only).
- Tailwind CSS styling.
- Optional Resend environment placeholders for future notification integration.

## Important limitations

This repository currently provides a frontend prototype. The form keeps its confirmation in React page state only and does not persist to a database, send emails, authenticate users, or notify real staff. Do not use it as a production staffing system until server-side authentication, persistent storage, authorization, validation, and real notification delivery are implemented.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run type-check` — TypeScript validation
