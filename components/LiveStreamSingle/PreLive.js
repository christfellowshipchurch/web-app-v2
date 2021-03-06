import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout } from 'components';
import { Box } from 'ui-kit';

function PreLive(props = {}) {
  return (
    <>
      <ContentLayout
        title={props.data?.relatedNode?.title}
        summary={props.data?.relatedNode?.summary}
        coverImage={props.data?.relatedNode?.coverImage?.sources[0]?.uri}
        renderD={() => (
          <Box as="p" fontSize="s">
            Coming soon
          </Box>
        )}
      />
    </>
  );
}

PreLive.propTypes = {
  data: PropTypes.object,
};

export default PreLive;
