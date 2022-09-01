import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const NavMenu = styled.div``;

const NavLink = styled.a`
  font-weight: ${themeGet('fontWeights.bold')};
  color: ${themeGet('colors.black')};
  font-size: ${themeGet('fontSizes.h3')};
  text-decoration: none;
  margin-bottom: ${themeGet('space.xs')};

  &:hover {
    color: ${themeGet('colors.primary')};
  }

  ${system}
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${themeGet('space.base')};
  margin-right: ${themeGet('space.l')};
  width: max-content;

  ${system}
`;

const SpecialHeader = styled.h3`
  color: ${themeGet('colors.secondary')};
  font-style: italic;
  font-weight: ${themeGet('fontWeights.normal')};
`;

const SubNavLink = styled.a`
  text-decoration: none;
  color: ${themeGet('colors.black')};
  margin-bottom: ${themeGet('space.xs')};

  &:hover {
    color: ${themeGet('colors.neutrals.500')};
  }

  ${system}
`;

const SubNavLinkHeader = styled.a`
  font-weight: ${themeGet('fontWeights.bold')};
  color: ${themeGet('colors.black')};

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`;

const VerticalDivider = styled.div`
  height: 280px;
  width: 1px;
  background-color: ${themeGet('colors.neutrals.500')};

  ${system}
`;

NavMenu.NavLink = NavLink;
NavMenu.NavColumn = NavColumn;
NavMenu.SpecialHeader = SpecialHeader;
NavMenu.SubNavLink = SubNavLink;
NavMenu.SubNavLinkHeader = SubNavLinkHeader;
NavMenu.VerticalDivider = VerticalDivider;

export default NavMenu;
