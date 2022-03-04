import React, { useState, useEffect } from 'react';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';
import { Cell, utils } from 'ui-kit';
import { useAuth } from 'providers/AuthProvider';

import ExternalLandingPage from './external-home';

export default function Home(props = {}) {
  const [isTransparent, setIsTransparent] = useState(false);
  const [{ authenticated }] = useAuth();

  useEffect(() => {
    setIsTransparent(!authenticated);
  }, [authenticated]);

  const options = {
    variables: {
      pathname: 'home',
    },
  };

  if (authenticated) return <Layout transparentHeader={isTransparent} title="Home">
    <Cell
      as="main"
      maxWidth={utils.rem('1100px')}
      px="base"
      py={{ _: 'xs', lg: 's' }}
    >
      <FeatureFeedProvider Component={FeatureFeed} options={options} />
    </Cell>
  </Layout>

  return (
    <Layout transparentHeader={isTransparent}>
      <ExternalLandingPage />
    </Layout>
  );
}

export async function getStaticProps() {
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
