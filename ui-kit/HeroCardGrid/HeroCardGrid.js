import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from '..';
import Styled from './HeroCardGrid.styles';
import { indexOf } from 'lodash';

function HeroCardGrid(props = {}) {
  function render() {
    return props.children.map((n, i) => {
      if (i < 1) return <Styled.LargeGridItem key={i}>{n}</Styled.LargeGridItem>;
      else return n;
    });
  }

  return <Styled {...props}>{render()}</Styled>;
}

HeroCardGrid.propTypes = {
  ...systemPropTypes,
  columns: PropTypes.string,
};

HeroCardGrid.defaultProps = {
  columns: '3',
};

export default HeroCardGrid;
