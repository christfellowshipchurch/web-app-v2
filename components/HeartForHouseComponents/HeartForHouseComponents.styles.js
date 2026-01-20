import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';
import { system } from 'ui-kit';

const HeartForHouseRedLink = styled.a`
  color: #e63e51;
  text-align: center;
  font-style: italic;
  text-decoration: underline;
  margin-top: ${themeGet('space.base')};

  &:hover {
    color: ${props => props.hoverColor && props.hoverColor};
  }
  ${system}
`;

const HeartForHouseDiv = styled.div`
  ${system}
`;

HeartForHouseDiv.HeartForHouseRedLink = HeartForHouseRedLink;

export default HeartForHouseDiv;
