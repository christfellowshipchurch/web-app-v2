import { initializeApollo } from '../../config/apolloClient';
import { EventsProvider } from '../../providers';
import { GET_EVENTS } from '../../hooks/useEvents';
import { GET_WEBSITE_HEADER } from '../../hooks/useWebsiteNavigation';
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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_WEBSITE_HEADER,
    variables: { website: process.env.NEXT_PUBLIC_WEBSITE_KEY },
  });

  await apolloClient.query({ query: GET_EVENTS });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
