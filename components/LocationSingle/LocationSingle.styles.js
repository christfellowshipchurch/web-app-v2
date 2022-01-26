import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const LocationSingle = styled.div`
  ${system}
`;

const InfoBox = styled.ul`
  background: ${themeGet('colors.hues.orange')};
  border-radius: ${themeGet('radii.base')};
  color: white;
  font-size: 14px;
  font-style: italic;
  margin-left: auto;
  margin-right: -2rem;
  margin-top: -0.7rem;
  max-width: 355px;
  padding-bottom: ${themeGet('space.s')};
  padding-left: 30px;
  padding-top: ${themeGet('space.s')};

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    margin-right: 0px;
  }

  @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
    border-radius: 0px;
    margin-top: 0px;
    margin-left: 0px;
    max-width: none;
    padding-left: 50px;
    width: 100%;
  }
`;

const ServiceTime = styled.h3`
  color: white;
  margin-bottom: 0px;
  margin-left: ${themeGet('space.base')};
  margin-right: ${themeGet('space.base')};
`;

const ServiceTimes = styled.div`
  display: flex;
  align-items: center;
  padding: 0;

  @media screen and (max-width: 389px) {
    flex-flow: row wrap;
  }
`;

const ServiceTimeContainer = styled.div`
  align-items: center;
  background: linear-gradient(270.35deg, #0092bc -22.55%, #004f71 106.52%),
    linear-gradient(90.49deg, #6bcaba -24.45%, #0092bc 118.95%);
  border-radius: ${themeGet('radii.base')};
  display: flex;
  justify-content: space-around;
  margin-top: ${themeGet('space.base')};
  padding: ${themeGet('space.base')};

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    border-radius: 0px;
    flex-direction: column;
  }
`;

const VerticalDivider = styled.div`
  height: 40px;
  width: 2px;
  background: ${themeGet('colors.neutrals.500')};
`;

const VideoCover = styled.video`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  width: 100%;
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

LocationSingle.InfoBox = InfoBox;
LocationSingle.ServiceTime = ServiceTime;
LocationSingle.ServiceTimes = ServiceTimes;
LocationSingle.ServiceTimeContainer = ServiceTimeContainer;
LocationSingle.VerticalDivider = VerticalDivider;
LocationSingle.VideoCover = VideoCover;
LocationSingle.VideoOverlay = VideoOverlay;

export default LocationSingle;
