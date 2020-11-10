import React from 'react';

import { Box, systemPropTypes } from '../../ui-kit';

function ClientSideComponent(props = {}) {
  return (
    <Box suppressHydrationWarning={true} {...props}>
      {process.browser ? props.children : null}
    </Box>
  );
}

ClientSideComponent.propTypes = {
  ...systemPropTypes,
};

export default ClientSideComponent;
