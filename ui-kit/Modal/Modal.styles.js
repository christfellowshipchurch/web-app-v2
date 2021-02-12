import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Modal = styled.div`
  position: relative;

  ${system}
`;

const Close = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  position: absolute;
  right: ${themeGet('space.base')};
  top: ${themeGet('space.base')};
`;

const Content = styled.div`
  background-color: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.base')};
  box-shadow: ${themeGet('shadows.xl')};
  left: 50%;
  margin-top: -${themeGet('space.xxl')};
  max-height: 100vh;
  max-width: 100vw;
  padding: ${themeGet('space.l')};
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.width};
  z-index: 10;

  /* Small Only */
  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    width: 100vw;
    padding: ${themeGet('space.base')};
    padding-bottom: ${themeGet('space.l')};
  }
`;

const Overlay = styled.div`
  background-color: ${themeGet('colors.fg')};
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0.5;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9;
`;

Modal.Close = Close;
Modal.Content = Content;
Modal.Overlay = Overlay;

export default Modal;
