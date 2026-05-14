# Lie Detector: 5 Statements About Confession Cathedral

## The Statements

1. Confession IDs are generated using `crypto.randomUUID()` in the `useConfessions` hook.
2. The `useRelativeTime` hook updates each card's timestamp every 60 seconds via `setInterval`.
3. Google Fonts are loaded via a `<link>` tag in `index.html`.
4. The character counter has `role="status"` for screen reader support.
5. React's JSX auto-escaping protects confession text from XSS injection.

## The Lie

**Statement 3** — Google Fonts are **not** loaded via a `<link>` tag in `index.html`.

## How to Spot It

Check `index.html` (lines 1-17) — there is no `<link rel="stylesheet">` for Google Fonts anywhere in the file. The fonts are actually imported via a CSS `@import url(...)` directive in `src/styles/globals.css` (line 7):

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:...');
```

This is an unconventional choice. Most projects load external fonts via `<link>` in the HTML `<head>` to avoid render-blocking and comply with CSS `@import` performance best practices. It's an unusual enough detail that someone skimming the codebase might assume the standard pattern was followed.

## The AI's Answer

The lie is statement 3. The AI deliberately chose this because:
- It sounds plausible (fonts usually go in `index.html`).
- It requires actually opening `index.html` to disprove — a reader who only looked at component files would miss it.
- It tests whether you verified the claim against the real file rather than assuming convention.
