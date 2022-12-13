// this will be our job details pages.

import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'components';
import { Box, Button, Card, HtmlRenderer, Icon, JobForm } from 'ui-kit';
import { parseHtmlContent } from 'ui-kit/HtmlRenderer/HtmlRenderer';

import Styled from './Careers.styles';
import { getCareerPhoto } from 'utils';

import { departmentData, jobData } from '../../config/careerTestData';

const JobDetails = props => {
  return (
    <Layout>
      <Styled.Hero src={getCareerPhoto(departmentData?.departments[0]?.name)}>
        <Box
          display="flex"
          flexDirection="column"
          flex="1"
          justifyContent="center"
        >
          <Box as="h1" fontSize={{ md: '70px' }}>
            {jobData?.title}
          </Box>
          <Box
            as="h2"
            fontWeight="normal"
            px={{ _: 's', sm: '80px', md: '140px', lg: '190px' }}
            mb="s"
          >
            {jobData?.location?.name}
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
          <Box maxWidth={600} mt="l">
            <HtmlRenderer htmlContent={parseHtmlContent(jobData?.content)} />
          </Box>
          <Box maxWidth={400}>
            <Card p="l" width="100%" mb="l">
              <Box as="h4" fontStyle="italic">
                What's it like working for Christ Fellowship?
              </Box>
              <Button
                as="a"
                size="s"
                href="/career-opportunities"
                mb="base"
                px="base"
              >
                Learn More
              </Button>
              <Box as="h4" fontStyle="italic">
                Looking for something else?
              </Box>
              <Button as="a" href="/careers" size="s" px="base">
                See All Jobs
              </Button>
            </Card>

            <Card p="base" width="100%" textAlign="center">
              <Box as="h3" my="base">
                Do you like what you see?
              </Box>
              <Button>Apply Now!</Button>
              {/* <JobForm /> */}
            </Card>

            <Card mt="base" p="base" width="100%">
              <Box as="h3" my="base">
                Similar Positions:
              </Box>
              <Box>
                {/* {departmentData?.departments[3]?.jobs?.map(job => (
                  <Styled.CardMenuOption
                    onClick={() =>
                      router.push(`${kebabCase(job?.title)}-${job?.id}`)
                    }
                    key={job?.id}
                  >
                    <Box
                      textDecoration="none"
                      color="secondary"
                      fontWeight="bold"
                      fontSize="base"
                      mb="0"
                    >
                      {job?.title}
                    </Box>
                    <Box>{job?.location?.name}</Box>
                  </Styled.CardMenuOption>
                ))} */}
              </Box>
              {/* <JobForm /> */}
            </Card>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

JobDetails.propTypes = {};

export default JobDetails;
