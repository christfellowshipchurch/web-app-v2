import React from 'react';
import Styled from './VerticalWordCarousel.styles';
import { Box } from 'ui-kit';

const WordCarousel = props => {
  return (
    <Styled>
      {props?.data?.map((word, i) => {
        return (
          <Styled.Inner>
            <Box
              as="h1"
              fontSize={{ md: 28, lg: 32, xl: 56 }}
              fontFamily="retroica"
            >
              {word}
            </Box>
          </Styled.Inner>
        );
      })}
    </Styled>
  );
};

export default WordCarousel;