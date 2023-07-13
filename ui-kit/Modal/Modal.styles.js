import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Modal = styled.div`
  position: relative;

  -webkit-animation: fadein 0.3s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.3s; /* Firefox < 16 */
  -ms-animation: fadein 0.3s; /* Internet Explorer */
  -o-animation: fadein 0.3s; /* Opera < 12.1 */
  animation: fadein 0.3s;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

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
  /* margin-top: -${themeGet('space.xxl')}; */
  max-width: 100vw;
  max-height: 54vw;
  overflow: scroll;
  padding: ${themeGet('space.l')};
  padding-top: ${themeGet('space.xl')};
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.width};
  z-index: 10;

  /* Small Only */
  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    margin-top: -${themeGet('space.l')};
    padding: ${themeGet('space.base')};
    padding-top: ${themeGet('space.xl')};
    width: calc(100vw - ${themeGet('space.base')});
    max-height: 85vh;
  }
`;

const Overlay = styled.div`
  background-color: ${themeGet('colors.fg')};
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0.3;
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
