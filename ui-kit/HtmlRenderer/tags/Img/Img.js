import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import Styled from './Img.styles';
import { Box, Image } from 'ui-kit';
// import DownloadButton from './DownloadButton';

const Img = (props = {}) => {
  return (
    <Styled>
      {/* Removing this for the time being */}
      {/* <DownloadButton source={props?.source} /> */}
      <Image {...props} />

      {!isEmpty(props?.alt) && (
        <Box as="span" fontStyle="italic" color="neutrals.600" mt="s">
          {props?.alt}
        </Box>
      )}
    </Styled>
  );
};

export default Img;

Img.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
};

Img.defaultProps = {};
