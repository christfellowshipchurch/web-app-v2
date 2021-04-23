import { useRouter } from 'next/router';
import { ContentItemProvider } from 'providers';
import { ContentSingle, Layout } from 'components';

function getItemId(slug) {
  const id = slug.split('-').pop();
  return `MediaContentItem:${id}`;
}

export default function Message(props) {
  const router = useRouter();
  const { title } = router.query;

  const options = {
    variables: {
      pathname: `messages/${title}`,
    },
  };

  return (
    <Layout title={title}>
      <ContentItemProvider Component={ContentSingle} options={options} />
    </Layout>
  );
}

/**
 * todo : Need to fix ServerSideProps, currenlty breaking page.
 */

// export async function getServerSideProps(context) {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: GET_CONTENT_ITEM,
//     variables: { itemId: getItemId(context.params.title) },
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// }
