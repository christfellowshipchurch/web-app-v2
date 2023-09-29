import React from 'react';
import { Box, Icon, Button } from 'ui-kit';
import icons from 'ui-kit/_config/icons';

function DisplayAllIcons() {
  const iconNames = Object.keys(icons);

  return (
    <Box bg="white" p="base">
      <Box textAlign="center" mt="xl" as="h1" color="secondary">
        Icons
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridColumnGap="base"
        gridRowGap="l"
        padding="base"
        textAlign="center"
        // maxWidth="12.5rem"
        p="l"
      >
        {iconNames.map((icon, index) => (
          <Button variant="tertiary">
            <Icon
              // display="flex"
              // flex-direction="column"
              // align-items="center"
              // justify-content="center"

              size="50"
              key={index}
              name={icon}
            />
            <Box mt="s" as="h4" color="secondary">
              {icon}
            </Box>
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default DisplayAllIcons;
