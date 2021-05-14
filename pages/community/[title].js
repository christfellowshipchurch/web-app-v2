import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import get from 'lodash/get';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

import flags from 'config/flags';
import { useGroupPreference, useGroupPreferences } from 'hooks';
import { CommunitySingle, Layout, NotFound } from 'components';
import { Box, Cell, Loader, utils } from 'ui-kit';

export default function Community(props) {
  const router = useRouter();

  const { title } = router.query;

  console.log({ router });

  useEffect(() => {
    if (!flags.GROUP_FINDER) router.push('/');
  }, [router]);

  const {
    preferences,
    preference,
    subPreferences,
    loading,
  } = useGroupPreferences({
    preferencePath: `community/${title}`,
  });

  if (!flags.GROUP_FINDER) return null;

  if (loading) {
    return (
      <Layout>
        <Cell
          as="main"
          maxWidth={utils.rem('1100px')}
          px="base"
          py={{ _: 'l', lg: 'xl' }}
        >
          <Box mt="xl" mb="xxl" display="flex" justifyContent="center">
            <Loader my="xl" />
          </Box>
        </Cell>
      </Layout>
    );
  }

  if (!loading && !preference) {
    return <NotFound />;
  }

  return <CommunitySingle data={{ ...preference, subPreferences }} />;
}
