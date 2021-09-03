/**
 * GroupManage.components.js
 *
 * Author: Caleb Panza
 * Created: Sep 03, 2021
 *
 * Convenience file for some UIKit configurations that are only relevant to the Manage Group component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { Box, Button, Icon } from 'ui-kit';

export const CardTitle = ({ title }) => (
  <Box as="h3" flexGrow="1" mb="0" color="neutrals.700">
    {title}
  </Box>
);

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export const SmallPillButton = ({ title, icon, ...props }) => (
  <Button size="s" rounded variant="secondary" py="5px" {...props}>
    {!isEmpty(icon) && <Icon name={icon} size={18} mb="2px" mr="2px" />}
    {title}
  </Button>
);

SmallPillButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
