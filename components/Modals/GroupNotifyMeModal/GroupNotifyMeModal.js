import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'ui-kit';

import NotifyMeForm from './NotifyMeForm';
import NotifyMeSuccess from './NotifyMeSuccess';
import NotifyMeError from './NotifyMeError';

function GroupNotifyMeModal(props = {}) {
  function render(step) {
    switch (step) {
      default:
      case 0: {
        return (
          <NotifyMeForm
            initialCampusId={props.initialCampusId}
            groupPreference={props.groupPreference}
          />
        );
      }
      case 1: {
        return <NotifyMeSuccess />;
      }
      case 2: {
        return <NotifyMeError />;
      }
    }
  }
  return <Modal {...props}>{render}</Modal>;
}

GroupNotifyMeModal.propTypes = {
  // ...Modal.propTypes,
  initialCampusId: PropTypes.string,
  groupPreference: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

GroupNotifyMeModal.defaultProps = {};

export default GroupNotifyMeModal;
