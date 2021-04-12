import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';

const ContentBlock = styled.div``;

const gridLayout = ({ gridLayout }) => props => {
  switch (gridLayout) {
    case 'left':
      return css`
        grid-template-areas:
          'media'
          'content';
        @media screen and (min-width: ${themeGet('breakpoints.md')}) {
          grid-template-areas: 'content media';
        }
      `;
      break;
    case 'right':
      return css`
        grid-template-areas:
          'media'
          'content';
        @media screen and (min-width: ${themeGet('breakpoints.md')}) {
          grid-template-areas: 'media content';
        }
      `;
      break;
    case 'inverted':
      return css`
        grid-template-areas:
          'content'
          'media';
      `;
      break;
    case 'default':
    default:
      return css`
        grid-template-areas:
          'media'
          'content';
      `;
  }
};

const Container = styled.div`
  display: grid;
  grid-column-gap: ${themeGet('space.l')};
  grid-row-gap: ${themeGet('space.l')};
  width: 100%;

  ${gridLayout};
  ${system};
`;

const Content = styled.div`
  align-items: ${props => props.textAlign};
  display: flex;
  flex-direction: column;
  grid-area: content;
  justify-content: center;

  ${system};
`;

const Media = styled.div`
  grid-area: media;
  margin: auto;

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
