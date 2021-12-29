import React from 'react';
import PropTypes from 'prop-types';
import replace from 'lodash/replace';

import Styled from './Image.styles';
import { Box } from 'ui-kit';
import DownloadIcon from './DownloadIcon';

const Image = (props = {}) => {
  return (
    <Box position="relative">
      {props?.download && <DownloadIcon source={props?.source} />}
      <Styled
        {...props}
        mask={props.mask}
        src={props.source}
        aspectRatio={
          !props?.disableRatio && replace(props.aspectRatio, 'by', '/')
        }
      />
    </Box>
  );
};

export default Image;

const RATIOS = ['1by1', '4by3', '16by9', '21by9', '3by4'];

Image.propTypes = {
  aspectRatio: PropTypes.oneOf(RATIOS),
  objectFit: PropTypes.string,
  source: PropTypes.string,
  mask: PropTypes.string,
  download: PropTypes.bool,
  disableRatio: PropTypes.bool,
};

Image.defaultProps = {
  aspectRatio: '1by1',
  mask: '',
  objectFit: 'cover',
  download: false,
  disableRatio: false,
};
