import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { CardGrid, Image, system } from 'ui-kit';

export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 310px;
  height: 218px;

  ${system}
`;

export const StyledCardGrid = styled(CardGrid)`
  @media screen and (max-width: ${themeGet(`breakpoints.md`)}) {
    grid-template-columns: repeat(1, 1fr);
  }

  grid-column-gap: ${themeGet('space.m')};
  grid-row-gap: ${themeGet('space.base')};
`;

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
`;

export default Styled;
