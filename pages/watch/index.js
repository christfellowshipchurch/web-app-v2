import {
  LargeImage,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  PageSplit,
} from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { useRouter } from 'next/router';
import IDS from 'config/ids';
import { Box, CardGrid, Heading } from 'ui-kit';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import { getChannelId, getIdSuffix } from 'utils';

export default function Watch({ series, watch }) {
  const router = useRouter();

  const ctas = watch?.node?.ctaLinks;

  return (
    <Layout title="Watch">
      <MainPhotoHeader src="/watch.jpeg" title="LH Watch" subtitle="" />
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
      {ctas?.length ? (
        <>
          <PageSplit title="Other ways to watch" />
          <CardGrid columns="1" gridRowGap="m">
            {ctas.map((cta, i) => (
              <MarketingHeadline
                key={i}
                src={cta.coverImage?.sources?.[0]?.uri}
                title={cta.title}
                description={cta.description}
                justify={i % 2 ? 'left' : 'right'}
                actions={[
                  {
                    label: cta.buttonText,
                    onClick: () => router.push(cta.buttonLink),
                  },
                ]}
              />
            ))}
          </CardGrid>
        </>
      ) : null}
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const watchRequest = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: getChannelId(IDS.WATCH_PAGES),
    },
  });

  const seriesRequests = Object.values(IDS.MESSAGES).map(async id =>
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
    },
  };
}
