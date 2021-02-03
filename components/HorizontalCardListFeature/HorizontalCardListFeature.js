import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from '..';
import {
  CardGrid,
  HorizontalHighlightCard,
} from 'ui-kit';
import { getURLFromType } from 'utils';

function HorizontalCardListFeature(props = {}) {
  const cards = props?.data?.cards || [];
  const cardType = props?.data?.cardType;
  let col = '2';

  if (!!cardType) {
    switch (cardType) {
      case 'HIGHLIGHT_SMALL':
        col = '4';
        break;
      case 'HIGHLIGHT_MEDIUM':
        col = '3';
        break;
      default:
        col = '2';
        break;
    }
  }

  return (
    <CardGrid columns={col}>
      {cards.map((card, i) => {
        // NOTE:
        //  title is missing from related node inside feature
        //  so it has been added here to work with 'getURLFromType()'
        //  may need to refactor getURLFromType in the future
        const relatedNode = {
          ...card.relatedNode,
          title: card.title,
        };
        return (
          <CustomLink
            as="a"
            key={i}
            href={getURLFromType(relatedNode)}
            Component={HorizontalHighlightCard}
            coverImage={card?.coverImage?.sources[0]?.uri}
            coverImageOverlay={true}
            title={card?.title}
            description={card?.summary}
            type={cardType}
          />
        );
      })}
    </CardGrid>
  );
}

HorizontalCardListFeature.propTypes = {
  data: PropTypes.object,
};

export default HorizontalCardListFeature;
