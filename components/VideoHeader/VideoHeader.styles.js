import styled from 'styled-components';

import { system } from 'ui-kit';

const VideoCover = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  object-fit: cover;

  ${system}
`;

const VideoOverlay = styled.div`
  z-index: 1;
  position: absolute;
  top: -500px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

const LogoOverlay = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  ${system}
`;

const VideoHeader = { VideoCover, VideoOverlay, LogoOverlay };

export default VideoHeader;
