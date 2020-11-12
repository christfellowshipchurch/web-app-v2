import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button } from '../../ui-kit';
import { ContentLayout } from '../';

function ContentSingle(props = {}) {
  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.schedule?.friendlyScheduleText}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => <Button variant="secondary">Share</Button>}
      contentTitleD="About"
      htmlContent={props.data.htmlContent}
      contentTitleE="Resources"
      renderContentE={() => (
        <Box as="p">The resources will go here&hellip;</Box>
      )}
    />
  );
}

ContentSingle.propTypes = {
  data: PropTypes.object,
};

export default ContentSingle;
