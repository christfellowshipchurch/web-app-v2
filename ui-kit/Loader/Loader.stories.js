import React from 'react';

import Loader from './Loader';

export default {
  component: Loader,
  tags: ['autodocs'],
};

export const Default = () => <Loader />;

export const Text = () => <Loader text="A different text label" />;

export const Centered = () => <Loader centered={true} />;
