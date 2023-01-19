/**
 * Job Department Page
 *
 * This page shows all job listings for a specific department and used for the department that have too many job listings for a dropdown.
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isString, kebabCase, last, split } from 'lodash';
import { CustomLink, Layout, NotFound } from 'components';
import { useRouter } from 'next/router';

import {
  Box,
  Button,
  CardGrid,
  Cell,
  DefaultCard,
  Icon,
  Loader,
  utils,
} from 'ui-kit';
import { getCareerPhoto } from 'utils';

import Styled from '../Careers.styles';
import greenhouseAPI from 'pages/api/greenhouse';

const Department = props => {
  const [departmentData, setDepartmentData] = useState('loading');
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchDepartment = async () => {
      setLoading(true);
      const departmentId = last(split(router?.query?.title, '-'));
      if (departmentId !== '') {
        const department = await greenhouseAPI(
          `/departments/${await departmentId}`
        );
        setDepartmentData(department);
        setLoading(false);
      }
    };
    fetchDepartment();
  }, [router]);

  return (
    <Layout>
      {loading ? (
        <Box p="xxl" display="flex" justifyContent="center">
          <Loader />
        </Box>
      ) : (
        <Styled.Hero src={getCareerPhoto(departmentData?.name)}>
          <Box
            display="flex"
            flexDirection="column"
            flex="1"
            justifyContent="center"
          >
            <Box as="h1" fontSize={{ md: '70px' }}>
              {departmentData?.name}
            </Box>
          </Box>
        </Styled.Hero>
      )}

      <Cell as="main" maxWidth={utils.rem('1100px')} px="base" py="s">
        <Box width="100%" maxWidth={1200} mb="base" mt="-1rem">
          <Button onClick={() => router.back()} variant="link">
            <Icon mb="0.15rem" name="angleLeft" color="primary" />
            Go Back
          </Button>
        </Box>
        {loading ? (
          <Loader />
        ) : (
          <CardGrid columns="3" mx="xs" my="xs" p="xs">
            {!!isString(departmentData) ? (
              <Box as="h1"> No Jobs Available</Box>
            ) : (
              departmentData?.jobs?.map((job, i) => {
                return (
                  <CustomLink
                    key={i}
                    Component={DefaultCard}
                    as="a"
                    title={job?.title}
                    description={job?.location?.name}
                    href={`/careers/${kebabCase(job?.title)}-${job?.id}`}
                    scaleCard={true}
                  />
                );
              })
            )}
          </CardGrid>
        )}
      </Cell>
    </Layout>
  );
};

Department.propTypes = {};

export default Department;
