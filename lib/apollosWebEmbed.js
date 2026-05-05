/**
 * Apollos Web Embeds v2 — global install (“Quick Start”):
 * https://apollosproject.github.io/apollos-docs/features/giving/donation-embed.html
 *
 * The docs’ inline snippet sets `window.ApollosEmbed = "apollos"` before the script
 * loads; the published embed.js UMD wrapper treats `ApollosEmbed` like an exports object
 * (`(this.ApollosEmbed || {})`). A non-empty string is truthy, so the bundle can throw
 * "Cannot create property … on string 'apollos'". We only install the `apollos`
 * queue + script tag; the script assigns the real `window.ApollosEmbed` API when it loads.
 *
 * This enables link interception and inline iframe detection site-wide, per the same guide.
 */

const SCRIPT_ID = 'apollos';
const SCRIPT_SRC =
  'https://cdn.jsdelivr.net/npm/@apollosproject/web-embeds@latest/widget/embed.js';

function ensureApollosQueue() {
  if (typeof window.apollos !== 'function') {
    window.apollos = function apollosQueue() {
      (window.apollos.q = window.apollos.q || []).push(arguments);
    };
  }
}

function injectApollosScript() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(SCRIPT_ID)) return;

  const d = document.createElement('script');
  d.id = SCRIPT_ID;
  d.src = SCRIPT_SRC;
  d.async = true;
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(d, firstScript);
  } else {
    document.head.appendChild(d);
  }
}

/**
 * Idempotent: safe to call from _app on every client load (e.g. React Strict Mode).
 * Loads the widget script once and queues `apollos("init", …)` for link interception
 * and inline iframe wiring (see README “Inline Give Form”).
 */
export function installApollosWebEmbed(options = {}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  if (typeof window.ApollosEmbed === 'string') {
    delete window.ApollosEmbed;
  }

  ensureApollosQueue();
  injectApollosScript();

  const slug = options.slug ?? 'christ_fellowship';
  const baseUrl = options.baseUrl ?? 'https://apollos.com';

  window.apollos('init', {
    slug,
    baseUrl,
    interceptLinks: true,
    autoOpen: false,
  });
}
