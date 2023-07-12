import React, { useEffect } from 'react';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';
import { Box, Cell, utils } from 'ui-kit';
import { useAnalytics } from 'providers/AnalyticsProvider';

export default function Events(props = {}) {
  const analytics = useAnalytics();

  //Segment Page Tracking
  useEffect(() => {
    analytics.page({
      contentCategory: 'Information',
      mediaType: 'Information',
    });
  });

  const options = {
    variables: {
      pathname: 'events',
    },
  };

  return (
    <Layout title="Events">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 's', lg: 'base' }}
      >
        <Box as="h1" mb={'-2rem'}>
          Events
        </Box>
        <FeatureFeedProvider Component={FeatureFeed} options={options} />
      </Cell>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_FEATURE_FEED,
    variables: { pathname: 'events' },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
