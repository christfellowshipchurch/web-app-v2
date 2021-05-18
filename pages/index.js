import { initializeApollo } from 'lib/apolloClient';

import { FeedFeaturesProvider } from 'providers';
import { HomeFeed, Layout } from 'components';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import { getChannelId, getIdSuffix, getItemId } from 'utils';
import IDS from 'config/ids';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';

export default function Home({ dropdownData, ...props } = {}) {
  return (
    <Layout title="Home" dropdownData={dropdownData}>
      <FeedFeaturesProvider Component={HomeFeed} {...props} />
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const sermonsRequest = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: getChannelId(IDS.MESSAGES.SUNDAY),
    },
  });

  const sermons =
    sermonsRequest?.data?.node?.childContentItemsConnection?.edges;
  const sermonVideos = sermons.filter(
    ({ node }) => node?.videos?.[0]?.sources?.[0]?.uri
  );
  const latestSermon = sermonVideos[0]?.node;

  const sermonRequest = await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: {
      itemId: getItemId(getIdSuffix(latestSermon?.id)),
    },
    skip: !latestSermon,
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
      sermon: {
        ...sermonRequest?.data?.node,
        videos: latestSermon?.videos,
      },
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60, // In seconds
  };
}
