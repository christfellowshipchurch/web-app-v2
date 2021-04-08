import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button } from 'ui-kit';
import { ContentLayout } from 'components';

function ContentSingle(props = {}) {
  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.schedule?.friendlyScheduleText}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => (
        <Box justifySelf="flex-end">
          <Button variant="secondary">Share</Button>
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
