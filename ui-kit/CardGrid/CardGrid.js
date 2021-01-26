import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from 'ui-kit';
import Styled, { StyledFullWidth } from './CardGrid.styles';

function CardGrid(props = {}) {
  if (props.fullWidth) {
    return (
      <StyledFullWidth {...props}>
        <Styled
          columns={props.columns}
          children={props.children}
          breakpoints={props.breakpoints}
          fullWidth={props.fullWidth}
        />
      </StyledFullWidth>
    );
  }
  return <Styled {...props} />;
}

CardGrid.propTypes = {
  ...systemPropTypes,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      breakpoint: PropTypes.string,
      columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  fullWidth: PropTypes.bool,
};

CardGrid.defaultProps = {
  columns: '3',
};

export default CardGrid;
