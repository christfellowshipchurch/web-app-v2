import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAuthState } from 'providers/AuthProvider';

const TrackEventWhenLoaded = ({ loaded, eventName, properties }) => {
  const { authenticated } = useAuthState();

  useEffect(() => {
    if (loaded && authenticated) {
      // todo
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
