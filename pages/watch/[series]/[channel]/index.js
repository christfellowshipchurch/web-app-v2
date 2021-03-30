import { LargeImage, Layout, MainPhotoHeader } from 'components';
import {
  GET_MESSAGE_CHANNEL,
} from 'hooks/useMessageChannel';
import { Box, Button, Loader } from 'ui-kit';
import { useRouter } from 'next/router';
import { getIdSuffix, getItemId } from 'utils';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { initializeApollo } from 'lib/apolloClient';

export default function Channel({ item }) {
  const router = useRouter();
  const theme = useTheme();

  const [videos, setVideos] = useState(
    item?.childContentItemsConnection?.edges
  );
  const [cursor, setCursor] = useState(
    item?.childContentItemsConnection?.pageInfo?.endCursor
  );
  const [loadingMore, setLoadingMore] = useState(false);

  const [fetchVideos, { loading }] = useLazyQuery(GET_MESSAGE_CHANNEL, {
    onCompleted: data => {
      setVideos([...videos, ...data?.node?.childContentItemsConnection?.edges]);
      setCursor(data?.node?.childContentItemsConnection?.pageInfo?.endCursor);
      setLoadingMore(false);
    },
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout title="Watch">
      <MainPhotoHeader src={item?.coverImage.sources?.[0]?.uri} />
      <Box
        display="flex"
        my="m"
        mr={`-${theme.space.m}`}
        px="xxl"
        flexWrap="wrap"
        justifyContent="center"
      >
        {videos.map(({ node }) => (
          <LargeImage
            key={node.id}
            text={node.title}
            color="white"
            src={item.coverImage.sources?.[0].uri}
            height="350px"
            flex="1 0 400px"
            mr="m"
            mb="m"
            action={() =>
              router.push(
                `/watch/${router.query.series}/${
                  router.query.channel
                }/${getIdSuffix(node.id)}`
              )
            }
          />
        ))}
        <Button
          onClick={() => {
            setLoadingMore(true);
            fetchVideos({
              variables: { itemId: item.id, after: cursor },
            });
          }}
          status={loadingMore ? 'LOADING' : 'SUCCESS'}
        >
          {loadingMore ? 'Loading More' : 'Load More'}
        </Button>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const itemResponse = await apolloClient.query({
    query: GET_MESSAGE_CHANNEL,
    variables: {
      itemId: getItemId(context.params.channel),
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      item: itemResponse?.data?.node,
    },
  };
}
