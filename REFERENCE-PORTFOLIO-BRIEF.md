# Moshiur Rahman Portfolio — Reference Design Brief

## Goal
Bring the existing portfolio closer to the supplied two-theme mobile reference: dark and light glassmorphism, blue-violet gradients, portrait hero, concise stat strip, service tiles, featured project cards, and a fixed bottom navigation dock.

## Navigation rules (highest priority)
- The primary navigation is a bottom-only dock. Never render primary links in a top horizontal bar or a side navigation/sidebar.
- On mobile, keep the dock fixed to the bottom edge and account for `env(safe-area-inset-bottom)`.
- Exactly four primary destinations: Home, About, Projects, Contact.
- Each destination has an icon over its label, a clearly highlighted active state, accessible focus/aria-current, and smooth transitions.
- Add sufficient page bottom padding so the dock never obscures content.
- Theme switching may live inside the bottom dock; do not relocate navigation when themes change.

## Visual direction
- Dark mode: near-black/navy background, translucent deep-navy cards, white headings, subdued blue-gray body text, cyan/blue/violet gradient accents, subtle soft glows.
- Light mode: soft off-white background, translucent white cards, dark navy headings, muted slate text, pale blue/lavender gradients and soft shadows.
- Glass surfaces use restrained backdrop blur, thin borders, layered transparency and consistent rounded corners.
- Use modern sans typography, high contrast, mobile-first spacing, and responsive type sizes.
- Keep both themes structurally identical.

## Homepage composition
1. Compact brand mark/name at the top; no primary navigation links in the header.
2. Hero: “Hello, I'm 👋”, “Moshiur Rahman”, role “A Creative Web Developer & UI/UX Designer”, concise introduction, portrait with a blue-violet ring, and “Available for Freelance” badge when appropriate.
3. Primary “View My Work” CTA that navigates to Projects, plus “Watch Intro” that opens a real modal/placeholder rather than a dead link.
4. Three-column stats card: 20+ Projects Completed, 10+ Happy Clients, 3+ Years of Experience. Treat these as editable demo copy.
5. “What I Do” service cards for Web Development, UI/UX Design and Branding.
6. “Featured Works” cards for Modern Website Design and Dashboard UI, with preview artwork, category labels and working detail views.
7. About, Projects and Contact destinations reachable via bottom navigation. Project category filters must work. Contact form validates fields and uses a configured destination/backend only; do not invent contact details.

## Engineering checks
- Preserve the existing stack and established routes.
- Validate widths from 320px through desktop; no horizontal overflow.
- Confirm theme toggle persists and updates all major surfaces.
- Confirm active nav states, project filters, project detail modal, contact form validation, keyboard operation, reduced-motion preferences and safe-area spacing.
- Do not claim pixel-perfect matching unless the running UI has been visually compared to the supplied reference image.
- Do not fabricate a portrait of the actual user, client logos, employment history, credentials, email address or social links.
