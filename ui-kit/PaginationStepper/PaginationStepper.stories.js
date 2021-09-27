/**
 * PaginationStepper.stories.js
 *
 * Author: Caleb Panza
 * Created: Aug 27, 2021
 *
 * Component that visually displays the current state of a paginated collection of data. It also enables a UI to allow the user to manually progress or regress between pages.
 */
import React from 'react';

import PaginationStepper from './PaginationStepper';

const config = {
  title: 'ui-kit/PaginationStepper',
  component: PaginationStepper,
  argTypes: {
    cursor: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
    },
  },
};

const PaginationStepperStory = ({ data, cursor }) => {
  return <PaginationStepper total={10} cursor={cursor} stepBy={1} />;
};

export const Default = PaginationStepperStory.bind({});

export default config;
