import { useRouter } from 'next/router';

import { initializeApollo } from 'lib/apolloClient';
import { ContentItemProvider } from 'providers';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { EventSingle, Layout } from 'components';

export default function Event(props) {
  const router = useRouter();
  const { title } = router.query;

  const options = {
    variables: {
      pathname: `events/${title}`,
    },
  };

  return (
    <Layout title={title}>
      <ContentItemProvider Component={EventSingle} options={options} />
    </Layout>
  );
}
