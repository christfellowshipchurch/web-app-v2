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
  line-height: 2.5;
  padding-left: ${themeGet('space.l')};
  padding-right: ${themeGet('space.l')};
  text-align: center;

  ${system}
`;

Button.propTypes = {
  ...propTypes,
};

export default Button;
