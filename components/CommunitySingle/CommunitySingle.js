import React from 'react';
import PropTypes from 'prop-types';

import { Card, Box, Button, DefaultCard, CardGrid } from 'ui-kit';
import { themeGet } from '@styled-system/theme-get';
import { SEO, CustomLink } from 'components';

function CommunitySingle(props = {}) {
  return (
    <>
      <SEO title={props.data?.title} />
      <Box
        height={{ _: '298px', md: '596px' }}
        mb="l"
        textAlign="center"
        flexDirection="column"
        backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.33), rgba(71, 71, 71, 0.85)),url(${props.data?.coverImage?.sources[0]?.uri})`}
        backgroundSize="cover"
        color="white"
        justifyContent="center"
        alignItems="center"
        display="flex"
        borderRadius="base"
        mx="xxl"
      >
        <Box
          display="flex"
          flexDirection="column"
          flex="1"
          justifyContent="center"
        >
          <Box as="h1">{props.data?.title}</Box>
          <Box as="p">{props.data?.summary}</Box>
        </Box>
        <Box display="flex" mb="l">
          <Button variant="tertiary" rounded>
            Find your Crew
          </Button>
          <Button variant="link">Explore Crew</Button>
        </Box>
      </Box>
      <Box textAlign="center" alignItems="center" mb="l" px="xxl">
        <Box as="h1" mb="0">{`The ${props.data?.title} Lineup`}</Box>
        <Box
          as="p"
          mb="base"
        >{`There's a ${props.data?.title} for everyone`}</Box>
        <CardGrid>
          {props.data?.lineups.map((item, i) => (
            <DefaultCard
              as="a"
              key={i}
              coverImage={item?.coverImage?.sources[0]?.uri}
              coverImageOverlay={true}
              coverImageTitle={item?.title}
              height="250px"
            />
          ))}
        </CardGrid>
      </Box>
      <Box
        display={{ lg: 'grid' }}
        gridTemplateColumns="65% 1fr"
        gridColumnGap="l"
      ></Box>
    </>
  );
}

CommunitySingle.propTypes = {
  data: PropTypes.object,
};

export default CommunitySingle;
