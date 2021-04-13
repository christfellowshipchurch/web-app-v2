import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'ui-kit';
import { ContentLayout } from 'components';

function ContentSingle(props = {}) {
  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.schedule?.friendlyScheduleText}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => <Button variant="secondary">Share</Button>}
      contentTitleD="About"
      htmlContent={props.data.htmlContent}
    />
  );
}

ContentSingle.propTypes = {
  data: PropTypes.array,
};

export default ContentSingle;
