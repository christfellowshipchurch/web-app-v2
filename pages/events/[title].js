import { useRouter } from 'next/router';

import { initializeApollo } from 'lib/apolloClient';
import { slugify } from 'utils';
import { ContentItemProvider } from 'providers';
import { GET_EVENT } from 'hooks/useEvent';
import { GET_EVENTS } from 'hooks/useEvents';
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
