import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';
import { rem } from 'ui-kit/_utils';

const Community = styled.div`
  ${system}
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;

  @media screen and (min-width: ${themeGet('breakpoints.xs')}) {
    top: 35%;
    padding: ${themeGet('space.base')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    top: 30%;
    width: 600px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    top: 65%;
    width: 800px;
  }

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

  height: 375px;

  @media screen and (min-width: ${themeGet('breakpoints.sm')}) {
    height: 300px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    height: 400px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: 650px;
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

const LogoOverlay = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  right: 0;
  left: 0;
  text-align: center;

  @media screen and (min-width: ${themeGet('breakpoints.xs')}) {
    top: 15%;
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    top: 4%;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    top: -5%;
  }
  ${system}
`;

Community.Content = Content;
Community.Hero = Hero;
Community.Subtitle = Subtitle;
Community.Title = Title;
Community.LogoOverlay = LogoOverlay;

export default Community;
