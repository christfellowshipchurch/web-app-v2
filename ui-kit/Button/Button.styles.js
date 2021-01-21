import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const size = ({ size }) => props => {
  switch (size) {
    case 's':
      return css`
        width: 145px;
      `;
    case 'l':
    default:
      return css`
        width: 240px;
      `;
  }
};

const status = ({ status }) => props => {
  if (status === 'LOADING') {
    return css`
      align-items: center;
      display: inline-flex;

      > *:first-child {
        margin-right: ${themeGet('space.s')};
      }
    `;
  }
};

const background = ({ color, variant }) => props => {
  if (variant === 'outlined') {
    return css`
      background-color: ${themeGet('colors.white')};
    `;
  }

  return css`
    background-color: ${themeGet(`colors.${color || 'primary'}`)};
  `;
};

const color = ({ color, variant }) => props => {
  if (variant === 'outlined') {
    return css`
      color: ${themeGet(`colors.${color || 'primary'}`)};
    `;
  }

  return css`
    color: ${themeGet('colors.white')};
  `;
};

const border = ({ color }) => props => {
  return css`
    border: 1px solid ${themeGet(`colors.${color || 'primary'}`)};
  `;
};

const Button = styled.button`
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-block;
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  height: 52px;
  padding: ${themeGet('space.s')};
  border-radius: ${themeGet('radii.button')};
  text-align: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }

  ${system}
  ${background}
  ${border}
  ${size}
  ${status}
  ${color}
`;

export default Button;
