/**
 * ActionBar.js
 *
 * Author: Caleb Panza
 * Created: Mar 16, 2021
 *
 * Card that contains a collection of Actions represented by Icons and Labels that can be clicked.
 */

import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import Styled from './ActionBar.styles';

const ActionBar = ({ children, ...props }) => {
  return (
    <Styled columns={children.length} {...props}>
      {React.Children.map(children, (child, i) => (
        <React.Fragment key={uniqueId(`ActionBar:${i}`)}>
          {child}
          {/* {i < children.length - 1 && <Styled.Divider />} */}
        </React.Fragment>
      ))}
    </Styled>
  );
};

ActionBar.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.object])
  ),
};
ActionBar.defaultProps = {
  children: [],
};

export default ActionBar;
