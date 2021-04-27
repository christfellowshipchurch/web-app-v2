import {
  Carousel,
  Countdown,
  LargeImage,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  PageSplit,
} from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { useRouter } from 'next/router';
import IDS from 'config/ids';
import { Box, CardGrid, Heading, Section } from 'ui-kit';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import { getChannelId, getIdSuffix } from 'utils';
import useLiveStreams from 'hooks/useLiveStreams';

export default function Watch({ series, watchPages, sermons }) {
  const router = useRouter();

  const coverVideo = sermons?.[0]?.node;

  const { liveStreams } = useLiveStreams();

  return (
    <Layout title="Watch">
      <MainPhotoHeader
        src={coverVideo?.coverImage?.sources?.[0]?.uri}
        title="Join us live"
        subtitle="UPCOMING"
        summary="Watch live on Sundays at 8:00, 9:30, and 11:15 a.m."
        justifyText="center"
        backdrop={false}
        content={
          <>
            <Box
              position={{ lg: 'absolute' }}
              top="0"
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
              display="flex"
            >
              <Carousel
                neighbors="3d"
                contentWidth={{ _: '100%', lg: '681px' }}
                pl={{ _: 'l', md: 'xxl' }}
                pr={{ _: 'l', md: 'xxl', lg: '0' }}
                childProps={i => ({
                  style: {
                    width: '100%',
                  },
                })}
              >
                {liveStreams.map((liveStream, i) => (
                  <Countdown
                    key={i}
                    onClick={() => router.push(liveStream.webViewUrl)}
                    src={coverVideo?.coverImage?.sources?.[0]?.uri}
                    date={
                      liveStream.eventStartTime
                        ? new Date(liveStream.eventStartTime)
                        : null
                    }
                    buttonText="Church Online"
                  />
                ))}
              </Carousel>
            </Box>
          </>
        }
      />
      <Section>
        <CardGrid
          px={{ _: 'l', md: 'xxl' }}
          my={{ _: 'l', md: 'xxl' }}
          gridRowGap="l"
          columns="1"
        >
          {series.map(seriesNode => (
            <Box key={seriesNode.id} display="flex" flexDirection="column">
              <Box display="flex" justifyContent="space-between" width="100%">
                <Heading
                  fontSize="xl"
                  lineHeight="xl"
                  fontWeight="700"
                  style={{ wordBreak: 'break-word' }}
                >
                  {seriesNode.name}
                </Heading>
                {seriesNode.childContentItemsConnection?.edges.length > 3 ? (
                  <Heading
                    ml="xs"
                    fontSize="xl"
                    lineHeight="xl"
                    fontWeight="700"
                    color="primary"
                    cursor="pointer"
                    onClick={() =>
                      router.push(`/watch/${getIdSuffix(seriesNode.id)}`)
                    }
                  >
                    See More
                  </Heading>
                ) : null}
              </Box>
              <CardGrid
                gridTemplateColumns={{
                  _: 'repeat(1, 1fr)',
                  md: `repeat(2, 1fr)`,
                  lg: `repeat(3, 1fr)`,
                }}
                gridColumnGap="m"
                my="m"
              >
                {seriesNode.childContentItemsConnection?.edges
                  ?.slice(0, 3)
                  .map(({ node }) => (
                    <LargeImage
                      key={node.id}
                      text={node.title}
                      color="white"
                      src={node.coverImage?.sources?.[0].uri}
                      height="350px"
                      maxWidth="400px"
                      action={() =>
                        router.push(
                          `/watch/${getIdSuffix(seriesNode.id)}/${getIdSuffix(
                            node.id
                          )}`
                        )
                      }
                    />
                  ))}
              </CardGrid>
            </Box>
          ))}
        </CardGrid>
      </Section>
      {watchPages?.length ? (
        <>
          <PageSplit title="Other ways to watch" />
          <Section
            px={{ _: 'l', md: 'xxl' }}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {watchPages?.map(({ node: page }, i) => (
              <MarketingHeadline
                key={i}
                image={{
                  src: page.coverImage?.sources?.[0]?.uri,
                }}
                my="l"
                justify={i % 2 === 0 ? 'left' : 'right'}
                title={page.title}
                description={page.summary}
                actions={[
                  {
                    label: page.buttonText,
                    onClick: () =>
                      router.push(
                        page.buttonLink || `/watch/page/${getIdSuffix(page.id)}`
                      ),
                  },
                ]}
              />
            ))}
          </Section>
        </>
      ) : null}
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const sermons = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: getChannelId(IDS.MESSAGES.SUNDAY),
    },
  });

  const watchRequest = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: getChannelId(IDS.WATCH_PAGES),
    },
  });

  const seriesRequests = Object.values(IDS.SERIES).map(async id =>
    apolloClient.query({
      query: GET_MESSAGE_SERIES,
      variables: {
        itemId: getChannelId(id),
      },
    })
  );

  const series = await Promise.all(seriesRequests);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      series: series.map(serie => serie?.data?.node),
      watchPages:
        watchRequest?.data?.node?.childContentItemsConnection?.edges || [],
      sermons: sermons?.data?.node?.childContentItemsConnection?.edges.filter(
        ({ node }) => node?.videos?.[0]?.sources?.[0]?.uri
      )
    },
    revalidate: 60, // In seconds
  };
}
