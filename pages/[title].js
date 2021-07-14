import React from 'react';
import { useRouter } from 'next/router';
import { kebabCase, toLower, camelCase, capitalize } from 'lodash';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { GET_FEATURE } from 'hooks/useFeature';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { FeatureFeedProvider, ContentItemProvider } from 'providers';
import { Layout, FeatureFeed, ContentSingle, PageSingle } from 'components';

export default function PageBuilder(props = {}) {
  const router = useRouter();
  const { query } = router;
  const { title } = query;
  const formatTitleAsUrl = title => kebabCase(toLower(title));

  const options = {
    variables: {
      pathname: title,
    },
  };

  if (title && title.length) {
    return <ContentItemProvider Component={PageSingle} options={options} />;
  }

  return (
    <Layout title={capitalize(title)}>
      <FeatureFeedProvider Component={FeatureFeed} options={options} />
    </Layout>
  );
}

// This function gets called at build time to generate the titles for _all_ messages
export async function getStaticPaths() {
  // todo : make this a Network request so that it's dynamic
  const titles = [];

  return {
    paths: titles.map(title => title),
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
    variables: { pathname: params.title },
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

// export async function getServerSideProps() {
//   const apolloClient = initializeApollo();

//   const featureFeed = await apolloClient.query({
//     query: GET_FEATURE_FEED,
//     variables: { pathname: 'home' },
//   });
//   const features = featureFeed?.data?.featuresFeed?.features || [];

//   let promises = [];
//   features.map(item =>
//     promises.push(
//       apolloClient.query({
//         query: GET_FEATURE,
//         variables: {
//           featureId: item?.id,
//         },
//       })
//     )
//   );
//   await Promise.all(promises);

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// }
