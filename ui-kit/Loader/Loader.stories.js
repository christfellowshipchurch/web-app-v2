import React from 'react';

import Loader from './Loader';

export default {
  title: 'ui-kit/Loader',
  component: Loader,
};

export const Default = () => <Loader />;

export const Text = () => <Loader text="A different text label" />;

export const Centered = () => <Loader centered={true} />;
