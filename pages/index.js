import flatten from 'lodash/flatten';

import { initializeApollo } from 'lib/apolloClient';
import { GET_CONTENT_FEED } from 'hooks/useContentFeed';
import { GET_HOME_FEED_FEATURES } from 'hooks/useHomeFeedFeatures';
import { Layout } from 'components';

import { FeedFeaturesProvider } from 'providers';
import { HomeFeed } from 'components';

export default function Home(props = {}) {
  return (
    <Layout title="Home">
      <FeedFeaturesProvider Component={HomeFeed} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  // const features = await apolloClient.query({ query: GET_HOME_FEED_FEATURES });
  // const data = features?.data?.homeFeedFeatures;
  // const actions = flatten(data.features.map(({ actions }) => actions));
  // let promises = [];
  // actions
  //   .filter(action => Boolean(action))
  //   .map(item =>
  //     promises.push(
  //       apolloClient.query({
  //         query: GET_CONTENT_FEED,
  //         variables: {
  //           itemId: item?.relatedNode?.id,
  //           child: true,
  //           sibling: false,
  //         },
  //       })
  //     )
  //   );
  // await Promise.all(promises);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
