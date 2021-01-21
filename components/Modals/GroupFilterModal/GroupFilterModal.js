import React from 'react';

import { GroupFiltersProvider } from 'providers';
import { Modal } from 'ui-kit';

import GroupFilterType from './GroupFilterType';
import GroupFilterPreferences from './GroupFilterPreferences';

function GroupFilterModal(props = {}) {
  function render(step) {
    switch (step) {
      case 0: {
        return <GroupFilterType />;
      }
      case 1: {
        return <GroupFilterPreferences />;
      }
      default: {
        return <GroupFilterType />;
      }
    }
  }

  return (
    <GroupFiltersProvider>
      <Modal {...props}>{render}</Modal>
    </GroupFiltersProvider>
  );
}

GroupFilterModal.propTypes = {
  ...Modal.propTypes,
};

export default GroupFilterModal;
