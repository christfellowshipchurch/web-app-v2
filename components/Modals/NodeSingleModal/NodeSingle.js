import React from 'react';
import { createMarkup } from 'utils';
import isEmpty from 'lodash/isEmpty';

import { Box, Longform } from 'ui-kit';

function NodeSingle(props = {}) {
  const node = props?.data;
  return (
    <div>
      {!isEmpty(node?.title) && <Box as="h2">{node?.title}</Box>}
      {!isEmpty(node?.htmlContent) && (
        <Longform dangerouslySetInnerHTML={createMarkup(node?.htmlContent)} />
      )}
    </div>
  );
}

NodeSingle.propTypes = {};

NodeSingle.defaultProps = {};

export default NodeSingle;
