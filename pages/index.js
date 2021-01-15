import React from 'react';

import { FeatureFeedProvider } from '../providers';
import { Layout, FeatureFeed } from '../components';

export default function Home(props = {}) {
  return (
    <Layout title="Home">
      <FeatureFeedProvider Component={FeatureFeed} />
    </Layout>
  );
}