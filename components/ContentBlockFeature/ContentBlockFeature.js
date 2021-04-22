/**
 * ContentBlockFeature.js
 *
 * Author: Caleb Panza
 * Created: Mar 17, 2021
 *
 * Feature rendered in the Features Feed that displays a single Block of standalone content.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Box, ContentBlock } from 'ui-kit';

const ContentBlockFeature = props => {
  const content = props?.data;

  return (
    <Box maxWidth={1100} mx="auto">
      <ContentBlock
        title={content?.title}
        summary={content?.summary}
        htmlContent={content?.htmlContent}
        image={content?.coverImage?.sources[0]?.uri}
        contentLayout={content?.orientation}
        imageRatio={content?.imageRatio}
        callToAction={content?.callToAction}
      />
    </Box>
  );
};

ContentBlockFeature.propTypes = {};
ContentBlockFeature.defaultProps = {};

export default ContentBlockFeature;
