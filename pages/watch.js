import {
  Layout,
  MainPhotoHeader,
  VideoPlayer,
} from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';

function getItemId(id) {
  return `MediaContentItem:${id}`;
}

export default function Watch({ messages, baptisms }) {
  return (
    <Layout title="Watch">
      <MainPhotoHeader
        src="/watch.jpeg"
        title="LH Watch"
        subtitle=""
      />
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const messages = await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: {
      itemId: getItemId('d437227f6a6b7da4681b482c3f841b60'),
    },
  });

  const baptisms = await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: {
      itemId: getItemId('be35f49307d7297989d3514be788ef2d'),
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      messages: messages?.data?.node,
      baptisms: baptisms?.data?.node,
    },
  };
}
