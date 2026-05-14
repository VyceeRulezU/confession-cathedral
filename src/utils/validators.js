/**
 * Confession Cathedral - Validation Utilities
 */

/**
 * Checks if a string is empty or contains only whitespace.
 * @param {string} str 
 * @returns {boolean}
 */
export function isEmptyOrWhitespace(str) {
  return !str || str.trim().length === 0;
}

/**
 * Checks if a string exceeds a maximum length.
 * @param {string} str 
 * @param {number} max 
 * @returns {boolean}
 */
export function exceedsMaxLength(str, max = 280) {
  return str.length > max;
}
