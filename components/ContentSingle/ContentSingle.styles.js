import styled from 'styled-components';

import { system } from 'ui-kit';

const ContentSingle = styled.footer`
  ${system}
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;

  & > .shaka-video-container {
    width: 100%;
    height: 100%;
  }
`;

ContentSingle.VideoContainer = VideoContainer;

export default ContentSingle;
