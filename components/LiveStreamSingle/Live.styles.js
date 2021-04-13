import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Live = {};

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-areas:
    'mastHead'
    'video'
    'chat';

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    grid-template-areas:
      'video video'
      'mastHead chat'
      'details chat';
    grid-template-columns: 67fr 33fr;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    grid-template-areas:
      'video chat' /* Chat on right */
      'mastHead mastHead'
      'details details';
    grid-template-columns: 67fr 33fr;
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    grid-template-columns: 75fr 25fr;
  }

  ${system}
`;

const Video = styled.div`
  grid-area: video;

  /* Fix poster image sizing */
  & video {
    background-size: cover;
  }

  /*
  Clumsy way to force 16/9 aspect ratio on shaka player.
  Some issue makes iOS / Safari add tons of space vertically
  around the video, and poster images break the aspect ratio
  during loading regardless if they're not 16/9.
  */
  & > .shaka-video-container {
    /* Assumes 16/9 aspect ratio in full width/bleed player container */
    height: calc((9 / 16) * 100vw);

    /* Breakpoint adjustments must be in sync with root Container grid-template-columns.*/
    @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
      height: calc((9 / 16) * 67vw);
    }

    @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
      height: calc((9 / 16) * 75vw);
    }
  }
`;

const MastHead = styled.div`
  grid-area: mastHead;
  display: flex;
  flex-direction: column;
  padding: ${themeGet('space.base')};

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    flex-direction: row;
    padding: ${themeGet('space.l')} ${themeGet('space.base')};
  }
`;

const LiveIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: ${themeGet('space.base')};
  margin-bottom: ${themeGet('space.xs')};

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    margin-bottom: 0;
  }
`;

const LiveIndicator = styled.div`
  display: block;
  padding: 0 ${themeGet('space.s')};
  color: ${themeGet('colors.white')};
  background-color: ${themeGet('colors.live')};
  border-radius: ${themeGet('radii.base')};
  font-size: ${themeGet('fontSizes.xs')};
  font-weight: ${themeGet('fontWeights.bold')};
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    padding: ${themeGet('space.xs')} ${themeGet('space.base')};
    font-size: ${themeGet('fontSizes.base')};
  }
`;

const Title = styled.h1`
  font-size: ${themeGet('fontSizes.h3')};
  margin-bottom: 0;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: ${themeGet('fontSizes.h2')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    font-size: ${themeGet('fontSizes.h1')};
  }
`;

const Details = styled.div`
  display: none;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    display: block;
    padding: 0 ${themeGet('space.base')};
    padding-bottom: ${themeGet('space.xxl')};
    margin-bottom: ${themeGet('space.xxl')};
  }
`;

const Chat = styled.div`
  grid-area: chat;
  display: flex;
  align-items: stretch;
  height: 50vh;
  z-index: 1;

  /* Breakpoint adjustments must be in sync with root Container grid-template-columns.*/
  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: calc((9 / 16) * 67vw);
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    height: calc((9 / 16) * 75vw);
  }
`;

Live.Container = Container;
Live.Video = Video;
Live.MastHead = MastHead;
Live.LiveIndicatorContainer = LiveIndicatorContainer;
Live.LiveIndicator = LiveIndicator;
Live.Title = Title;
Live.Details = Details;
Live.Chat = Chat;

export default Live;
