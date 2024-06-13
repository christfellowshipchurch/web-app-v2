import React, { useEffect } from 'react';
import { capitalize } from 'lodash';

import { initializeApollo } from 'lib/apolloClient';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { FeatureFeedProvider, ContentItemProvider } from 'providers';
import { Layout, FeatureFeed, PageSingle } from 'components';
import { useAnalytics } from 'providers/AnalyticsProvider';

// note : We need to create this file to make sure the URL still pulls in the correct Page Builder page for So Good Sisterhood

export default function SoGoodSisterhoodPage() {
  const analytics = useAnalytics();

  const title = 'so-good-sisterhood';

  useEffect(() => {
    analytics.page({
      contentCategory: 'Information',
      mediaType: 'Information',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    variables: {
      pathname: title,
    },
  };

  if (title && title.length) {
    return (
      <Layout title={title}>
        <ContentItemProvider Component={PageSingle} options={options} />;
      </Layout>
    );
  }

  return (
    <Layout title={capitalize(title)}>
      <FeatureFeedProvider Component={FeatureFeed} options={options} />
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: { pathname: 'so-good-sisterhood' },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
