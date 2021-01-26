import { useRouter } from 'next/router';
import { get, find, kebabCase, toLower } from 'lodash';

import { CommunitiesProvider } from 'providers';
import { usePreferences } from 'hooks';
import { CommunitySingle, Layout } from 'components';

export default function Community(props) {
  const { preferences, subpreferences } = usePreferences();
  const router = useRouter();
  const { title } = router.query;
  const formatTitleAsUrl = title => kebabCase(toLower(title));

  const preference = find(
    preferences,
    n => formatTitleAsUrl(get(n, 'title', '')) === formatTitleAsUrl(title)
  );

  return (
    <Layout title={title}>
      <CommunitiesProvider
        Component={CommunitySingle}
        data={{ ...preference, subpreferences }}
      />
    </Layout>
  );
}
