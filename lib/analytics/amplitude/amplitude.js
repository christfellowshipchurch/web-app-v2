import random from 'lodash/random';

const amplitudeJS =
  typeof window !== 'undefined' ? require('amplitude-js') : null;

export const trackEvent = ({ eventType, eventProperties = null }) => {
  amplitudeJS.getInstance().logEvent(eventType, eventProperties);
};

export const init = currentUser => {
  // Do not run unless traffic is coming from a browser
  const _isNotBrowser =
    typeof window === 'undefined' || typeof document === 'undefined';

  if (_isNotBrowser) return null;

  amplitudeJS.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);

  if (currentUser) {
    const userProperties = {
      campusName: currentUser?.profile?.campus?.name,
    };
    // Sets 'AuthenticatedUser' id, and adds 'campus' as user property
    amplitudeJS.getInstance().setUserId(currentUser?.id);
    amplitudeJS.getInstance().setUserProperties(userProperties);
  }

  // If not logged in, generate random 'NewUser' id
  return amplitudeJS
    .getInstance()
    .setUserId(`NewUser: ${random(1000000, 9999999)}`);
};

const amplitude = {
  init,
  trackEvent,
};

export default amplitude;
