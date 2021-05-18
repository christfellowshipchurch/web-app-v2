import { Layout, MainPhotoHeader } from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { GET_MEDIA_CONTENT_ITEM } from 'hooks/useMediaContentItem';
import { useRouter } from 'next/router';
import VideoPlayer from 'components/VideoPlayer/VideoJSPlayer';
import { Heading, Section } from 'ui-kit';
import {
  getMetaData,
  getChannelId,
  getIdSuffix,
  getItemId as getUniversalItemId,
} from 'utils';
import IDS from 'config/ids';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { GET_MESSAGE_CHANNEL } from 'hooks/useMessageChannel';

function getItemId(id) {
  return `MediaContentItem:${id}`;
}

export default function Item({ item, dropdownData } = {}) {
  const router = useRouter();
  if (router.isFallback) {
    return null;
  }

  const src = item.videos?.filter(({ sources }) => sources.length)[0]
    ?.sources[0].uri;

  return (
    <Layout meta={getMetaData(item)} dropdownData={dropdownData}>
      {!src ? (
        <MainPhotoHeader
          src={item.coverImage?.sources?.[0]?.uri}
          showImage={false}
          overlay=""
        />
      ) : null}
      <Section mb="xl" px={{ _: 'l', md: 'xxl' }}>
        {src ? (
          <VideoPlayer
            my="l"
            src={src}
            poster={item?.coverImage?.sources?.[0]?.uri}
          />
        ) : null}
        <Heading variant="h2" fontWeight="800" mb="m">
          {item.title}
        </Heading>
        <Heading variant="h4" fontWeight="500" mb="m">
          {item.summary}
        </Heading>
      </Section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  const itemResponse = await apolloClient.query({
    query: GET_MEDIA_CONTENT_ITEM,
    variables: {
      itemId: getItemId(context.params.item),
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      item: itemResponse?.data?.node,
    },
  };
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  // Get the paths we want to pre-render
  const series = Object.values(IDS.SERIES);

  const channels = (
    await Promise.all(
      series.map(id =>
        apolloClient.query({
          query: GET_MESSAGE_SERIES,
          variables: {
            itemId: getChannelId(id),
          },
        })
      )
    )
  ).flatMap(({ data }) =>
    data.node.childContentItemsConnection?.edges.map(({ node }) => ({
      channelId: node.id,
      seriesId: data.node.id,
    }))
  );

  const items = await Promise.all(
    channels.flatMap(async ({ channelId, seriesId }) => {
      const series = await apolloClient.query({
        query: GET_MESSAGE_CHANNEL,
        variables: {
          itemId: getUniversalItemId(getIdSuffix(channelId)),
        },
      });
      return series.data.node.childContentItemsConnection.edges.map(
        ({ node }) => ({ channelId, seriesId, itemId: node.id })
      );
    })
  );

  const paths = items.flat().map(({ channelId, seriesId, itemId }) => ({
    params: {
      channel: getIdSuffix(channelId),
      series: getIdSuffix(seriesId),
      item: getIdSuffix(itemId),
    },
  }));

  // Fallback true - if a page doesn't exist we will render it on the fly.
  return { paths, fallback: true };
}
