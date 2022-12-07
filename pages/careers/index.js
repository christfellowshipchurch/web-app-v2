// Main Job Page

import React from 'react';
import PropTypes from 'prop-types';
import { HeroLanding, Layout, CustomLink } from 'components';
import {
  Box,
  Button,
  CardGrid,
  Card,
  HtmlRenderer,
  Icon,
  Image,
  DefaultCard,
  Loader,
  HorizontalHighlightCard,
  utils,
  Select,
} from 'ui-kit';

import Styled from './CareerPages.styles';
import testData from './menuTestData';
import Cell from 'ui-kit/Cell/Cell.styles';
import CardMenuSelect from './CardMenuSelect';

console.log(testData.departments);

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
        <CardGrid columns="3" mx="xs" my="xs" p="xs">
          {testData.departments.map(
            (department, i) =>
              department?.jobs?.length > 0 && (
                <DefaultCard
                  key={i}
                  coverImage="/ask-a-question.jpeg"
                  description={
                    <CardMenuSelect
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
          )}
        </CardGrid>

        <Box display="flex" flexDirection="column" alignItems="center">
          {/* Add Title and Menu Here */}
          <Button as="a" href="/careers/job-detail" m="l">
            Job Detail Page
          </Button>
        </Box>
      </Cell>
    </Layout>
  );
};

JobMenu.propTypes = {};

export default JobMenu;
