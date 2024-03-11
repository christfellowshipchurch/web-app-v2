import React from 'react';
import { useRouter } from 'next/router';
import { capitalize } from 'lodash';

import { initializeApollo } from 'lib/apolloClient';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { FeatureFeedProvider, ContentItemProvider } from 'providers';
import { Layout, FeatureFeed, PageSingle } from 'components';

export default function PageBuilder(props = {}) {
  const router = useRouter();
  const { query } = router;
  const { title } = query;

  const options = {
    variables: {
      pathname: title,
    },
  };

  if (title && title.length) {
    return (
      <Layout>
        <ContentItemProvider Component={PageSingle} options={options} />
      </Layout>
    );
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
