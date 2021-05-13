import { useEffect } from 'react';
import { useRouter } from 'next/router';
import get from 'lodash/get';
import find from 'lodash/find';
import kebabCase from 'lodash/kebabCase';
import toLower from 'lodash/toLower';

import flags from 'config/flags';
import { CommunitiesProvider } from 'providers';
import { useGroupPreferences, useGroupFacetFilters } from 'hooks';
import { CommunitySingle, Layout } from 'components';
import { Box, Cell, Loader, utils } from 'ui-kit';

export default function Community(props) {
  const router = useRouter();
  const { title } = router.query;
  const {
    preferences,
    subPreferences,
    loading: preferenceLoading,
  } = useGroupPreferences();

  const options = {
    variables: {
      facet: 'subPreference',
      facetFilters: [`preference:${title}`],
    },
  };

  const { loading: facetLoading, facets } = useGroupFacetFilters(options);

  const formatTitleAsUrl = title => kebabCase(toLower(title));
  const slug = formatTitleAsUrl(title);

  const preference = find(
    preferences,
    n => formatTitleAsUrl(get(n, 'title', '')) === slug
  );
  const unknownPreference = !preferenceLoading && !preference;

  const loading = facetLoading || preferenceLoading;

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
      data={{ ...preference, subPreferences, facets, loading }}
    />
  );
}
