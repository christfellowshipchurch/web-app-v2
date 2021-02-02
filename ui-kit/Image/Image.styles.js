import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components';

import { system } from 'ui-kit';

const rounded = ({ rounded }) => props => {
  if (rounded) {
    const _rounded = rounded === true ? 'image' : rounded;
    return css`
      border-radius: ${themeGet(`radii.${_rounded}`)};
    `;
  }
};

const Image = styled.img`
  ${props => props.objectFit && `object-fit: ${props.objectFit};`}
  ${rounded}
  ${system}
`;

export default Image;
