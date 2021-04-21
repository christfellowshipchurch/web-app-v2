import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, system } from 'ui-kit';

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

const Content = styled(Box)`
  background-color: ${themeGet('colors.white')};
  bottom: 0;
  box-shadow: ${themeGet('shadows.xl')};
  left: 0;
  padding: ${themeGet('space.l')};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    border-radius: ${themeGet('radii.base')};
    left: 50%;
    margin-top: -${themeGet('space.xxl')};
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ${system}
`;

const Overlay = styled.div`
  background-color: ${themeGet('colors.fg')};
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0.5;
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
