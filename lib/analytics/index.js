import amplitude from './amplitude';
import fbq from './fbq';
import gtag from './gtag';

const trackEvent = (props = {}) => {
  amplitude.init();
  return [gtag.trackEvent({ ...props }), amplitude.trackEvent({ ...props })];
};

export { amplitude, fbq, gtag, trackEvent };
