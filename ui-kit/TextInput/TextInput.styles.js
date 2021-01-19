import React from 'react';

import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const TextInput = styled.div`
  position: relative;

  ${system}
`;

const e = React.createElement;

const getTag = ({ multiline }) => (multiline ? 'textarea' : 'input');

const Field = styled(({ tag = 'input', children, ...props }) =>
  e(getTag(props), props, children)
)`
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

TextInput.Field = Field;

export default TextInput;
