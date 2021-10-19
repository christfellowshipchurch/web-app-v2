import React from 'react';
import { Box, ContentBlock } from 'ui-kit';
import { amplitude, gtag } from 'lib/analytics';

const ThriveInEveryArea = ({ maxWidth }) => (
  <Box fontSize={{ _: '1.05rem', md: '1.5rem' }} maxWidth={maxWidth} mx="auto">
    <ContentBlock
      title="Do more than just get by."
      htmlContent={
        'For the past 35 years, we’ve helped thousands of people just like you to... <br/> <br/><b> → Find people to do life with <br/>→ Break free from the pain of their past<br/> → Thrive in their marriage <br/> → Become a better parent <br/> → Experience financial freedom <br/> → Learn how to make a difference</b><br/> <br/> What we’ve done for them, we want to do for you.'
      }
      image={'todd-and-julie.png'}
      objectFit="contain"
      contentLayout="RIGHT"
      imageRatio="3by4"
      actions={[
        {
          title: 'About Us',
          relatedNode: {
            url: '/about',
          },
          onClick: () => [
            amplitude.trackEvent({
              eventType: 'Button Click',
              eventProperties: {
                category: 'External Landing Page - Do more than just get by',
                label: `About - Button`,
                action: '/about',
              },
            }),
            gtag.trackEvent({
              category: 'External Landing Page - Do more than just get by',
              label: `About - Button`,
              action: '/about',
            }),
          ],
        },
      ]}
    />
  </Box>
);

export default ThriveInEveryArea;
