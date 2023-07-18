import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const PageSingle = styled.div`
  ${system}
`;

const Hero = styled.div`
  position: relative;
  background-image: url(${props => props.coverImage});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  padding-top: 100%;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    padding-top: 56.25%;
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    padding-top: 42.86%;
  }
`;

const Section = styled.div`
  align-items: center;
  background: ${themeGet('colors.neutrals.200')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${themeGet('space.xxl')} ${themeGet('space.l')};
  text-align: center;
`;

const Glass = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  box-shadow: ${themeGet('shadows.l')};
  transform: translate(0px, 2px);
`;

const GlassContent = styled.div`
  flex: 1;
  color: ${themeGet('colors.white')};
  text-align: left;
  padding: ${themeGet('space.base')};
  max-width: 1100px;
`;

PageSingle.Hero = Hero;
PageSingle.Glass = Glass;
PageSingle.GlassContent = GlassContent;
PageSingle.Section = Section;

export default PageSingle;
