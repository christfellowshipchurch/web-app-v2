import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';
import { rem } from 'ui-kit/_utils';

const Community = styled.div`
  ${system}
`;

const Content = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  top: 35%;

  @media screen and (min-width: ${themeGet('breakpoints.sm')}) {
    top: 25%;
  }

  ${system}
`;

const Hero = styled.div`
  background-image: url(/groups-cover-image.png);
  background-size: cover;
  background-position: center;

  height: 375px;

  @media screen and (min-width: ${themeGet('breakpoints.sm')}) {
    height: 300px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    height: 400px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: 450px;
  }

  ${system}
`;

const Subtitle = styled.h2`
  color: ${themeGet('colors.secondary')};
  padding: ${themeGet('space.s')};
`;

const Title = styled.h1`
  color: ${themeGet('colors.white')};
  font-size: ${rem('50px')};
  text-shadow: 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: ${rem('65px')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    font-size: ${rem('75px')};
  }
  ${system}
`;

Community.Content = Content;
Community.Hero = Hero;
Community.Subtitle = Subtitle;
Community.Title = Title;

export default Community;
