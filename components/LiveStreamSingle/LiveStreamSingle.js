import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout } from 'components';

function LiveStreamSingle(props = {}) {
  return (
    <ContentLayout
      title={props.data?.relatedNode?.title}
      summary={props.data?.relatedNode?.summary}
      coverImage={props.data?.relatedNode?.coverImage?.sources[0]?.uri}
    />
  );
}

LiveStreamSingle.propTypes = {
  data: PropTypes.object,
};

export default LiveStreamSingle;
