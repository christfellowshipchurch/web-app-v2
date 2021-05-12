import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import get from 'lodash/get';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

import flags from 'config/flags';
import { CommunityProvider } from 'providers';
import { useGroupPreference, useGroupPreferences } from 'hooks';
import { CommunitySingle, Layout } from 'components';
import { Box, Cell, Loader, utils } from 'ui-kit';

export default function Community(props) {
  const [preference, setPreference] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!flags.GROUP_FINDER) router.push('/');
  }, [router]);

  const { preferences, loading } = useGroupPreferences();

  console.log({ preference, loading });

  const subPreferences = [];
  // const { subPreferences } = useGroupPreference({
  //   variables: { preferenceId: preference?.id },
  //   skip: isEmpty(preference?.id),
  // });

  useEffect(() => {
    if (!loading) {
      setPreference(
        find(
          preferences,
          n => `/${get(n, 'routing.pathname', '')}` === router.asPath
        )
      );
    }
  }, [preferences]);

  const unknownPreference = !loading && !preference;

  if (!flags.GROUP_FINDER) return null;

  if (loading || unknownPreference) {
    // if (unknownPreference) {
    //   router.push('/community');
    // }

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
    <CommunityProvider
      Component={CommunitySingle}
      data={{ ...preference, subPreferences, loading }}
    />
  );
}
