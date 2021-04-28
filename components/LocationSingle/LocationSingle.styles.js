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
  min-height: 40vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Title = styled.h1`
  padding: ${themeGet('space.xl')} ${themeGet('space.l')};
  text-align: center;
  color: ${themeGet('colors.white')};
  backdrop-filter: blur(10px);
  border-radius: ${themeGet('radii.base')};
`;

LocationSingle.Hero = Hero;
LocationSingle.Title = Title;

export default LocationSingle;
