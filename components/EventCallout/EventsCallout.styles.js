import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { system } from 'ui-kit';

const EventsCallout = styled.div`
  background-color: ${themeGet('colors.white')};
  border-radius: 0;
  box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.04);
  padding: ${themeGet('space.m')} ${themeGet('space.l')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    padding: ${themeGet('space.l')} ${themeGet('space.xxl')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    border-radius: ${themeGet('radii.image')};
    margin-top: 0px;
    padding: ${themeGet('space.m')};
  }

  ${system}
`;

export default EventsCallout;
