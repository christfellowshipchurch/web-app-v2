import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Box } from 'ui-kit';

const Styled = {};

Styled.FilterButton = styled(Box)`
  bottom: ${themeGet('space.m')};
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 2;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    display: none;
  }
`;

Styled.SearchContainer = styled.div`
  max-width: ${themeGet('breakpoints.md')};
  position: relative;
  width: 100%;
`;

Styled.SearchIcon = styled(Box)`
  align-items: center;
  display: flex;
  height: ${themeGet('space.xxl')};
  left: ${themeGet('space.s')};
  opacity: 25%;
  position: absolute;
  top: 0;
`;

Styled.SearchBox = styled.input`
  border-radius: ${themeGet('radii.image')};
  border: none;
  box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.09);
  font-size: ${themeGet('fontSizes.xl')};
  height: ${themeGet('space.xxl')};
  padding: ${themeGet('space.m')};
  padding-left: ${themeGet('space.xl')};
  width: 100%;

  &:focus {
    outline: none;
  }

  ::-webkit-search-cancel-button {
    appearance: none;
  }
`;

Styled.ClearButtonContainer = styled(Box)`
  height: ${themeGet('space.xxl')};
  position: absolute;
  right: 0;
  top: 0;
`;

Styled.ClearButton = styled.button`
  background: transparent;
  border: none;
  color: ${themeGet('colors.black')}50;
  font-family: ${themeGet('fonts.heading')};
  font-size: ${themeGet('fontSizes.m')};
  height: 100%;
  margin-right: ${themeGet('space.l')};
`;

const refined = ({ isRefined }) => props => {
  if (isRefined) {
    return css`
      background-color: ${themeGet('colors.primary')};
      border-color: ${themeGet('colors.primary')};
      color: ${themeGet('colors.white')};

      :focus,
      :hover,
      :active {
        background-color: ${themeGet('colors.primary')};
        border-color: ${themeGet('colors.primary')};
        color: ${themeGet('colors.white')};
      }
    `;
  }

  return css`
    background-color: ${themeGet('colors.gray')};
    color: ${themeGet('colors.black')};
  `;
};

Styled.CategoryItem = styled.a`
  border: 1px solid #d1d1d6;
  border-radius: ${themeGet('radii.xl')};
  color: ${themeGet('colors.black')};
  font-weight: ${themeGet('fontWeights.bold')};
  margin: 5px;
  padding: ${themeGet('space.s')};
  text-decoration: none;
  transition: none;

  ${refined}
`;

Styled.RefinementsBackground = styled(Box)`
  background ${themeGet('colors.bg')};
  display: none;
  flex-shrink: 0;
  height: 100%;
  left: 0;
  margin-right: ${themeGet('space.l')};
  position: fixed;
  width: 100%;
  z-index: 1;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    background: unset;
    display: block !important;
    margin-right: 0 !important;
    position: initial !important;
    padding: 0 !important;
    padding-bottom: 0 !important;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    flex-basis: 250px;
  }

  ${props =>
    props.filtering
      ? css`
          bottom: 0;
          display: block;
          overflow-y: auto;
          padding: ${themeGet('space.m')};
          padding-bottom: ${themeGet('space.xxl')};
          position: fixed;
          top: ${themeGet('space.header')};
          width: 100%;
        `
      : ''}
`;

Styled.Refinements = styled(Box)`
  background: ${themeGet('colors.gray')}50;
  left: 0;
  overflow-x: hidden;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    background: unset;
    flex-wrap: wrap;
    justify-content: center;
    display: flex !important;
    position: initial !important;
    padding: 0 !important;
    padding-bottom: 0 !important;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    display: block !important;
    margin-right: 0 !important;
  }

  ${props =>
    props.filtering
      ? css`
          bottom: 0;
          display: block;
          overflow-y: auto;
          padding: ${themeGet('space.m')};
          padding-bottom: ${themeGet('space.xxl')};
          position: fixed;
          top: ${themeGet('space.header')};
          width: 100%;
        `
      : ''}
`;

export default Styled;
