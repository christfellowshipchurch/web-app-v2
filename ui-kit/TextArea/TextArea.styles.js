import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const TextArea = styled.div`
  position: relative;

  ${system}
`;

const Input = styled.textarea`
  border: 2px solid ${themeGet('colors.border')};
  border-radius: ${themeGet('radii.s')};
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  padding: ${themeGet('space.s')};
  width: 100%;

  &::placeholder {
    color: ${themeGet('colors.border')};
  }

  &:focus {
    border-color: ${themeGet('colors.primary')};
    outline: none;
  }

  ${system}
`;

TextArea.Input = Input;

export default TextArea;
