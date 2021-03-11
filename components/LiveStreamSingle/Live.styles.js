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
      'video chat'
      'mastHead chat'
      'details details';
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
    height: 56.25vw;
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    & > .shaka-video-container {
      /*
      Assumes 16/9 aspect ratio in whatever the grid area width is.
      Ex:
        Grid width: 100vw
        Grid Video area width: 75fr (75vw)
        Height: (16/9) / 75vw = 42.1875vw
      */
      height: 42.1875vw;
    }
  }
`;

const MastHead = styled.div`
  grid-area: mastHead;
  display: flex;
  flex-direction: column;
  padding: ${themeGet('space.base')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    flex-direction: row;
    padding: ${themeGet('space.base')} ${themeGet('space.base')};
    margin-bottom: ${themeGet('space.l')};
  }
`;

const LiveIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: ${themeGet('space.base')};
  margin-bottom: ${themeGet('space.xs')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: ${themeGet('fontSizes.h3')};
  margin-bottom: 0;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
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
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px orange dashed;
  padding: ${themeGet('space.base')};
  padding-bottom: ${themeGet('space.xxl')};
`;

Live.Container = Container;
Live.Video = Video;
Live.MastHead = MastHead;
Live.LiveIndicatorContainer = LiveIndicatorContainer;
Live.Title = Title;
Live.Details = Details;
Live.Chat = Chat;

export default Live;
