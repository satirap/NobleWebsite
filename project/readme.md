# The Noble — Design System

A brand & UI design system for **The Noble Co., Ltd. (บริษัท เดอะ โนเบิล จำกัด)** —
a Bangkok-based IT **System Integration (SI)** company. The Noble designs,
installs, and maintains end-to-end IT for businesses: computers & servers,
networks, CCTV, access control, monthly maintenance (MA), on-site IT support,
and IT consulting. Bilingual TH/EN, 13+ years in business. Brand line: **"Glow together."**

## Sources
- **Website:** https://thenoble.co.th/ (TH: `/th/`, EN: `/en/`) — primary reference for copy, services, and structure.
- **Logo:** `uploads/Master Logo.jpg` → copied to `assets/logo-noble-master.jpg`; a background-knockout version is at `assets/logo-noble-mark.png`.
- No codebase or Figma was provided; visuals are derived from the live site + logo. The site itself ("ดูสวยล้ำสมัย" / make it look modern & futuristic) is the design brief.

---

## CONTENT FUNDAMENTALS
**Languages.** Primary copy is **Thai**; English runs in parallel (the site has a TH/EN toggle). Write both; keep them equivalent, not literal.

**Voice.** Confident, reassuring, plain. The company speaks as **"we" (เรา)** and addresses the reader as **"you/your business" (คุณ / ธุรกิจของคุณ)**. It sells *peace of mind* — "let us run your IT so you can focus on your core business."

**Tone & vibe.** Professional, trustworthy, technically credible — never hypey. Proof over adjectives: years (13+), uptime, response time, cost saving (40–60% vs in-house). Short, declarative sentences.

**Casing.** Thai has no case; English headings are **sentence case**, not Title Case. Product/service names keep their canonical capitalisation: *Computer & Server, Network Solution, CCTV System, Access Control, System Maintenance (MA), IT Support, System Integration*. Acronyms upper-case: **SI, MA, IT, NAS, LAN, NVR, DVR, PDPA**.

**Eyebrows/labels.** Short section labels are common ("บริการของเรา", "ทำไมต้อง The Noble"). In English render them UPPERCASE with letter-spacing.

**Numbers & specs.** Metrics are a core rhetorical device — set them in the **mono** face. Examples from the brand: `13+ ปี`, `99.9%`, `24/7`, `On-site + Remote`, `40-60%`.

**Emoji.** **None.** This is a B2B/enterprise IT brand — emoji are off-brand. Use Lucide icons instead.

**Example copy (real):**
- Tagline: *"Glow together"*
- Hero (TH): *"ออกแบบและดูแลระบบไอทีครบวงจรสำหรับธุรกิจของคุณ"*
- Value line (TH): *"เราช่วยให้องค์กรของคุณโฟกัสกับธุรกิจหลักได้เต็มที่"*
- CTA: *"ขอใบเสนอราคา" / "ติดต่อเราวันนี้"*

---

## VISUAL FOUNDATIONS
**Color.** Two brand colors pulled straight from the logo:
- **Royal blue `--blue-700` #0A51A1** — primary. Used for CTAs, links, brand fills, the dark hero base (`--ink-900`).
- **Signal red `--red-600` #ED1C24** — accent. Used *sparingly* — eyebrows, "NEW" tags, alerts, the logo mark. Never large fills.
- **Cool slate neutrals** (`--ink-*`) give the system a precise, technical feel. Page background is `--ink-50` #F6F9FC; cards are white.

**Type.** Display/headings = **Anuphan** (modern geometric Thai+Latin, 600/700, tight tracking). Body/UI = **IBM Plex Sans Thai** (400/500/600). Technical metrics/specs = **IBM Plex Mono**. Display sizes are fluid (`clamp`). Headings use negative letter-spacing; eyebrows use wide tracking + uppercase.

**Spacing & layout.** 8px grid (4px half-step). Container max `1200–1320px`, fluid side padding, generous `--section-gap` (4–7.5rem) between sections. Content is grid/flex with `gap` — never inline-flow.

**Backgrounds.** Two register: **light** (white / `--ink-50`) for most content, and **dark** (`--ink-900`) "command-center" bands for hero, Why-us, and the footer. Dark bands carry a **radial blue glow** (`--gradient-glow`) and a faint **technical grid texture** (CSS line-gradients, masked to fade). The signature surface is `--gradient-brand` (blue 700→500). No photography is bundled (none was provided); imagery slots use placeholders.

