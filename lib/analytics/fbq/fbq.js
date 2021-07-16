const pageview = () => {
  window.fbq('track', 'PageView');
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
const event = (name, options = {}) => {
  window.fbq('track', name, options);
};

const fbq = {
  pageview,
  event,
};

export default fbq;
