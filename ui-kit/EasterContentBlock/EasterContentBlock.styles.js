import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Button, system } from 'ui-kit';

const flexLayout =
  ({ contentLayout }) =>
  props => {
    switch (contentLayout) {
      case 'right':
        return css`
          flex-direction: column;

          @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
            flex-direction: row;
            align-items: center;
          }
        `;
      case 'left':
        return css`
          flex-direction: column;

          @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
            flex-direction: row-reverse;
            align-items: center;
          }
        `;
      case 'inverted':
        return css`
          flex-direction: column-reverse;
        `;
      case 'default':
      default:
        return css`
          flex-direction: column;
          align-items: center;
        `;
    }
  };

const EasterHeaderButton = styled(Button)`
  text-decoration: none;
  font-weight: bold;

  font-size: 18px;
  padding: ${themeGet('space.xs')} ${themeGet('space.base')};
  border-radius: 20px;

  margin-top: ${themeGet('space.base')};
  margin: ${themeGet('space.xs')};
  background-color: #3b7dd9;

  color: ${props => props?.color || 'white'};

  transition: 0.5s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props?.buttonHover};
    color: ${props => props?.hoverTextColor};
  }
  ${system}
`;

const EasterContentBlock = styled.div`
  display: flex;
  grid-gap: 5rem;
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
          'title'
          'subtitle'
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

const StyledButton = styled(Button)`
  text-decoration: none;

  margin-top: ${themeGet('space.base')};
  margin: ${themeGet('space.xs')};
  background-color: ${props => props?.bg};
  color: ${props => props?.color || 'white'};

  border: 2px solid black;
  border-radius: 30px;
  padding: 10px 40px;

  transition: 0.5s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props?.buttonHover};
    color: ${props => props?.hoverTextColor};
  }

  ${system}
`;

const Content = styled.div`
  flex: 4;
  display: grid;
  grid-row-gap: 0.15rem;

  ${textAlign};
  ${gridTemplate}
  ${system};
`;

EasterContentBlock.Content = Content;
EasterContentBlock.StyledButton = StyledButton;
EasterContentBlock.EasterHeaderButton = EasterHeaderButton;

export default EasterContentBlock;
