import React from 'react';
import { useRouter } from 'next/router';
import { kebabCase, toLower, capitalize } from 'lodash';

import { initializeApollo } from 'lib/apolloClient';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { FeatureFeedProvider, ContentItemProvider } from 'providers';
import { Layout, FeatureFeed, PageSingle } from 'components';
import { useAnalytics } from 'providers/AnalyticsProvider';

export default function PageBuilder(props = {}) {
  const analytics = useAnalytics();
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
