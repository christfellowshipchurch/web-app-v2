import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image } from 'ui-kit';

const IconCollection = ({icons}) => {
  return (
    <Box
        display={{ _: 'block', md: 'grid' }}
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr"
        gridGap="2rem 2rem"
        gridTemplateAreas={`". . ."`}
        px="15%"
        py="xxl"
    >
      {icons.map(
        (
          { title, subtitle, image },
          i
        ) => (
          <Box
            display="flex"
            textAlign="center"
            flexDirection="column"
            alignItems="center"
            p="1px"
          >
            <Image
              source={image}
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
                {subtitle}
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
      )}
    </Box>
  );
};

IconCollection.propTypes = {
    icons: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string,
            image: PropTypes.string,
            highlightWidth: PropTypes.string,
            highlightWidthSmall: PropTypes.string,
        })
    )
};

IconCollection.defaultProps = {
    icons: [],
};

export default IconCollection;


