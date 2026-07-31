# Little Lemon — Restaurant Reservations App

A responsive restaurant website built for the Meta Front-End Developer Professional
Certificate Capstone, featuring semantic HTML, a fully validated booking flow, scroll-based
animations, and WCAG-conscious accessibility.

[SCREENSHOT: Full homepage hero section, desktop view]

---

## The Problem

Little Lemon, a family-owned Mediterranean bistro in Chicago, needed a website that could
do two things well: tell its story (fresh ingredients, family tradition, a modern take on
classic recipes) and let customers book a table without friction. The brief came with an
official style guide (colors, typography, photography direction) and a set of usability
heuristics to design against — but no ready-made layout. The layout, motion, and booking
experience were built from scratch based on that guide.

## Design Decisions

**Layout system:** Grid where the page needed two-dimensional structure (the Specials
cards grid), Flexbox where it needed one-dimensional alignment (the navbar, the footer
columns). This split by section rather than committing to one system project-wide.

**Motion:** All entrance animations (navbar, hero, specials, testimonials) and the Chicago
section's parallax effect respect `prefers-reduced-motion` through a shared
`useGsapMatchMedia` hook — animations play at full strength only when the visitor hasn't
asked the OS to reduce motion.

**Responsive breakpoints — three, not one:** the navbar collapses at `1024px` (it carries
6 links + logo + cart icon + login, so it needs more room before breaking), the About
section's two-column image layout collapses at `768px`, and the Hero collapses at `600px`
(so tablets keep the desktop row layout, and only true mobile screens stack it). These are
three deliberate decisions based on each section's actual content, not an inconsistency.

**Booking state:** available time slots are lifted into a `useReducer` in `Main.js` (rather
than local `useState` inside the form) so the reservation date can drive which time slots
are fetched, matching the course's lifting-state-up pattern.

[SCREENSHOT: Reservation form, desktop view]

## Features

- Semantic HTML throughout (`header`, `nav`, `main`, `footer`, `address`)
- Fully controlled, validated booking form — field-level error messages, past-date
  rejection, guest count limits (1–10), required-field enforcement (HTML5 + JS)
- Reservation history ("My Bookings") persisted in `localStorage`, with a tab that
  restores itself only when navigating from the confirmation page — not on a page refresh
- Scroll-triggered entrance animations (GSAP + ScrollTrigger), all respecting
  `prefers-reduced-motion`
- Keyboard-accessible horizontal carousel (arrow keys, `role="region"`,
  `aria-roledescription="carousel"`) alongside mouse/touch drag
- `aria-invalid` / `aria-describedby` linking every validated field to its error message
- Responsive layout verified at mobile, tablet, and desktop breakpoints
- 15 automated tests (Jest + React Testing Library) covering rendering, the booking
  reducer, and form validation edge cases

[SCREENSHOT: Mobile view of homepage, showing hamburger menu]

## Tech Stack

- **React** (Create React App)
- **react-router-dom v6** — client-side routing
- **GSAP + ScrollTrigger** — scroll-based animation
- **react-icons** — icon set
- **Jest + React Testing Library** — testing

## Getting Started

```bash
git clone https://github.com/a1-soto/Front-End-Meta-Capstone.git
cd Front-End-Meta-Capstone
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Running Tests

```bash
npm test
```

## Accessibility

This project targets **WCAG 2.1 AA**. It was verified through:
- Manual audit of every image for descriptive `alt` text (or `alt=""` where decorative)
- `aria-label` on icon-only interactive elements (nav toggle, share button, cart)
- `label`/`htmlFor` pairing on every form input, plus `aria-invalid`/`aria-describedby`
  on validated fields
- Keyboard support on the custom carousel (arrow keys, visible focus, `tabIndex`)
- Motion respecting `prefers-reduced-motion` across every animation in the app

> Note: full manual keyboard-navigation testing (Tab key) was affected by a system-level
> input issue unrelated to this codebase during development. The carousel's keyboard
> support (`tabIndex`, arrow key handlers, ARIA attributes) is implemented and was verified
> through code review rather than a live Tab-key walkthrough.

## What Works Today / What's Out of Scope

Being upfront about scope, following a pattern seen across other Capstone submissions:

**Fully functional:** Home navigation, the About and Menu anchor links, the reservation
form (validation, time-slot fetching, submission, confirmation), booking history, and the
responsive layout across breakpoints.

**Intentionally disabled (not required by the official 18-module Capstone scope):** Order
online, Shopping cart, Login, and View Menu. These are visibly present in the UI (with a
"Coming soon" tooltip) rather than hidden, but link to no page — there was no menu-ordering
or account system in the assignment brief, so building one would have added risk without
adding rubric value.

[SCREENSHOT: Footer showing disabled links state]

## Project Structure

src/
├── Api/ # Mock booking API (fetchAPI, submitAPI)
├── components/ # One folder per component (Nav, Footer, BookingForm, etc.)
├── constants/ # Centralized data (navigation links)
├── hooks/ # Shared hooks (useGsapMatchMedia)
└── utils/ # Form validation, booking storage (localStorage)

## Author

Built as part of the **Meta Front-End Developer Professional Certificate** (Coursera) —
Capstone project.