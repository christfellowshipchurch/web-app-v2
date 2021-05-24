import { useState } from 'react';
import { Layout, MainPhotoHeader, Carousel, VideoPlayer } from 'components';
import { PlayCircle } from 'phosphor-react';
import { initializeApollo } from 'lib/apolloClient';
import { useRouter } from 'next/router';
<<<<<<< HEAD
import { Heading, Section, Box, theme } from 'ui-kit';
import {
  getMetaData,
  getChannelId,
  getIdSuffix,
  getItemId as getUniversalItemId,
} from 'utils';
||||||| ede95df
import VideoPlayer from 'components/VideoPlayer/VideoJSPlayer';
import { Heading, Section } from 'ui-kit';
import {
  getMetaData,
  getChannelId,
  getIdSuffix,
  getItemId as getUniversalItemId,
} from 'utils';
=======
import VideoPlayer from 'components/VideoPlayer/VideoJSPlayer';
import { Heading, Section } from 'ui-kit';
import { getMetaData, getChannelId, getIdSuffix, getSlugFromURL } from 'utils';
>>>>>>> 80224a6d9b29e94ce06585f912ce61d2a84cd844
import IDS from 'config/ids';
import Styled from 'components/HomeFeed/HomeFeed.styles';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { GET_CONTENT_BY_SLUG } from 'hooks/useContentBySlug';

export default function Item({ item, dropdownData } = {}) {
  const router = useRouter();
  const [selectedClip, setSelectedClip] = useState(0);

  const clips = item?.childContentItemsConnection?.edges || [];
  if (router.isFallback) {
    return null;
  }

  return (
    <Layout meta={getMetaData(item)} dropdownData={dropdownData}>
      <Box display="flex" flexDirection="column">
        <MainPhotoHeader
          src={item.coverImage?.sources?.[0]?.uri}
          showImage={false}
          overlay=""
          content={
            !!(
              (clips.length &&
                clips.some(clip => clip?.node?.videos?.length)) ||
              item.videos?.[0]?.sources?.[0]?.uri
            ) && (
              <Box
                position={{ lg: 'absolute' }}
                top="0"
                alignItems="center"
                justifyContent="center"
                background="linear-gradient(89.49deg, #1C1617 -16.61%, rgba(28, 22, 23, 0) 99.62%);"
                height="100%"
                width="100%"
                display={'flex'}
                pl={{ _: '0', lg: '300px' }}
              >
                {clips?.length ? (
                  <Carousel
                    display={{ _: 'none', lg: 'inherit' }}
                    width="100%"
                    neighbors="3d"
                    contentWidth={{ _: '100vw', lg: '681px' }}
                    pl={{ _: '0', lg: '300px' }}
                    onClick={i => setSelectedClip(i)}
                    childProps={i => ({
                      style: {
                        pointerEvents: i !== selectedClip ? 'none' : 'initial',
                        width: '100%',
                      },
                    })}
                  >
                    {clips.map(clip =>
                      clip?.node?.videos?.[0]?.sources?.[0]?.uri || true ? (
                        <VideoPlayer
                          key={clip.node?.id}
                          src={clip.node?.videos?.[0]?.sources?.[0]?.uri}
                          title={clip.node?.title}
                          poster={clip.node?.coverImage?.sources?.[0]?.uri}
                          style={{ width: '681px' }}
                        />
                      ) : null
                    )}
                  </Carousel>
                ) : (
                  <Box
                    width={{ _: '100%', lg: '681px' }}
                    px={{ _: 'l', md: 'xxl', lg: 0 }}
                  >
                    <VideoPlayer
                      key={item.id}
                      src={item.videos?.[0]?.sources?.[0]?.uri}
                      poster={item.coverImage?.sources?.[0]?.uri}
                      style={{ width: '100%' }}
                    />
                  </Box>
                )}
              </Box>
            )
          }
        />
        {clips?.length ? (
          <Box
            flexDirection="column"
            mx={{ _: 'l', md: 'xxl' }}
            mt={{ _: 'm', lg: '-130px' }}
            zIndex="2"
          >
            <Heading variant="h5" color="neutrals.500">
              FULL MESSAGE
            </Heading>
            <Styled.SermonContainer mt="s">
              <Styled.SermonImage
                rounded
                src={item.coverImage?.sources?.[0]?.uri}
                onClick={() => router.push(`/sermon/${getIdSuffix(item.id)}`)}
              />
              <Box position="absolute" right="10px" bottom="10px">
                <PlayCircle
                  size="36"
                  color={`${theme.colors.neutrals[100]}`}
                  opacity="60%"
                />
              </Box>
            </Styled.SermonContainer>
          </Box>
        ) : null}
      </Box>
      <Section mb="xl" px={{ _: 'l', md: 'xxl' }} py={'l'}>
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
