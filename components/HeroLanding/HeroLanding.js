import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'ui-kit';
import Styled from './HeroLanding.styles';
import HeroButton from './HeroButton';
export default function HeroLanding(props = {}) {
  return (
    <>
      <Styled backgroundImage={props?.backgroundImage}>
        <Styled.BackgroundVideo
          autoPlay
          muted
          loop
          playsInline
          src={props?.backgroundVideo}
          type="video/mp4"
        />
        <Styled.VideoOverlay />

        <Styled.Content>
          <Styled.Title>{props?.heroTitle}</Styled.Title>
          <Styled.Summary>{props?.heroSummary}</Styled.Summary>
          <HeroButton actions={props?.actions}></HeroButton>
        </Styled.Content>
      </Styled>
      <Box mx="auto">{props?.children}</Box>
    </>
  );
}

HeroLanding.propTypes = {
  heroTitle: PropTypes.string,
  heroSummary: PropTypes.string,
  backgroundVideo: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  actions: PropTypes.array,
};

HeroLanding.defaultProps = {
  heroTitle: '',
  heroSummary: '',
  backgroundVideo: '',
  children: null,
  actions: [],
};
