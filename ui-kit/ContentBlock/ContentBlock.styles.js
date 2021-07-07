import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';

const ContentBlock = styled.div``;

const gridLayout = ({ gridLayout }) => props => {
  switch (gridLayout) {
    case 'LEFT':
      return css`
        grid-template-areas:
          'media'
          'content';
        @media screen and (min-width: ${themeGet('breakpoints.md')}) {
          grid-template-areas: 'content media';
          grid-template-columns: 2fr 1fr;
        }
      `;
    case 'RIGHT':
      return css`
        grid-template-areas:
          'media'
          'content';
        @media screen and (min-width: ${themeGet('breakpoints.md')}) {
          grid-template-areas: 'media content';
          grid-template-columns: 1fr 2fr;
        }
      `;
    case 'INVERTED':
      return css`
        grid-template-columns: 1fr;
        grid-template-areas:
          'content'
          'media';
      `;
    case 'NO_MEDIA':
      return css`
        grid-template-areas: 'content';
      `;
    case 'default':
    default:
      return css`
        grid-template-columns: 1fr;
        grid-template-areas:
          'media'
          'content';
      `;
  }
};

const Container = styled.div`
  display: grid;
  grid-row-gap: ${themeGet('space.l')};
  justify-content: space-around;
  width: 100%;

  ${gridLayout};
  ${system};
`;

const Content = styled.div`
  flex: 1;
  align-items: ${props => props.textAlign};
  display: flex;
  flex-direction: column;
  grid-area: content;
  justify-content: center;
  padding: ${themeGet('space.l')};

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    padding: ${themeGet('space.xs')};
  }

  ${system};
`;

const Media = styled.div`
  flex: 1;
  grid-area: media;
  margin: auto;
  width: 100%;

  ${system};
`;

const Subtitle = styled.h4`
  color: ${themeGet('colors.tertiary')};
  margin-bottom: 0px;
  text-transform: uppercase;
`;

const Title = styled.h1``;

ContentBlock.Container = Container;
ContentBlock.Content = Content;
ContentBlock.Media = Media;
ContentBlock.Subtitle = Subtitle;
ContentBlock.Title = Title;

export default ContentBlock;
