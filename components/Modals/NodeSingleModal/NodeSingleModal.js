import React from 'react';
import { Modal } from 'ui-kit';
import { NodeProvider } from 'providers';

import NodeSingle from './NodeSingle';

function NodeSingleModal(props = {}) {
  function render(step) {
    switch (step) {
      case 0: {
        return <Form {...props} />;
      }
      case 1: {
        return <Success />;
      }
      default: {
        return <Form {...props} />;
      }
    }
  }

  console.log('HELLO?');
  return <Modal {...props}>{render}</Modal>;

  return (
    <Modal {...props}>
      <NodeProvider Component={NodeSingle} />
    </Modal>
  );
}

NodeSingleModal.propTypes = {
  ...Modal.propTypes,
};

NodeSingleModal.defaultProps = {};

export default NodeSingleModal;
