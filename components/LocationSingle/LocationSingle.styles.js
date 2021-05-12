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
  padding: ${themeGet('space.m')};
  min-height: 45vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Glass = styled.div`
  padding: ${themeGet('space.xl')} ${themeGet('space.l')};
  text-align: center;
  color: ${themeGet('colors.white')};
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: ${themeGet('radii.base')};
  box-shadow: ${themeGet('shadows.l')};
`;

LocationSingle.Hero = Hero;
LocationSingle.Glass = Glass;

export default LocationSingle;
