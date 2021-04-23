/**
 * ActionBarItem.js
 *
 * Author: Caleb Panza
 * Created: Mar 16, 2021
 *
 * An Icon stacked above a Label that is clickable and renders inside of an Action Bar
 */

import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import Styled from './ActionBarItem.styles';

const ActionBarItem = ({ icon, label, size, tint }) => {
  return (
    <Styled tint={tint}>
      <Icon name={icon} size={size} />
      <p>{label}</p>
    </Styled>
  );
};

ActionBarItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  tint: PropTypes.string,
  size: PropTypes.string,
};
ActionBarItem.defaultProps = {
  size: '30',
};

export default ActionBarItem;
