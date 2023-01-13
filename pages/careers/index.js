/**
 * Career Menu
 *
 * This page retrieves and displays all the departments with Job openings from Greenhouse
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'components';
import {
  Box,
  Button,
  CardGrid,
  DefaultCard,
  utils,
  CardDropdown,
  Loader,
} from 'ui-kit';
import Cell from 'ui-kit/Cell/Cell.styles';
import { getCareerPhoto } from 'utils';
import greenhouseAPI from 'pages/api/greenhouse';

import Styled from './Careers.styles';
import { isString } from 'lodash';

function CareerMenu(props) {
  const [departmentData, setDepartmentsData] = useState('loading');

  useEffect(() => {
    const fetchDepartments = async () => {
      const departments = await greenhouseAPI('/departments');
      setDepartmentsData(departments);
    };

    fetchDepartments();
  }, []);

  return (
    <Layout>
      <Styled.Hero src="/careers/careers.jpeg">
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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="secondary"
      >
        <Box as="h2" mb="base">
          Find Your Area
        </Box>
      </Box>

      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 's', lg: 'base' }}
      >
        {departmentData === 'loading' ? (
          <Loader />
        ) : (
          <CardGrid columns="3" mx="xs" my="xs" p="xs">
            {!!isString(departmentData) ? (
              <Box as="h1"> No Jobs Available</Box>
            ) : (
              departmentData.departments.map((department, i) => {
                return (
                  department?.jobs?.length > 0 && (
                    <DefaultCard
                      key={i}
                      coverImage={getCareerPhoto(department?.name)}
                      description={
                        <CardDropdown
                          title={department?.name}
                          items={department?.jobs}
                        />
                      }
                      lineLimit="false"
                      scaleCard={true}
                      scaleCoverImage={false}
                      type="HIGHLIGHT_SMALL"
                    />
                  )
                );
              })
            )}
          </CardGrid>
        )}
      </Cell>
    </Layout>
  );
}

CareerMenu.propTypes = {};

export default CareerMenu;
