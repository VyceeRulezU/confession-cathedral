# 📁 File Structure

Annotated directory tree for Confession Cathedral.

---

```
confession-cathedral/
│
├── public/
│   ├── favicon.svg                  # Custom cathedral/arch SVG icon
│   └── og-image.png                 # Open Graph preview image (optional)
│
├── src/
│   │
│   ├── components/
│   │   ├── ConfessionForm/
│   │   │   ├── ConfessionForm.jsx   # Textarea, counter, submit button
│   │   │   └── ConfessionForm.module.css
│   │   │
│   │   ├── ConfessionFeed/
│   │   │   ├── ConfessionFeed.jsx   # Maps over confessions, newest first
│   │   │   └── ConfessionFeed.module.css
│   │   │
│   │   ├── ConfessionCard/
│   │   │   ├── ConfessionCard.jsx   # Single confession entry (text + time)
│   │   │   └── ConfessionCard.module.css
│   │   │
│   │   ├── CharacterCounter/
│   │   │   ├── CharacterCounter.jsx # Live count, turns red at 280
│   │   │   └── CharacterCounter.module.css
│   │   │
│   │   ├── Header/
│   │   │   ├── Header.jsx           # App title + tagline
│   │   │   └── Header.module.css
│   │   │
│   │   └── EmptyState/
│   │       ├── EmptyState.jsx       # Shown when feed has no entries yet
│   │       └── EmptyState.module.css
│   │
│   ├── hooks/
│   │   ├── useConfessions.js        # State logic: add confession, list
│   │   └── useRelativeTime.js       # Formats timestamps ("just now", etc.)
│   │
│   ├── utils/
│   │   ├── validators.js            # isEmptyOrWhitespace(), maxLength check
│   │   └── formatTime.js            # Timestamp formatting helpers
│   │
│   ├── styles/
│   │   ├── globals.css              # CSS reset + root variables (tokens)
│   │   ├── tokens.css               # Design tokens: color, spacing, type
│   │   └── animations.css           # Shared keyframes: fadeIn, slideUp
│   │
│   ├── App.jsx                      # Root component, wires form + feed
│   └── main.jsx                     # ReactDOM.createRoot entry point
│
├── index.html                       # Vite HTML shell
├── vite.config.js                   # Vite config (minimal)
├── package.json
│
├── README.md                        # Project overview + setup
├── FILE_STRUCTURE.md                # ← this file
├── DESIGN_SYSTEM.md                 # Tokens, typography, color, components
├── COMPONENT_ARCHITECTURE.md        # Component tree + data flow
└── ROADMAP.md                       # Future features + stretch goals
```

---

## Directory Rationale

### `components/`
Each component lives in its own folder with co-located styles. This keeps concerns tight and makes deletion/replacement surgical — pull out `ConfessionCard/` without touching anything else.

### `hooks/`
Custom hooks separate stateful logic from rendering. `useConfessions` owns all mutation and read logic. Components stay dumb.

### `utils/`
Pure functions. No React imports. Fully testable in isolation. Validators guard the form. Time formatters keep display logic out of components.

### `styles/`
Global styles are split into three files by responsibility:
- `globals.css` — reset, body defaults, font loading
- `tokens.css` — all design tokens as CSS custom properties
- `animations.css` — shared keyframe declarations

Component-level styles use CSS Modules for scoping.

---

## Naming Conventions

| Pattern | Rule |
|---------|------|
| Components | PascalCase folders + files (`ConfessionCard.jsx`) |
| CSS Modules | `ComponentName.module.css` |
| Hooks | camelCase, `use` prefix (`useConfessions.js`) |
| Utils | camelCase descriptive (`formatTime.js`) |
| CSS Variables | `--cc-*` prefix (cc = Confession Cathedral) |

---

## Key Files at a Glance

| File | Role |
|------|------|
| `App.jsx` | Owns `confessions` state, passes props down |
| `useConfessions.js` | `addConfession`, returns sorted array |
| `ConfessionForm.jsx` | Controlled textarea, validation, submit |
| `ConfessionFeed.jsx` | Renders list, handles empty state |
| `ConfessionCard.jsx` | Single entry display |
| `validators.js` | Guards against empty/whitespace submissions |
| `tokens.css` | Single source of truth for all visual values |
