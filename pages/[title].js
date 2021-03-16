import React from 'react';
import { useRouter } from 'next/router';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { GET_FEATURE } from 'hooks/useFeature';
import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';

export default function PageBuilder(props = {}) {
  const router = useRouter();
  const { title } = router.query;
  const formatTitleAsUrl = title => kebabCase(toLower(title));

  const options = {
    variables: {
      pathname: title,
    },
  };

  return (
    <Layout title={formatTitleAsUrl}>
      <FeatureFeedProvider Component={FeatureFeed} options={options} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const featureFeed = await apolloClient.query({
    query: GET_FEATURE_FEED,
    variables: { pathname: 'home' },
  });
  const features = featureFeed?.data?.featuresFeed?.features || [];

  let promises = [];
  features.map(item =>
    promises.push(
      apolloClient.query({
        query: GET_FEATURE,
        variables: {
          featureId: item?.id,
        },
      })
    )
  );
  await Promise.all(promises);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
