import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { FeatureFeedProvider } from 'providers';
import { useAuth } from 'providers/AuthProvider';
import { useAnalytics } from 'providers/AnalyticsProvider';

import { Layout, FeatureFeed } from 'components';
import { Box, Cell, Loader, utils } from 'ui-kit';

export default function Connect(props = {}) {
  const router = useRouter();
  const analytics = useAnalytics();
  const [loadingMessage, setLoadingMessage] = useState('Loading');
  const [{ authenticated, rockPersonId }] = useAuth();
  const options = {
    variables: {
      pathname: 'connect',
    },
  };

  //Segment Page Tracking
  useEffect(() => {
    analytics.page({
      contentCategory: 'Information',
      mediaType: 'Information',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // If the user isn't signed in, let's send them to home page. We also want to check for a Rock Person ID being passed in the URL and give it a chance to authenticate.
    if (!authenticated && rockPersonId === 'invalid') {
      setLoadingMessage('User not logged in');
      router.push('/');
    }
  }, [authenticated, rockPersonId]); // eslint-disable-line

  return (
    <Layout title="Connect">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 's', lg: 'base' }}
      >
        <Box as="h1" mb={'-1rem'}>
          Connect
        </Box>
        {!authenticated ? (
          <Box my="xl" py="l">
            <Loader text={loadingMessage} />
          </Box>
        ) : (
          <FeatureFeedProvider Component={FeatureFeed} options={options} />
        )}
      </Cell>
    </Layout>
  );
}
