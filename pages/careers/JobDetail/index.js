// this will be our job details pages.

import React from 'react';
import PropTypes from 'prop-types';
import { HeroLanding, Layout } from 'components';
import { Box, Button, Card, HtmlRenderer, Icon, Image } from 'ui-kit';

import Styled from '../CareerPages.styles';
import JobForm from './JobForm';

import testData from './testData';

const JobDetails = props => {
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
            Campus Coordinator
          </Box>
          <Box
            as="h2"
            fontWeight="normal"
            px={{ _: 's', sm: '80px', md: '140px', lg: '190px' }}
            mb="s"
          >
            Palm Beach Gardens
          </Box>
        </Box>
      </Styled.Hero>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box width="100%" maxWidth={1200}>
          <Button as="a" variant="link" href="/careers">
            <Icon mb="0.15rem" name="angleLeft" color="primary" />
            Go Back
          </Button>
        </Box>
        <Box
          display="flex"
          maxWidth={1200}
          justifyContent="space-between"
          width="100%"
          p="l"
        >
          <Box maxWidth={600}>
            <HtmlRenderer htmlContent={`${testData?.content}`} />
          </Box>
          <Box maxWidth={350}>
            <Card p="base" width="100%" mb="l">
              <Box as="h4">What's it like working for Christ Fellowhship?</Box>
              <Button size="s" mb="base">
                Learn More
              </Button>
              <Box as="h4">Looking for something else?</Box>
              <Button as="a" href="careers" size="s">
                See All Jobs
              </Button>
            </Card>

            <Card p="base" width="100%">
              <JobForm />
            </Card>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

JobDetails.propTypes = {};

export default JobDetails;
