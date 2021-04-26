import React from 'react';
import PropTypes from 'prop-types';

import { useCurrentUser, useLiveStreams } from 'hooks';
import { normalizeUserData } from 'utils';

function NavigationProvider({ Component, data, ...props }) {
  const liveStreams = useLiveStreams();
  const { data: userData } = useCurrentUser();

  return <Component data={data} callData={{ user: normalizeUserData(userData?.currentUser), liveStreams }} {...props} />;
}

NavigationProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default NavigationProvider;
