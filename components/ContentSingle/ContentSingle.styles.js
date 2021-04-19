import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const ContentSingle = styled.footer`
  ${system}
`;

const VideoContainer = styled.div`
  background: black;
  height: 100%;
  width: 100%;

  & > .shaka-video-container {
    height: 100%;
    width: 100%;
  }
`;

ContentSingle.VideoContainer = VideoContainer;

export default ContentSingle;
