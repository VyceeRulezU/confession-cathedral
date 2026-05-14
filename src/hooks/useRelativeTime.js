import { useState, useEffect } from 'react';
import { formatRelative } from '../utils/formatTime';

/**
 * Hook that returns an auto-updating relative time string.
 * @param {Date} date 
 * @returns {string}
 */
export function useRelativeTime(date) {
  const [label, setLabel] = useState(formatRelative(date));

  useEffect(() => {
    // Update every 30 seconds to keep the "just now" and minute labels fresh
    const interval = setInterval(() => {
      setLabel(formatRelative(date));
    }, 30000);

    return () => clearInterval(interval);
  }, [date]);

  return label;
}
