import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const NavScreen = styled.div`
  position: absolute;
  left: -45px;
  top: -20px;
  width: 100vw;
  min-width: 100%;
  height: 100vh;
  min-height: 100%;
  position: relative;
  background: ${themeGet('colors.paper')};
  overflow: scroll;

  ${system};
`;

const NavLink = styled.a`
  font-weight: ${themeGet('fontWeights.bold')};
  color: ${themeGet('colors.black')};
  font-size: ${themeGet('fontSizes.h3')};
  text-decoration: none;
  margin-bottom: ${themeGet('space.base')};

  &:hover {
    color: ${themeGet('colors.primary')};
  }

  ${system}
`;

const SubNavLink = styled.a`
  color: ${themeGet('colors.black')};
  font-weight: 600;
  font-size: ${themeGet('fontSizes.h3')};
  text-decoration: none;
  margin-bottom: ${themeGet('space.s')};

  &:hover {
    color: ${themeGet('colors.primary')};
  }

  ${system}
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${themeGet('space.base')};
  padding-bottom: ${themeGet('space.base')};
  padding-right: ${themeGet('space.l')};
  padding-left: ${themeGet('space.l')};
  width: inherit;
  height: fit-content;

  ${system}
`;

const LinkContainerColored = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${themeGet('space.base')};
  padding-bottom: ${themeGet('space.l')};
  padding-right: ${themeGet('space.l')};
  padding-left: ${themeGet('space.l')};
  width: inherit;
  height: fit-content;

  background: linear-gradient(270.35deg, #0092bc -22.55%, #004f71 106.52%),
    linear-gradient(90.49deg, #6bcaba -24.45%, #0092bc 118.95%);

  ${system}
`;

const SpecialHeader = styled.h1`
  color: ${themeGet('colors.white')};
  font-style: italic;
  font-weight: 200;
  padding-bottom: ${themeGet('space.base')};
`;

NavScreen.NavLink = NavLink;
NavScreen.SubNavLink = SubNavLink;
NavScreen.LinkContainer = LinkContainer;
NavScreen.LinkContainerColored = LinkContainerColored;
NavScreen.SpecialHeader = SpecialHeader;
export default NavScreen;
