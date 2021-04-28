import { useEffect } from 'react';
import { useRouter } from 'next/router';
import get from 'lodash/get';
import find from 'lodash/find';
import kebabCase from 'lodash/kebabCase';
import toLower from 'lodash/toLower';

import flags from 'config/flags';
import { CommunitiesProvider } from 'providers';
import { useGroupPreferences } from 'hooks';
import { CommunitySingle, Layout } from 'components';
import { Box, Cell, Loader, utils } from 'ui-kit';

export default function Community(props) {
  const router = useRouter();

  useEffect(() => {
    if (!flags.GROUP_FINDER) router.push('/');
  }, [router]);

  const { preferences, subPreferences, loading } = useGroupPreferences();

  const { title } = router.query;

  const formatTitleAsUrl = title => kebabCase(toLower(title));
  const slug = formatTitleAsUrl(title);

  const preference = find(
    preferences,
    n => formatTitleAsUrl(get(n, 'title', '')) === slug
  );
  const unknownPreference = !loading && !preference;

  if (!flags.GROUP_FINDER) return null;

  if (loading || unknownPreference) {
    if (unknownPreference) {
      router.push('/community');
    }

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
