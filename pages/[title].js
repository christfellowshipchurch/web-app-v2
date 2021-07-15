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

export async function getStaticPaths() {
  // todo : make this a Network request so that it's dynamic
  const titles = [];

  return {
    paths: titles.map(title => title),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: { pathname: params.title },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
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
