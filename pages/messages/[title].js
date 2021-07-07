import { useRouter } from 'next/router';
import { ContentItemProvider } from 'providers';
import { ContentSingle, Layout } from 'components';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { initializeApollo } from 'lib/apolloClient';

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

// This function gets called at build time to generate the titles for _all_ messages
export async function getStaticPaths() {
  // todo : make this a Network request so that it's dynamic
  const messageTitles = ['declaration-of-dependence'];

  return {
    paths: messageTitles.map(title => ({ params: { title } })),
    // Enable statically generating additional pages
    // For example: `/messages/another-great-sermon`
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: { pathname: `messages/${params.title}` },
  });

  // Pass post data to the page via props
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
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
