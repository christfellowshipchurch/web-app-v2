import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Button, system } from 'ui-kit';

const GiveHero = styled.div`
  ${system}
`;

const GiveHeroButton = styled(Button)`
  background-color: transparent;
  width: 160px;
  text-decoration: none;
  font-weight: bold;

  font-size: 18px;
  padding: ${themeGet('space.s')};
  border: 2px solid white;
  border-radius: 0px;

  color: white;

  transition: 0.5s ease-in-out;

  @media (max-width: ${themeGet('breakpoints.md')}) {
    width: 160px;
    font-size: 18px;
  }

  @media (max-width: ${themeGet('breakpoints.sm')}) {
    width: 120px;
    font-size: 14px;
    border-radius: 6px;
  }

  ${system}
`;

GiveHero.HeroButton = GiveHeroButton;

export default GiveHero;
