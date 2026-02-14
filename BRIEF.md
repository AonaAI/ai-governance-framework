# AIGovernanceFramework.com — Project Brief

## What
An open, opinionated AI Governance Framework — a step-by-step playbook with maturity model, pillars, templates, and checklists. Becomes the canonical reference people link to for AI governance. Aona AI credited as maintainer/sponsor. Massive long-tail SEO.

## Tech Stack
- **Next.js 14** (App Router, static export), **Tailwind CSS**, **TypeScript**
- Firebase Hosting (`output: "export"`, `distDir: "out"`)

## Brand
- Dark purple `#11021d` / `#1a0533` / `#2d1054`, accent `#6412A6`, Manrope font
- Aona AI as credited maintainer — "An open framework maintained by Aona AI"

## Pages

### 1. Landing Page (`/`)
- Hero: "The Open AI Governance Framework — A Practical Guide to Enterprise AI Governance"
- Framework overview (visual pillars diagram)
- Maturity model preview
- CTA: "Explore the Framework" + "Download the Complete Guide"
- Aona AI sponsor section

### 2. Framework Overview (`/framework`)
- **5 Pillars** of AI Governance (each expandable):
  1. **Discovery & Inventory** — Know what AI is being used
  2. **Policy & Standards** — Define acceptable use
  3. **Risk Assessment** — Evaluate and mitigate risks
  4. **Controls & Guardrails** — Implement protections
  5. **Monitoring & Compliance** — Ongoing oversight
- Each pillar page with detailed guidance, checklists, templates

### 3. Maturity Model (`/maturity`)
- 5-level maturity model (Ad-hoc → Initial → Defined → Managed → Optimized)
- Self-assessment checklist for each level
- Visual progression chart
- Recommendations per level

### 4. Templates & Checklists (`/templates`)
- Downloadable resources (email-gated):
  - AI Acceptable Use Policy Template
  - AI Risk Assessment Checklist
  - AI Tool Evaluation Scorecard
  - AI Incident Response Plan
  - AI Governance Committee Charter
- Each with preview + download CTA

### 5. About (`/about`)
- Why this framework exists
- Maintained by Aona AI
- How to contribute
- Link to Aona AI platform

## Content
Write substantial, authoritative content for each pillar (500+ words each). Reference real frameworks (NIST AI RMF, ISO 42001, EU AI Act) but present Aona's practical approach. Make it genuinely useful — not just marketing fluff.

## SEO
- Meta: "Open AI Governance Framework — Enterprise AI Governance Playbook"
- Target: "AI governance framework", "AI governance maturity model", "AI governance checklist"
- Schema.org: WebSite + Article markup

## Firebase
- `firebase.json` → `out/`
- `.firebaserc` → project: `aona-ai-governance-fw`
