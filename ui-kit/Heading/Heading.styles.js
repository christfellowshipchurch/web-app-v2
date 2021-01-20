import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components';

import { system } from 'ui-kit';

const variant = ({ variant }) => props => {
  return css`
    font-size: ${themeGet(`fontSizes.${variant}`)};
    line-height: ${themeGet(`lineHeights.${variant}`)};
  `;
};

const Heading = styled.div`
  font-family: ${themeGet('fonts.heading')};

  ${variant}
  ${system}
`;

export default Heading;
