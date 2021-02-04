import { useRouter } from 'next/router';
import get from 'lodash/get';
import find from 'lodash/find';
import kebabCase from 'lodash/kebabCase';
import toLower from 'lodash/toLower';

import { CommunitiesProvider } from 'providers';
import { useGroupPreferences } from 'hooks';
import { CommunitySingle, Layout } from 'components';

export default function Community(props) {
  const { preferences, subPreferences } = useGroupPreferences();
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
        data={{ ...preference, subPreferences }}
        slug={title}
      />
    </Layout>
  );
}
