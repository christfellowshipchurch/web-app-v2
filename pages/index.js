import { initializeApollo } from 'lib/apolloClient';

import { FeedFeaturesProvider } from 'providers';
import { HomeFeed, Layout } from 'components';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import { getChannelId, getIdSuffix, getItemId, getMediaSource } from 'utils';
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
  const sermonVideos = sermons.filter(({ node }) => getMediaSource(node));
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
      itemId: getChannelId(IDS.CHANNELS.ARTICLES),
    },
  });

  // sort events
  const { data: eventsData } = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: getChannelId(IDS.CHANNELS.EVENTS),
    },
  });
  const events =
    [...eventsData?.node?.childContentItemsConnection?.edges] || [];
  events.sort((a, b) => {
    const date1 = a.node.dates?.split(',')[0];
    const date2 = b.node.dates?.split(',')[0];
    return date1 > date2 ? 1 : -1;
  });

  const moreMessagesImage =
    sermonVideos?.[1]?.node?.seriesImage ||
    sermonVideos?.[1]?.node?.seriesBackgroundImage ||
    '';

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      articles: articles?.data?.node?.childContentItemsConnection?.edges,
      events,
      sermon: {
        ...sermonRequest?.data?.node,
        videos: latestSermon?.videos,
        moreMessagesImage,
      },
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60, // In seconds
  };
}
