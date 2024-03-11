import React from 'react';

import GroupFilterModal from './GroupFilterModal';

const exportedObject = {
  title: 'components/GroupFilterModal',
  component: GroupFilterModal,
};
export default exportedObject;

export const Default = () => {
  return <GroupFilterModal />;
};

export const Preferences = () => {
  return <GroupFilterModal step={0} />;
};

export const SubPreferences = () => {
  return <GroupFilterModal step={1} />;
};

export const WhereAndWhen = () => {
  return <GroupFilterModal step={2} />;
};

export const AllFilters = () => {
  return <GroupFilterModal step={3} />;
};
