import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from '../';
import Styled from './Loader.styles';

function Loader(props = {}) {
  if (props.noLabel) return <SVG />;

  return (
    <Styled {...props}>
      <SVG />
      <Styled.Text>{props.text}...</Styled.Text>
    </Styled>
  );
}

function SVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24px"
      width="24px"
      preserveAspectRatio="xMidYMid meet"
      x="1124"
      fill="currentColor"
    >
      <g>
        <path d="M10.998 22a.846.846 0 010-1.692 9.308 9.308 0 000-18.616 9.286 9.286 0 00-7.205 3.416.846.846 0 11-1.31-1.072A10.978 10.978 0 0110.998 0c6.075 0 11 4.925 11 11s-4.925 11-11 11z" />
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 11 11"
          to="360 11 11"
          dur=".6s"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
}

Loader.propTypes = {
  ...systemPropTypes,
  centered: PropTypes.bool,
  noLabel: PropTypes.bool,
  text: PropTypes.string,
};

Loader.defaultProps = {
  noLabel: false,
  text: 'Loading',
};

Loader.SVG = SVG;

export default Loader;
