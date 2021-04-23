import React from 'react';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { GET_FEATURE } from 'hooks/useFeature';
import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';
import { Cell, utils } from 'ui-kit';

export default function Home(props = {}) {
  return (
    <Layout title="Home">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <FeatureFeedProvider Component={FeatureFeed} />
      </Cell>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const featureFeed = await apolloClient.query({ query: GET_FEATURE_FEED });
  const features = featureFeed?.data?.userFeedFeatures || [];

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
