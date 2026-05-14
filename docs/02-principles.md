# 🛠️ Software Engineering Principles

This project follows several core engineering principles to ensure the code is clean, predictable, and easy to maintain.

## 1. Controlled Components
**Definition:** A component where the form data is handled by the state of the component. The "source of truth" for the input value is the React state, not the DOM.
- **Where it is:** `ConfessionForm.jsx`
- **Exact Lines:** 
    - [Line 7](file:///c:/Users/USER/Downloads/Frontend%20Boot%20Camp/confession-cathedral/src/components/ConfessionForm/ConfessionForm.jsx#L7): `const [text, setText] = useState('');`
    - [Line 21](file:///c:/Users/USER/Downloads/Frontend%20Boot%20Camp/confession-cathedral/src/components/ConfessionForm/ConfessionForm.jsx#L21): `value={text}`
    - [Line 22](file:///c:/Users/USER/Downloads/Frontend%20Boot%20Camp/confession-cathedral/src/components/ConfessionForm/ConfessionForm.jsx#L22): `onChange={(e) => setText(e.target.value)}`

## 2. Immutability
**Definition:** Data that cannot be changed after it is created. In React, we don't modify existing state arrays; we create new ones. This allows React to efficiently detect changes and re-render.
- **Where it is:** `useConfessions.js`
- **Exact Lines:** 
    - [Line 18](file:///c:/Users/USER/Downloads/Frontend%20Boot%20Camp/confession-cathedral/src/hooks/useConfessions.js#L18): `setConfessions((prev) => [newEntry, ...prev]);` (Spread operator creates a new array).

## 3. Lifting State Up
**Definition:** Moving state to the closest common ancestor of the components that need it. This ensures that data flows down from a single source of truth.
- **Where it is:** `App.jsx`
- **Exact Lines:** 
    - [Line 8](file:///c:/Users/USER/Downloads/Frontend%20Boot%20Camp/confession-cathedral/src/App.jsx#L8): `const { confessions, addConfession } = useConfessions();` (State is held in `App` and passed to `ConfessionForm` and `ConfessionFeed`).

## 4. Separation of Concerns
**Definition:** Organizing code so that each part handles a specific responsibility. 
- **Business Logic vs. UI:** State management is tucked away in hooks (`useConfessions.js`), while components only handle how things look.
- **Pure Functions:** Utilities like `validators.js` and `formatTime.js` contain logic that doesn't depend on React at all.
- **Scoped Styling:** CSS Modules (`Header.module.css`, etc.) ensure styles for one component don't leak into others.

## 5. Composition
**Definition:** Building complex UIs by combining smaller, simpler components.
- **Where it is:** `App.jsx`
- **Exact Lines:** 
    - [Lines 12-23](file:///c:/Users/USER/Downloads/Frontend%20Boot%20Camp/confession-cathedral/src/App.jsx#L12-L23): Combining `Header`, `ConfessionForm`, and `ConfessionFeed` to create the final page.

## 6. Single Responsibility Principle (SRP)
**Definition:** Every component or function should do exactly one thing and do it well.
- **Example:** `CharacterCounter.jsx` only handles the display and warning states of the counter. It doesn't care about the actual submission logic.
