import React from 'react';
import PropTypes from 'prop-types';

import { rem } from 'ui-kit/_utils';
import { Box, Button, DefaultCard } from 'ui-kit';
import { SEO } from 'components';
import Header from './CommunitySingle.styles';

function CommunitySingle(props = {}) {
  return (
    <>
      <SEO title={props.data?.title} />
      <Header src={props.data?.coverImage?.sources[0]?.uri}>
        <Box
          display="flex"
          flexDirection="column"
          flex="1"
          justifyContent="center"
        >
          <Box as="h1" fontSize={{ md: '95px' }}>
            {props.data?.title}
          </Box>
          <Box as="p" px={{ _: 's', sm: '80px', md: '140px', lg: '190px' }}>
            {props.data?.summary}
          </Box>
        </Box>
        <Box display="flex" mb="l">
          <Button variant="tertiary" rounded={true}>
            {`Find your ${props.data?.title}`}
          </Button>
          <Button variant="link">{`Explore ${props.data?.title}`}</Button>
        </Box>
      </Header>
      <Box textAlign="center" alignItems="center" mb="l" px={{ md: 'xxl' }}>
        <Box as="h1" mb="0">{`The ${props.data?.title} Lineup`}</Box>
        <Box
          as="p"
          mb="base"
        >{`There's a ${props.data?.title} for everyone`}</Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center" m="s">
          {props.data?.subpreferences &&
            props.data?.subpreferences.map((item, i) => (
              <DefaultCard
                as="a"
                key={i}
                flex={{
                  _: `0 0 calc(50% - ${rem('20px')})`,
                  md: `0 0 calc(33.333% - ${rem('20px')})`,
                }}
                m="s"
                coverImage={item?.coverImage?.sources[0]?.uri}
                coverImageOverlay={true}
                coverImageTitle={item?.title}
                height="250px"
              />
            ))}
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        p="l"
        mb="l"
      >
        <Box as="h2" mb="s">
          We’ll help you get connected.
        </Box>
        <Box as="p" mb="l">
          There are hundreds of communities at CF. We’ll help find yours.
        </Box>
        <Button rounded={true}>Find your community</Button>
      </Box>
    </>
  );
}

CommunitySingle.propTypes = {
  data: PropTypes.object,
};

export default CommunitySingle;
