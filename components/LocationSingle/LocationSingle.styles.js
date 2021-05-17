import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import isEmpty from 'lodash/isEmpty';

import { system } from 'ui-kit';

const glassBackground = ({ coverImage }) => props => {
  if (!isEmpty(coverImage)) {
    return css`
      color: ${themeGet('colors.white')};
      background-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.65),
        rgba(0, 0, 0, 0.85)
      );
    `;
  }
};

const LocationSingle = styled.div`
  ${system}
`;

const Hero = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  background-image: url(${props => props.coverImage});
  background-position: bottom;
  background-size: cover;

  padding: ${themeGet('space.m')};
  min-height: ${props => (isEmpty(props.coverImage) ? '0' : '80vh')};
`;

const Glass = styled.div`
  width: 100%;

  padding-bottom: ${themeGet('space.l')};
  padding-top: ${themeGet('space.xl')};
  padding-right: ${themeGet('space.s')};
  padding-left: ${themeGet('space.s')};

  text-align: center;

  ${glassBackground}
`;

LocationSingle.Hero = Hero;
LocationSingle.Glass = Glass;

export default LocationSingle;
