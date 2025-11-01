# GoatUI — Styles (Design System)

This repository contains the design tokens, base styles, and shared UI styles for GoatUI.

Goals
- Provide canonical design tokens (colors, spacing, typography).
- Expose build artifacts for use by other packages/apps (CSS, SCSS partials, JSON tokens).
- Include example component styles and a simple build pipeline.

Repository structure
- tokens/         — design tokens (JSON) used as single source of truth
- src/            — SCSS entry points and components
- dist/           — generated artifacts (CSS, compiled tokens) — ignored in VCS
- .github/        — CI workflows
- package.json    — scripts and dependencies

Getting started (local)
1. Install dependencies:
   npm ci
2. Build tokens / styles:
   npm run build

Contributing
See CONTRIBUTING.md for contribution guidelines.

License
MIT
