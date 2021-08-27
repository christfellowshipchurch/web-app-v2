/**
 * PaginationStepper.js
 *
 * Author: Caleb Panza
 * Created: Aug 27, 2021
 *
 * Component that visually displays the current state of a paginated collection of data. It also enables a UI to allow the user to manually progress or regress between pages.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Box, Icon } from 'ui-kit';
import { canStepBackward, canStepForward } from './PaginationStepper.utils';

const PaginationStepper = ({
  cursor,
  onStepBackward,
  onStepForward,
  stepBy,
  total,
}) => {
  const formattedText = total ? `${cursor} of ${total}` : `${cursor}`;
  const enabledColor = 'primary';
  const disabledColor = 'neutrals.400';
  const backward = canStepBackward(total, cursor, stepBy);
  const forward = canStepForward(total, cursor, stepBy);

  return (
    <Box as="span">
      <Box
        as={backward ? 'a' : 'span'}
        href="#"
        onClick={e => {
          e.preventDefault();
          if (backward) {
            onStepBackward(cursor);
          }
        }}
      >
        <Icon
          name="angleLeft"
          pb="3px"
          color={backward ? enabledColor : disabledColor}
        />
      </Box>

      <Box as="span" lineHeight={0} px="s">
        {formattedText}
      </Box>

      <Box
        as={forward ? 'a' : 'span'}
        href="#"
        onClick={e => {
          e.preventDefault();
          if (forward) {
            onStepForward(cursor);
          }
        }}
      >
        <Icon
          name="angleRight"
          pb="3px"
          color={forward ? enabledColor : disabledColor}
        />
      </Box>
    </Box>
  );
};

PaginationStepper.propTypes = {
  cursor: PropTypes.number.isRequired,
  onStepBackward: PropTypes.func,
  onStepForward: PropTypes.func,
  stepBy: PropTypes.number,
  total: PropTypes.number.isRequired,
};
PaginationStepper.defaultProps = {
  onStepBackward: () => null,
  onStepForward: () => null,
  stepBy: 1,
};

export default PaginationStepper;
