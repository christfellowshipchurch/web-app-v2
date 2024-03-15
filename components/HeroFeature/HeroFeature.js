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
              <Styled.Button key={index} href={cta.link}>
                {cta.title}
              </Styled.Button>
            ))}
          </Box>
        </Styled.Content>
      </Styled>
    </>
  );
};

export default Hero;
