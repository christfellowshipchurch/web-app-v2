import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button } from 'ui-kit';

const GroupSearchFilters = {};

const Divider = (props = {}) => (
  <Box
    as="hr"
    mt="s"
    mb="base"
    border="none"
    bg="neutrals.200"
    height={2}
    {...props}
  />
);

function FilterButton(props = {}) {
  return (
    <Button
      mr="s"
      onClick={props.onClick}
      rounded={true}
      size="s"
      variant="chip"
      {...props}
    >
      {props.label}
      {typeof props.labelDetail === 'number' ? (
        <Box
          as="span"
          bg="primary"
          borderRadius="xl"
          color="paper"
          ml="xs"
          px="xs"
        >
          {props.labelDetail}
        </Box>
      ) : (
        <Box as="span" color="primary" ml="xs">
          {props.labelDetail}
        </Box>
      )}
    </Button>
  );
}

FilterButton.propTypes = {
  label: PropTypes.string,
  labelDetail: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

GroupSearchFilters.Divider = Divider;
GroupSearchFilters.FilterButton = FilterButton;

export default GroupSearchFilters;
