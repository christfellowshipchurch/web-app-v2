/**
 * ContentBlockFeature.js
 *
 * Author: Caleb Panza
 * Created: Mar 17, 2021
 *
 * Feature rendered in the Features Feed that displays a single Block of standalone content.
 */

import React from 'react';

import { Box, ContentBlock } from 'ui-kit';

const ContentBlockFeature = props => {
  const content = props?.data;

  return (
    <Box maxWidth={1100} mx="auto">
      <ContentBlock
        title={content?.title}
        subtitle={content?.subtitle}
        actions={content?.actions}
        contentLayout={content?.orientation}
        htmlContent={content?.htmlContent}
        image={content?.coverImage?.sources[0]?.uri}
        imageRatio={content?.imageRatio}
        videos={content?.videos}
        {...props}
      />
    </Box>
  );
};

ContentBlockFeature.propTypes = {};
ContentBlockFeature.defaultProps = {};

export default ContentBlockFeature;
