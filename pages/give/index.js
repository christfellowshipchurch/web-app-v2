import React, { useEffect } from 'react';

import { initializeApollo } from 'lib/apolloClient';
import { GET_FEATURE_FEED } from 'hooks/useFeatureFeed';
import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';
import { Cell, utils } from 'ui-kit';
import { useAnalytics } from 'providers/AnalyticsProvider';

export default function Give(props) {
  const analytics = useAnalytics();
  const options = {
    variables: {
      pathname: 'give',
    },
  };

  //Segment Page Tracking
  useEffect(() => {
    analytics.page();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Give">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'base', lg: 'l' }}
      >
        <FeatureFeedProvider Component={FeatureFeed} options={options} />
      </Cell>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_FEATURE_FEED,
    variables: { pathname: 'give' },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
