import { initializeApollo } from '../lib/apolloClient';
import { GET_FEED_FEATURES } from '../hooks/useFeedFeatures';
import { Layout } from '../components';

import { FeedFeaturesProvider } from '../providers';
import { HomeFeed } from '../components';

export default function Home(props = {}) {
  return (
    <Layout title="Home">
      <FeedFeaturesProvider Component={HomeFeed} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: GET_FEED_FEATURES });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
