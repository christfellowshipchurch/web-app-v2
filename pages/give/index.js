import React from 'react';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';
import { Cell, utils } from 'ui-kit';

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

  await apolloClient.query({
    query: GET_FEATURE_FEED,
    variables: { pathname: 'give' },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
