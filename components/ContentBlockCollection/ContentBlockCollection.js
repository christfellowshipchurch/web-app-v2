import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image } from 'ui-kit';
import { VerticalCardListFeature } from 'components';

const Item = ({ coverImage, title, description }) => {
  return (
    <Box
      display="flex"
      textAlign="center"
      flexDirection="column"
      alignItems="center"
      m="base"
    >
      <Image
        source={coverImage}
        width={{ _: '60%', md: '70%' }}
        gridArea="img"
        objectFit="contain"
      />
      <Box
        gridArea="content"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box color="black" borderRadius="xxl">
          <Box
            position="relative"
            bottom={{ _: '-25px', md: '-35px' }}
            height={{ _: '16px', md: '18px' }}
            bg="primary"
            opacity="0.2"
            borderRadius="s"
            pl="s"
          />
          <Box
            as="h1"
            position="relative"
            pl="xs"
          >{`${title}`}</Box>
        </Box>
        <Box as="p">
          {description}
        </Box>
      </Box>
    </Box>
  )
}

const ContentBlockCollection = ({data}) => {
  return (
    <Box 
      display="flex"
      justifyContent="center"
    >
      <VerticalCardListFeature
        Component={Item}
        data={data}
      />
    </Box>
  )
};

ContentBlockCollection.propTypes = {
  data: PropTypes.shape(
    {
      cards: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            coverImage: PropTypes.shape({
              sources: PropTypes.arrayOf(PropTypes.shape({
                uri: PropTypes.string
              }))
            }),
            highlightWidth: PropTypes.string,
            highlightWidthSmall: PropTypes.string,
        })
      )
    }
  )
};

ContentBlockCollection.defaultProps = {
    data: {cards: []},
};

export default ContentBlockCollection;