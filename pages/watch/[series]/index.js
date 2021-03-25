import { LargeImage, Layout } from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { Box, Heading } from 'ui-kit';
import { useRouter } from 'next/router';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { getChannelId, getIdSuffix } from 'utils';
import { useTheme } from 'styled-components';

export default function Series({ series }) {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Layout title="Watch">
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
        px="xxl"
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
            flex="1 0 400px"
            mr="m"
            mb="m"
            action={() =>
              router.push(
                `/watch/${router.query.series}/${getIdSuffix(node.id)}`
              )
            }
          />
        ))}
      </Box>
    </Layout>
  );
}

export async function getServerSideProps(context) {
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
  };
}
