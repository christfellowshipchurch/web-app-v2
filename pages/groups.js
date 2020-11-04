import { initializeApollo } from '../config/apolloClient';
import { GET_WEBSITE_HEADER } from '../hooks/useWebsiteNavigation';
import { Box } from '../ui-kit';
import { Layout } from '../components';

export default function Groups() {
  return (
    <Layout title="Groups">
      <Box as="h1">Groups</Box>
      <Box as="p" fontSize="l">
        This is where the page content will go&hellip;
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_WEBSITE_HEADER,
    variables: { website: process.env.NEXT_PUBLIC_WEBSITE_KEY },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
