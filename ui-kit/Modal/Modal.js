import React from 'react';
import PropTypes from 'prop-types';

import { hideModal, useModalDispatch } from 'providers/ModalProvider';
import { Box, Icon, systemPropTypes, utils } from 'ui-kit';
import Styled from './Modal.styles';

function Modal(props = {}) {
  const dispatch = useModalDispatch();

  function handleClose(event) {
    event.preventDefault();
    dispatch(hideModal());
    props.onClose && props.onClose(event);
  }

  return (
    <Styled {...props}>
      <Styled.Content width={props.width}>
        <Styled.Close onClick={handleClose}>
          <Icon name="x" size="30" />
          <Box as="span" className="srt">
            Close
          </Box>
        </Styled.Close>
        <Box as="h2">{props.title}</Box>
        {typeof props.children === 'function'
          ? props.children(props.step)
          : props.children}
      </Styled.Content>
      <Styled.Overlay onClick={handleClose} />
    </Styled>
  );
}

Modal.propTypes = {
  ...systemPropTypes,
  onClose: PropTypes.func,
  title: PropTypes.string,
};

Modal.defaultProps = {
  width: utils.rem('600px'),
};

export default Modal;
