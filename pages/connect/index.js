import React from 'react';

import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';

export default function Connect(props = {}) {
  const options = {
    variables: {
      pathname: 'connect',
    },
  };

  return (
    <Layout title="Connect">
      <FeatureFeedProvider Component={FeatureFeed} options={options} />
    </Layout>
  );
}
