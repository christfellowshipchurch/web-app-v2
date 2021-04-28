import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { FeatureFeedProvider } from 'providers';
import { useAuth } from 'providers/AuthProvider';

import { Layout, FeatureFeed } from 'components';
import { Cell, utils } from 'ui-kit';

export default function Connect(props = {}) {
  const router = useRouter();
  const [{ authenticated }] = useAuth();
  const options = {
    variables: {
      pathname: 'connect',
    },
  };

  useEffect(() => {
    if (!authenticated) {
      router.push('/');
    }
  }, [router, authenticated]);

  if (!authenticated) return null;

  return (
    <Layout title="Connect">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <FeatureFeedProvider Component={FeatureFeed} options={options} />
      </Cell>
    </Layout>
  );
}
