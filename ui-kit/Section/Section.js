import React from 'react';

import { Box } from 'ui-kit';
import { useTheme } from 'styled-components';

function Section({ children, contentProps, ...props }) {
  const theme = useTheme();
  return (
    <Box width="100%" display="flex" justifyContent="center" {...props}>
      <Box maxWidth={`${theme.breakpoints.xl}`} width="100%" {...contentProps}>
        {children}
      </Box>
    </Box>
  );
}

export default Section;
