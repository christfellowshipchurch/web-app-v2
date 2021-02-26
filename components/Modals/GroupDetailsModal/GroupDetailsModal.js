import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'ui-kit';

import GroupSummary from './GroupSummary';

function GroupDetailsModal(props = {}) {
  return (
    <Modal {...props}>
      <GroupSummary
        title={props.groupTitle}
        summary={props.groupSummary}
        callToAction={props.groupCallToAction}
      />
    </Modal>
  );
}

GroupDetailsModal.propTypes = {
  ...Modal.propTypes,
  groupTitle: PropTypes.string,
  groupSummary: PropTypes.string,
  groupCallToAction: PropTypes.shape({
    call: PropTypes.string,
    action: PropTypes.func,
  }),
};

GroupDetailsModal.defaultProps = {};

export default GroupDetailsModal;
