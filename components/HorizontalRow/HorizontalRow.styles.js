import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { CardGrid, Image, system } from 'ui-kit';

export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 310px;
  max-height: 218px;

  ${props => props.onClick ? 'cursor: pointer;' : null}

  ${system}
`;

export const StyledCardGrid = styled(CardGrid)`
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }

  margin-left: auto;
  margin-right: auto;
  grid-column-gap: ${themeGet('space.m')};
  grid-row-gap: ${themeGet('space.base')};
`;

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  ${system}
`;

export default Styled;
