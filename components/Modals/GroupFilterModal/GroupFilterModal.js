import React from 'react';
import { Modal } from 'ui-kit';

import GroupFilterSubPreferences from './GroupFilterSubPreferences';
import GroupFilterWhereWhen from './GroupFilterWhereWhen';

function GroupFilterModal(props = {}) {
  function render(step) {
    switch (step) {
      case 0: {
        return <GroupFilterSubPreferences />;
      }
      case 1: {
        return <GroupFilterWhereWhen />;
      }
      default: {
        return <GroupFilterSubPreferences />;
      }
    }
  }

  return <Modal {...props}>{render}</Modal>;
}

GroupFilterModal.propTypes = {
  ...Modal.propTypes,
};

export default GroupFilterModal;
