<div align="center">

# ✦ IEEE CS Pro 2026 ✦

### A premium digital invitation for an invite-only leadership & networking forum for CS professionals

*Meet. Connect. Collaborate.*

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br/>

📅 **Sunday, 26 July 2026** · 🕘 **9:00 AM – 1:00 PM** · 📍 **Sheraton Grand Bangalore, Brigade Gateway** · 🎟️ **By Invitation Only**

</div>

---

## ✨ Overview

**IEEE CS Pro 2026** is a one-day, invite-only forum bringing together leaders and rising
professionals in computer science. This repository is the event's **digital invitation** — a
fast, polished, single-purpose website that sets the tone for the event and routes each
audience to the right registration form.

It is built around a **dark-luxe aesthetic** — deep navy and midnight tones, warm gold
accents, an elegant serif display face, and a calm animated "constellation" backdrop — with
production-grade SEO, social-share previews, and accessibility baked in.

> **Two audiences. Two tracks. Two forms.** One cohesive, hand-crafted experience.

---

## 🎯 Highlights

| | |
|---|---|
| 🌌 **Living constellation canvas** | A subtle, performant gold particle field rendered on `<canvas>`, setting a calm, premium mood without stealing focus. |
| ⏳ **Live countdown** | A real-time countdown to the 26 July 2026 start, computed against an IST-anchored timestamp. |
| 📅 **One-tap add-to-calendar** | Google Calendar, Outlook, and downloadable `.ics` — generated from a single event definition. |
| 🎞️ **Scroll reveals** | Tasteful, accessibility-aware reveal-on-scroll motion throughout. |
| 🧭 **Audience-aware routing** | A minimal chooser landing that sends leaders and professionals to their own dedicated track. |
| 🔍 **First-class SEO & social** | Per-page metadata, Open Graph / Twitter cards, `sitemap.ts`, and `robots.ts`. |
| 🛡️ **Security headers** | `X-Content-Type-Options` and `Referrer-Policy` applied to every route via `next.config.ts`. |
| 🎛️ **Single source of truth** | Every date, venue, contact, and form URL lives in one file — edit once, update everywhere. |

---

## 🗺️ Pages

| Route | Audience | Registration |
|---|---|---|
| `/` | Everyone — minimal chooser landing (countdown + the two tracks) | — |
| `/leadership-round-table` | Invited leaders, founders, CXOs & decision-makers | Google Form |
| `/cs-professional-connect` | HR, TPOs, placement coordinators, academicians & IEEE members | Google Form |

---

## 🧱 Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router) — server components, file-based routing, metadata API
- **[React 19](https://react.dev/)** + **[TypeScript 5](https://www.typescriptlang.org/)** — fully typed
- **[Tailwind CSS v4](https://tailwindcss.com/)** — `@theme` design tokens, zero-config PostCSS pipeline
- **`next/font`** — self-hosted, layout-shift-free typography
- **[Vercel](https://vercel.com/)** — zero-config deployment with auto-detected Next.js

---

## 📁 Project structure

```
app/
  layout.tsx                       root layout: fonts (next/font), default metadata, grain
  globals.css                      Tailwind v4 + @theme design tokens
  page.tsx                         chooser landing
  leadership-round-table/page.tsx  leaders track + its metadata
  cs-professional-connect/page.tsx professionals track + its metadata
  sitemap.ts · robots.ts           SEO surface
components/
  Constellation.tsx                animated gold particle canvas
  Countdown.tsx                    live countdown to the event
  AddToCalendar.tsx                Google / Outlook / .ics actions
  Reveal.tsx                       scroll-reveal wrapper
  OrganizerLogos.tsx               organizer marks
  RoomCard.tsx · SiteFooter.tsx    layout pieces
  ui.tsx · track.tsx               shared primitives & track scaffolding
lib/
  event.ts                         ⭐ single source of truth (facts, forms, calendar helpers)
public/assets/                     favicon, logos, icons, og-image, form headers
next.config.ts                     security headers
```

> **`lib/event.ts` is the heart of the site.** Edit the dates, venue, contact, and the two
> form URLs there and every page — plus the calendar links and metadata — updates automatically.

---

## 🚀 Getting started

```bash
# install dependencies
npm install

# start the dev server → http://localhost:3000
npm run dev

# production build (also type-checks)
npm run build

# serve the production build locally
npm run start
```

Requires **Node.js 18.18+** (Node 20 LTS recommended).

---

## ☁️ Deployment

Vercel auto-detects Next.js — no static config required; security headers live in
`next.config.ts`.

```bash
npm i -g vercel    # if needed
vercel             # preview deployment
vercel --prod      # production deployment
```

**After deploying**, set your real domain in **`lib/event.ts` → `SITE_URL`**. `metadataBase`
derives from it, so Open Graph / Twitter image URLs and canonicals resolve to absolute URLs —
which WhatsApp, LinkedIn, and X link previews require.

---

## 🖼️ Swapping in the official IEEE logos

The organizer marks in `public/assets/logos/` are clean, on-brand **placeholders**. To use the
official artwork, overwrite the files in place (keep the same filenames) — ideally SVG or
transparent PNG, re-tinted light for the dark background:

- `ieee-bangalore-section.svg` · `ieee-cs-bangalore.svg` · `ieee-80-years.svg`

`ieee-master.svg` is the authentic IEEE master logo.

---

## 🤝 Organizer

Organized by the **IEEE Computer Society · Bangalore Chapter**, in association with the
IEEE Bangalore Section.

🌐 [ieeecsbangalore.org](https://ieeecsbangalore.org) · 📷 [@ieeecsbc](https://www.instagram.com/ieeecsbc) · 💼 [LinkedIn](https://www.linkedin.com/company/ieeecsbc)

---

<div align="center">

*Crafted with care for the IEEE CS Pro 2026 community.*

</div>
