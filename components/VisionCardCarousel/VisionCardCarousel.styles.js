import styled from 'styled-components';
import { Card } from 'ui-kit';

const StyledScrollBox = styled.div`
  overflow: scroll;
  flex-wrap: nowrap;
  display: flex;
`;

const StyledCard = styled(Card)`
  cursor: grab !important;
  transition: all 200ms ease-out;

  &:hover {
    transform: scale(1.06);
    transition: all 200ms ease-in;
  }

  &:active {
    cursor: grabbing !important;
  }
`;

export { StyledScrollBox, StyledCard };
