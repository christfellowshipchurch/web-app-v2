import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';
import { rem } from 'ui-kit/_utils';

const LocationSingle = styled.div`
  ${system}
`;

const Hero = styled.div`
  background-image: url(${props => props.coverImage});
  background-position: center;
  background-size: cover;
  min-height: 80vh;
  overflow: hidden;
  padding-top: ${themeGet('space.xxl')};
  position: relative;
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
  text-align: center;
  padding: ${themeGet('space.xl')};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
`;

LocationSingle.Hero = Hero;
LocationSingle.Glass = Glass;
LocationSingle.GlassContent = GlassContent;

export default LocationSingle;
