import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { CustomLink } from '..';
import { Box, RowCard } from 'ui-kit';
import { getUrlFromRelatedNode, transformISODates } from 'utils';

function ActionListFeature(props = {}) {
  let title = props?.data?.title;
  let subtitle = props?.data?.subtitle;
  let cards = props?.data?.actions || [];

  return (
    <Box>
      <Box mb="base">
        {!isEmpty(title) && <Box as="h2">{title}</Box>}
        {!isEmpty(subtitle) && (
          <Box as="h3" fontWeight="normal">
            {subtitle}
          </Box>
        )}
      </Box>
      {cards.length > 0 && (
        <Box>
          {cards.map((card, i) => {
            return (
              <CustomLink
                as="a"
                key={i}
                href={getUrlFromRelatedNode(card?.relatedNode)}
                Component={RowCard}
                coverImage={card?.image?.sources[0]?.uri}
                coverImageOverlay={true}
                title={card?.title}
                description={card?.subtitle}
                label={transformISODates(card?.labelText)}
                mb="s"
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
}

ActionListFeature.propTypes = {
  /**
   * Data object to be passed in to the component
   */
  data: PropTypes.object,
};

export default ActionListFeature;
