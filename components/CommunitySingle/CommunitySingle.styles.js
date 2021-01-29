import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';

const Header = styled.div`
  align-items: center;
  background-size: cover;
  border-radius: ${themeGet('radii.base')};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.33), rgba(71, 71, 71, 0.85)),
    url(${props => props.src});
  height: 298px;
  margin-bottom: ${themeGet('space.base')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    margin: 0 ${themeGet('space.xxl')} ${themeGet('space.l')};
    height: 596px;
  }

  ${system}
`;

export default Header;
