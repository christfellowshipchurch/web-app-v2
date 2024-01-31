/**
 * These are custom informational comoponents for the Location Single - Campus Info component.
 */

import React from 'react';
import { Box, Button, Icon } from 'ui-kit';
import { StyledDivider } from './WeekdaySchedules';
import _ from 'lodash';

const CfEverywhereButton = ({ type, title, url, icon }) => (
  <Button
    as="a"
    target="_blank"
    variant={type}
    href={url}
    size="s"
    borderRadius="l"
    display="flex"
    width={{ _: '170px', md: '"185px"' }}
    alignItems="center"
    justifyContent="center"
  >
    <Icon name={icon} mr="xs" />
    <Box>{title}</Box>
  </Button>
);

const CfEverywhereMobileSection = () => {
  return [
    <StyledDivider display={{ _: 'flex', md: 'none' }} width="100%" />,
    <Box
      ml="base"
      display={{ _: 'flex', md: 'none' }}
      flexDirection="column"
      alignItems="center"
      mt="base"
      mb={{ _: '0px', md: 'base' }}
      pb="l"
    >
      <Box>
        <Box as="h3" color="secondary" maxWidth={200}>
          What to Expect
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s" pr="base" textAlign="center">
          Here at Christ Fellowship Everywhere, you can expect to experience
          church services with uplifting worship music, encouraging messages
          from our pastors, special programming for your family, and
          opportunities for you to find people to do life with all throughout
          the week—it all starts here!
        </Box>
      </Box>
    </Box>,
  ];
};

const CfEverywhereSection = () => (
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
        flex={{ _: '', md: 1 }}
        width="100%"
        display="flex"
        flexDirection={{ _: 'column', lg: 'row' }}
        justifyContent={{ _: 'space-around', md: 'flex-start' }}
        style={{ gap: '12px' }}
      >
        <CfEverywhereButton
          type="primary"
          title="YOUTUBE"
          url="https://www.youtube.com/c/ChristFellowshipWelcomeHome"
          icon="youtube"
        />
        <CfEverywhereButton
          type="secondary"
          title="FACEBOOK LIVE"
          url="https://www.facebook.com/CFimpact/"
          icon="facebook"
        />
      </Box>
    </Box>
    <Box
      ml="base"
      position={{ _: 'relative', sm: 'absolute', lg: 'relative' }}
      pr="base"
      display={{ _: 'none', md: 'flex' }}
      my="l"
    >
      <Box>
        <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
          What to Expect
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s">
          Here at Christ Fellowship Everywhere, you can expect to experience
          church services with uplifting worship music, encouraging messages
          from our pastors, special programming for your family, and
          opportunities for you to find people to do life with all throughout
          the week—it all starts here!
        </Box>
      </Box>
    </Box>
  </>
);

export { CfEverywhereButton, CfEverywhereMobileSection, CfEverywhereSection };
