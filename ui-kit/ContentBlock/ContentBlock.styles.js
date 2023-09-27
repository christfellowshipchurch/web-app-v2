import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';

const flexLayout =
  ({ contentLayout }) =>
  props => {
    switch (contentLayout) {
      case 'right':
        return css`
          flex-direction: column;

          @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
            flex-direction: row;
          }
        `;
      case 'left':
        return css`
          flex-direction: column;

          @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
            flex-direction: row-reverse;
          }
        `;
      case 'inverted':
        return css`
          flex-direction: column-reverse;
          align-items: center;
        `;
      case 'default':
      default:
        return css`
          flex-direction: column;
          align-items: center;
        `;
    }
  };

const ContentBlock = styled.div`
  display: flex;
  grid-gap: 2rem;
  width: 100%;

  ${flexLayout};
  ${system};
`;

const textAlign =
  ({ contentLayout }) =>
  props => {
    if (contentLayout === 'left' || contentLayout === 'right') {
      return css`
        @media screen and (max-width: ${themeGet('breakpoints.lg')}) {
          text-align: center;
        }
        text-align: left;
      `;
    }

    return css`
      text-align: center;
    `;
  };

const gridTemplate =
  ({ contentLayout }) =>
  props => {
    if (contentLayout === 'left' || contentLayout === 'right') {
      return css`
        grid-template-areas:
          'subtitle'
          'title'
          'htmlContent'
          'actions';
      `;
    }

    return css`
      grid-template-areas:
        'title'
        'subtitle'
        'htmlContent'
        'actions';
    `;
  };

const Content = styled.div`
  flex: 4;
  display: grid;
  grid-row-gap: 0.15rem;

  ${textAlign};
  ${gridTemplate}
  ${system};
`;

ContentBlock.Content = Content;

export default ContentBlock;
