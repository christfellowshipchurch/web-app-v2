import { LargeImage, Layout, MainPhotoHeader } from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { GET_MESSAGE_CHANNEL } from 'hooks/useMessageChannel';
import { CardGrid } from 'ui-kit';
import { useRouter } from 'next/router';

function getItemId(id) {
  return `UniversalContentItem:${id}`;
}

export default function Channel({ item }) {
  const router = useRouter();
  return (
    <Layout title="Watch">
      <MainPhotoHeader src={item?.coverImage.sources?.[0]?.uri} />
      <CardGrid
        columns="3"
        gridColumnGap="l"
        breakpoints={[
          { breakpoint: 'lg', columns: 1 },
          { breakpoint: 'xl', columns: 2 },
        ]}
        my="m"
      >
        {item.childContentItemsConnection?.edges.map(({ node }) => (
          <LargeImage
            text={node.title}
            color="white"
            src={item.coverImage.sources?.[0].uri}
            height="350px"
            width="400px"
            action={() =>
              router.push(
                `/watch/${item.id.split(':')[1]}/${node.id.split(':')[1]}`
              )
            }
          />
        ))}
      </CardGrid>
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
