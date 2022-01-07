import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Img.styles';
import { Image } from 'ui-kit';
import DownloadButton from './DownloadButton';

const Img = (props = {}) => {
  return (
    <Styled>
      <DownloadButton source={props?.source} />
      <Image {...props} />
    </Styled>
  );
};

export default Img;

Img.propTypes = {
  source: PropTypes.string,
};

Img.defaultProps = {};
