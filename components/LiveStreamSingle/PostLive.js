import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout } from 'components';
import { Cell } from 'ui-kit';

function PostLive(props = {}) {
  return (
    <Cell px="base" pt={{ _: 'l', lg: 'xl' }}>
      <ContentLayout
        title={props.data?.relatedNode?.title}
        summary={'Thanks for joining us!'}
        coverImage={props.data?.relatedNode?.coverImage?.sources[0]?.uri}
      />
    </Cell>
  );
}

PostLive.propTypes = {
  data: PropTypes.object,
};

export default PostLive;
