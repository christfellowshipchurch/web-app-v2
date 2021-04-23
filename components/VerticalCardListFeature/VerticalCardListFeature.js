import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from 'components';
import { CardGrid, HorizontalHighlightCard } from 'ui-kit';
import { getUrlFromRelatedNode } from 'utils';

function VerticalCardListFeature(props = {}) {
  if (!props?.data?.cards) {
    return null;
  }

  let cards = props?.data?.cards;

  return (
    <CardGrid marginBottom="base" columns={12}>
      {cards.map((card, i) => {
        /**
         * The Vertical Card List Feature should not show any blank caps in between cards.
         *
         * In order to compensate for when there is not an even row of 3 cards, we'll calculate the first handlful of cards in order to have them fill the gap.
         *
         * For Example:
         * [____]
         * [][][]
         *
         * [_][_]
         * [][][]
         *
         * [][][]
         * [][][]
         *
         * ? Is there a more "styled component-ish" way to handle this?
         */
        let remainder = cards.length % 3;
        let span = 4;

        if (remainder < span && i < remainder) {
          span = 12 / remainder;
        }

        return (
          <div
            style={{
              gridColumnEnd: `span ${span}`,
            }}
          >
            <CustomLink
              as="a"
              key={i}
              href={getUrlFromRelatedNode(card?.relatedNode)}
              Component={HorizontalHighlightCard}
              coverImage={card?.coverImage?.sources[0]?.uri}
              coverImageOverlay={true}
              title={card?.title}
              description={card?.summary}
              type="HIGHLIGHT_SMALL"
            />
          </div>
        );
      })}
    </CardGrid>
  );
}

VerticalCardListFeature.propTypes = {
  data: PropTypes.object,
};

export default VerticalCardListFeature;
