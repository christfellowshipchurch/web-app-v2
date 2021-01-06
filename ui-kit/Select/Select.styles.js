import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Select = styled.select`
  appearance: none;
  background-color: ${themeGet('colors.white')};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'%3E%3C/path%3E%3C/svg%3E");
  background-position: right ${themeGet('space.s')} top 50%;
  background-repeat: no-repeat;
  border: 2px solid ${themeGet('colors.border')};
  border-radius: ${themeGet('radii.s')};
  box-sizing: border-box;
  color: ${themeGet('colors.fg')};
  display: block;
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  max-width: 100%;
  padding: ${themeGet('space.s')};
  width: 100%;

  :focus {
    border-color: ${themeGet('colors.primary')};
    outline: none;
  }
  &[disabled] {
    opacity: 0.6;
  }

  ${system}
`;

const Option = styled.option`
  ${system}
`;

Select.Option = Option;

export default Select;
