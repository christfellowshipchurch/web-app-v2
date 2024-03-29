import React from 'react';

import { AppProvider } from 'providers';
import GroupFilterModal from './GroupFilterModal';

const exportedObject = {
  title: 'components/GroupFilterModal',
  component: GroupFilterModal,
};
export default exportedObject;

export const Default = () => {
  return (
    <AppProvider>
      <GroupFilterModal />
    </AppProvider>
  );
};

export const Preferences = () => {
  return (
    <AppProvider>
      <GroupFilterModal step={0} />
    </AppProvider>
  );
};

export const SubPreferences = () => {
  return (
    <AppProvider>
      <GroupFilterModal step={1} />
    </AppProvider>
  );
};

export const WhereAndWhen = () => {
  return (
    <AppProvider>
      <GroupFilterModal step={2} />
    </AppProvider>
  );
};

export const AllFilters = () => {
  return (
    <AppProvider>
      <GroupFilterModal step={3} />
    </AppProvider>
  );
};
