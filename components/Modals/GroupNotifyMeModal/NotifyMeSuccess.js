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
      <Box textAlign="center" as="h2">
        {props.title}
      </Box>
      <Box textAlign="center" as="p" my="l" px="l">
        <Icon name="checkCircle" color="success" size="64" mb="base" />
        <Box as="p">You're on the notification list!</Box>
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
  title: 'Notify Me',
};

export default NotifyMeSuccess;
