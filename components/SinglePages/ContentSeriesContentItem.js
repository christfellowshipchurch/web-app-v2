import { LargeImage, Layout, MainPhotoHeader } from 'components';
import { GET_MESSAGE_CHANNEL } from 'hooks/useMessageChannel';
import { Box, Button, Section } from 'ui-kit';
import { useRouter } from 'next/router';
import { getMetaData, getSlugFromURL } from 'utils';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

export default function ContentSeriesContentItem({ item } = {}) {
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

  if (router.isFallback) {
    return null;
  }

  const totalVideoCount = item?.childContentItemsConnection?.totalCount || 0;

  return (
    <Layout meta={getMetaData(item)}>
      <MainPhotoHeader
        src={item?.coverImage.sources?.[0]?.uri}
        title={item?.title}
      />
      <Section>
        <Box
          display="flex"
          my="xl"
          mr={`-${theme.space.m}`}
          px={{ _: 'l', md: 'xxl' }}
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
              maxWidth="400px"
              mr="m"
              mb="m"
              action={() =>
                router.push(`/watch/${getSlugFromURL(node?.sharing?.url)}`)
              }
            />
          ))}
        </Box>
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
