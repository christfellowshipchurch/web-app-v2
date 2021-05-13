import React from 'react';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { GET_FEATURE } from 'hooks/useFeature';
import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';
import { Box, Cell, utils } from 'ui-kit';

export default function Events(props = {}) {
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
        py={{ _: 'l', lg: 'xl' }}
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

  const featureFeed = await apolloClient.query({
    query: GET_FEATURE_FEED,
    variables: { pathname: 'events' },
  });
  const features = featureFeed?.data?.featuresFeed?.features || [];

  let promises = [];
  features.map(item =>
    promises.push(
      apolloClient.query({
        query: GET_FEATURE,
        variables: {
          featureId: item?.id,
        },
      })
    )
  );
  await Promise.all(promises);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
