import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, propTypes } from './lib/system';

const Button = styled.div`
  background-color: ${themeGet('colors.primary')};
  border: 1px solid transparent;
  border-radius: ${themeGet('radii.s')};
  color: ${themeGet('colors.white')};
  cursor: pointer;
  display: inline-block;
  font-weight: ${themeGet('fontWeights.bold')};
  line-height: 2.5;
  padding-left: ${themeGet('space.base')};
  padding-right: ${themeGet('space.base')};
  text-align: center;
  transition: 0.3s ease-in-out;

  &:active,
  &:focus,
  &:hover {
    background-color: ${themeGet('colors.fg')};
  }

  ${system}
`;

Button.propTypes = {
  ...propTypes,
};

export default Button;
