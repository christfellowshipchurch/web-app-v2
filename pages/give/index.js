import React from 'react';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { GET_FEATURE } from 'hooks/useFeature';
import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';
import { Box, Cell, utils } from 'ui-kit';

export default function Give(props) {
  const options = {
    variables: {
      pathname: 'give',
    },
  };

  return (
    <Layout title="Give">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'base', lg: 'l' }}
      >
        <FeatureFeedProvider Component={FeatureFeed} options={options} />
      </Cell>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const featureFeed = await apolloClient.query({
    query: GET_FEATURE_FEED,
    variables: { pathname: 'give' },
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
