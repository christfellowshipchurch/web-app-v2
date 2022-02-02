import React from 'react';
import { useRouter } from 'next/router';

import { ContentItemProvider } from 'providers';
import { LocationSingle } from 'components';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { initializeApollo } from 'lib/apolloClient';

export default function Location(props = {}) {
  const router = useRouter();
  const { query } = router;
  const { title } = query;

  const options = {
    variables: {
      pathname: `locations/${title}`,
    },
  };

  return <ContentItemProvider Component={LocationSingle} options={options} />;
}

// This function gets called at build time to generate the titles for _all_ messages
export async function getStaticPaths() {
  // todo : make this a Network request so that it's dynamic
  const titles = ['palm-beach-gardens'];

  return {
    paths: titles.map(title => `/locations/${title}`),
    // Enable statically generating additional pages
    // For example: `/messages/another-great-sermon`
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  return {
    props: {},
  };
}
