/**
 * Check if the string includes the substring. The method is case-insensitive.
 *
 * @param {string} str - The string.
 * @param {string} substr - The substring.
 * @returns {boolean} True if the string includes the substring. False if not.
 */
export const checkSubstring = (str: string, substr: string) =>
  str.toLowerCase().includes(substr.toLowerCase());
