
## ProMinds Education Group — Full Site Plan

A premium, multi-page marketing site with a white-first, navy + gold aesthetic. UI-only (no backend yet); contact forms validate and show a success toast, with WhatsApp / email links wired to placeholders you can swap later.

## Brand & Design System

- **Palette (white primary)**
  - Background: pure white `oklch(1 0 0)`
  - Surface / soft gray sections: `oklch(0.985 0.005 250)`
  - Deep navy (text + accents): `oklch(0.22 0.05 260)`
  - Muted navy / body: `oklch(0.45 0.04 260)`
  - Gold accent: `oklch(0.78 0.13 85)`
  - Premium blue gradient: navy → soft cobalt for hero washes
- **Typography**: Playfair Display (display headlines) + Inter (UI/body). Large bold hero, generous tracking, big line-height.
- **Effects**: subtle glassmorphism cards, soft shadows, gold hairline dividers, light radial gradients, grain overlay on hero.
- **Motion**: Framer Motion — fade-up on scroll, parallax hero blobs, floating academic UI cards, hover lift on cards, animated stat counters, marquee logos, accordion FAQ, testimonial slider.
- **Dark mode**: light is default; dark toggle in navbar.

## Information Architecture (TanStack Router routes)

```
/                       Landing
/about                  About Us
/divisions/tutorials    Academic Tutorials (flagship)
/divisions/career       Career & Professional Services
/divisions/academic-support   Academic Document Support
/divisions/parents      Parent Education
/contact                Contact
/careers                Careers / Join Us (incl. "Become a Tutor")
```

Each route gets unique `head()` meta (title, description, og tags). Shared `Navbar` (floating, blurred, sticky) and `Footer` rendered in `__root.tsx`.

## Page Breakdown

### 1. Landing (`/`)
- **Hero**: massive headline "Building Academic Excellence for the Next Generation.", subheadline, 3 CTAs (Book Consultation, Explore Programs, Become a Tutor). Floating glass cards (grade dashboard, schedule chip, tutor avatar), animated gradient blobs, grain.
- **Trust strip**: animated counters (Students, Tutors, Avg Grade Lift, Parent Satisfaction) + faux institution logos marquee.
- **Divisions overview**: 4 premium cards linking to division pages.
- **Why ProMinds**: 6 feature tiles (vetted tutors, performance reports, parent dashboard, exam strategy, flexible scheduling, secure communication).
- **Parent Education preview** with link to parents page.
- **Pricing**: 3 elegant cards — Foundation ₦50,000+, Premium ₦100,000+, Elite ₦150,000+ (Premium highlighted with gold border).
- **Testimonials slider**: students + parents, star ratings, avatar.
- **Featured tutors strip** (3–4 cards) → link to team section.
- **FAQ accordion** (8 questions).
- **CTA band**: "Book a free consultation" with gradient + WhatsApp + form button.
- **Footer**: nav, socials, legal, newsletter input.

### 2. About (`/about`)
Mission, vision, story, values grid, leadership snapshot, milestones timeline, CTA band.

### 3. Division Pages
Each follows a shared template: hero (division-specific gradient), services grid, signature feature visual, metrics, testimonials slice, CTA.

- **Academic Tutorials (flagship)** — services list (Eng Math, Physics, Chemistry, Stats, WAEC/JAMB, Bootcamps, Revision, Small-Group Elite). Interactive subject cards, mock tutor-matching UI, schedule visual, "Book a Session" CTA.
- **Career & Professional Services** — CV/LinkedIn/NYSC/Internship/Scholarship/Cover Letter/Positioning. Before/after CV showcase (image mockups), consultation booking card, growth metrics.
- **Academic Document Support** — SIWES, research structuring, formatting, polishing, plagiarism cleanup, chapter guidance. Restrained, document-focused layout (no spammy vibes).
- **Parent Education** — emotional, premium, trust-led. Visuals of tutoring environments, parent dashboard mock, progress tracking, safety/professionalism pillars, parent testimonials.

### 4. Contact (`/contact`)
Split-screen: left = animated multi-step form (name, role, interest, message) with success toast; right = floating contact cards (WhatsApp, Email, Instagram, Phone, Telegram) with hover micro-interactions, response-time indicator ("Avg reply < 2 hours"), embedded FAQ accordion.

### 5. Careers (`/careers`)
Hero "Join the ProMinds team", culture pillars, open roles (Tutor, Academic Coordinator, Career Coach, Content Specialist), Become-a-Tutor application form (UI-only), benefits grid.

## Components (in `src/components/`)

- `layout/Navbar.tsx` (floating, blurred, theme toggle, mobile sheet menu)
- `layout/Footer.tsx`
- `layout/SectionHeading.tsx`
- `home/Hero.tsx`, `home/StatsStrip.tsx`, `home/DivisionsGrid.tsx`, `home/WhyUs.tsx`, `home/PricingCards.tsx`, `home/TestimonialsSlider.tsx`, `home/TutorsStrip.tsx`, `home/FaqAccordion.tsx`, `home/CtaBand.tsx`
- `divisions/DivisionHero.tsx`, `divisions/ServiceGrid.tsx`, `divisions/BeforeAfterCV.tsx`, `divisions/ParentTrustSection.tsx`
- `contact/ContactForm.tsx`, `contact/ContactCards.tsx`
- `careers/RolesList.tsx`, `careers/TutorApplicationForm.tsx`
- `shared/AnimatedCounter.tsx`, `shared/GradientBlob.tsx`, `shared/GlassCard.tsx`, `shared/ThemeToggle.tsx`

## Technical Notes

- Framework stays as the project's TanStack Start + React 19 + Vite + Tailwind v4 (the brief mentioned Next.js, but we'll use the existing stack for compatibility — same look and feel, fully SSR-ready).
- Add deps: `framer-motion`, `lucide-react` (likely already), `@radix-ui/react-accordion` (via shadcn), `embla-carousel-react` for testimonials.
- Fonts via Google Fonts `<link>` in `__root.tsx` head.
- Theme tokens redefined in `src/styles.css` (oklch) — white primary surface, navy ink, gold accent, gradient variables, shadow variables.
- Theme toggle: simple `class="dark"` on `<html>`, persisted in `localStorage`.
- All images: AI-generated premium hero/parent/tutor visuals + SVG illustrations for dashboards/cards.
- SEO: per-route `head()` with title/description/og; semantic H1 per page; alt text on all images.
- Placeholders for swap-later: logo wordmark "ProMinds", WhatsApp `+234XXXXXXXXXX`, email `hello@prominds.education`, IG/Telegram handles.

## Out of scope (this pass)

- Real backend / form submission, auth, payments, CMS, blog, dashboards.
- Real testimonials/photos (using tasteful AI/placeholder content you can replace).
