import { Layout, MainPhotoHeader } from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { useRouter } from 'next/router';
import VideoPlayer from 'components/VideoPlayer/VideoJSPlayer';
import { Heading, Section } from 'ui-kit';
import { getMetaData, getChannelId, getIdSuffix, getSlugFromURL } from 'utils';
import IDS from 'config/ids';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { GET_CONTENT_BY_SLUG } from 'hooks/useContentBySlug';

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
    query: GET_CONTENT_BY_SLUG,
    variables: {
      slug: context.params.item,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      item: itemResponse?.data?.getContentBySlug,
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
      channel: node,
      seriesId: data.node.id,
    }))
  );

  const items = await Promise.all(
    channels.flatMap(async ({ channel, seriesId }) => {
      const series = await apolloClient.query({
        query: GET_CONTENT_BY_SLUG,
        variables: {
          slug: getSlugFromURL(channel?.sharing?.url),
        },
      });
      return series.data.getContentBySlug.childContentItemsConnection.edges.map(
        ({ node }) => ({ channel, seriesId, item: node })
      );
    })
  );

  const paths = items.flat().map(({ channel, seriesId, item }) => ({
    params: {
      channel: getSlugFromURL(channel?.sharing?.url),
      series: getIdSuffix(seriesId),
      item: getSlugFromURL(item?.sharing?.url),
    },
  }));

  // Fallback true - if a page doesn't exist we will render it on the fly.
  return { paths, fallback: true };
}
