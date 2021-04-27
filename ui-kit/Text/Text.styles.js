import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components';

import { system } from 'ui-kit';

const variant = ({ variant }) => props => {
  return css`
    font-size: ${themeGet(`fontSizes.${variant}`)};
    line-height: ${themeGet(`lineHeights.${variant}`)};
  `;
};

const Text = styled.div`
  font-family: ${themeGet('fonts.base')};
  cursor: ${props => (props.onClick ? 'pointer' : 'inherit')};

  ${variant}
  ${system}
`;

export default Text;
