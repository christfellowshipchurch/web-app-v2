import React from 'react';
import { Box, Modal } from 'ui-kit';

function NodeSingleModal(props = {}) {
  console.log('NodeSingleModal props', props);
  return (
    <Modal {...props}>
      <Box as="h1">HELLO THERE</Box>
    </Modal>
  );
}

NodeSingleModal.propTypes = {
  ...Modal.propTypes,
};

NodeSingleModal.defaultProps = {};

export default NodeSingleModal;
