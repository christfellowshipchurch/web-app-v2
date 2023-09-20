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

  // Hardcoded Images for the Podcast Seasons
  let PodcastImages;
  if (title === 'Podcast Seasons') {
    PodcastImages = [
      'https://cloudfront.christfellowship.church/GetImage.ashx?guid=f6f2a8ae-f2b8-4693-99dd-201aec038381',
      'https://cloudfront.christfellowship.church/GetImage.ashx?guid=c18e9876-f47e-407d-b2c7-222815512586',
      'https://cloudfront.christfellowship.church/GetImage.ashx?guid=42d3721c-c07d-46ce-9595-75a49a8f21a2',
      'https://cloudfront.christfellowship.church/GetImage.ashx?guid=408ae927-1978-4892-aaeb-55b671dcdfdf',
      'https://cloudfront.christfellowship.church/GetImage.ashx?guid=648e350b-45d6-42b5-8782-40dd439ac533',
      'https://cloudfront.christfellowship.church/GetImage.ashx?guid=297a613d-2169-4500-a6d0-9fc68af9d56e',
      'https://cloudfront.christfellowship.church/GetImage.ashx?guid=6e2b0b0e-4b9a-4b9e-9b0a-1b6b0b0e4b9a',
      // Season 7 empty for now
    ];
  }
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
                coverImage={
                  card?.image?.sources
                    ? card?.image?.sources[0]?.uri
                    : PodcastImages[i]
                }
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
  data: PropTypes.object,
};

export default ActionListFeature;
