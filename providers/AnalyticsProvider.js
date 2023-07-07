/**
 * AnalyticsProvider.js
 *
 * Author: Daniel Wood
 * Created: Nov 9, 2024
 *
 * This is an updated version of our Analytics Provider that adds compatibility with Segment Analytics. This provider helps track events and page views across our website.
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCurrentUser } from 'hooks';
import { AnalyticsBrowser } from '@segment/analytics-next';

const AnalyticsContext = React.createContext({ AnalyticsBrowser });

// Create an analytics hook that we can use with other components.
export const useAnalytics = () => {
  const result = React.useContext(AnalyticsContext);
  if (!result) {
    throw new Error('Context used outside of its Provider!');
  }
  return result;
};

export const AnalyticsProvider = ({ children, writeKey }) => {
  const { currentUser } = useCurrentUser();

  const analytics = React.useMemo(
    () => AnalyticsBrowser.load({ writeKey }),
    [writeKey]
  );

  const userId = currentUser?.profile?.id;

  // note : tracks user if logged in
  useEffect(() => {
    if (currentUser?.id) {
      analytics.identify(userId, {
        rock_id: currentUser?.guid,
        ...currentUser?.profile,
      });
    }
  }, [currentUser]);

  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
};

AnalyticsProvider.propTypes = {
  writeKey: PropTypes.string,
};

AnalyticsProvider.defaultProps = {
  writeKey: '',
};

export default AnalyticsProvider;
