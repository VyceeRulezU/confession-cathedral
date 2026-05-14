# 🎨 Design System

Visual language, tokens, and component specs for Confession Cathedral.

---

## Aesthetic Direction

**Theme: Sacred Darkness**

The visual language borrows from candlelit stone interiors — cathedrals, confessional booths, places where people have whispered their truths for centuries. The palette is dark and warm, not cold or clinical. Typography is expressive in the heading, quiet in the body. Everything says: *this is a serious space, but a kind one.*

- **Tone**: Reverent, intimate, anonymous
- **Mood**: Like writing in a journal by candlelight
- **Anti-patterns**: No bright whites. No neon. No stock-photo cheerfulness.

---

## Color Tokens

```css
:root {
  /* Backgrounds */
  --cc-bg-base: #0f0d0b;           /* Near-black, warm undertone */
  --cc-bg-surface: #1a1714;        /* Card/form surface */
  --cc-bg-elevated: #242019;       /* Hover states, focused inputs */

  /* Text */
  --cc-text-primary: #e8e0d0;      /* Warm off-white, main text */
  --cc-text-secondary: #9a9080;    /* Timestamps, labels */
  --cc-text-muted: #5a5248;        /* Disabled, placeholder */

  /* Accent */
  --cc-accent: #c9a96e;            /* Gold — the candle flame */
  --cc-accent-dim: #8a6e3e;        /* Subtle gold for borders */
  --cc-accent-glow: rgba(201, 169, 110, 0.12); /* Glow effect */

  /* Danger */
  --cc-danger: #d46a5a;            /* Counter red at 280 chars */
  --cc-danger-dim: rgba(212, 106, 90, 0.15);

  /* Borders */
  --cc-border: rgba(255, 255, 255, 0.06);
  --cc-border-focus: rgba(201, 169, 110, 0.4);

  /* Shadows */
  --cc-shadow-card: 0 2px 16px rgba(0, 0, 0, 0.4);
  --cc-shadow-form: 0 4px 32px rgba(0, 0, 0, 0.6);
}
```

---

## Typography

### Font Pairing

| Role | Font | Weight | Use |
|------|------|--------|-----|
| Display | `Cormorant Garamond` | 300, 600 | App title, section headers |
| Body | `Lato` | 300, 400 | Confession text, UI labels |
| Mono | `JetBrains Mono` | 400 | Character counter |

**Why this pairing:** Cormorant Garamond carries centuries of religious typography — it feels like carved stone. Lato keeps the body text readable without competing. The contrast between them does the heavy lifting tonally.

### Type Scale

```css
:root {
  --cc-font-display: 'Cormorant Garamond', Georgia, serif;
  --cc-font-body: 'Lato', system-ui, sans-serif;
  --cc-font-mono: 'JetBrains Mono', monospace;

  --cc-text-xs: 0.75rem;     /* 12px — timestamps */
  --cc-text-sm: 0.875rem;    /* 14px — labels, helper text */
  --cc-text-base: 1rem;      /* 16px — body, confession text */
  --cc-text-lg: 1.125rem;    /* 18px — form textarea */
  --cc-text-xl: 1.5rem;      /* 24px — subheading */
  --cc-text-2xl: 2rem;       /* 32px — section title */
  --cc-text-4xl: 3.5rem;     /* 56px — app display title */

  --cc-leading-tight: 1.2;
  --cc-leading-normal: 1.6;
  --cc-leading-loose: 1.8;
}
```

---

## Spacing Scale

```css
:root {
  --cc-space-1: 0.25rem;   /* 4px */
  --cc-space-2: 0.5rem;    /* 8px */
  --cc-space-3: 0.75rem;   /* 12px */
  --cc-space-4: 1rem;      /* 16px */
  --cc-space-5: 1.25rem;   /* 20px */
  --cc-space-6: 1.5rem;    /* 24px */
  --cc-space-8: 2rem;      /* 32px */
  --cc-space-10: 2.5rem;   /* 40px */
  --cc-space-12: 3rem;     /* 48px */
  --cc-space-16: 4rem;     /* 64px */
  --cc-space-20: 5rem;     /* 80px */
}
```

---

## Border Radius

```css
:root {
  --cc-radius-sm: 4px;
  --cc-radius-md: 8px;
  --cc-radius-lg: 12px;
  --cc-radius-xl: 16px;
}
```

---

## Component Specs

### Header

- App title in `Cormorant Garamond` 300 weight, large (56px+)
- Tagline in body font, secondary color
- Optional decorative divider (thin gold line) beneath
- Centered layout with generous vertical padding

### ConfessionForm

- Textarea: full width, min-height 120px, no resize handle
- Background: `--cc-bg-surface`, border `--cc-border`
- Focus state: border color `--cc-border-focus` + subtle glow
- Font: `--cc-font-body`, 18px, `--cc-text-primary`, line-height 1.8
- Placeholder text: `--cc-text-muted`, italic, poetic ("Say the thing you can't say anywhere else.")
- Padding: `--cc-space-5` all sides
- Border radius: `--cc-radius-lg`

### CharacterCounter

- Positioned bottom-right inside/below the textarea
- Font: `--cc-font-mono`, 12px
- Default color: `--cc-text-muted`
- At 250+: transition to `--cc-text-secondary`
- At 280: transition to `--cc-danger`, subtle pulse animation
- Format: `143 / 280`

### Submit Button

- Full width on mobile, fixed width (240px) on desktop
- Background: `--cc-accent`, text: `#0f0d0b` (dark on gold)
- Font: `--cc-font-body`, 14px, letter-spacing 0.1em, uppercase
- Hover: slight brightness increase + subtle lift (translateY -1px)
- Active: translateY 0, brightness decrease
- Disabled (empty input): muted background, no pointer

### ConfessionCard

- Background: `--cc-bg-surface`
- Border: 1px solid `--cc-border`
- Border-left: 3px solid `--cc-accent-dim` (signature detail)
- Padding: `--cc-space-6`
- Border radius: `--cc-radius-md`
- Confession text: 16px, `--cc-text-primary`, line-height 1.8
- Timestamp: 12px, `--cc-text-secondary`, bottom-right aligned
- Entry animation: `fadeInSlide` — opacity 0→1, translateY 8px→0, 400ms ease-out

### EmptyState

- Centered, generous padding
- Icon: simple arch SVG (inline), `--cc-accent-dim`
- Text: italic, `--cc-text-muted`
- Example: "No confessions yet. Be the first to speak."

---

## Animation Specs

```css
@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes counterPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
```

- Feed items: `fadeInSlide` 400ms ease-out on mount
- Counter at limit: `counterPulse` 800ms infinite
- Form focus: border-color transition 200ms ease

---

## Layout

- Max content width: `640px`, centered
- Page padding: `--cc-space-8` horizontal (mobile: `--cc-space-4`)
- Form-to-feed gap: `--cc-space-12`
- Card gap in feed: `--cc-space-4`

---

## Accessibility

- All interactive elements keyboard accessible
- Focus rings visible (custom gold ring, not default outline)
- Textarea has `aria-label="Your confession"`
- Counter has `aria-live="polite"` for screen readers
- Submit button has `aria-disabled` when input is empty
- Color contrast: all text pairs pass WCAG AA

---

## Responsive Breakpoints

| Breakpoint | Value | Notes |
|------------|-------|-------|
| Mobile | < 640px | Full-width form, smaller heading |
| Tablet | 640–1024px | Centered container, comfortable padding |
| Desktop | > 1024px | Max-width capped, more vertical breathing room |
