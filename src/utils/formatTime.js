/**
 * Confession Cathedral - Time Formatting Utilities
 */

/**
 * Converts a Date object to a human-readable relative time string.
 * @param {Date} date 
 * @returns {string}
 */
export function formatRelative(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 30) return 'just now';
  if (seconds < 60) return `${seconds} seconds ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes === 1) return '1 minute ago';
  if (minutes < 60) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (hours === 1) return '1 hour ago';
  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);
  if (days === 1) return '1 day ago';
  if (days < 7) return `${days} days ago`;

  return 'a while ago';
}
