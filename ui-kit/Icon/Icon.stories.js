/**
 * Icon.stories.js
 *
 * Author: Caleb Panza
 * Created: Aug 27, 2021
 *
 * Stories that enable users to cycle through all available icons
 */
import React from 'react';

import Icon from './Icon';
import icons from '../_config/icons';

console.log(icons);

const config = {
  title: 'ui-kit/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
  },
};

const IconStory = ({ data, name }) => {
  return <Icon name={name} />;
};

export const Default = IconStory.bind({});

export default config;
