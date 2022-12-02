// Main Job Page

import React from 'react';
import PropTypes from 'prop-types';
import { HeroLanding, Layout } from 'components';
import { Box, Button, Card, HtmlRenderer, Icon, Image } from 'ui-kit';

import Styled from './CareerPages.styles';
import testData from './menuTestData';

const JobMenu = props => {
  return (
    <Layout>
      <Styled.Hero src="/ask-a-question.jpeg">
        <Box
          display="flex"
          flexDirection="column"
          flex="1"
          justifyContent="center"
        >
          <Box as="h1" fontSize={{ md: '70px' }}>
            All Careers
          </Box>
        </Box>
      </Styled.Hero>
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* Add Title and Menu Here */}
        <Button as="a" href="/careers/job-detail" m="l">
          Job Detail Page
        </Button>
      </Box>
    </Layout>
  );
};

JobMenu.propTypes = {};

export default JobMenu;
