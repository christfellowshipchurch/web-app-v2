/**
 * GroupLeadersProvider.js
 * 
 * Author: Caleb Panza
 * Created: Oct 11, 2021
 * 
 * Data Provider for the useGroupLeaders hook
 */

import React from 'react';
import PropTypes from 'prop-types';

import { useGroupLeaders } from 'hooks';

const GroupLeadersProvider = ({ Component, options, ...props }) => {
    const { loading, error, groupLeaders } = useGroupLeaders(options);
  return <Component data={groupLeaders} loading={loading} error={error} {...props} />;
};

GroupLeadersProvider.propTypes = {
    Component: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.object,
      ]),
      options: PropTypes.object,
}
GroupLeadersProvider.defaultProps = {}

export default GroupLeadersProvider;