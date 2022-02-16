import sanitizeHtml from 'sanitize-html';

/**
 * Accepts a string of HTML and removes all tags so you're left with just the raw text.
 * @param {string} dirty - HTML that should be sanitized
 * @returns {string}
 */
export function sanitizeAllTags(dirty) {
    return sanitizeHtml(dirty, {
      allowedTags: [],
    });
}