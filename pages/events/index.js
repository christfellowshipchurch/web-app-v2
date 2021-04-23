import { initializeApollo } from 'lib/apolloClient';
import { EventsFeedProvider } from 'providers';
import { GET_EVENTS } from 'hooks/useEvents';
import { Box, Cell, utils } from 'ui-kit';
import { Layout, FeatureFeed } from 'components';

export default function Events() {
  return (
    <Layout title="Events">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Box as="h1" mb="l">
          Events
        </Box>
        <EventsFeedProvider Component={FeatureFeed} />
      </Cell>
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
