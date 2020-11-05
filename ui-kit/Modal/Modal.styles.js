import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../';

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
  padding: ${themeGet('space.l')};
  position: fixed;
  top: 50%;
  transform: translate(-50%, -150%);
  width: ${props => props.width};
  z-index: 10;
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
