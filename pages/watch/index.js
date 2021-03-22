import { LargeImage, Layout, MainPhotoHeader } from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { useRouter } from 'next/router';
import IDS from 'config/ids';
import { Box, CardGrid, Heading } from 'ui-kit';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { flatten } from 'lodash';

function getChannelId(id) {
  return `ContentChannel:${id}`;
}

export default function Watch({ series }) {
  const router = useRouter();
  const allSeries = flatten(series).filter(
    ({ node: seriesNode }) =>
      seriesNode.childContentItemsConnection?.edges.length
  );
  return (
    <Layout title="Watch">
      <MainPhotoHeader src="/watch.jpeg" title="LH Watch" subtitle="" />
      <CardGrid px="xxl" py="xl" gridRowGap="l" columns="1">
        {allSeries.map(({ node: seriesNode }) => (
          <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="space-between" width="100%">
              <Heading fontSize="xl" lineHeight="xl" fontWeight="700">
                {seriesNode.title}
              </Heading>
              {seriesNode.childContentItemsConnection?.edges.length > 3 ? (
                <Heading
                  fontSize="xl"
                  lineHeight="xl"
                  fontWeight="700"
                  color="primary"
                  cursor="pointer"
                  onClick={() =>
                    router.push(`/watch/${seriesNode.id.split(':')[1]}`)
                  }
                >
                  See More
                </Heading>
              ) : null}
            </Box>
            <CardGrid
              columns="3"
              gridColumnGap="l"
              breakpoints={[
                { breakpoint: 'lg', columns: 1 },
                { breakpoint: 'xl', columns: 2 },
              ]}
              my="m"
            >
              {seriesNode.childContentItemsConnection?.edges
                ?.slice(0, 3)
                .map(({ node }) => (
                  <LargeImage
                    text={node.title}
                    color="white"
                    src={seriesNode.coverImage.sources?.[0].uri}
                    height="350px"
                    width="400px"
                    action={() =>
                      router.push(
                        `/watch/${seriesNode.id.split(':')[1]}/${
                          node.id.split(':')[1]
                        }`
                      )
                    }
                  />
                ))}
            </CardGrid>
          </Box>
        ))}
      </CardGrid>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

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
      series: series.map(
        serie => serie?.data?.node?.childContentItemsConnection?.edges
      ),
    },
  };
}
