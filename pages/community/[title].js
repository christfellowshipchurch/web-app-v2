import { useRouter } from 'next/router';
import { get, find, kebabCase, toLower } from 'lodash';

import { CommunityProvider } from 'providers';
import { useCommunities } from 'hooks';
import { CommunitySingle, Layout } from 'components';

export default function Community(props) {
  const { communities } = useCommunities();
  const router = useRouter();
  const { title } = router.query;

  const formatTitleAsUrl = title => kebabCase(toLower(title));

  const commmunity = find(
    communities,
    n => formatTitleAsUrl(get(n, 'title', '')) === formatTitleAsUrl(title)
  );

  return (
    <Layout title={title}>
      <CommunityProvider Component={CommunitySingle} data={commmunity} />
    </Layout>
  );
}
