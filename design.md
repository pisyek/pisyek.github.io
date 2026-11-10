# Landing Page — Design & Build Plan

**Subject:** Ts. Mohd Hafiz Suhaimi — personal landing page
**Date:** 10 November 2026
**Location:** `pisyek.github.io` (GitHub Pages)
**Source data:** `profile-linkedin.pdf`, `img/avatar.png`, pisyek.com, LinkedIn

---

## 1. Positioning

**One-line:** I build reliable software — and the engineers who keep it running.

The page is a hybrid: it earns credibility as an executive portfolio (experience, outcomes, credentials) and converts interest into a conversation (consulting, training, custom systems). The differentiator is the combination of enterprise engineering, teaching, and 15+ years of shipping software.

**Primary audience:** companies needing Laravel/DevOps delivery or architecture help, and teams or individuals wanting practical technical training.

**Primary CTA:** Connect on LinkedIn → https://www.linkedin.com/in/hafizsuhaimi/
**Secondary CTA:** Start a conversation → mailto:hafizsuhaimi@gmail.com

### Content notes

- The PDF lists **Enterprise Architecture / TOGAF ADM** as skills and **Professional Technologist** as a certification. It does **not** list a "Certified TOGAF Practitioner" credential, so TOGAF ADM is presented as a skill, not a certification.
- PETRONAS (2012–2017) was an HR role and is condensed in the timeline.
- Pisyek Studios (2011–present) is shown as a parallel, ongoing practice alongside full-time roles.
- Metrics come directly from the profile: 3 days → 1 day bugfix/review cycles (≈67% faster), API response from minutes to under one second, 100+ developers trained since 2021.

---

## 2. Visual direction — "Emerald & Paper"

Petronas-inspired but restrained and consultant-grade. White paper base, deep emerald used as two full-bleed bands for rhythm, bright Petronas teal reserved for small accents.

### Palette

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#07231D` | Headings, primary text |
| `--body` | `#3D5A52` | Body copy |
| `--emerald-950` | `#032B23` | Contact panel, impact band |
| `--emerald-700` | `#046B57` | Primary buttons, links, AA text |
| `--emerald-500` | `#00A07C` | Icons, accents, hover states |
| `--petronas` | `#00A19C` | Decorative gradients only |
| `--mint-200` | `#BFE8D8` | Rules, highlights |
| `--mint-100` | `#E4F4EC` | Chips, badges, soft fills |
| `--mint-50` | `#F3FAF6` | Alternate section background |
| `--paper` | `#FFFFFF` | Base background |
| `--line` | `#D9E8E1` | Borders, dividers |

Small text uses emerald-700 or darker to keep WCAG AA contrast. Bright emerald is for fills, icons and thin accents only.

### Typography

- **Display:** *Instrument Serif* — editorial and confident. H1, section titles, oversized numbers. One italic accent word per heading.
- **Body/UI:** *Inter* — clean and technical.
- Fallbacks: Georgia / Segoe UI so the page degrades gracefully.
- Scale with `clamp()`: H1 ~3.5–5rem, H2 ~2.25–3rem, body 17px, line-height 1.7.

### Art direction

- White base with a fine 1px grid or dot texture at 3–4% opacity in the hero (engineering signal, not a gradient blob).
- Portrait in a tall 4:5 frame with an **arched top** and a thin offset emerald outline. The neutral grey studio background is kept.
- Cards: 16px radius, 1px border, hover lift 3px with emerald border. Soft shadows only.
- Metrics set large in the serif face.

---

## 3. Page structure

### Nav

Monogram `MHS` + name. Links: About · Expertise · Experience · Training · Contact. Compact **Let's talk** button → LinkedIn.

Sticky, transparent over the hero, solid white with a hairline after scroll. Mobile: full-width dropdown with `aria-expanded`, closes on link click and Escape.

### 01 — Hero (split 7/5)

- Eyebrow: *Senior Software Engineer · Technical Trainer · Cyberjaya, Malaysia*
- H1: "I build reliable software — and the teams who keep it running."
- Sub: 15 years across Laravel, DevOps and enterprise delivery. Ships at Ideagen; trains developers through Pisyek Studios.
- CTAs: **Connect on LinkedIn** (solid emerald) + **View experience** (ghost, scrolls to timeline)
- Micro-proof: `15+ years` · `100+ developers trained` · `MSc, UiTM`
- Portrait with availability badge: *Open to consulting & training*

### 02 — Credibility strip

Typographic wordmarks on a hairline band: Ideagen · RunCloud · Experian · Sunway · PETRONAS · UTP / UiTM. Muted ink, emerald on hover. No invented logos.

### 03 — About

Serif section title + two short paragraphs on craft, reliability and teaching. Right side: fact card — Based in Cyberjaya; Senior SWE at Ideagen; Founder of Pisyek Studios since 2011; MSc IT (UiTM); author; languages.

