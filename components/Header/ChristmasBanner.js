import React from 'react';
import { CustomLink } from 'components';
import { Box, Button, ThemeMixin } from 'ui-kit';

const ChrismasBanner = (props = {}) => (
  <Box
    p={{ _: 's', md: 'base' }}
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
    <Box as="p" mb="none" fontWeight="bold">
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
      <Box display="flex" flexDirection="row">
        <CustomLink
          Component={Button}
          mt={{ _: '0', md: 0 }}
          size="s"
          ml={{ _: 0, md: 'base' }}
          href="https://www.christmasatcf.com/"
        >
          Times & Locations
        </CustomLink>
        <CustomLink
          Component={Button}
          size="s"
          ml="s"
          href="https://rock.christfellowship.church/christmas"
        >
          Volunteer for Christmas
        </CustomLink>
      </Box>
    </ThemeMixin>
  </Box>
);

// green: #445b25
// gold: #d08f36

export default ChrismasBanner;
