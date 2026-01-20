import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Button, system } from 'ui-kit';

const EasterHero = styled.div`
  ${system}
`;

const EasterHeroButton = styled(Button)`
  text-decoration: none;
  font-weight: bold;

  font-size: 18px;
  padding: ${themeGet('space.s')} ${themeGet('space.l')};
  border-radius: 20px;

  margin-top: ${themeGet('space.base')};
  margin: ${themeGet('space.xs')};
  background-color: #3b7dd9;

  color: ${props => props?.color || 'white'};

  transition: 0.5s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props?.buttonHover};
    color: ${props => props?.hoverTextColor};
  }
  ${system}
`;

EasterHero.HeroButton = EasterHeroButton;

export default EasterHero;
