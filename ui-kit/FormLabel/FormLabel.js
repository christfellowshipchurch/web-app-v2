import React from 'react';

import { systemPropTypes } from 'ui-kit';
import Styled from './FormLabel.styles';

function FormLabel(props = {}) {
  return <Styled {...props} />;
}

FormLabel.propTypes = {
  ...systemPropTypes,
};

export default FormLabel;
