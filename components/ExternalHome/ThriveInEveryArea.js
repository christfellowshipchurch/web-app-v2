import React from 'react';
import { Box, ContentBlock } from 'ui-kit';
import { amplitude, gtag } from 'lib/analytics';
import { useCurrentBreakpoint } from 'hooks';

const ThriveInEveryArea = ({ maxWidth }) => {
  const currentBreakpoint = useCurrentBreakpoint();

  const content = currentBreakpoint.isSmall
    ? 'For the past 35 years, we’ve helped thousands of people just like you to... <br /><br /><h4>→ Find people to do life with </h4><h4>→ Break free from the pain of their past</h4><h4>→ Thrive in their marriage</h4><h4>→ Become a better parent </h4><h4>→ Experience financial freedom </h4><h4>→ Learn how to make a difference</h4><br/>What we’ve done for them, we want to do for you.'
    : 'For the past 35 years, we’ve helped thousands of people just like you to... <br /><br /><h3>→ Find people to do life with </h3><h3>→ Break free from the pain of their past</h3><h3>→ Thrive in their marriage</h3><h3>→ Become a better parent </h3><h3>→ Experience financial freedom </h3><h3>→ Learn how to make a difference</h3><br/>What we’ve done for them, we want to do for you.';

  return (
    <Box
      fontSize={{ _: '1.05rem', md: '1.1rem' }}
      lineHeight={1.5}
      maxWidth={maxWidth}
      mx="auto"
    >
      <ContentBlock
        title="Thrive in every area of your life."
        htmlContent={content}
        image={'thrive-in-every-area.png'}
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
};

export default ThriveInEveryArea;
