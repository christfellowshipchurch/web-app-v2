import {
  ActionBarFeature,
  ClientSideComponent,
  FeatureFeed,
  Layout,
} from 'components';
import { useRouter } from 'next/router';
import { FeatureFeedProvider } from 'providers';
import { useAuth } from 'providers/AuthProvider';
import React, { useEffect, useState } from 'react';
import { Box, Cell, Loader, utils } from 'ui-kit';

/**
 * todo : For now we will manage the ActionBar data from here, but eventually we may want to move it over to the home-feed from the API
 */
import actionBarData from 'lib/actionBarData';

function InternalHomeFeed() {
  const [{ authenticated, rockPersonId }] = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If the user isn't signed in, let's send them to home page. We also want to check for a Rock Person ID being passed in the URL and give it a chance to authenticate.
    if (
      (!authenticated && rockPersonId === 'invalid') ||
      (!authenticated && rockPersonId === null)
    ) {
      router.push('/');
    }
  }, [authenticated, rockPersonId]); // eslint-disable-line

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
        {/* Hard coded Actionbar on top of HomeFeed. */}
        {authenticated ? (
          <>
            <Box mt="l">
              <ActionBarFeature data={actionBarData} />
            </Box>
            <FeatureFeedProvider Component={FeatureFeed} options={options} />
          </>
        ) : (
          <Box p="xxl" width="100%" display="flex" justifyContent="center">
            <Loader />
          </Box>
        )}
      </Cell>
    </Layout>
  );
}

export default InternalHomeFeed;
