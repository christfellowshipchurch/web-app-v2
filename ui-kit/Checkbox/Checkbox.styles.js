import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Checkbox = styled.div`
  display: flex;
  transform: scale(${props => props.size});

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
