import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Live = {};

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-areas:
    'video'
    'mastHead'
    'chat';

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    grid-template-areas:
      'video chat'
      'mastHead chat';
    grid-template-columns: 75fr 25fr;
  }

  ${system}
`;

const Video = styled.div`
  grid-area: video;
`;

const MastHead = styled.div`
  grid-area: mastHead;
  background: rgba(255, 128, 0, 0.45);
  padding: ${themeGet('space.base')};
  padding-bottom: ${themeGet('space.xxl')};
`;

const Chat = styled.div`
  grid-area: chat;
  background: purple;
  padding: ${themeGet('space.base')};
  padding-bottom: ${themeGet('space.xxl')};
`;

Live.Container = Container;
Live.Video = Video;
Live.MastHead = MastHead;
Live.Chat = Chat;

export default Live;
