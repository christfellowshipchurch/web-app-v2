import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components';

import { Button, Image, system } from 'ui-kit';

const justify = ({ justify }) => props => {
  return css`
    justify-self: ${justify === 'right' ? 'left' : 'right'};
  `;
};

export const StyledImage = styled(Image)`
  height: 370px;
  width: 556px;
  object-fit: cover;

  @media screen and (max-width: ${themeGet(`breakpoints.lg`)}) {
    width: 100%;
    grid-row: 1;
  }

  ${justify}
  ${system}
`;

export const StyledButton = styled(Button)`
  flex: 1;
  max-width: 240px;
  min-width: 145px;
  width: auto;
`;
