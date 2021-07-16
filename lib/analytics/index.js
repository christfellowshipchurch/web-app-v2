import amplitude from './amplitude';
import fbq from './fbq';
import gtag from './gtag';

const trackEvent = (props = {}) => {
  /**
   * todo : Google analytics is currently not working, need to find an alternative fix.
   */

  return [
    // gtag.trackEvent({ ...props }),
    amplitude.trackEvent({ ...props }),
  ];
};

export { amplitude, fbq, gtag, trackEvent };
