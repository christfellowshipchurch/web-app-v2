import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

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
    height: 100vh;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    height: 91vh;
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

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    max-width: 100%;
    padding: 0px;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    max-width: 60%;
    margin-top: ${themeGet('space.base')};
    padding: 20px;
  }

  ${system}
`;

const Title = styled.h1`
  text-align: center;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    font-size: 2rem;
    line-height: 2rem;
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
    font-size: 1.4rem;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: 2.3rem;
    max-width: 700px;
  }
`;

const BackgroundVideo = styled.video`
  z-index: 0;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    width: 100%;
    height: 100%;
  }

  object-fit: cover;
`;

const VideoOverlay = styled.div`
  z-index: 1;
  position: absolute;
  top: -500px;
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
