import { LargeImage, Layout, MainPhotoHeader } from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { GET_MESSAGE_CHANNEL } from 'hooks/useMessageChannel';
import { Box } from 'ui-kit';
import { useRouter } from 'next/router';
import { getIdSuffix, getItemId } from 'utils';
import { useTheme } from 'styled-components';

export default function Channel({ item }) {
  const router = useRouter();
  const theme = useTheme();

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
        {item.childContentItemsConnection?.edges.map(({ node }) => (
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
                `/watch/${router.query.series}/${router.query.channel}/${getIdSuffix(node.id)}`
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
