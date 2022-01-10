import { useLazyQuery } from '@apollo/client';
import { LargeImage, Layout, MainPhotoHeader } from 'components';
import IDS from 'config/ids';
import 'core-js/features/promise';
import { format } from 'date-fns';
import { GET_CONTENT_BY_SLUG } from 'hooks/useContentBySlug';
import { GET_MESSAGE_CHANNEL } from 'hooks/useMessageChannel';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { initializeApollo } from 'lib/apolloClient';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { Box, Button, Longform, Section } from 'ui-kit';
import { getChannelId, getIdSuffix, getMetaData, getSlugFromURL } from 'utils';

export default function Channel({ item, dropdownData, messageChannel } = {}) {
  const router = useRouter();
  const theme = useTheme();

  const [videos, setVideos] = useState(
    messageChannel?.childContentItemsConnection?.edges || []
  );
  const [cursor, setCursor] = useState(
    messageChannel?.childContentItemsConnection?.pageInfo?.endCursor
  );

  const [fetchMore, { loading }] = useLazyQuery(GET_MESSAGE_CHANNEL, {
    onCompleted: data => {
      setVideos([...videos, ...data?.node?.childContentItemsConnection?.edges]);
      setCursor(data?.node?.childContentItemsConnection?.pageInfo?.endCursor);
    },
  });

  useEffect(() => {
    setVideos(messageChannel?.childContentItemsConnection?.edges || []);
    setCursor(
      messageChannel?.childContentItemsConnection?.pageInfo?.endCursor || []
    );
  }, [messageChannel]);

  if (router.isFallback) {
    return null;
  }

  const totalVideoCount = item?.childContentItemsConnection?.totalCount || 0;

  return (
    <Layout meta={getMetaData(item)} dropdownData={dropdownData}>
      <MainPhotoHeader
        src={item?.coverImage.sources?.[0]?.uri}
        backgroundSrc={item?.backgroundImage?.sources?.[0]?.uri}
        title={item?.title}
        showTitleOverImage={false}
      />
      <Section mt="xxl">
        <Longform dangerouslySetInnerHTML={{ __html: item?.htmlContent }} />
      </Section>
      <Section>
        <Box
          display="flex"
          my="xl"
          mr={`-${theme.space.m}`}
          flexWrap="wrap"
          justifyContent="center"
        >
          {videos?.map(({ node }) => (
            <LargeImage
              key={node?.id}
              text={node?.title}
              subtext={
                node?.publishDate
                  ? format(new Date(node?.publishDate), 'MMMM do, yyyy')
                  : null
              }
              color="white"
              src={node?.coverImage?.sources?.[0].uri}
              height={{ sm: '350px' }}
              size={{ _: 's', md: 'm' }}
              maxWidth="400px"
              mr="m"
              mb="m"
              action={() =>
                router.push(`/${getSlugFromURL(node?.sharing?.url)}`)
              }
            />
          ))}
        </Box>
      </Section>
      {totalVideoCount > videos?.length ? (
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

  const itemResponse = await apolloClient.query({
    query: GET_CONTENT_BY_SLUG,
    variables: {
      slug: context.params.channel,
    },
  });

  const item = itemResponse.data?.getContentBySlug;

  const messageChannelResponse = await apolloClient.query({
    query: GET_MESSAGE_CHANNEL,
    variables: {
      itemId: item?.id,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      item,
      messageChannel: messageChannelResponse?.data?.node,
    },
  };
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  // Get the paths we want to pre-render
  const series = Object.values(IDS.SERIES);

  const channels = (
    await Promise.all(
      series?.map(id =>
        apolloClient.query({
          query: GET_MESSAGE_SERIES,
          variables: {
            itemId: getChannelId(id),
          },
        })
      )
    )
  ).flatMap(({ data }) =>
    data?.node?.childContentItemsConnection?.edges?.map(({ node }) => ({
      channel: node,
      seriesId: data?.node?.id,
    }))
  );

  const paths = channels.map(({ channel, seriesId }) => ({
    params: {
      channel: getSlugFromURL(channel?.sharing?.url),
      series: getIdSuffix(seriesId),
    },
  }));

  // Fallback true - if a page doesn't exist we will render it on the fly.
  return { paths, fallback: true };
}
