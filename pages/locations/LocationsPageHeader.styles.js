import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Locations = styled.div`
  ${system}
`;

const VideoCover = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  object-fit: cover;

  ${system}
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

const TitleBox = styled.h1`
  color: white;
  text-align: center;
  padding: ${themeGet('space.base')};
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(5.5px);
  border-radius: 10px;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    font-size: 34px;
    width: 95%;
    position: absolute;
    top: -255px;
    left: 0px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: 36px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    font-size: 42px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    font-size: 48px;
  }
`;

Locations.VideoCover = VideoCover;
Locations.VideoOverlay = VideoOverlay;
Locations.TitleBox = TitleBox;

export default Locations;
