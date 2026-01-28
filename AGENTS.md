## Project Summary
A Next.js project cloning the "Bay53" website, an ERP solution for SMEs. The project aims to provide a modern, professional SaaS aesthetic with integrated modules for accounting, inventory, sales, and more.

## Tech Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Icons: Lucide React
- Components: Custom React components in `src/components/sections/`

## Architecture
- `src/app/page.tsx`: Main landing page integrating all sections.
- `src/components/sections/`: Modularized sections of the landing page (Header, Hero, Features, etc.).
- `src/app/globals.css`: Global styles including custom themes and gradients.

## User Preferences
- No comments unless requested.

## Project Guidelines
- Keep sections as independent components.
- Use `"use client"` only where necessary (e.g., components with state or `styled-jsx`).
- Maintain the purple-to-indigo brand identity.

## Common Patterns
- Section structure: Section tag with specific padding and a max-width container.
- Button styles: Indigo primary buttons with white text and rounded corners.
