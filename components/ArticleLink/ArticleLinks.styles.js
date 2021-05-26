import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components';

import { CardGrid, system } from 'ui-kit';

const Styled = {};

Styled.ArticleLinks = styled(CardGrid)`
  grid-column-gap: ${themeGet('space.l')};
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    grid-template-columns: repeat(
      ${props => (props.fullWidth ? '1' : '2')},
      1fr
    );

    > div {
      // Image container
      > div:first-of-type {
        order: 1;
      }
      // Text container
      > div:last-of-type {
        order: 2;
      }
    }
    ${props =>
      props.fullWidth
        ? css`
            > div {
              align-items: center;
              flex-direction: row;
              justify-content: space-between;

              // Image container
              > div:first-of-type {
                order: 2;
              }

              // Text container
              > div:last-of-type {
                order: 1;
                padding-right: ${themeGet('space.m')};
              }
            }
          `
        : css`
            > div {
              > div {
                flex: auto;
              }
              // Image container
              > div:first-of-type {
                margin-bottom: ${themeGet('space.m')};
                max-height: 345px;
              }
            }
          `}
    ${props =>
      props.zigZag && props.fullWidth
        ? css`
            > div:nth-child(even) {
              justify-content: flex-start;
              padding-left: 0;

              // Image container
              > div:first-of-type {
                order: 1;
              }
              // Text container
              > div:last-of-type {
                order: 2;
                padding-left: ${themeGet('space.m')};
              }
            }
          `
        : css``}
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    > div {
      // Image container
      > div:first-of-type {
        order: 2;
      }
      // Text container
      > div:last-of-type {
        order: 1;
        padding-right: ${themeGet('space.m')};
      }
    }
      ${props =>
        props.fullWidth
          ? css`
              > div:nth-child(even) {
                ${props =>
                  props.zigZag
                    ? css`
                        > div:last-of-type {
                          padding-left: ${themeGet('space.m')};
                          padding-right: 0;
                        }
                      `
                    : ''}
              }
            `
          : css`
              > div {
                > div {
                  flex: 1 0 50%;
                }
                // Image container
                > div:first-of-type {
                  height: 245px;
                  margin-bottom: 0;
                }
              }
            `}
    }
  }

  ${system}
`;

export default Styled;
