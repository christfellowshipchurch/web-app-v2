import { ActionBarFeature, FeatureFeed, Layout } from 'components';
import { useRouter } from 'next/router';
import { FeatureFeedProvider } from 'providers';
import { useAuth } from 'providers/AuthProvider';
import React, { useEffect } from 'react';
import { Box, Cell, utils } from 'ui-kit';

/**
 * todo : For now we will manage the ActionBar data from here, but eventually we may want to move it over to the home-feed from the API
 */
import actionBarData from 'lib/actionBarData';

function InternalHomeFeed() {
  const [{ authenticated }] = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) {
      router.push('/');
    }
  }, [authenticated]);

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
        <Box mt="l">
          <ActionBarFeature data={actionBarData} />
        </Box>
        <FeatureFeedProvider Component={FeatureFeed} options={options} />
      </Cell>
    </Layout>
  );
}

export default InternalHomeFeed;
