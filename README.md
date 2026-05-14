# 🕍 Confession Cathedral

> *An anonymous wall where people drop their truth.*

---

## Overview

Confession Cathedral is a single-page React application that gives people a clean, safe, anonymous space to post confessions. No accounts. No tracking. No names. Just honesty.

The experience is designed to feel like entering a quiet, sacred space — somewhere between a confessional booth and a public bulletin board. The visual language should communicate: *you are safe here.*

---

## Core Principles

| Principle | Expression |
|-----------|------------|
| **Anonymity** | No names, no IDs, no backend, no persistence |
| **Safety** | Visual warmth, soft tone, zero judgment |
| **Simplicity** | One page, one purpose, no distractions |
| **Honesty** | The UI should feel like it's telling the truth too |

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | React 18 | Component model, hooks, state |
| Styling | CSS Modules + CSS Variables | Scoped styles, theme tokens |
| Animations | CSS keyframes | Lightweight, no dependencies |
| State | `useState` (in-memory) | No backend, no persistence by design |
| Build | Vite | Fast dev, clean output |
| Fonts | Google Fonts (self-hostable) | Distinctive display + body pairing |

---

## Features

- **Confession form** — textarea with real-time character counter
- **Counter turns red** at 280 characters (Twitter-era resonance, constraint as ritual)
- **Submit guard** — blocks empty and whitespace-only confessions
- **Live feed** — newest confessions appear at top with fade-in animation
- **Timestamps** — relative time ("just now", "2 minutes ago")
- **No identity** — no usernames, no avatars, nothing traceable

---

## What This Is NOT

- Not a social network
- Not a database-backed app
- Not persistent across sessions
- Not moderated (client-side only)
- Not shareable links per confession

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Project Structure

See [`FILE_STRUCTURE.md`](./FILE_STRUCTURE.md) for the full annotated directory tree.

---

## Design System

See [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) for tokens, typography, color, and component specs.

---

## Component Architecture

See [`COMPONENT_ARCHITECTURE.md`](./COMPONENT_ARCHITECTURE.md) for component breakdown and data flow.

---

## Roadmap

See [`ROADMAP.md`](./ROADMAP.md) for future iterations and stretch goals.

---

*Built with intention. Anonymous by design.*
