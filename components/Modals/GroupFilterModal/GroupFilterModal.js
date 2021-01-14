import React from 'react';

import { Modal } from '../../../ui-kit';
import GroupFilterType from './GroupFilterType';
import GroupFilterPreferences from './GroupFilterPreferences';

function GroupFilterModal(props = {}) {
  const initialValues = { day: '', campus: '' };

  function render() {
    switch (0) {
      case 0: {
        return <GroupFilterType initialValue={''} />;
      }
      case 1: {
        return <GroupFilterPreferences initialValues={initialValues} />;
      }
      default: {
        return <GroupFilterType />;
      }
    }
  }

  return <Modal {...props}>{render()}</Modal>;
}

GroupFilterModal.propTypes = {
  ...Modal.propTypes,
};

export default GroupFilterModal;
