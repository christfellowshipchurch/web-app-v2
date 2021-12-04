import React from 'react';
import { CustomLink } from 'components';
import { Box, Button, Icon, ThemeMixin } from 'ui-kit';

const ChrismasBanner = (props = {}) => (
  <Box
    p="base"
    fontSize={{ _: '0.8rem', md: '1.1rem' }}
    color="white"
    gridGap="0.5rem"
    bg="#b50b20"
    textAlign="center"
    display="flex"
    flexDirection={{ _: 'column', md: 'row' }}
    justifyContent="center"
    alignItems="center"
    textAlign={{ _: 'center', md: 'left' }}
    {...props}
  >
    <Box as="p" fontWeight="bold">
      Looking for a Christmas service?
    </Box>
    <Box as="p">Make Christmas at Christ Fellowship part of your plans!</Box>
    <ThemeMixin
      theme={{
        colors: {
          primary: '#445b25',
        },
      }}
    >
      <CustomLink
        Component={Button}
        mt={{ _: 's', md: 0 }}
        size="s"
        mx="base"
        href="https://www.christmasatcf.com/"
      >
        Times & Locations
      </CustomLink>
    </ThemeMixin>
  </Box>
);

// green: #445b25
// gold: #d08f36

export default ChrismasBanner;
