import React from 'react';
import PropTypes from 'prop-types';

import { Box, Loader, systemPropTypes } from 'ui-kit';
import Styled from './Button.styles';
import { themeGet } from '@styled-system/theme-get';

function Button(props = {}) {
  if (props.status === 'LOADING') {
    return (
      <Styled {...props}>
        <Loader noLabel={true} />
        <Box as="span">{props.children}</Box>
      </Styled>
    );
  }

  return <Styled {...props} />;
}

Button.propTypes = {
  ...systemPropTypes,
  size: PropTypes.oneOf(['s', 'l']),
  status: PropTypes.oneOf(['IDLE', 'LOADING', 'ERROR', 'SUCCESS', 'SELECTED']),
  variant: PropTypes.oneOf([
    'link',
    'primary',
    'secondary',
    'tertiary',
    'chip',
  ]),
  hoverColor: PropTypes.string,
};

Button.defaultProps = {
  status: 'IDLE',
  hoverColor: 'primaryHover',
};

export default Button;
