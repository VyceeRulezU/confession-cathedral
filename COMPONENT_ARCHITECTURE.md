# 🧱 Component Architecture

Data flow, component responsibilities, and prop contracts for Confession Cathedral.

---

## Component Tree

```
App
├── Header
├── ConfessionForm
│   └── CharacterCounter
└── ConfessionFeed
    ├── ConfessionCard (× n)
    └── EmptyState (when feed is empty)
```

---

## State Architecture

All state lives in `App.jsx`. Components are either pure (props-only) or connected via a single custom hook.

```
App.jsx
  └── useConfessions()
        ├── confessions[]     → passed to ConfessionFeed
        └── addConfession()   → passed to ConfessionForm
```

No prop drilling beyond two levels. No context needed for this scale.

---

## Component Responsibilities

### `App.jsx`
- Owns `confessions` state via `useConfessions()`
- Renders `Header`, `ConfessionForm`, `ConfessionFeed`
- Passes `addConfession` down to form
- Passes `confessions` array down to feed
- No styling logic — layout only

```jsx
// Signature
function App()
// No props — top-level root
```

---

### `Header`
- Purely presentational
- Renders app title and tagline
- No props, no state

```jsx
// Signature
function Header()
```

---

### `ConfessionForm`
- Owns `text` (controlled input state)
- Handles `onChange`, `onSubmit`
- Validates input via `isEmptyOrWhitespace()` before calling `onSubmit`
- Resets textarea after successful submission
- Renders `CharacterCounter` as child

```jsx
// Props
{
  onSubmit: (text: string) => void
}

// Internal state
const [text, setText] = useState('')
```

---

### `CharacterCounter`
- Pure display component
- Receives `count` and `max`
- Applies danger styles when `count >= max`
- Applies warning styles when `count >= max * 0.9` (252+)

```jsx
// Props
{
  count: number,   // current character count
  max: number      // limit (280)
}
```

---

### `ConfessionFeed`
- Receives the `confessions` array
- Renders `EmptyState` if array is empty
- Maps each confession to a `ConfessionCard`
- No internal state

```jsx
// Props
{
  confessions: Confession[]
}

// Confession shape
{
  id: string,       // crypto.randomUUID() or Date.now().toString()
  text: string,
  timestamp: Date
}
```

---

### `ConfessionCard`
- Pure display component
- Renders confession text and formatted relative time
- Applies `fadeInSlide` animation via CSS on mount (CSS handles this — no JS needed)

```jsx
// Props
{
  confession: {
    id: string,
    text: string,
    timestamp: Date
  }
}
```

---

### `EmptyState`
- Purely presentational
- Shown when `confessions.length === 0`
- No props

```jsx
function EmptyState()
```

---

## Custom Hooks

### `useConfessions.js`

Manages the confessions array. Single source of truth for all mutation.

```js
function useConfessions() {
  const [confessions, setConfessions] = useState([])

  const addConfession = (text) => {
    const newEntry = {
      id: crypto.randomUUID(),
      text: text.trim(),
      timestamp: new Date()
    }
    // Prepend so newest is first
    setConfessions(prev => [newEntry, ...prev])
  }

  return { confessions, addConfession }
}
```

---

### `useRelativeTime.js`

Returns a human-readable relative timestamp string. Updates on an interval.

```js
// Input: Date object
// Output: "just now" | "2 minutes ago" | "1 hour ago" | etc.

function useRelativeTime(date) {
  const [label, setLabel] = useState(formatRelative(date))

  useEffect(() => {
    const interval = setInterval(() => {
      setLabel(formatRelative(date))
    }, 30_000) // Update every 30s

    return () => clearInterval(interval)
  }, [date])

  return label
}
```

---

## Utility Functions

### `validators.js`

```js
// Returns true if string is empty or only whitespace
export function isEmptyOrWhitespace(str) {
  return !str || str.trim().length === 0
}

// Returns true if string exceeds max length
export function exceedsMaxLength(str, max = 280) {
  return str.length > max
}
```

### `formatTime.js`

```js
// Converts a Date to relative time string
export function formatRelative(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)

  if (seconds < 30) return 'just now'
  if (seconds < 60) return `${seconds} seconds ago`

  const minutes = Math.floor(seconds / 60)
  if (minutes === 1) return '1 minute ago'
  if (minutes < 60) return `${minutes} minutes ago`

  const hours = Math.floor(minutes / 60)
  if (hours === 1) return '1 hour ago'
  if (hours < 24) return `${hours} hours ago`

  return 'a while ago'
}
```

---

## Data Shape

```ts
// Confession object
interface Confession {
  id: string        // Unique identifier (no user association)
  text: string      // The confession content (trimmed)
  timestamp: Date   // Time of submission
}
```

---

## Data Flow Diagram

```
User types in textarea
        ↓
  ConfessionForm (local state: text)
        ↓
  User clicks Submit
        ↓
  validators.js → isEmptyOrWhitespace()
        ↓ (passes)
  onSubmit(text) → App.jsx
        ↓
  useConfessions → addConfession()
        ↓
  setConfessions([newEntry, ...prev])
        ↓
  React re-renders ConfessionFeed
        ↓
  New ConfessionCard animates in (CSS fadeInSlide)
        ↓
  ConfessionForm resets textarea
```

---

## What Intentionally Doesn't Exist

| Missing Thing | Reason |
|---------------|--------|
| User IDs / sessions | Anonymity is the product |
| Backend / API | No persistence by design |
| LocalStorage | Refreshing clears everything — part of the ritual |
| Delete / edit | Once said, it's said |
| Like / react buttons | No engagement mechanics — not a social network |
| Filtering / search | Keep it simple; all voices equal |
| Pagination | Feed grows in memory; sessions are short |
