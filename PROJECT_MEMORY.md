# IEEE CS Pro 2026 — Project Memory & Reference

> Living reference for the **event-planning workstream** (doc + registration forms + banners).
> This file is appended to as work progresses. Last updated: **2026-06-22**.
> Separate workstream: the digital invitation **website** (`index.html` / `styles.css` / `script.js`).

---

## 1. Event facts (current)

| Field | Value |
|---|---|
| Name | **IEEE CS Pro 2026** ("Event Concept & Execution Plan") |
| Event theme | **CS Pro Conclave 2026 — "Leaders. Learners. Impact."** (finalized 2026-06-23) |
| Date | **Sunday, 26 July 2026**, 9:00 AM – 1:00 PM, then lunch |
| Venue | **TBD** (was tentatively Taj Yeshwanthpur; now open) |
| Access | By Invitation Only / Invite-based |
| Organiser | IEEE Computer Society – Bangalore Chapter |
| In association with | IEEE Bangalore Section · IEEE Computer Society 80 Years Celebration |
| Contact | ieeecspro@gmail.com · +91 96089 53402 |
| Web / Social | ieeecsbangalore.org · Instagram @ieeecsbc |

**Audience numbers:** Leaders 20–25 · Professionals 40–50 · ~10 IEEE ExCom + ~10 volunteers.

---

## 2. Event structure (current concept — overhauled 2026-06-22)

Two sessions in one day, then an 80-Years celebration after lunch.

**Session 1 — Leadership Round Table Conference**
- 9:00 AM — Arrival, registration, IEEE Membership Desk, refreshments, ID cards & kits
- 9:30–10:00 — Inaugural Session (inauguration, welcome, remarks, round-table briefing)
- 10:00–10:45 — **THREE PARALLEL round tables**:
  - **RT1 — Driving Organisational Transformation** (actions/changes/outcomes)
  - **RT2 — Building the AI-Ready Workforce Together** (academia–industry, internships, curriculum, hiring)
  - **RT3 — Beyond the Machine** (human-centred, ethical, purpose-driven innovation)
- 10:45–11:05 — Rapid Fire Leadership Exchange
- 11:05–11:20 — Leadership Insights Presentation (1 leader per table, 3×5 min)
- 11:20–11:30 — Moderator Summary & Group Photograph

**Tea Break & Transition** — 11:30–11:50 (professional entry, IEEE Membership Drive)

**Session 2 — CS Professional Connect** (renamed 2026-06-22; was "Industry–Academia Networking Forum")
- 11:50–12:00 — Opening Address (ExCom) — "Navigating a Changing World Together"
- 12:00–12:10 — Ice Breakers & Introductions
- 12:10–12:50 — Meet & Greet Networking Session
- 12:50–1:00 — Closing Remarks & Acknowledgements
- 1:00 onwards — Lunch & informal networking

**Post-Lunch** — venue/stage transitions to the **IEEE Computer Society 80 Years Celebration**.

Other plan sections: Registration Strategy (two forms), Event Operations (Registration + Membership desks, incentives), Identity Cards (colour-coded badges), Security & Logistics (goodie storage/inventory), Website & Invitation experience, Suggested Leaders (22-name working list).

---

## 3. Files & deliverables (all in `D:\projects\claude\CSPro`)

| File | Purpose |
|---|---|
| `IEEE_CS_Pro_2026_Event_Plan.docx` | The event plan doc (14 sections, dark-luxe styled). |
| `build_event_plan.py` | Generator for the .docx (python-docx). Edit + rerun to update. |
| `registration_forms.gs` | Google Apps Script that builds/maintains both registration forms. |
| `generate_form_banner.py` | Pillow script that renders both form header banners. |
| `assets/leaders-form-header.png` | Form 1 banner (1600×400). |
| `assets/professionals-form-header.png` | Form 2 banner (1600×400). |

