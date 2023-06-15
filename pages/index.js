import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed, ClientSideComponent } from 'components';
import { Cell, utils } from 'ui-kit';
import { useAuth } from 'providers/AuthProvider';

import ExternalLandingPage from './external-home';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import { includes } from 'lodash';

export default function ExternalHomePage() {
  const [{ authenticated }] = useAuth();
  const router = useRouter();
  const modalDispatch = useModalDispatch();

  useEffect(() => {
    const { asPath } = router;
    if (includes(asPath, '#connect-card')) {
      modalDispatch(showModal('ConnectCardModal'));
    }
  });

  useEffect(() => {
    if (authenticated) {
      router.push('/home');
    }
  }, [authenticated]);

  return (
    <Layout
      title="Christ Fellowship Church - A church that wants to help you live the life you were created for."
      transparentHeader={true}
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
