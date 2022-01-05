import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Box, Icon } from 'ui-kit';
import { useRouter } from 'next/router';
import { useModalDispatch, hideModal } from 'providers/ModalProvider';

function GroupEmailConfirmationModal(props = {}) {
  const router = useRouter();
  const modalDispatch = useModalDispatch();

  return (
    <Modal
      {...props}
      maxWidth="280px"
      textAlign="center"
      onClose={() => router?.back()}
    >
      <Icon
        name={props?.status === 'SUCCESS' ? 'paperPlane' : 'x'}
        color={props?.status === 'SUCCESS' ? 'success' : 'alert'}
        size="70"
      />
      <Box as="h3" m="l">
        {props?.statusMessage}
      </Box>

      <Button
        onClick={() => {
          modalDispatch(hideModal());
          if (props?.status === 'SUCCESS') {
            router?.back();
          }
        }}
      >
        Done
      </Button>
    </Modal>
  );
}

GroupEmailConfirmationModal.propTypes = {
  status: PropTypes.string,
  statusMessage: PropTypes.string,
};

GroupEmailConfirmationModal.defaultProps = {
  status: 'ERROR',
  statusMessage: 'Message was not sent.',
};

export default GroupEmailConfirmationModal;