**Corners.** Confident, modern rounding. Cards `--radius-lg` (16px); large panels `--radius-xl/2xl` (24/32px); **buttons and badges are full pills** (`--radius-pill`).

**Cards.** White, `--radius-lg`, **hairline inset ring** + soft **cool-tinted shadow** (`--shadow-sm`). Optional brand **top keyline** (`accent="blue"|"red"`). On hover (when `hoverable`): lift `translateY(-3px)` + `--shadow-lg`.

**Shadows.** Cool blue-slate tint, soft and layered (`--shadow-xs…xl`). Special **glow** shadows (`--shadow-glow-blue/red`) for primary CTAs and gradient tiles only.

**Borders.** Hairline `--ink-150/200`; focus ring `0 0 0 3px rgba(26,114,214,.35)`.

**Motion.** Quick and precise — **no bounce**. `--ease-out` cubic-bezier(.22,1,.36,1), 120–320ms. Hovers shift background + lift; press states **shrink slightly** (`scale(.99)` / `translateY(1px)`). Arrows nudge right on hover. Respect `prefers-reduced-motion`.

**Transparency & blur.** Sticky header is **glass** — translucent white + `backdrop-filter: saturate(160%) blur(14px)`, hairline border appears on scroll. Dark-band cards use low-opacity white fills (`rgba(255,255,255,.04–.08)`) with 1px translucent borders.

**Imagery vibe.** Cool, clean, corporate-tech — server rooms, networks, blue-lit hardware, CCTV, and on-site engineers. Crisp, not warm/grainy. The website UI kit ships a curated set of **free Unsplash photos** (commercial-use, no attribution) wired through `ui_kits/website/photos.js` — service-card thumbnails, a hero backdrop (low-opacity over the glow), and a work-showcase band. Swap a photo by changing its ID in that registry. See the **Imagery** card.

---

## ICONOGRAPHY
- **System:** [**Lucide**](https://lucide.dev) (CDN: `unpkg.com/lucide`), 1.5–2px stroke, rounded — matches the brand's clean technical feel. No brand icon font or SVG sprite was available from the site, so Lucide is a **substitution** (flagged). Swap for the official set if/when provided.
- **Usage:** outline icons inside gradient tiles for services (`server`, `network`, `cctv`, `scan-face`, `shield-check`, `headset`, `lightbulb`); inline 14–18px icons in metrics, contact rows, and buttons.
- **Emoji:** never. **Unicode glyphs:** only the arrow `→` as a CTA affordance.
- **Logo:** `assets/logo-noble-mark.png` (transparent) on light or dark; `assets/logo-noble-master.jpg` is the original.
- **Photography:** curated free **Unsplash** images (commercial-use, no attribution) referenced by URL via `ui_kits/website/photos.js`. They load from the Unsplash CDN, so the kit isn't fully offline; download and self-host into `assets/photos/` if you need that.

---

## Index / manifest
**Root**
- `styles.css` — global entry (import this); `@import`s the token files below.
- `readme.md` — this guide. `SKILL.md` — portable Agent-Skill wrapper.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `assets/` — `logo-noble-master.jpg`, `logo-noble-mark.png`.
- `_ds_bundle.js`, `_ds_manifest.json` — generated by the compiler (do not edit).

**Components** (`window.TheNobleDesignSystem_288042`)
- `components/core/` — `Button`, `Badge`, `Card`, `Input`.
- `components/marketing/` — `ServiceCard`, `StatBlock`, `SectionHeading`.

**UI kits**
- `ui_kits/website/` — interactive, bilingual recreation of the marketing site (`index.html` + `Header/Hero/Sections/Contact` JSX). See its `README.md`.

**Foundations** (`guidelines/cards/`) — specimen cards shown in the Design System tab: Colors (blue, red, neutrals, status, gradients), Type (display, headings, body, mono), Spacing (scale, radii, elevation), Brand (logo, tagline).

---

## CAVEATS
- **Fonts** load from the **Google Fonts CDN** (Anuphan, IBM Plex Sans Thai, IBM Plex Mono) — chosen as strong, on-brand bilingual matches since no brand font files were provided. Replace `tokens/fonts.css` with self-hosted `@font-face` if you have licensed binaries.
- **Icons** are Lucide (substitution) — see ICONOGRAPHY.
- No photography/illustration was available from the brand; the system uses gradient/glow/grid backgrounds and a curated set of **free Unsplash stock photos** (referenced by URL in `ui_kits/website/photos.js`). Replace these with The Noble's own project photos when available.