**Desktop working copies** (`C:\Users\imamf\OneDrive\Desktop\`): `IEEE_CS_Pro_2026_Event_Plan.docx`, `IEEE_CS_Pro_2026_registration_forms.gs`, `IEEE_CS_Pro_2026_leaders_form_header.png`, `IEEE_CS_Pro_2026_professionals_form_header.png`. `build_event_plan.py` auto-copies the docx to Desktop (skips if the file is open/locked in Word → then copy manually).

---

## 4. The event-plan doc — how to edit

- All content lives in `build_event_plan.py`. Edit the Python, then run:
  `cd D:\projects\claude\CSPro && python build_event_plan.py`
- It saves to the project path **and** copies to the Desktop.
- Styling helpers: `h1/h2/h3`, `body`, `bullet`, `make_table`, `add_hyperlink`, `shade`. Theme: NAVY `#151B2E`, GOLD `#B0882C`, GREY `#555B66`.
- §9 contains the **live form links** as clickable hyperlinks.

---

## 5. Registration forms (Google Forms via Apps Script)

**Two separate forms** (not a branching single form):
- **Form 1 — Leadership Round Table** (invited leaders)
  - Edit: `https://docs.google.com/forms/d/1sqoDtrqLN3npFUqAUVstvyE9JDgisUnF5SLZx-vBQyQ/edit`
  - Live: `https://docs.google.com/forms/d/e/1FAIpQLSexJ1lUZZT_RarcPOsKUfdkxXlZBlsh_V__29rsmI6FnUFO_A/viewform`
- **Form 2 — CS Professional Connect** (HR/TPO/placement/academia/industry pros)
  - Edit: `https://docs.google.com/forms/d/125kWBxDp5Wb9Qnq-oGKcHQPevquZYb-zCAPnVYAbdWI/edit`
  - Live: `https://docs.google.com/forms/d/e/1FAIpQLSd686aQcAj5rE7ZykW77mTAeotlMuyp3w0Cfn-kW6d8lr_yZw/viewform`

### KEY WORKFLOW — edit in place, links never change
`registration_forms.gs` opens each form **by ID** (`FormApp.openById`), clears its questions, and rebuilds them. So the Edit/Live URLs stay constant no matter how many times we revise — safe to share the live links widely.
- Form IDs are hard-coded in the script (`FORM_ID.leaders`, `FORM_ID.professionals`).
- **Entry functions:** `updateForms` (both) · `updateProfessionalsForm` · `updateLeadersForm`.
- `createForms` = first-time-only; it makes **NEW** forms with NEW links — **do not run for edits**.
- To change a form: edit `buildLeaders` / `buildProfessionals` in the script → at script.google.com replace code, Save → Run the relevant `update…` function → check Execution log.
- ⚠️ Rebuild **clears existing questions** → do edits **before** responses start arriving (orphans old response data otherwise).

### Form content (premium, guided multi-step)
- **Form 1:** intro → *About you* → *At the round table* (which RT + optional perspective) → *A few final details* (email/mobile/dietary/updates).
- **Form 2:** intro → *About you* → *Staying in touch* → *IEEE membership* with **BRANCHING** on "Are you a current IEEE member?":
  - **Yes** → membership number → submit
  - **No** → "Would you like to join IEEE?" → submit
  - (Branch implemented with PageBreakItems; `interestPage.setGoToPage(SUBMIT)` makes the members' page submit so members never see the interest question.)

### Forms theme (one-time, manual — NOT script-settable)
Google does not expose theme via Apps Script. Set **once** in the editor (🎨 palette); it **persists** across script rebuilds:
- **Header** → upload the matching banner PNG.
- **Color** → custom **`#B58E38`** (or `#B0882C`), lightest background.
- **Font** → Header `Roboto Serif` (newer UI) or `Decorative` (older style set). "Formal" is not available in all accounts.

---

## 6. Banners

`generate_form_banner.py` (Pillow) renders both, matching the website/OG identity: navy gradient + gold constellation + serif title (Georgia) + hairline gold frame, 1600×400, rendered 2x then downscaled.
- **Form 1:** "Leadership Round Table" · sub "Sunday, 26 July 2026 · By Invitation Only" · bottom "AN EXCLUSIVE GATHERING OF CS PROFESSIONALS, FOUNDERS & INDUSTRY LEADERS" (academia removed per user).
- **Form 2:** "CS Professional Connect" · sub "Sunday, 26 July 2026 · Networking & IEEE Membership Drive" · bottom "CONNECTING HR, PLACEMENT, ACADEMIA & INDUSTRY WITH THE IEEE COMMUNITY".
- To edit: change the `build_banner(...)` text args → `python generate_form_banner.py` → re-upload in the palette.

---

## 7. Status

**Done**
- Event-plan doc overhauled to the new concept; live form links embedded (§9).
- Both Google Forms built, live, edited-in-place workflow established, branching on Form 2.
- Both forms upgraded to premium guided content.
- Matching dark-luxe banners for both forms.

**Pending / open**
- User to run `updateForms` and apply the one-time theme (banner/color/font) to both forms (Form 1 styling reportedly done; Form 2 to do).
- TBD: venue, round-table moderator, dignitaries/Guests of Honour, speakers, budget (Ambika ma'am), AV (Faisal). (Event theme now finalized — see facts table.)
- Not yet built: responses→Google Sheet, QR codes, the two flyers, Suggested-Leaders outreach.

---

## 8. Change log

- **2026-06-23 (website — separate workstream, migrated to Next.js)**
  - **Stack migration:** the static `index.html`/`styles.css`/`script.js` invite was rebuilt as a **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4** app. Old files archived in `legacy/`. Assets moved to `public/assets/`. Run with `npm run dev` (port 3000) / `npm run build`.
  - **Two track pages** (per the plan's two audiences), plus a minimal chooser landing:
    - `/` — chooser: logos, By-Invitation badge, countdown, two track cards.
    - `/leadership-round-table` — Session 1 content + three round tables (teaser) + leaders profile + **Form 1**.
    - `/cs-professional-connect` — Session 2 content + what-to-expect + professionals profile + **Form 2**.
  - **`lib/event.ts`** is the single source of truth (facts, both form URLs, calendar builders). `SITE_URL` placeholder = `https://ieee-cs-pro-2026.vercel.app` (update to real domain on deploy — drives `metadataBase`/canonicals/OG).
  - **Proper metadata:** root defaults + per-page title/description/canonical/OG + `sitemap.ts` + `robots.ts`. Security headers ported to `next.config.ts`.
  - **Design refine (anti "AI-generated"):** dropped ✦ sparkle badges, unified the 8 rainbow room-card medallions to a single gold treatment, grounded the copy, added a subtle grain overlay; carried the calmed constellation (now a client component). Venue shows "Bengaluru · to be announced"; Sensors Council not referenced.
  - **Verified:** `npm run build` clean (all routes static, TS passes); dev server returns 200 on all 3 routes with distinct titles/OG/canonical; correct per-track form links; headers + robots + sitemap serving.

- **2026-06-23**
  - **Event theme finalized:** **CS Pro Conclave 2026 — "Leaders. Learners. Impact."** (was TBD). Updated the doc facts table.
  - Subtitle/tagline changed to **"An exclusive leadership & networking forum for CS Professionals."** (was "…bridging industry, startups and academia.").
  - Regenerated `IEEE_CS_Pro_2026_Event_Plan.docx` + Desktop copy. (User pasted the refined plan; rest of content already matched the doc.)

- **2026-06-22**
  - Complete overhaul of the event-plan doc to the new concept (3 parallel round tables, 80-Years post-lunch, identity cards, security/logistics, suggested leaders). Theme & venue set to TBD.
  - Renamed Session 2 "Industry–Academia Networking Forum" → **CS Professional Connect**.
  - Built two Google Forms via Apps Script; switched to **edit-in-place by ID** so links are permanent; added membership **branching** to Form 2.
  - Made both forms **premium** (guided multi-step, elegant copy).
  - Generated matching **dark-luxe banners** for both forms; removed "academia" from Form 1 banner bottom line.
  - Embedded live form links into the doc (§9) as hyperlinks.
  - Created this `PROJECT_MEMORY.md`.
