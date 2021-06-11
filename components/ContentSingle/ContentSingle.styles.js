import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Card } from 'ui-kit';

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

const ButtonContainer = styled(Card)`
  box-shadow: ${themeGet('shadows.base')};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${themeGet(
      'breakpoints.md'
    )}) and (max-width: ${themeGet('breakpoints.lg')}) {
    flex-direction: row;
  }
`;

const ButtonLink = styled.a`
  margin-top: ${themeGet('space.s')};
  margin-bottom: ${themeGet('space.s')};
  width: 100%;
  flex: 0 0 30%;

  @media only screen and (min-width: ${themeGet(
      'breakpoints.md'
    )}) and (max-width: ${themeGet('breakpoints.lg')}) {
    margin-left: ${themeGet('space.xs')};
    margin-right: ${themeGet('space.xs')};
  }
`;

ContentSingle.ButtonLink = ButtonLink;
ContentSingle.ButtonContainer = ButtonContainer;
ContentSingle.VideoContainer = VideoContainer;

export default ContentSingle;
