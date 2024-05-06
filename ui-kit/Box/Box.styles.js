import styled from 'styled-components';

import { system } from 'ui-kit';

const Box = styled.div`
  &:hover,
  &:focus,
  &:active {
    color: ${props => props?.hoverColor && `${props?.hoverColor}`};
  }
  text-wrap: pretty;
  ${system}
`;

export default Box;
