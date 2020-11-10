import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../';

const TextInput = styled.div`
  position: relative;

  ${system}
`;

const Input = styled.input`
  border: 2px solid ${themeGet('colors.border')};
  border-radius: ${themeGet('radii.s')};
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  padding: ${themeGet('space.s')};
  width: 100%;

  &:focus {
    border-color: ${themeGet('colors.primary')};
    outline: none;
  }

  ${system}
`;

const Label = styled.label`
  display: block;
  font-size: ${themeGet('fontSizes.s')};
  font-weight: ${themeGet('fontWeights.bold')};
  margin-bottom: ${themeGet('space.s')};

  ${system}
`;

TextInput.Input = Input;
TextInput.Label = Label;

export default TextInput;
