import { useRouter } from 'next/router';
import get from 'lodash/get';
import find from 'lodash/find';
import kebabCase from 'lodash/kebabCase';
import toLower from 'lodash/toLower';

import { CommunitiesProvider } from 'providers';
import { useGroupPreferences } from 'hooks';
import { CommunitySingle, Layout } from 'components';
import { Box, Loader } from 'ui-kit';

export default function Community(props) {
  const { preferences, subPreferences, loading } = useGroupPreferences();
  const router = useRouter();
  const { title } = router.query;

  const formatTitleAsUrl = title => kebabCase(toLower(title));
  const slug = formatTitleAsUrl(title);

  const preference = find(
    preferences,
    n => formatTitleAsUrl(get(n, 'title', '')) === slug
  );
  const unknownPreference = !loading && !preference;

  if (loading || unknownPreference) {
    if (unknownPreference) {
      router.push('/community');
    }

    return (
      <Layout>
        <Box mt="xl" mb="xxl" display="flex" justifyContent="center">
          <Loader my="xl" />
        </Box>
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
