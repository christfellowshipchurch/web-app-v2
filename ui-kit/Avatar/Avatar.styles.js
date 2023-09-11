import styled from 'styled-components';

import { system } from 'ui-kit';

const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  opacity: 1 !important;

  &:hover {
    opacity: ${props => props.opacity}!important;
  }
  // for when adding a transition to the opacity with hover
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;

  ${system}
`;

export default Avatar;
