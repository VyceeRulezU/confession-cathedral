# 🗺️ Roadmap

Future iterations, stretch goals, and ideas for Confession Cathedral.

---

## Current Scope (V1 — In-Memory)

The V1 is intentionally constrained. Its limitations are features:

- [x] Confession form with live character counter
- [x] Counter turns red at 280 characters
- [x] Empty/whitespace submission guard
- [x] Feed renders newest first with fade-in animation
- [x] Timestamps (relative time)
- [x] No backend, no names, no persistence

---

## V1.1 — Polish Pass

Small improvements that don't change the architecture:

- [ ] Textarea auto-grows with content (no scroll)
- [ ] Submission confirmation — brief "received" state on button before reset
- [ ] Improved empty state illustration (custom SVG arch)
- [ ] Keyboard shortcut: `Cmd+Enter` / `Ctrl+Enter` to submit
- [ ] Smooth scroll to newest confession after submit
- [ ] Loading shimmer placeholder on initial empty state

---

## V2 — Persistent Confessions (Backend)

Adds a lightweight backend so confessions survive page refreshes and are shared across users.

**Stack options:**
- Supabase (Postgres + Row Level Security, no auth table needed)
- PlanetScale + Hono edge API
- Firebase Realtime Database (anonymous writes)

**Considerations:**
- Still zero authentication — confessions insert with no user ID
- IP is explicitly NOT stored
- Rate limiting per session to prevent spam
- Content moderation hook (optional — profanity filter, length guard)
- Server-side timestamps (prevents client clock manipulation)
- Real-time feed updates via Supabase subscriptions or SSE

**New components needed:**
- `useFetchConfessions()` — fetches initial page
- `useRealtimeFeed()` — listens for new entries
- `LoadMoreButton` or infinite scroll trigger
- `ErrorState` component

---

## V2.1 — Soft Moderation

Without removing anonymity, add lightweight guardrails:

- [ ] Client-side: filter obvious spam patterns (all caps, repeated chars)
- [ ] Server-side: integrate Perspective API for toxicity scoring
- [ ] Auto-hold confessions above toxicity threshold for async review
- [ ] "Flag" button on cards (not moderated in real time — just logged)

---

## V3 — Themed Rooms

Multiple named spaces, each with a different atmosphere:

| Room | Vibe |
|------|------|
| The Cathedral | Default — everything |
| The Booth | Romantic and relationship confessions |
| The Pew | Faith, doubt, and spiritual things |
| The Dark | Heavy things — fear, shame, grief |
| The Commons | Everyday embarrassments and silly truths |

Each room gets its own subtle color variation while sharing the core design system.

**Implementation:** Route-based (`/room/dark`), feed filtered by `room` column in DB.

---

## V4 — Resonance

Let confessions find their audience without social mechanics:

- **Candle system**: readers can "light a candle" for a confession (like a Like, but quieter). Count shown as "🕯 12 candles"
- **Random confession view**: a "Shuffle" button that surfaces a random past entry
- **Most resonant**: optional secondary feed view sorted by candles
- **No comments**: reactions only, never discussion

This keeps the product focused on *expression*, not conversation.

---

## Accessibility Backlog

- [ ] Full keyboard navigation audit
- [ ] Screen reader testing with NVDA / VoiceOver
- [ ] Reduced motion media query for all animations
- [ ] High contrast mode support
- [ ] RTL layout support (Arabic, Hebrew markets)

---

## Performance Backlog

- [ ] Virtualized feed list (if V2 feed grows long)
- [ ] Lazy-load confession cards below fold
- [ ] Service Worker for offline cached view
- [ ] Web Vitals audit (LCP, CLS, FID targets)

---

## Out of Scope (Permanently)

These will never be added — they contradict the product philosophy:

| Feature | Why Never |
|---------|-----------|
| User accounts | Kills anonymity |
| Real names | Kills honesty |
| DMs / replies | Turns it into a social network |
| Share buttons per confession | Breaks the ephemeral contract |
| Analytics per confession | Surveillance, even if aggregate |
| Ads | Breaks the sacred space feeling |

---

*The best version of this product is the one that stays the most honest about what it is.*
