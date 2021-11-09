import { LargeImage, Layout } from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { Box, Button, Heading, Section } from 'ui-kit';
import IDS from 'config/ids';
import { useRouter } from 'next/router';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { getChannelId, getMetaData, getSlugFromURL } from 'utils';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

export default function Series({ item, dropdownData } = {}) {
  const router = useRouter();

  const [series, setSeries] = useState(
    item?.childContentItemsConnection?.edges || []
  );
  const [cursor, setCursor] = useState(
    item?.childContentItemsConnection?.pageInfo?.endCursor
  );

  const [fetchMore, { loading }] = useLazyQuery(GET_MESSAGE_SERIES, {
    onCompleted: data => {
      setSeries([...series, ...data?.node?.childContentItemsConnection?.edges]);
      setCursor(data?.node?.childContentItemsConnection?.pageInfo?.endCursor);
    },
  });

  if (router.isFallback) {
    return null;
  }

  const totalSeriesCount = item?.childContentItemsConnection?.totalCount || 0;

  return (
    <Layout meta={getMetaData(item)} dropdownData={dropdownData}>
      <Heading
        mt="l"
        textAlign="center"
        fontWeight="800"
        fontSize="h1"
        lineHeight="h1"
      >
        {item?.name}
      </Heading>
      <Box display="flex" my="m" flexWrap="wrap" justifyContent="center">
        {series.map(({ node }) => (
          <LargeImage
            key={node?.id}
            text={node?.title}
            color="white"
            src={node?.coverImage?.sources?.[0].uri}
            height={{ sm: '350px' }}
            size={{ _: 's', md: 'm' }}
            maxWidth="400px"
            mx="s"
            mb="m"
            action={() =>
              router.push(
                `/watch/${router.query.series}/${getSlugFromURL(
                  node?.sharing?.url
                )}`
              )
            }
          />
        ))}
      </Box>
      {totalSeriesCount > series?.length ? (
        <Button
          onClick={() => {
            fetchMore({
              variables: { itemId: item?.id, after: cursor },
            });
          }}
          status={loading ? 'LOADING' : 'SUCCESS'}
          mx="auto"
          mb="l"
        >
          {loading ? 'Loading More' : 'Load More'}
        </Button>
      ) : null}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  const seriesResponse = await apolloClient.query({
    query: GET_MESSAGE_SERIES,
    variables: {
      itemId: getChannelId(context.params.series),
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      item: seriesResponse?.data?.node,
    },
    revalidate: 60, // In seconds
  };
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render
  const paths = Object.values(IDS.SERIES).map(id => ({
    params: { series: id },
  }));

  // Fallback true - if a page doesn't exist we will render it on the fly.
  return { paths, fallback: true };
}
