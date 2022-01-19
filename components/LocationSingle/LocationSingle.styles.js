import styled from 'styled-components';
import { system } from 'ui-kit';

const LocationSingle = styled.div`
  ${system}
`;

const VideoCover = styled.video`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  width: 100%;
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

  background-color: rgba(0, 0, 0, 0.5);
`;

LocationSingle.VideoOverlay = VideoOverlay;
LocationSingle.VideoCover = VideoCover;

export default LocationSingle;
