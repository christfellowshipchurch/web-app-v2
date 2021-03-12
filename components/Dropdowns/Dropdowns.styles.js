import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { Button as _Button, system } from 'ui-kit';

const Dropdowns = {};

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
  border-radius: ${themeGet('radii.xl')};
  display: flex;
  height: 40px;
  justify-content: center;
  margin-bottom: ${themeGet('space.xxs')};

  ${system}
`;

Dropdowns.Input = Input;
Dropdowns.Button = Button;

export default Dropdowns;
