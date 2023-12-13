import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Color from 'color';

import { TextInput, system } from 'ui-kit';

const Locations = styled.div`
  ${system}
`;

export const primaryHover = () => props => {
  const primaryColor = themeGet('colors.neutrals.500')(props);

  return Color(primaryColor).saturate(0.1).darken(0.35).hex();
};

const VideoCover = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  object-fit: cover;

  ${system}
`;

const CurrentLocation = styled.a`
  color: white;
  font-style: italic;
  margin-right: ${themeGet('space.s')};
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: ${themeGet('colors.neutrals.500')};
  }
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

const ContentBox = styled.div`
  color: white;
  text-align: center;
  padding: ${themeGet('space.base')} ${themeGet('space.base')};
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(5.5px);
  border-radius: 10px;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    padding: ${themeGet('space.s')} ${themeGet('space.base')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    padding: ${themeGet('space.s')} ${themeGet('space.l')};
  }
`;

const TitleBox = styled.h1`
  color: white;
  font-weight: bold;
  padding-bottom: ${themeGet('space.s')};
  font-size: 28px;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    font-size: 36px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    font-size: 42px;
  }

  ${system}
`;

const SubtitleBox = styled.div`
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    font-size: 16px;
    margin-bottom: ${themeGet('space.s')};
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: 20px;
    width: 80%;
    margin-bottom: ${themeGet('space.l')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    font-size: 24px;
    width: 80%;
  }
`;

const LocationInput = styled(TextInput)`
  text-align: center;
  font-size: 16px;
  margin-bottom: ${themeGet('space.s')};
  max-width: 400px;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    margin-bottom: ${themeGet('space.s')};
  }

  &::placeholder {
    color: ${themeGet('colors.neutrals.700')};
  }
`;

const cardSpan = ({ index, total }) => {
  /**
   * In order to compensate for when there is not an even row of 3 cards, we'll calculate the LAST handful of cards in order to have them fill the gap.
   *
   * For Example:
   *
   * [][][]
   * [][][]
   * [_][_]
   * [_][_]
   *
   */
  let remainder = total % 3;
  let span = 4;

  if (remainder === 1 && index > 11) {
    span = 6;
  }

  return css`
    grid-column-end: span ${span};
  `;
};

const CardSpacing = styled.div`
  ${cardSpan}
  ${system}
`;

Locations.CardSpacing = CardSpacing;
Locations.VideoCover = VideoCover;
Locations.VideoOverlay = VideoOverlay;
Locations.ContentBox = ContentBox;
Locations.TitleBox = TitleBox;
Locations.SubtitleBox = SubtitleBox;
Locations.LocationInput = LocationInput;
Locations.CurrentLocation = CurrentLocation;

export default Locations;
