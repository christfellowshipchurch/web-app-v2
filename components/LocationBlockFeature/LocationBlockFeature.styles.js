import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';

const LocationBlockFeature = styled.div`
  ${system}
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    grid-template-columns: 1fr;
  }
`;

const LocationBlock = styled.div`
  height: auto;
  margin: ${themeGet('space.xl')};
  /* margin-left: ${themeGet('space.xl')};
  margin-right: ${themeGet('space.xl')};
  margin-bottom: ${themeGet('space.xxl')};
  margin-top: ${themeGet('space.xxl')}; */
  text-align: center;

  @media screen and (max-width: ${themeGet('breakpoints.lg')}) {
    margin: ${themeGet('space.base')};
  }
`;

LocationBlockFeature.Container = Container;
LocationBlockFeature.LocationBlock = LocationBlock;

export default LocationBlockFeature;
