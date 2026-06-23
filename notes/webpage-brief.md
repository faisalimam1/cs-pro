# IEEE CS Pro 2026 — Digital Invite Webpage Brief

> Planning doc. Decisions captured before building. Last updated: 2026-06-15

## Goal
A premium digital invitation webpage for **IEEE CS Pro 2026**, shared with a limited, invite-only guest list. Must feel "very impressive" and professional, befitting an IEEE flagship event.

## Confirmed decisions
- **Experience:** Single continuous-scroll page; highly reactive/responsive; premium feel.
- **Aesthetic:** Elegant minimal.
- **RSVP:** Button → existing IEEE CS Pro Google Form ("Accept Invitation" style CTA).
- **Personalization:** One shared link (generic, not per-guest).
- **Delivery:** Deploy on **Vercel**; may later connect to / link from ieeecsbangalore.org. Build as Vercel-ready project.
- **Sections to include:**
  1. Countdown timer (to event date)
  2. Program / agenda timeline (5 segments: Keynote, Panel, Fireside Chat, Startup Showcase, Networking & Fun)
  3. Who's in the room (industry leaders, founders, investors, academia, HRs, TPOs, placement coordinators)
  4. Why attend + date/venue details
- **Speakers:** Leave out for now (no named speakers yet; easy to add later).
- **Venue:** Taj, Yeshwanthpur, Bengaluru (confirmed).
- **Palette:** ~~Light & refined (ivory)~~ → **changed to Dark luxe** (deep navy / midnight canvas, warm-ivory headlines, gold accents, glowing gold constellation). Updated 2026-06-15 per user feedback.
- **Branding:** All four logos (IEEE Bangalore Section, IEEE Computer Society Bangalore Chapter, 80th Anniversary, IEEE Sensors Council) — user to provide image files.
- **Motion:** Rich & cinematic — parallax, hero animation, pronounced scroll transitions (kept tasteful for a professional event).
- **Hero line:** "Connecting Visionaries. Empowering Opportunities." (under "IEEE CS PRO 2026").
- **Copy tone:** Formal & prestigious ("It is our privilege to invite you...").
- **Extras:** Invite-only badge · Add-to-calendar button · Footer with links + contact. (Limited-seats messaging: **dropped** per later decision.)
- **RSVP deadline:** None — use "Kindly respond at the earliest."
- **Add-to-calendar:** All calendars — Google, Apple, Outlook, via downloadable .ics.
- **"Who's in the room":** Categories only with elegant icons — no stat numbers.

## Assets
- **Logos:** Source official IEEE logos online (per user) — IEEE Bangalore Section, IEEE Computer Society Bangalore Chapter, IEEE 80th Anniversary, IEEE Sensors Council. Place in public/logos/. (Desktop copies were partly empty; not relying on them.)

## Event facts (final)
- Name: IEEE CS Pro 2026
- Date: **26 July 2026 (Sunday)**, 9:00 AM – 1:00 PM
- Venue: Taj, Yeshwanthpur, Bengaluru
- RSVP: Google Form (same one shared earlier):
  https://docs.google.com/forms/d/e/1FAIpQLSd-1lFDmxRN6kpdxtygeRiKIvnoIlRM91UCz7HEKWPdsNh-pg/viewform
- Web/social: ieeecsbangalore.org · /ieeecsbc
- Sponsors: none for now.
- Vercel project name: **ieee-cs-pro-2026**.
- Footer contact: **+91 9608953402**.

## Proposed page structure (top → bottom)
1. **Hero** — IEEE logos lockup (4), "IEEE CS PRO 2026", hero line "Connecting Visionaries. Empowering Opportunities.", "By Invitation Only" badge, date/venue micro-line, primary CTA "Accept Invitation". Cinematic entrance + parallax.
2. **Invitation statement** — formal/prestigious copy ("It is our privilege to invite you...").
3. **Countdown** — live timer to 26 Jul 2026, 9:00 AM.
4. **Why attend** — value proposition.
5. **Program timeline** — 5 segments (Keynote · Panel · Fireside Chat · Startup Showcase · Networking & Fun), scroll-animated.
6. **Who's in the room** — audience categories.
7. **Event details** — date, time, Taj Yeshwanthpur Bengaluru; Add-to-calendar button; CTA repeat.
8. **Footer** — IEEE branding, ieeecsbangalore.org, /ieeecsbc socials, contact.

## Tech plan
- Vercel-ready static project (single-page scroll). Likely plain HTML/CSS/JS or a lightweight setup; no heavy framework needed.
- public/logos/ for the four IEEE logos.
- Light & refined palette: ivory canvas, deep navy text, gold accents.
- Rich/cinematic but performant motion (scroll reveals, parallax hero, animated countdown). Fully responsive.

## Design polish (decided)
- **Hero visual:** Animated gold constellation network (nodes + drifting lines) over ivory, behind title.
- **Typography:** Serif display headlines + clean sans body.
- **Intro:** Short (~1.5s) elegant IEEE CS Pro logo/title reveal, then dissolves into hero.
- **Link share:** Open Graph meta + branded preview card image (title, date, Bengaluru, by-invitation-only) for WhatsApp/LinkedIn.

## Pending before deploy
- All inputs resolved. Logos to be sourced online during build; verify they render before deploy.

## CHANGES from source material
- **Date is now 26 July 2026 (Sunday)** — supersedes the 28 June date on the flyer/slide. Update everywhere.
- Time: 9:00 AM – 1:00 PM.
- Venue: now confirmed — Taj, Yeshwanthpur, Bengaluru (was TBD on source material).
