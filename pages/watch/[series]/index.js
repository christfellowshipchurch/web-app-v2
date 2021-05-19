import { LargeImage, Layout } from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { Box, Heading, Section } from 'ui-kit';
import IDS from 'config/ids';
import { useRouter } from 'next/router';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { getChannelId, getMetaData, getSlugFromURL } from 'utils';
import { useTheme } from 'styled-components';

export default function Series({ series, dropdownData } = {}) {
  const router = useRouter();
  const theme = useTheme();

  if (router.isFallback) {
    return null;
  }

  return (
    <Layout meta={getMetaData(series)} dropdownData={dropdownData}>
      <Section>
        <Heading
          mt="l"
          textAlign="center"
          fontWeight="800"
          fontSize="h1"
          lineHeight="h1"
        >
          {series.name}
        </Heading>
        <Box
          display="flex"
          my="m"
          mr={`-${theme.space.m}`}
          px={{ _: 'l', md: 'xxl' }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {series.childContentItemsConnection?.edges.map(({ node }) => (
            <LargeImage
              key={node.id}
              text={node.title}
              color="white"
              src={node.coverImage.sources?.[0].uri}
              height="350px"
              maxWidth="400px"
              mr="m"
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
      </Section>
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
      series: seriesResponse?.data?.node,
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
