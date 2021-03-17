import React from 'react';

import { Loader } from 'ui-kit';
import { DiscoverFilterSection } from 'components';

const DiscoverFiltersMap = props => {
  if (props.loading) return <Loader justifyContent="center" />;

  return props.data
    .map(edge => edge.node)
    .map((node, i) => (
      <DiscoverFilterSection key={i} contentId={node?.id} title={node?.title} />
    ));
};

export default DiscoverFiltersMap;
