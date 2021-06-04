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

  background-image: linear-gradient(
      rgba(246, 246, 246, 0) 70%,
      rgba(246, 246, 246, 1) 100%
    ),
    url(/groups-cover-image-new.jpg);
  background-size: cover;
  background-position: center bottom;

  min-height: 200px;
  padding-bottom: ${themeGet('space.s')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    min-height: 400px;
    background-image: url(/groups-cover-image-new.jpg);
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    min-height: 500px;
  }

  ${system}
`;

const Title = styled.h1`
  color: white;
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
  color: white;
  padding-top: 0;

  ${system}
`;

Community.Hero = Hero;
Community.Title = Title;
Community.Summary = Summary;

export default Community;
