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

const ValueStack = ({ items, backgroundColorMap }) => {
  if (!items.length) return null;

  return (
    <Styled>
      {items.map((item, i) => (
        <Styled.Item
          bg={backgroundColorMap[i % backgroundColorMap.length]}
          key={item}
        >
          {item}
        </Styled.Item>
      ))}
    </Styled>
  );
};

ValueStack.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  backgroundColorMap: PropTypes.arrayOf(PropTypes.string),
};

ValueStack.defaultProps = {
  items: [],
  backgroundColorMap: ['neutrals.800', 'secondary'],
};

export default ValueStack;
