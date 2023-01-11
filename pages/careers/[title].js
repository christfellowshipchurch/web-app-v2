/**
 * Job Details Page
 *
 * This page retrieves and displays all the information for a specific Job from Greenhouse
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isString, kebabCase, last, split } from 'lodash';
import { Layout, NotFound } from 'components';
import { useRouter } from 'next/router';

import { Box, Button, Card, HtmlRenderer, Icon, Loader } from 'ui-kit';
import { getCareerPhoto } from 'utils';

import { parseHtmlContent } from 'ui-kit/HtmlRenderer/HtmlRenderer';
import StyledCardDropdown from 'ui-kit/CardDropdown/CardDropdown.styles';
import Styled from './Careers.styles';
import greenhouseAPI from 'pages/api/greenhouse';

const JobDetails = props => {
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarPositions, setSimilarPositions] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // Fetches Data for Job Page
    const fetchJob = async () => {
      setLoading(true);
      const jobId = last(split(router?.query?.title, '-'));
      if (jobId !== '') {
        const job = await greenhouseAPI(`/jobs/${await jobId}`);
        setJobData(job);

        // Looks for other jobs under same department
        if (job?.departments?.length > 0) {
          const department = await greenhouseAPI(
            `/departments/${job?.departments?.[0]?.id}`
          );
          if (department?.jobs?.length > 1) {
            setSimilarPositions(
              //filters out current job being displayed
              department?.jobs?.filter(n => n?.id !== job?.id)
            );
          }
        }
        setLoading(false);
      }
    };

    fetchJob();
  }, [router]);

  return !loading && isString(jobData) ? (
    <NotFound />
  ) : (
    <Layout>
      {loading ? (
        <Box p="xxl" display="flex" justifyContent="center">
          <Loader />
        </Box>
      ) : (
        <Styled.Hero src={getCareerPhoto(jobData?.departments?.[0]?.name)}>
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
      )}

      <Box display="flex" flexDirection="column" alignItems="center">
        <Box width="100%" maxWidth={1200}>
          <Button as="a" variant="link" href="/careers">
            <Icon mb="0.15rem" name="angleLeft" color="primary" />
            Go Back
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection={{ _: 'column', md: 'row' }}
          maxWidth={1200}
          justifyContent="space-between"
          width="100%"
          p="l"
          pt="s"
        >
          <Box maxWidth={600} my="l">
            {/* We need to parse the HTML twice in order to render properly */}
            <HtmlRenderer htmlContent={parseHtmlContent(jobData?.content)} />
          </Box>
          <Box maxWidth={400}>
            <Card p="base" mb="base" width="100%" textAlign="center">
              {loading ? (
                <Loader noLabel />
              ) : (
                <>
                  <Box as="h3" my="base">
                    Do you like what you see?
                  </Box>
                  <Button
                    as="a"
                    href={`${jobData?.absolute_url}#app`}
                    target="_blank"
                  >
                    Apply Now!
                  </Button>
                </>
              )}
            </Card>

            <Card p="base" width="100%">
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

            {similarPositions.length > 0 && (
              <Card mt="base" p="base" width="100%">
                <Box as="h3" my="base">
                  Similar Positions:
                </Box>
                <Box>
                  {loading ? (
                    <Loader noLabel />
                  ) : (
                    similarPositions?.map(job => (
                      <StyledCardDropdown.CardMenuOption
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
                      </StyledCardDropdown.CardMenuOption>
                    ))
                  )}
                </Box>
              </Card>
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

JobDetails.propTypes = {};

export default JobDetails;
