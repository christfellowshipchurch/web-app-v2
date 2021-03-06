import React from 'react';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { GET_FEATURE } from 'hooks/useFeature';
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
    const featureFeed = await apolloClient.query({
      query: GET_FEATURE_FEED,
      variables: { pathname: 'home' },
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
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/error',
      },
    };
  }
}
