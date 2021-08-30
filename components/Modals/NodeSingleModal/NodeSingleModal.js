import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { useNode } from 'hooks';

import { createMarkup } from 'utils';
import { Box, Modal, Longform } from 'ui-kit';

function NodeSingleModal(props = {}) {
  const { item } = useNode({
    variables: {
      id: props?.id,
    },
  });

  return (
    <Modal {...props}>
      {!isEmpty(item?.title) && <Box as="h2">{item?.title}</Box>}
      {!isEmpty(item?.htmlContent) && (
        <Longform dangerouslySetInnerHTML={createMarkup(item?.htmlContent)} />
      )}
    </Modal>
  );
}

NodeSingleModal.propTypes = {
  // ...Modal.propTypes,
};

NodeSingleModal.defaultProps = {};

export default NodeSingleModal;
