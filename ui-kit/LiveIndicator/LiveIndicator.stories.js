import React from 'react';

import LiveIndicator from './LiveIndicator';

export default {
  title: 'ui-kit/LiveIndicator',
  component: LiveIndicator,
};

export const Default = () => <LiveIndicator />;
export const CustomText = () => <LiveIndicator text="Recording" />;
