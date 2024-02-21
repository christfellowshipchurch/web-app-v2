import React from 'react';
import Styled from './VerticalWordCarousel.styles';
import { Box } from 'ui-kit';

const WordCarousel = props => {
  return (
    <Styled>
      {props?.data?.map((word, i) => {
        return (
          <Styled.Inner>
            <Box>{word}</Box>
          </Styled.Inner>
        );
      })}
    </Styled>
  );
};

export default WordCarousel;
