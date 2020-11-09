import { initializeApollo } from '../../lib/apolloClient';
import { EventsProvider } from '../../providers';
import { GET_EVENTS } from '../../hooks/useEvents';
import { Box } from '../../ui-kit';
import { EventsGrid, Layout } from '../../components';

export default function Events() {
  return (
    <Layout title="Events">
      <Box as="h1" mb="l">
        Events
      </Box>
      <EventsProvider Component={EventsGrid} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: GET_EVENTS });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
