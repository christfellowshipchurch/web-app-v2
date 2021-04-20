import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const EventsCallout = styled.div`
  background-color: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.image')};
  box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.04);
  padding: ${themeGet('space.m')};
  right: 0;
  ${props => (props.floater ? 'bottom: 0' : 'top: 0')};

  @media screen and (max-width: ${themeGet('breakpoints.lg')}) {
    border-radius: 0;
    margin-top: 0px;
  }

  ${system}
`;

export default EventsCallout;
