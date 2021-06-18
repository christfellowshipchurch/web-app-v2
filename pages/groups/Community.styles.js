import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';
import { rem } from 'ui-kit/_utils';

const Community = styled.div`
  ${system}
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background-image: url(/groups-cover-image-new.jpg);
  background-size: cover;
  background-position: center bottom;

  min-height: 70vh;

  padding-right: ${themeGet('space.base')};
  padding-left: ${themeGet('space.base')};
  padding-bottom: ${themeGet('space.s')};
  margin-bottom: ${themeGet('space.m')};

  @media screen and (min-width: ${themeGet('breakpoints.sm')}) {
    min-height: 50vh;
  }

  ${system}
`;

const Title = styled.h1`
  color: white;
  font-size: ${rem('45px')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: ${rem('65px')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    font-size: ${rem('75px')};
  }
  ${system}
`;

const Summary = styled.p`
  color: white;
  padding-top: 0;

  padding-left: ${themeGet('space.base')};
  padding-right: ${themeGet('space.base')};

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    padding-left: ${themeGet('space.l')};
    padding-right: ${themeGet('space.l')};
  }

  ${system}
`;

Community.Hero = Hero;
Community.Title = Title;
Community.Summary = Summary;

export default Community;
