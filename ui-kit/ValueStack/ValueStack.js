/**
 * ValueStack.js
 *
 * Author: Caleb Panza
 * Created: Jul 12, 2021
 *
 * Displays a collection of strings within colored boxes.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Styled from './ValueStack.styles';
import { Box } from 'ui-kit';

const ValueStack = ({ items, backgroundColorMap }) => {
  if (!items.length) return null;

  return (
    <Box display="flex" flexDirection={{ _: 'column', md: 'row' }} width="100%">
      {items.map((item, i) => (
        <Styled.Item bg={backgroundColorMap[i % backgroundColorMap.length]}>
          {item}
        </Styled.Item>
      ))}
    </Box>
  );
};

ValueStack.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  backgroundColorMap: PropTypes.arrayOf(PropTypes.string),
};

ValueStack.defaultProps = {
  items: [],
  backgroundColorMap: ['neutrals.800', 'primary'],
};

export default ValueStack;
