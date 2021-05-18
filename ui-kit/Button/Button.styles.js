import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const rounded = ({ rounded }) => props => {
  if (rounded) {
    return css`
      border-radius: 9999px;
    `;
  }
};

const variant = ({ variant, active }) => props => {
  if (variant === 'secondary') {
    return css`
      background-color: transparent;
      border-color: ${themeGet('colors.primary')};
      color: ${themeGet('colors.primary')};
    `;
  }

  if (variant === 'link') {
    return css`
      background-color: transparent;
      color: ${themeGet('colors.primary')};
      line-height: 1.5;

      &:active,
      &:focus,
      &:hover {
        background: none;
        color: ${themeGet('colors.neutrals.800')};
        outline: none;
      }
    `;
  }

  if (variant === 'tertiary') {
    return css`
      background-color: ${themeGet('colors.paper')};
      color: ${themeGet('colors.secondary')};
    `;
  }

  if (variant === 'chip') {
    return css`
      background-color: ${themeGet('colors.paper')};
      color: ${themeGet('colors.tertiary')};
      border-color: ${themeGet('colors.tertiary')};

      &:active,
      &:focus,
      &:hover {
        background-color: ${themeGet('colors.neutrals.200')};
        border-color: ${themeGet('colors.fg')};
        color: ${themeGet('colors.fg')};
      }
    `;
  }
};

const size = ({ size }) => props => {
  if (size === 's') {
    return css`
      font-size: ${themeGet('fontSizes.s')};
      line-height: 2.2;
      padding-left: ${themeGet('space.s')};
      padding-right: ${themeGet('space.s')};
    `;
  }

  if (size === 'l') {
    return css`
      line-height: 2.8;
      padding-left: ${themeGet('space.l')};
      padding-right: ${themeGet('space.l')};
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

  if (status === 'SELECTED') {
    return css`
      color: ${themeGet('colors.primary')};
      background-color: ${themeGet('colors.primarySubdued')};
      border-color: ${themeGet('colors.primary')};

      &:active,
      &:focus,
      &:hover {
        background-color: ${themeGet('colors.primarySubduedHover')};
        border-color: ${themeGet('colors.primaryHover')};
        color: ${themeGet('colors.primaryHover')};
      }
    `;
  }
};

const active = ({ active, variant }) => props => {
  if (active && variant === 'link') {
    return css`
      background: none;
      color: ${themeGet('colors.neutrals.800')};
      outline: none;

      &:active,
      &:focus,
      &:hover {
        background: none;
        color: ${themeGet('colors.neutrals.800')};
        outline: none;
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
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  font-weight: ${themeGet('fontWeights.bold')};
  line-height: 1.5;
  padding-top: ${themeGet('space.s')};
  padding-bottom: ${themeGet('space.s')};
  padding-left: ${themeGet('space.base')};
  padding-right: ${themeGet('space.base')};
  text-align: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }

  &:active,
  &:focus,
  &:hover {
    background-color: ${themeGet('colors.primaryHover')};
    color: ${themeGet('colors.white')};
  }

  ${size}
  ${variant}
  ${status}
  ${rounded}
  ${active}
  ${system}
`;

export default Button;
