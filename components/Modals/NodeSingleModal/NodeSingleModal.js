import React from 'react';
import { Box, Modal } from 'ui-kit';
import { NodeProvider } from 'providers';
import NodeSingle from './NodeSingle';

function NodeSingleModal(props = {}) {
  const options = {
    variables: {
      id: props?.id,
    },
  };

  return (
    <Modal {...props}>
      <NodeProvider Component={NodeSingle} options={options} />
    </Modal>
  );
}

NodeSingleModal.propTypes = {
  ...Modal.propTypes,
};

NodeSingleModal.defaultProps = {};

export default NodeSingleModal;
