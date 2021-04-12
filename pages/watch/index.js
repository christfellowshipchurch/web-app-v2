import {
  Carousel,
  LargeImage,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  PageSplit,
  VideoPlayer,
} from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { useRouter } from 'next/router';
import IDS from 'config/ids';
import { Box, Button, CardGrid, Heading, Section } from 'ui-kit';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import { getChannelId, getIdSuffix } from 'utils';

export default function Watch({ series, watch, sermons }) {
  const router = useRouter();

  const ctas = watch?.node?.ctaLinks;

  const coverVideo = sermons?.[0]?.node;

  return (
    <Layout title="Watch">
      <MainPhotoHeader
        src={coverVideo?.coverImage?.sources?.[0]?.uri}
        title={coverVideo?.title}
        subtitle={coverVideo?.subtitle}
        summary={coverVideo?.summary}
        content={
          <>
            <Box
              position="absolute"
              top="0"
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
              display={{ _: 'none', md: 'flex' }}
            >
              <Carousel
                neighbors="3d"
                contentWidth="681px"
                pl={{ _: '0', lg: 'xxl' }}
                childProps={i => ({
                  style: {
                    width: '100%',
                  },
                })}
              >
                {[coverVideo].map(sermon =>
                  sermon?.videos?.[0]?.sources?.[0]?.uri ? (
                    <VideoPlayer
                      key={sermon?.id}
                      src={sermon?.videos?.[0]?.sources?.[0]?.uri}
                      title={sermon?.title}
                      poster={sermon?.coverImage?.sources?.[0]?.uri}
                      style={{ width: '100%' }}
                    />
                  ) : null
                )}
              </Carousel>
            </Box>
          </>
        }
      />
      <Section>
        <CardGrid px="l" py="xl" gridRowGap="l" columns="1">
          {series.map(seriesNode => (
            <Box key={seriesNode.id} display="flex" flexDirection="column">
              <Box display="flex" justifyContent="space-between" width="100%">
                <Heading fontSize="xl" lineHeight="xl" fontWeight="700">
                  {seriesNode.name}
                </Heading>
                {seriesNode.childContentItemsConnection?.edges.length > 3 ? (
                  <Heading
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
                columns="3"
                gridColumnGap="m"
                breakpoints={[
                  { breakpoint: 'xl', columns: 2 },
                  { breakpoint: 'lg', columns: 1 },
                ]}
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
                      width="400px"
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
      {ctas?.length ? (
        <>
          <PageSplit title="Other ways to watch" />
          <Section
            px="xl"
            py="l"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {ctas?.map((cta, i) => (
              <MarketingHeadline
                key={i}
                image={{
                  src: cta.image?.sources?.[0]?.uri,
                }}
                justify={i % 2 === 0 ? 'left' : 'right'}
                title={cta.title}
                description={cta.body}
                actions={[
                  {
                    label: cta.buttonText,
                    onClick: () => router.push(cta.buttonLink),
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

export async function getServerSideProps() {
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
      watch:
        watchRequest?.data?.node?.childContentItemsConnection?.edges?.[0] || {},
      sermons: sermons?.data?.node?.childContentItemsConnection?.edges.filter(
        ({ node }) => node?.videos?.[0]?.sources?.[0]?.uri
      ),
    },
  };
}
