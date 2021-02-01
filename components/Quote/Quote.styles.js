import styled, { css } from 'styled-components';

import { Image, system } from 'ui-kit';

const visibility = ({ src }) => props => {
  return css`
    visibility: ${src ? 'visible' : 'hidden'};
  `;
};

export const StyledAvatar = styled(Image)`
  height: 122px;
  width: 122px;
  object-fit: cover;

  ${visibility}
  ${system}
`;
