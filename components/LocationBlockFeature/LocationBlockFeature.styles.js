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
  text-align: center;

  @media screen and (max-width: ${themeGet('breakpoints.lg')}) {
    margin-top: ${themeGet('space.base')};
    margin-bottom: ${themeGet('space.l')};
    margin-left: 0px;
    margin-right: 10px;
  }

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    margin-top: ${themeGet('space.base')};
    margin-bottom: ${themeGet('space.l')};
    margin-left: 0px;
    margin-right: 0px;
  }
`;

LocationBlockFeature.Container = Container;
LocationBlockFeature.LocationBlock = LocationBlock;

export default LocationBlockFeature;
