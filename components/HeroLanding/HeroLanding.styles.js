import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, theme } from 'ui-kit';

const HeroLanding = styled.div`
  z-index: 0;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 100vw;
  overflow: none;

  margin-bottom: ${themeGet('space.xxl')};

  ${system}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
  color: ${themeGet('colors.white')};
  padding: 20px;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    max-width: 100%;
    margin-top: ${themeGet('space.xxl')};
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
  font-size: 2.8rem;
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

export default HeroLanding;
