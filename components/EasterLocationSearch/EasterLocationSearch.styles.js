import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Color from 'color';

import { TextInput, system } from 'ui-kit';

const EasterLocations = styled.div`
  background: url('/easter/empty-tomb-mobile.png');
  padding-bottom: 100px;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;

  @media screen and (min-width: ${themeGet('breakpoints.sm')}) {
    background: url('/easter/empty-tomb-mobile.png');
    padding-bottom: 200px;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    background: url('/easter/empty-tomb.png');
    padding-bottom: 200px;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    padding-bottom: 300px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    padding-bottom: 350px;
  }

  ${system}
`;

export const primaryHover = () => props => {
  const primaryColor = themeGet('colors.neutrals.500')(props);

  return Color(primaryColor).saturate(0.1).darken(0.35).hex();
};

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

const LocationInput = styled(TextInput)`
  text-align: center;
  font-size: 16px;
  margin-bottom: ${themeGet('space.s')};
  max-width: 400px;
  border: 1px solid #3a3a3c;

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

const LocationCard = styled.div`
  border: 2px solid black;
  border-radius: ${themeGet('radii.base')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding: ${themeGet('space.s')};
  width: 90vw;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    padding: ${themeGet('space.m')};
    width: ${props => (props?.cfe ? '320px' : 'auto')};
  }

  &:hover {
    cursor: pointer;
    background-color: ${themeGet('colors.neutrals.900')};
    color: ${themeGet('colors.neutrals.200')};
  }

  transition: background-color 0.3s ease;
  ${system}
`;

const CardSpacing = styled.div`
  ${cardSpan}
  ${system}
`;

EasterLocations.LocationCard = LocationCard;
EasterLocations.CardSpacing = CardSpacing;
EasterLocations.LocationInput = LocationInput;
EasterLocations.CurrentLocation = CurrentLocation;

export default EasterLocations;
