import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Box, Icon } from 'ui-kit';
import { useRouter } from 'next/router';
import { useModalDispatch, hideModal } from 'providers/ModalProvider';

function GroupEmailConfirmationModal(props = {}) {
  const router = useRouter()
  const modalDispatch = useModalDispatch()
  
  return (
    <Modal 
      {...props} 
      maxWidth="280px"
      textAlign="center"
      onClose={() => router?.back()}
    >
        <Icon 
          name="paperPlane" 
          color="success" 
          size="72"
        />
        <Box as="h1" mt="base">
          Successfully sent email.
        </Box>

        <Button onClick={() => {
          modalDispatch(hideModal())
          router?.back()
        }}>
          Done
        </Button>
    </Modal>
  );
}

GroupEmailConfirmationModal.propTypes = {
  groupId: PropTypes.string.isRequired
};

GroupEmailConfirmationModal.defaultProps = {};

export default GroupEmailConfirmationModal;