import React from 'react';
import { Modal } from 'ui-kit';

import GroupFilterAll from './GroupFilterAll';
import GroupFilterPreferences from './GroupFilterPreferences';
import GroupFilterSubPreferences from './GroupFilterSubPreferences';
import GroupFilterWhereWhen from './GroupFilterWhereWhen';

function GroupFilterModal(props = {}) {
  function render(step) {
    switch (step) {
      case 0: {
        return <GroupFilterPreferences />;
      }
      case 1: {
        return <GroupFilterSubPreferences />;
      }
      case 2: {
        return <GroupFilterWhereWhen />;
      }
      case 3: {
        return <GroupFilterAll />;
      }
      default: {
        return <GroupFilterPreferences />;
      }
    }
  }

  return <Modal {...props}>{render}</Modal>;
}

GroupFilterModal.propTypes = {
  ...Modal.propTypes,
};

GroupFilterModal.defaultProps = {};

export default GroupFilterModal;
