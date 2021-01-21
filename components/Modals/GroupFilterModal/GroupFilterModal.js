import React from 'react';

import { GroupFiltersProvider } from 'providers';
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
