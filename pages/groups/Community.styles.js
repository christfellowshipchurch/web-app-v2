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
  ${system}
`;

const Hero = styled.div`
  background-image: linear-gradient(
      rgba(000, 000, 000, 0.3) 0%,
      rgba(000, 000, 000, 0.6) 100%
    ),
    url(/groups-cover-image.png);
  background-size: cover;
  background-position: center;
  @media screen and (min-width: ${themeGet('breakpoints.xs')}) {
    height: 35vh;
  }
  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: 75vh;
  }
  z-index: 3;
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

const Logo = styled.img`
  @media screen and (min-width: ${themeGet('breakpoints.xs')}) {
    transform: scale(0.6);
    margin-top: 3vh;
    margin-bottom: -3vh;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    transform: scale(0.4);
    margin-top: -3vh;
    margin-bottom: -5vh;
  }
  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    transform: scale(0.4);
    margin-top: -10vh;
    margin-bottom: -20vh;
  }
  @media screen and (min-width: ${themeGet('breakpoints.xlg')}) {
    transform: scale(0.3);
    margin-top: -10vh;
    margin-bottom: -20vh;
  }
  ${system};
`;

Community.Content = Content;
Community.Hero = Hero;
Community.Subtitle = Subtitle;
Community.Title = Title;
Community.Logo = Logo;

export default Community;
