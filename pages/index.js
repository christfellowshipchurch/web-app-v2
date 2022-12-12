import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';
import { Box, Cell, utils } from 'ui-kit';
import { useAuth } from 'providers/AuthProvider';

import ExternalLandingPage from './external-home';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import { includes } from 'lodash';

//testing build

export default function Home(props = {}) {
  const [isTransparent, setIsTransparent] = useState(false);
  const [{ authenticated }] = useAuth();
  const router = useRouter();
  const modalDispatch = useModalDispatch();

  useEffect(() => {
    const { asPath } = router;
    if (includes(asPath, '#connect-card')) {
      modalDispatch(showModal('ConnectCardModal'));
    }
  }, []);

  useEffect(() => {
    setIsTransparent(!authenticated);
  }, [authenticated]);

  const options = {
    variables: {
      pathname: 'home',
    },
  };

  if (authenticated)
    return (
      <Layout transparentHeader={isTransparent} title="Home">
        <Cell
          as="main"
          maxWidth={utils.rem('1100px')}
          px="base"
          py={{ _: 'xs', lg: 's' }}
        >
          <Box>test test</Box>
          <FeatureFeedProvider Component={FeatureFeed} options={options} />
        </Cell>
      </Layout>
    );

  return (
    <Layout
      title="Christ Fellowship Church - A church that wants to help you live the life you were created for."
      transparentHeader={isTransparent}
    >
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
