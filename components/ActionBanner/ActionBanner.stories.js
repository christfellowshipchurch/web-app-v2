import React from 'react';
import { ActionBanner } from components
import { ActionBannerProvider } from 'providers';

// GET ERROR
const config = {
    component: ActionBanner,
    tags: ['autodocs'],
  };

const ActionBannerStory = () => {
    return (
        <ActionBannerProvider Component={ActionBanner} />
    )
}

export const Default = ActionBannerStory.bind({});
Default.args = {};

export default config;
