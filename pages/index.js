import { initializeApollo } from 'lib/apolloClient';
import { Layout } from 'components';

import { FeedFeaturesProvider } from 'providers';
import { HomeFeed } from 'components';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import { getChannelId } from 'utils';
import IDS from 'config/ids';

export default function Home(props = {}) {
  return (
    <Layout title="Home">
      <FeedFeaturesProvider Component={HomeFeed} {...props} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const sermons = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: getChannelId(IDS.MESSAGES.SUNDAY),
    },
  });

  const articles = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: getChannelId(IDS.ARTICLES),
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      articles: articles?.data?.node?.childContentItemsConnection?.edges,
      // Filter out non-video sermons
      sermons: sermons?.data?.node?.childContentItemsConnection?.edges.filter(
        ({ node }) => node?.videos?.[0]?.sources?.[0]?.uri
      ),
    },
  };
}
