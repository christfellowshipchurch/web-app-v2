// Styling for our CardDropdown
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';

const CardDropdown = styled.div``;

const CardMenu = styled.div`
  z-index: 1;
  background-color: ${themeGet('colors.white')};
  position: absolute;
  border-radius: ${themeGet('radii.base')};
  box-shadow: ${themeGet('shadows.base')} ${system};

  ${system}
`;

const CardMenuOption = styled.div`
  padding: ${themeGet('space.base')};

  cursor: pointer;

  &:hover {
    background-color: ${themeGet('colors.neutrals.200')};
  }

  ${system}
`;

CardDropdown.CardMenu = CardMenu;
CardDropdown.CardMenuOption = CardMenuOption;

export default CardDropdown;
