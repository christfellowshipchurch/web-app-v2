import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAuthState } from 'providers/AuthProvider';
import { trackEvent } from 'lib/amplitude';

const objectToGqlInput = (props = {}) =>
  Object.keys(props).map(key => ({
    field: key,
    value: props[key],
  }));

const TrackEventWhenLoaded = ({ loaded, eventName, properties }) => {
  const { authenticated } = useAuthState();

  useEffect(() => {
    if (loaded && authenticated) {
      trackEvent({
        eventName,
        properties: objectToGqlInput(properties),
      });
    }
  }, [loaded, authenticated, properties, eventName]);

  return null;
};

TrackEventWhenLoaded.propTypes = {
  loaded: PropTypes.bool,
  eventName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  properties: PropTypes.any,
};

export default TrackEventWhenLoaded;
