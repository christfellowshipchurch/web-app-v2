import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components';

import { system } from 'ui-kit';

const rounded = ({ rounded }) => props => {
  if (rounded) {
    return css`
      border-radius: ${themeGet('radii.image')};
    `;
  }
};

const Image = styled.img`
  ${rounded}
  ${system}
`;

export default Image;
