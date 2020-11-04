import { initializeApollo } from '../config/apolloClient';
import { GET_WEBSITE_HEADER } from '../hooks/useWebsiteNavigation';
import { Box } from '../ui-kit';
import { Layout } from '../components';

export default function About() {
  return (
    <Layout title="About">
      <Box as="h1">About</Box>
      <Box as="p" fontSize="l">
        This is where the page content will go&hellip;
      </Box>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_WEBSITE_HEADER,
    variables: { website: process.env.NEXT_PUBLIC_WEBSITE_KEY },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
