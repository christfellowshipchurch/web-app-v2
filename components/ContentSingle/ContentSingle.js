import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button } from 'ui-kit';
import { ContentLayout, Share } from 'components';

function ContentSingle(props = {}) {
  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.schedule?.friendlyScheduleText}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => (
        <Box justifySelf="flex-end">
          <Share title={props.data.title} />
        </Box>
      )}
      contentTitleD="About"
      htmlContent={props.data.htmlContent}
    />
  );
}

ContentSingle.propTypes = {
  data: PropTypes.object,
};

export default ContentSingle;
