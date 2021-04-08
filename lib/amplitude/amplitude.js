import amplitudeJS from 'amplitude-js';

export const trackEvent = ({ eventName, properties = null }) => {
  amplitudeJS
    .getInstance()
    .logEvent(eventName, properties, (...args) => console.log(args));
};

export const init = ({ currentUser }) => {
  amplitudeJS.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);

  const userProperties = {
    campusName: currentUser?.profile?.campus?.name,
  };

  amplitudeJS.getInstance().setUserId(currentUser?.profile?.id);

  amplitudeJS.getInstance().setUserProperties(userProperties);
};

const amplitude = {
  init,
  trackEvent,
};

export default amplitude;
