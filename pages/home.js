import { ClientSideComponent, FeatureFeed, Layout } from 'components';
import { useRouter } from 'next/router';
import { FeatureFeedProvider } from 'providers';
import { useAuth } from 'providers/AuthProvider';
import React, { useEffect } from 'react';
import { Cell, utils } from 'ui-kit';

function InternalHomeFeed() {
  const [{ authenticated }] = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) {
      router.push('/');
    }
  }, [authenticated, router]);

  const options = {
    variables: {
      pathname: 'home',
    },
  };

  return (
    <ClientSideComponent>
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
    </ClientSideComponent>
  );
}

export default InternalHomeFeed;
