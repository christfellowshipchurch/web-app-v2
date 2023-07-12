import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { FeatureFeedProvider } from 'providers';
import { useAuth } from 'providers/AuthProvider';
import { useAnalytics } from 'providers/AnalyticsProvider';

import { Layout, FeatureFeed } from 'components';
import { Box, Cell, utils } from 'ui-kit';

export default function Connect(props = {}) {
  const router = useRouter();
  const analytics = useAnalytics();
  const [{ authenticated }] = useAuth();
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
  }, [analytics]);

  useEffect(() => {
    if (!authenticated) {
      router.push('/');
    }
  }, [router, authenticated]);

  if (!authenticated) return null;

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
        <FeatureFeedProvider Component={FeatureFeed} options={options} />
      </Cell>
    </Layout>
  );
}
