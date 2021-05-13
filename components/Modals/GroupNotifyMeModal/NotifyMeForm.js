import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button } from 'ui-kit';

function NotifyMeForm(props = {}) {
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
      {props.callToAction && (
        <Button
          onClick={props.callToAction?.action}
          mt="base"
          size="l"
          width="100%"
        >
          {props.callToAction?.call}
        </Button>
      )}
    </Box>
  );
}

NotifyMeForm.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string.isRequired,
  callToAction: PropTypes.shape({
    call: PropTypes.string,
    action: PropTypes.func,
  }),
};

NotifyMeForm.defaultProps = {
  title: 'Notify Me',
};

export default NotifyMeForm;
