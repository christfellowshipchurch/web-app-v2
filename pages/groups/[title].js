import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import get from 'lodash/get';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

import flags from 'config/flags';
import { CommunitiesProvider } from 'providers';
import { useGroupPreferences } from 'hooks';
import { CommunitySingle, Layout } from 'components';
import { Box, Cell, Loader, utils } from 'ui-kit';

export default function Community(props) {
  const router = useRouter();

  const { title } = router.query;

  const preferenceOptions = {
    preferencePath: ['groups', title].join('/'),
  };
  const { preference, subPreferences, loading } =
    useGroupPreferences(preferenceOptions);

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

  return (
    <CommunitiesProvider
      Component={CommunitySingle}
      data={{ ...preference, subPreferences, loading }}
    />
  );
}
