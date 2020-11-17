import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../';

const Radio = styled.div`
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

Radio.Input = Input;
Radio.Label = Label;

export default Radio;
