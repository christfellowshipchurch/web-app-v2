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
      py="base"
      px="l"
    >
      <Image
        source={coverImage}
        maxWidth="200px"
        gridArea="img"
        my="base"
        objectFit="contain"
      />
      <Box
        gridArea="content"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        my={{ _: '-30px', md: 'xs' }}
      >
        <Box as="h1" color="black" borderRadius="xxl">
          <Box
            position="relative"
            bottom={{ _: '-25px', md: '-35px' }}
            height={{ _: '16px', md: '18px' }}
            bg="primarySubdued"
            borderRadius="s"
            pl="s"
          />
          <Box
            as="p"
            fontSize={{
              _: '1.4rem',
              sm: '1.70rem',
              md: '2.45rem',
              lg: '2.2rem',
            }}
            position="relative"
            pl="xs"
          >{`${title}`}</Box>
        </Box>
        <Box
          as="p"
          fontSize={{ _: '1rem', md: '1.2rem', lg: '1.4rem' }}
        >
          {description}
        </Box>
      </Box>
      <Box
        as="hr"
        display={{ md: 'none' }}
        my="l"
        height="1px"
        border="none"
        backgroundColor="neutrals.200"
      />
    </Box>
  )
}

const ContentBlockCollection = ({icons}) => {
  return (
    <Box 
      display="flex"
      justifyContent="center"
    >
      <VerticalCardListFeature
        Component={Item}
        data={{cards: icons}}
      />
    </Box>
  )
};

ContentBlockCollection.propTypes = {
    icons: PropTypes.arrayOf(
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
};

ContentBlockCollection.defaultProps = {
    icons: [],
};

export default ContentBlockCollection;


