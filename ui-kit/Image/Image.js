import React from 'react';
import PropTypes from 'prop-types';
import replace from 'lodash/replace';

import Styled from './Image.styles';

const Image = (props = {}) => {
  return (
    <Styled
      {...props}
      mask={props.mask}
      src={props.source}
      aspectRatio={
        !props?.disableRatio && replace(props.aspectRatio, 'by', '/')
      }
      alt={props?.altText}
    />
  );
};

export default Image;

const RATIOS = ['1by1', '4by3', '16by9', '21by9', '3by4'];

Image.propTypes = {
  /**
   * Image's aspect ratio
   */
  aspectRatio: PropTypes.oneOf(RATIOS),
  /**
   * Image's object fit
   */
  objectFit: PropTypes.string,
  /**
   * Image's source
   */
  source: PropTypes.string,
  /**
   * Image's mask
   */
  mask: PropTypes.string,
  /**
   * Whether or not to disable the aspect ratio
   */
  disableRatio: PropTypes.bool,
};

Image.defaultProps = {
  aspectRatio: '1by1',
  mask: '',
  objectFit: 'cover',
  download: false,
  disableRatio: false,
  altText: 'Christ Fellowship Church',
};
