import React from 'react';

import { FeatureFeedProvider } from 'providers';
import { Layout, FeatureFeed } from 'components';
import { Cell, utils } from 'ui-kit';

export default function Connect(props = {}) {
  const options = {
    variables: {
      pathname: 'connect',
    },
  };

  return (
    <Layout title="Connect">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <FeatureFeedProvider Component={FeatureFeed} options={options} />
      </Cell>
    </Layout>
  );
}
