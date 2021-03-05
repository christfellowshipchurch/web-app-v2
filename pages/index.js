import { initializeApollo } from 'lib/apolloClient';
import { Layout } from 'components';

import { FeedFeaturesProvider } from 'providers';
import { HomeFeed } from 'components';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';

export default function Home(props = {}) {
  return (
    <Layout title="Home">
      <FeedFeaturesProvider Component={HomeFeed} {...props} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const articleQueries = ['e07dbf80297d466a1a44ac37c6c8f261'].map(async id => {
    const article = await apolloClient.query({
      query: GET_CONTENT_ITEM,
      variables: {
        itemId: `UniversalContentItem:${id}`,
      },
    });

    return article?.data?.node;
  });

  const articles = await Promise.all(articleQueries);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      articles,
    },
  };
}
