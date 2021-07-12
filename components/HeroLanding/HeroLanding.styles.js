import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, theme } from 'ui-kit';

const HeroLanding = styled.div`
  z-index: 0;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  overflow: none;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    height: 70vh;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    height: 82vh;
  }

  ${system}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: ${themeGet('colors.white')};
  padding: 20px;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    max-width: 100%;
    margin-bottom: 0px;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    max-width: 60%;
    margin-top: 0px;
    margin-bottom: ${themeGet('space.xxl')};
  }

  ${system}
`;

const Title = styled.h1`
  text-align: center;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: ${themeGet('space.xs')};
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom: 0px;
  }
`;

const Summary = styled.h2`
  font-weight: normal;
  padding-left: 4px;
  text-align: center;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: 2.472rem;
  }
`;

const BackgroundVideo = styled.video`
  z-index: 0;

  position: absolute;
  bottom: 0;
  right: 0;

  min-width: 100%;
  min-height: 110%;
`;

const VideoOverlay = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

HeroLanding.BackgroundVideo = BackgroundVideo;
HeroLanding.VideoOverlay = VideoOverlay;
HeroLanding.Content = Content;
HeroLanding.Title = Title;
HeroLanding.Summary = Summary;

export default HeroLanding;
