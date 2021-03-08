import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout } from 'components';
import { Box } from 'ui-kit';

function PostLive(props = {}) {
  return (
    <ContentLayout
      title={props.data?.relatedNode?.title}
      summary={props.data?.relatedNode?.summary}
      coverImage={props.data?.relatedNode?.coverImage?.sources[0]?.uri}
      renderD={() => (
        <Box as="p" fontSize="s">
          Thanks for Watching!
        </Box>
      )}
    />
  );
}

PostLive.propTypes = {
  data: PropTypes.object,
};

export default PostLive;
