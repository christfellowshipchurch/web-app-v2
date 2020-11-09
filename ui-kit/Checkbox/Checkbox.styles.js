import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../';

const Checkbox = styled.div`
  display: flex;

  ${system}
`;

const Input = styled.input`
  margin-right: ${themeGet('space.xs')};
  position: relative;
  top: 4px;

  ${system}
`;

const Label = styled.label`
  font-size: ${themeGet('fontSizes.s')};

  ${system}
`;

Checkbox.Input = Input;
Checkbox.Label = Label;

export default Checkbox;
