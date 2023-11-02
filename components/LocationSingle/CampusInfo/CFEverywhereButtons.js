/**
 * These are custom calls to action for the CF Everywhere page.
 */

import React from 'react';
import { Box, Button, Divider, Icon } from 'ui-kit';

const StyledDivider = props => <Divider bg="secondarySubdued" {...props} />;

const CfEverywhereButtons = () => (
  <>
    <Box
      display="flex"
      flexDirection={{ _: 'column', md: 'row' }}
      alignItems={{ _: 'center', md: 'start' }}
      mx={{ _: 'base', md: 0 }}
      py="l"
      mt={{ _: 0, md: 'base' }}
    >
      <Box
        as="h3"
        display="flex"
        color="secondary"
        flex="1"
        maxWidth={{ _: '', md: 200 }}
        textAlign={{ _: 'center', md: 'left' }}
        mb="base"
        ml="base"
      >
        Ways to Join Online
      </Box>
      <Box
        textAlign={{ _: 'center', md: 'left' }}
        ml={{ _: '', lg: 'xl' }}
        flex={{ _: '', md: 1 }}
        display={{ _: 'flex', md: 'block' }}
      >
        <Button
          as="a"
          target="_blank"
          href="https://www.youtube.com/c/ChristFellowshipWelcomeHome"
          size="s"
          borderRadius="l"
          mr="s"
          px="base"
        >
          <Icon name="youtube" mr="xs" /> YOUTUBE
        </Button>
        <Button
          as="a"
          variant="secondary"
          target="_blank"
          href="https://www.facebook.com/CFimpact/"
          size="s"
          borderRadius="l"
          px="base"
        >
          <Icon name="facebook" mr="xs" /> FACEBOOK LIVE
        </Button>
      </Box>
    </Box>
    <StyledDivider display={{ _: 'none', md: 'flex' }} width="100%" />
  </>
);

export default CfEverywhereButtons;
