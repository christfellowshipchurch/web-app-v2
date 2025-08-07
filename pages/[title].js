import React from 'react';
import { useRouter } from 'next/router';
import { capitalize } from 'lodash';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { FeatureFeedProvider, ContentItemProvider } from 'providers';
import { Layout, FeatureFeed, PageSingle } from 'components';

export default function PageBuilder(props = {}) {
  const router = useRouter();
  const { query, isFallback } = router;
  const { title } = query;
  const { pathname } = props;

  // Handle fallback state during static generation
  if (isFallback) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  // Use the pathname from props if available, otherwise from query
  const finalPathname = pathname || title;

  const options = {
    variables: {
      pathname: finalPathname,
    },
  };

  if (finalPathname && finalPathname.length) {
    return (
      <Layout>
        <ContentItemProvider Component={PageSingle} options={options} />
      </Layout>
    );
  }

  return (
    <Layout title={capitalize(finalPathname)}>
      <FeatureFeedProvider Component={FeatureFeed} options={options} />
    </Layout>
  );
}

export async function getStaticPaths() {
  // todo : make this a Network request so that it's dynamic
  const titles = [];

  return {
    paths: titles.map(title => ({ params: { title } })),
    fallback: 'blocking', // Changed from true to 'blocking' for better SSR
  };
}

export async function getStaticProps({ params }) {
  try {
    // Validate params and pathname
    if (!params?.title) {
      console.error('Missing title parameter');
      return {
        notFound: true,
      };
    }

    const pathname = params.title;

    // Log the pathname for debugging
    console.log('Processing pathname:', pathname, 'Type:', typeof pathname);

    // Basic validation for pathname
    if (typeof pathname !== 'string' || pathname.length === 0) {
      console.error('Invalid pathname:', pathname);
      return {
        notFound: true,
      };
    }

    // For now, let's skip server-side GraphQL queries and let the client handle it
    // This avoids the HTTP 400 errors we're seeing
    console.log(
      'Skipping server-side GraphQL query, will handle on client side'
    );

    return {
      props: {
        // Don't pass initialApolloState, let the client fetch the data
        pathname,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);

    // Return notFound for any unhandled errors
    return {
      notFound: true,
    };
  }
}
