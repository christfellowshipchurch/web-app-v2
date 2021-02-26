import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';

function GroupSummary(props = {}) {
  return (
    <Box display="flex" flexDirection="column">
      <Box textAlign="center" as="h2" mb="l">
        {props.title}
      </Box>
      <Box
        textAlign="center"
        as="p"
        mb="l"
        px="l"
        maxHeight="40vh"
        overflow="scroll"
      >
        {props.summary}
      </Box>
    </Box>
  );
}

GroupSummary.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string.isRequired,
};

GroupSummary.defaultProps = {
  title: 'Group Summary',
};

export default GroupSummary;
