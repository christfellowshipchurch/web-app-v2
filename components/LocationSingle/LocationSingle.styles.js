import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const LocationSingle = styled.div`
  ${system}
`;

const FlexBreak = styled.div`
  flex-basis: 100%;
  height: 0;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    display: none;
  }
`;

const InfoBox = styled.ul`
  background: ${themeGet('colors.hues.orange')};
  border-top-left-radius: ${themeGet('radii.base')};
  border-bottom-left-radius: ${themeGet('radii.base')};
  color: white;
  font-size: 14px;
  font-style: italic;
  margin-left: auto;
  margin-right: -2rem;
  margin-top: -0.7rem;
  max-width: 370px;
  padding-bottom: ${themeGet('space.s')};
  padding-left: 30px;
  padding-top: ${themeGet('space.s')};
  box-shadow: -7px -5px 19px rgba(0, 0, 0, 0.12);

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

const PastorsCard = styled.div`
  background: ${themeGet('colors.white')};
  position: relative;
  padding-left: ${themeGet('space.base')};
  padding-right: ${themeGet('space.base')};
  padding-top: ${themeGet('space.l')};
  padding-bottom: ${themeGet('space.l')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    border: 1px solid ${themeGet('colors.neutrals.300')};
    border-radius: ${themeGet('radii.l')};
    box-shadow: ${themeGet('shadows.l')};
    width: auto;
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    top: -150px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    min-width: 350px;
  }

  ${system}
`;

const ServiceTime = styled.h3`
  color: white;
  margin-bottom: 0px;
  margin-left: ${themeGet('space.s')};
  margin-right: ${themeGet('space.s')};
`;

const ServiceTimeTitle = styled.h4`
  color: white;
  opacity: 75%;
  margin-bottom: 0px;
  margin-left: ${themeGet('space.base')};
  margin-right: ${themeGet('space.base')};

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    margin-bottom: ${themeGet('space.s')};
  }
`;

const ServiceTimeContainer = styled.div`
  align-items: center;
  // background: linear-gradient(270.35deg, #0092bc -22.55%, #004f71 106.52%),
  //   linear-gradient(90.49deg, #6bcaba -24.45%, #0092bc 118.95%);
  // Easter 2025
  background: #f1eb9c;
  border-top-left-radius: ${themeGet('radii.base')};
  border-bottom-left-radius: ${themeGet('radii.base')};
  display: none;
  justify-content: space-around;
  padding-top: ${themeGet('space.base')};
  padding-bottom: ${themeGet('space.base')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    display: flex;
  }

  @media screen and (min-width: ${themeGet('breakpoints.sm')}) {
    flex-wrap: nowrap;
  }

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    border-radius: 0px;
    margin-top: 0px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
    margin-top: 0px;
  }
`;

const VerticalDivider = styled.div`
  height: 30px;
  width: 1px;
  background-color: rgb(255 255 255 / 25%);
}


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

// ----------------------------------------------

// Event Banner Styled Components
const EventBanner = styled.div`
  background-color: ${props => props.backgroundColor};
  border-top-left-radius: ${themeGet('radii.base')};
  color: ${props => props.textColor};
  display: flex;
  align-items: center;

  font-weight: bold;

  padding-bottom: ${themeGet('space.s')};
  padding-left: 20px;
  padding-right: 60px;
  padding-top: ${themeGet('space.s')};
  box-shadow: -7px -5px 19px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    text-size: 14px;
  }

  @media screen and (min-width: 75rem) {
    font-size: 18px;
  }

  ${system}
`;

const MobileEventBanner = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  font-weight: bold;

  font-size: 16px;
  padding-bottom: ${themeGet('space.s')};
  padding-top: ${themeGet('space.s')};
  box-shadow: -7px -5px 19px rgba(0, 0, 0, 0.12);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    margin-right: 0px;
  }

  @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
    margin-top: 0px;
    margin-left: 0px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
  }

  ${system}
`;

const EventSubtitle = styled.span`
  font-style: italic;
  font-weight: 300;
  color: #000;
  font-size: 13px;
  padding-left: 10px;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    padding-left: 0px;
  }
`;

const EventCTA = styled.a`
  text-decoration: underline;
`;

LocationSingle.FlexBreak = FlexBreak;
LocationSingle.InfoBox = InfoBox;
LocationSingle.PastorsCard = PastorsCard;
LocationSingle.ServiceTime = ServiceTime;
LocationSingle.ServiceTimeTitle = ServiceTimeTitle;
LocationSingle.ServiceTimeContainer = ServiceTimeContainer;
LocationSingle.VerticalDivider = VerticalDivider;
LocationSingle.VideoCover = VideoCover;
LocationSingle.VideoOverlay = VideoOverlay;
LocationSingle.EventBanner = EventBanner;
LocationSingle.EventSubtitle = EventSubtitle;
LocationSingle.EventCTA = EventCTA;
LocationSingle.MobileEventBanner = MobileEventBanner;

export default LocationSingle;
