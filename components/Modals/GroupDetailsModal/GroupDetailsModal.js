import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'ui-kit';

import GroupSummary from './GroupSummary';

function GroupDetailsModal(props = {}) {
  function render(step) {
    switch (step) {
      case 0:
      default: {
        return (
          <GroupSummary title={props.groupTitle} summary={props.groupSummary} />
        );
      }
    }
  }

  return <Modal {...props}>{render}</Modal>;
}

GroupDetailsModal.propTypes = {
  ...Modal.propTypes,
  groupTitle: PropTypes.string,
  groupSummary: PropTypes.string,
};

GroupDetailsModal.defaultProps = {};

export default GroupDetailsModal;
