import React from 'react';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';
import { Cell, utils } from 'ui-kit';

export default function Home(props = {}) {
  const options = {
    variables: {
      pathname: 'home',
    },
  };

  return (
    <Layout title="Home">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'xs', lg: 's' }}
      >
        <FeatureFeedProvider Component={FeatureFeed} options={options} />
      </Cell>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query({
      query: GET_FEATURE_FEED,
      variables: { pathname: 'home' },
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/error',
      },
    };
  }
}
