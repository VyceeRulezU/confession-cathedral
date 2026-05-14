import { useState } from 'react';

/**
 * Hook to manage the confessions state in memory.
 * @returns {{ confessions: Array, addConfession: Function }}
 */
export function useConfessions() {
  const [confessions, setConfessions] = useState([]);

  const addConfession = (text) => {
    const newEntry = {
      id: crypto.randomUUID(),
      text: text.trim(),
      timestamp: new Date(),
    };
    // Prepend so newest is first
    setConfessions((prev) => [newEntry, ...prev]);
  };

  return { confessions, addConfession };
}
