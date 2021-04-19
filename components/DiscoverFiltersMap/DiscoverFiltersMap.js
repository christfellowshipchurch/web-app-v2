import React from 'react';

import { DiscoverFilterSection } from 'components';

const DiscoverFiltersMap = props => {
  return props.data
    .map(edge => edge.node)
    .map((node, i) => (
      <DiscoverFilterSection key={i} contentId={node?.id} title={node?.title} />
    ));
};

export default DiscoverFiltersMap;
