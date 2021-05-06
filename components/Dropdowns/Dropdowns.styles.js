import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components';

import { Box, Button as _Button, system } from 'ui-kit';

const Dropdowns = {};

export const Container = styled(Box)`
  background: ${themeGet('colors.bg')};
  ${props =>
    props.hideShadow
      ? null
      : css`
          box-shadow: ${themeGet('shadows.nav')};
        `}
  width: 100%;

  ${system}
`;

export const Input = styled.input`
  border-radius: ${themeGet('radii.base')};
  font-size: ${themeGet('fontSizes.h4')};
  padding: 0 5px;
  height: 32px;
  width: 100%;

  &:focus {
    outline: none;
  }

  ${system}
`;

export const Button = styled(_Button)`
  align-items: center;
  display: flex;
  height: 30px;
  justify-content: flex-start;
  margin-bottom: ${themeGet('space.xxs')};
  background-color: transparent;
  color: ${themeGet('colors.fg')};
  border: 0;
  font-weight: bold;

  :hover {
    background-color: ${themeGet('colors.grey')};
  }

  ${system}
`;

export const FeaturedItem = styled(Box)`
  cursor: pointer;
  height: 226px;
  margin-bottom: ${themeGet('space.s')};
  ${system}
`;

export const NonFeaturedItem = styled(Box)`
  cursor: pointer;
  width: 100%;
  background: ${themeGet('colors.primary')};
  border-radius: ${themeGet('radii.image')};
  height: 106px;
  display: flex;
  padding: 0 ${themeGet('space.l')};
  align-items: center;
  margin-bottom: ${themeGet('space.s')};
  justify-content: space-between;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${system}
`;

Dropdowns.Container = Container;
Dropdowns.Input = Input;
Dropdowns.Button = Button;
Dropdowns.FeaturedItem = FeaturedItem;
Dropdowns.NonFeaturedItem = NonFeaturedItem;

export default Dropdowns;
