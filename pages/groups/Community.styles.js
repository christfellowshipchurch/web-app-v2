import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';
import { rem } from 'ui-kit/_utils';

const Community = styled.div`
  ${system}
`;

const Hero = styled.div`
  background-image: linear-gradient(
      rgba(246, 246, 246, 0) 70%,
      rgba(246, 246, 246, 1) 100%
    ),
    url(/groups-cover-image.jpg);
  background-size: cover;
  background-position: center bottom;

  height: 200px;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    height: 400px;
    background-image: linear-gradient(
        rgba(246, 246, 246, 0) 60%,
        rgba(246, 246, 246, 0.5) 80%,
        rgba(246, 246, 246, 1) 100%
      ),
      url(/groups-cover-image.jpg);
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    height: 500px;
  }

  ${system}
`;

const Title = styled.h1`
  color: ${themeGet('colors.primary')};
  font-size: ${rem('50px')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: ${rem('65px')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    font-size: ${rem('75px')};
  }
  ${system}
`;

const Summary = styled.p`
  padding: ${themeGet('space.l')};
  padding-top: 0;

  ${system}
`;

Community.Hero = Hero;
Community.Title = Title;
Community.Summary = Summary;

export default Community;
