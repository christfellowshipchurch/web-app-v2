import React from 'react';
import PropTypes from 'prop-types';

import { useModalDispatch, hideModal } from 'providers/ModalProvider';

import { Box, Button, Icon } from 'ui-kit';

function NotifyMeSuccess(props = {}) {
  const modalDispatch = useModalDispatch();

  const handleDone = () => {
    modalDispatch(hideModal());
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box
        textAlign="center"
        as="h2"
        color="success"
        display="flex"
        flexDirection="column"
      >
        <Icon name="checkCircle" color="success" size="64" mb="xs" />
        {`You're all set!`}
      </Box>
      <Box textAlign="center" as="p" mb="l" px="l">
        <Box as="p">
          You'll receive a notification when these groups become available.
        </Box>
      </Box>

      <Button onClick={handleDone} size="l" width="100%">
        Done
      </Button>
    </Box>
  );
}

NotifyMeSuccess.propTypes = {
  title: PropTypes.string,
};

NotifyMeSuccess.defaultProps = {
  title: 'Remind Me',
};

export default NotifyMeSuccess;
