import { useRouter } from 'next/router';

import { initializeApollo } from 'lib/apolloClient';
import { ContentItemProvider } from 'providers';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { ContentSingle, Layout } from 'components';
import { Box } from 'ui-kit';

function getItemId(slug) {
  const id = slug.split('-').pop();
  return `MediaContentItem:${id}`;
}

export default function Content(props) {
  const router = useRouter();
  const { title } = router.query;

  return (
    <Layout title={title}>
      {title && (
        <ContentItemProvider
          Component={ContentSingle}
          options={{
            variables: { itemId: getItemId(title) },
          }}
        />
      )}
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