### 04 — What I do (3 cards)

1. **Enterprise engineering** — Laravel/PHP systems, API performance, legacy modernisation, CI/CD and automated testing.
2. **Technical training** — Hands-on Laravel, Docker, Git, testing and CI/CD; 100+ participants since 2021; modules drawn from MSc research.
3. **Architecture & advisory** — Enterprise architecture (TOGAF ADM), system design, delivery reviews, mentoring.

### 05 — Selected impact (deep emerald band)

- `67%` faster bugfix and review cycles (3 days → 1 day; Claude agent + Atlassian/GitHub MCP)
- `<1s` API response, down from several minutes
- `100+` developers trained since 2021
- `15+` years shipping software

### 06 — Experience

Vertical emerald-rail timeline, newest first. Each entry: role, company, dates, one outcome-focused line.

- Ideagen — Senior Software Engineer (Jul 2024–present)
- Pisyek Studios — Founder & Principal Consultant (Nov 2011–present, parallel)
- RunCloud — Senior Software Engineer (Feb 2022–Jun 2024)
- Experian — PHP Developer (Nov 2019–Jan 2022)
- Sunway Group — Senior Software Engineer (May 2017–Nov 2019)
- PETRONAS — HR roles (2012–2017, condensed)
- Terato Tech — Web Developer (Jun 2010–Jan 2011)

Current roles get a small "Current" pill.

### 07 — Training & writing

Feature card for *Belajar Laravel Melalui Contoh* with a CSS-built book cover (no image needed), workshop list, and the 100+ trained proof. Link to pisyek.com.

Below: grouped skill chips — Languages & frameworks, Data, DevOps & cloud, Architecture, AI & tooling — plus certification cards (Professional Technologist, Claude 101, AI Capabilities and Limitations, AI Essentials for Frontliners).

### 08 — Contact (deep emerald panel)

Oversized serif: "Let's build something reliable." Large LinkedIn button, email as a smaller secondary action with a copy-email affordance, pisyek.com, location, availability note.

### Footer

Name, short nav, "Designed and built by hand", year, back-to-top. `profile-linkedin.pdf` linked quietly as "Download CV".

---

## 4. Interaction & motion

- Nav solidifies on scroll; active section highlighted via scroll-spy.
- Mobile menu accessible and dismissible.
- Scroll reveal: 12px rise + fade, staggered, via IntersectionObserver.
- Portrait and cards settle in on load; hover lift on cards.
- Copy-email button with "Copied" feedback (progressive enhancement).
- All motion disabled under `prefers-reduced-motion`. No parallax or carousels.

---

## 5. Technical plan

```
pisyek.github.io/
├── index.html           semantic single page, meta + JSON-LD Person
├── style.css            tokens → base → layout → components → responsive → print
├── script.js            nav, mobile menu, scrollspy, reveal, copy email (~80 lines)
├── img/
│   ├── avatar.png       existing, kept as fallback
│   ├── avatar.webp      optimized ~120–200 KB
│   └── avatar-800.webp  responsive variant
├── img/favicon.svg      emerald "MHS" monogram
├── profile-linkedin.pdf linked as "Download CV"
├── design.md            this document
└── README.md            short project note
```

- Plain HTML + CSS + vanilla JS. No frameworks, no build step.
- Google Fonts with `preconnect` and `display=swap`; system fallbacks.
- Optimize the 1.7 MB portrait to WebP; explicit `width` / `height`; `fetchpriority="high"`; descriptive alt text.
- SEO: title, description, canonical, Open Graph/Twitter card using the portrait, `Person` JSON-LD (`jobTitle`, `worksFor`, `alumniOf`, `sameAs`, `knowsAbout`).
- Light theme only, by design. Deep emerald bands provide contrast without a toggle.
- Responsive breakpoints: 1024 / 768 / 520. Hero stacks, impact band 2×2, timeline single rail, CTAs full-width on small screens. No horizontal scroll at 320px.
- Accessibility: skip link, landmarks, visible `:focus-visible`, semantic lists, AA contrast, labelled controls, reduced-motion support.
- Print stylesheet for a clean one-page summary.

---

## 6. Build order

1. Asset prep — optimize portrait, create favicon.
2. Content + semantic HTML skeleton.
3. Design tokens and layout CSS.
4. Section-by-section styling.
5. Interactions and responsive polish.
6. QA pass at 1440 / 1024 / 768 / 375.
7. Commit and push to GitHub Pages — only with approval.

---

## 7. Verification checklist

- Lighthouse Performance / Accessibility / SEO ≥ 95 on mobile.
- No layout shift; portrait loads eagerly; page weight under ~300 KB excluding fonts.
- Links correct: LinkedIn, pisyek.com, `mailto:`, CV PDF.
- Mobile menu keyboard-operable; focus never trapped.
- No horizontal overflow at 320–1440px.
- Print stylesheet produces a clean one-page summary.
