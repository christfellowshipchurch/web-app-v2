// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = url => {
  if (typeof window !== 'undefined') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_CODE, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const trackEvent = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

const gtag = {
  pageview,
  trackEvent,
};

export default gtag;
