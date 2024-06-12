import React from 'react';
import { Box } from 'ui-kit';
import Styled from './HeroFeature.styles';

const Hero = props => {
  return (
    <>
      <Styled backgroundImage={props?.backgroundImage}>
        <Styled.VideoOverlay />

        <Styled.Content>
          <Styled.Title>{props?.title}</Styled.Title>
          <Styled.Summary>{props?.description}</Styled.Summary>
          <Box mt="base">
            {props?.cta.map((cta, index) => (
              <Box as="a" key={index} href={cta?.link}>
                <Styled.Button>{cta?.title}</Styled.Button>
              </Box>
            ))}
          </Box>
        </Styled.Content>
      </Styled>
    </>
  );
};

export default Hero;
