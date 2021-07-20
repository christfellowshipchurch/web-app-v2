import styled from 'styled-components';
import { system } from 'ui-kit';

const GradientBackground = styled.div`
  background: rgb(205, 205, 205);
  background: -moz-linear-gradient(
    0deg,
    ${props => props.bottom} 45%,
    ${props => props.top} 82%
  );
  background: -webkit-linear-gradient(
    0deg,
    ${props => props.bottom} 45%,
    ${props => props.top} 82%
  );
  background: linear-gradient(
    0deg,
    ${props => props.bottom} 45%,
    ${props => props.top} 82%
  );

  ${system}
`;

export default GradientBackground;
