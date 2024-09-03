import React from 'react';

import { Box, systemPropTypes } from 'ui-kit';

function ClientSideComponent(props = {}) {
  return (
    <Box suppressHydrationWarning={true} {...props}>
      {props.children}
    </Box>
  );
}

ClientSideComponent.propTypes = {
  ...systemPropTypes,
};

export default ClientSideComponent;
