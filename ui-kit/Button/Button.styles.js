import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../';

const variant = ({ variant }) => props => {
  if (variant === 'secondary') {
    return css`
      background-color: transparent;
      border-color: ${themeGet('colors.fg')};
      color: ${themeGet('colors.fg')};
    `;
  }
};

const size = ({ size }) => props => {
  if (size === 'l') {
    return css`
      line-height: 2.8;
      padding-left: ${themeGet('space.l')};
      padding-right: ${themeGet('space.l')};
    `;
  }
};

const loading = ({ loading }) => props => {
  if (loading) {
    return css`
      align-items: center;
      display: inline-flex;

      > *:first-child {
        margin-right: ${themeGet('space.s')};
      }
    `;
  }
};

const Button = styled.button`
  background-color: ${themeGet('colors.primary')};
  border: 1px solid transparent;
  border-radius: ${themeGet('radii.s')};
  color: ${themeGet('colors.white')};
  cursor: pointer;
  display: inline-block;
  font-size: ${themeGet('fontSizes.base')};
  font-weight: ${themeGet('fontWeights.bold')};
  line-height: 2.5;
  padding-left: ${themeGet('space.base')};
  padding-right: ${themeGet('space.base')};
  text-align: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:active,
  &:focus,
  &:hover {
    background-color: ${themeGet('colors.fg')};
    color: ${themeGet('colors.white')};
  }

  ${loading}
  ${variant}
  ${size}
  ${system}
`;

export default Button;
