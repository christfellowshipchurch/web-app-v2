import React from 'react';
import { Box } from 'ui-kit';
import ContentBlock from './ContentBlock';

export default {
  title: 'ui-kit/ContentBlock',
  component: ContentBlock,
};

const htmlDemoContent =
  '<div> <h5>this is HTML from Rock</h5> <p>Back in 2018, God gave us a clear vision that we needed to start expanding our digital presence so we could reach people beyond the walls of our buildings. At the time, we had no idea that in 2020 when we couldn’t meet in our buildings, this incredible technology would light the way for us to bring church right to you—evolving into what is now known as Christ Fellowship Everywhere. This year, we plan to take this digital platform to new heights beyond Sunday services through content for every age and stage of life—no matter who you are, no matter when it is, and no matter where you are.</p></div>';

export const Default = () => (
  <Box maxWidth={1100} mx="auto">
    <ContentBlock
      title="This is a Title"
      subtitle="This is a Subtitle"
      contentLayout="default"
      htmlContent={htmlDemoContent}
      imageRatio="16by9"
    />
  </Box>
);

export const Inverted = () => (
  <Box maxWidth={1100} mx="auto">
    <ContentBlock
      title="This is a Title"
      subtitle="This is a Subtitle"
      contentLayout="inverted"
      htmlContent={htmlDemoContent}
      imageRatio="16by9"
    />
  </Box>
);

export const ContentLeft = () => (
  <Box maxWidth={1100} mx="auto">
    <ContentBlock
      title="This is a Title"
      subtitle="This is a Subtitle"
      contentLayout="left"
      htmlContent={htmlDemoContent}
    />
  </Box>
);

export const ContentRight = () => (
  <Box maxWidth={1100} mx="auto">
    <ContentBlock
      title="This is a Title"
      subtitle="This is a Subtitle"
      contentLayout="right"
      htmlContent={htmlDemoContent}
    />
  </Box>
);
