# 📖 A Simple Guide to the Cathedral

Hey there! Welcome to the Cathedral. This is a special place where people can share their secrets without anyone knowing who they are. Let's look at how the magic works, step by step!

## 🏰 The Big Picture (App.jsx)
Think of `App.jsx` as the **Grand Architect**. It decides where the walls go and who talks to who.

- **Lines 1-5**: We bring in our tools (like LEGO instructions) and our smaller rooms (components).
- **Line 8**: We use a special hook called `useConfessions`. Think of this as a **Magic Book** that remembers everything people have whispered.
- **Lines 10-31**: This is the "Blueprint". We say: "Put the Header at the top, then the Form where people write, and then the Feed where the secrets appear."

## ✍️ The Writing Desk (ConfessionForm.jsx)
This is where people type their secrets. This uses something called a **Controlled Input**.

- **What is a Controlled Input?** Imagine if you had a robot friend who watched every letter you typed on a piece of paper and immediately wrote it down in his own notebook. That's what `useState` does!
- **Line 7**: `const [text, setText] = useState('')` — This is the robot's notebook. It starts empty.
- **Line 21**: `value={text}` — This tells the paper to always show exactly what's in the robot's notebook.
- **Line 22**: `onChange={(e) => setText(e.target.value)}` — Every time you tap a key, the robot quickly updates his notebook.
- **Lines 10-16**: When you click "Drop Truth", we check if you actually wrote something. If you did, we tell the Grand Architect to put it in the Magic Book, and then we **reset** the notebook to empty (Line 14).

## ⏳ The Ticking Clock (useRelativeTime.js)
This hook is like a tiny helper who whispers how old a secret is.

- **Line 10**: It looks at when the secret was written.
- **Lines 12-16**: Every 30 seconds (like a slow heartbeat), it checks the time again and updates the label from "just now" to "1 minute ago".

## 🪄 The Magic Entrance (Animations)
When a new secret appears, it doesn't just "pop" in. It floats in gently.

- **ConfessionCard.module.css (Line 11)**: `animation: fadeInSlide 400ms ease-out backwards;`
- This tells the computer: "When this card is born, make it invisible and a little bit lower down, then move it up and make it visible over a tiny fraction of a second."
- The recipe for this movement is in `animations.css`.

## 🧠 State Updates: The Golden Rule
In React, we never just change things. We **replace** them.

- **useConfessions.js (Line 18)**: `setConfessions((prev) => [newEntry, ...prev])`
- This is like saying: "Take the old list of secrets, put the brand new one at the very top, and make a whole NEW list." We don't scribble on the old list; we write a fresh one!
