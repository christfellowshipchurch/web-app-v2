import React from 'react';
import PropTypes from 'prop-types';

import { useModalDispatch, hideModal } from 'providers/ModalProvider';

import { Box, Button, Icon } from 'ui-kit';

function NotifyMeError(props = {}) {
  const modalDispatch = useModalDispatch();

  const handleDone = () => {
    modalDispatch(hideModal());
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box
        textAlign="center"
        as="h2"
        color="warning"
        display="flex"
        flexDirection="column"
      >
        {`That wasn't suppose to happen!`}
      </Box>
      <Box textAlign="center" as="p" mb="l" px="l">
        <Box as="p">Something went wrong. Please try again later.</Box>
      </Box>

      <Button onClick={handleDone} size="l" width="100%">
        Done
      </Button>
    </Box>
  );
}

NotifyMeError.propTypes = {
  title: PropTypes.string,
};

NotifyMeError.defaultProps = {
  title: 'Remind Me',
};

export default NotifyMeError;
