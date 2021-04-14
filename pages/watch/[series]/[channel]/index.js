import { LargeImage, Layout, MainPhotoHeader } from 'components';
import { GET_MESSAGE_CHANNEL } from 'hooks/useMessageChannel';
import { Box, Button, Loader, Section } from 'ui-kit';
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

  const [fetchVideos, { loading }] = useLazyQuery(GET_MESSAGE_CHANNEL, {
    onCompleted: data => {
      setVideos([...videos, ...data?.node?.childContentItemsConnection?.edges]);
      setCursor(data?.node?.childContentItemsConnection?.pageInfo?.endCursor);
    },
  });

  const totalVideoCount = item?.childContentItemsConnection?.totalCount || 0;

  return (
    <Layout title="Watch">
      <MainPhotoHeader src={item?.coverImage.sources?.[0]?.uri} />
      <Section
        my="m"
        mr={`-${theme.space.m}`}
        px="xxl"
        contentProps={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'center' }}
      >
        {videos.map(({ node }) => (
          <LargeImage
            key={node.id}
            text={node.title}
            color="white"
            src={item.coverImage.sources?.[0].uri}
            height="350px"
            flex="0 0 400px"
            mx="s"
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
      </Section>
      {totalVideoCount > videos.length ? (
        <Button
          onClick={() => {
            fetchVideos({
              variables: { itemId: item.id, after: cursor },
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
