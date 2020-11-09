import { useRouter } from 'next/router';

import { initializeApollo } from '../../lib/apolloClient';
import { slugify } from '../../utils';
import { EventProvider } from '../../providers';
import { GET_EVENT } from '../../hooks/useEvent';
import { GET_EVENTS } from '../../hooks/useEvents';
import { EventSingle, Layout } from '../../components';

export default function Event(props) {
  const router = useRouter();
  const { title } = router.query;

  return (
    <Layout title={title}>
      <EventProvider Component={EventSingle} title={title} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_EVENT,
    variables: { title: context.params.title },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const query = await apolloClient.query({ query: GET_EVENTS });
  const events = query.data.allEvents;

  const paths = events.map(event => ({
    params: { title: slugify(event.title) },
  }));

  return { paths, fallback: false };
}
