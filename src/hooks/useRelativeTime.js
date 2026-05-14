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
    // Update every minute (60s) instead of 30s for better performance
    // The labels only change at minute boundaries anyway after the first minute
    const interval = setInterval(() => {
      setLabel(formatRelative(date));
    }, 60000);

    return () => clearInterval(interval);
  }, [date]);

  return label;
}
