import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout } from 'components';
import { Box, Button } from 'ui-kit';

function GroupSingle(props = {}) {
  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.schedule?.friendlyScheduleText}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => <Button>Join Meeting</Button>}
      contentTitleD="About"
      renderContentD={() => <Box as="p">{props.data.summary}</Box>}
      contentTitleE="Schedule"
      renderContentE={() => <Box as="p">The schedule will go here&hellip;</Box>}
    />
  );
}

GroupSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default GroupSingle;
