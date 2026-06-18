# The Noble — Website UI Kit

A high-fidelity, interactive recreation of The Noble Co., Ltd. marketing site
(`thenoble.co.th`), rebuilt on the design-system tokens and components.

## Run
Open `index.html`. The page is a single scrolling homepage with smooth-scroll
nav. It is **bilingual** — the TH/EN toggle in the header swaps all copy.

## Screens / sections
- **Header** (`Header.jsx`) — glass sticky bar, logo, nav, TH/EN toggle, quote CTA.
- **Hero** (`Hero.jsx`) — dark hero with brand glow, grid texture, headline,
  stat row, and a live "NOC monitor" mock (servers / network / CCTV / MA).
- **Sections** (`Sections.jsx`) — services grid (`ServiceCard`), dark "Why The
  Noble" band, and a gradient CTA band.
- **Contact** (`Contact.jsx`) — contact details + a working (fake) quote form
  with a success state; plus the site footer.
- **Clients & Works** (`Clients.jsx`) — “ลูกค้าอ้างอิง / Trusted by” logo wall grouped by
  ภาครัฐ / ภาคเอกชน / technology partners, plus the closing CTA band. Seeded
  with real tech partners (Cisco, Ubiquiti, HP, Microsoft); add your own clients
  + logos via the CMS. (The live site's ผลงาน/พันธมิตร pages are still placeholders,
  so there were no real client names/logos to import.)
- **Content CMS** (`CMS.jsx` + `store.js`) — a floating “จัดการเนื้อหา / Manage
  content” panel that edits **every section**: Brand, Hero, Services (add/remove),
  Stats (add/remove), Clients (add/remove, sector, logo), Showcase, Contact —
  text **and** images (library / URL / upload). Edits target the current TH/EN
  language. Everything persists in `localStorage` (`noble_cms_content`) and
  survives reload; “Reset all” restores defaults. `store.js` holds the defaults
  + merge logic; the site reads from this single content object.

## Composition
Screens compose the design-system primitives from `window.TheNobleDesignSystem_288042`
(`Button`, `Badge`, `Card`, `Input`, `ServiceCard`, `StatBlock`, `SectionHeading`).
Default content lives in `content.js`; the editable runtime store is `store.js`;
curated imagery in `photos.js`. Icons are [Lucide](https://lucide.dev) via CDN.

## Notes
- Icons render via a React-safe wrapper (`window.NobleIco` in `photos.js`) so
  lucide's `<i>`→`<svg>` swap never collides with React re-renders.
- This is a cosmetic recreation for prototyping — the quote form doesn't submit
  anywhere; the CMS persists only in the local browser.
- Sections `about` / `portfolio` are mapped to the Why-us and CTA bands as
  scroll targets; the real site has dedicated pages we did not rebuild.
