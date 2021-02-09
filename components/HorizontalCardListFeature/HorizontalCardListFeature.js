import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from '..';
import { HorizontalHighlightCard, CardCarousel } from 'ui-kit';
import { getURLFromType } from 'utils';

function HorizontalCardListFeature(props = {}) {
  const cards = props?.data?.cards || [];
  const cardType = props?.data?.cardType;
  let cardsDisplayed = 2;

  if (!!cardType) {
    switch (cardType) {
      case 'HIGHLIGHT_SMALL':
        cardsDisplayed = 4;
        break;
      case 'HIGHLIGHT_MEDIUM':
        cardsDisplayed = 3;
        break;
      default:
        cardsDisplayed = 2;
        break;
    }
  }

  return (
    <CardCarousel cardsDisplayed={cardsDisplayed}>
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
            mx="s"
            backgroundColor={'transparent'}
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
    </CardCarousel>
  );
}

HorizontalCardListFeature.propTypes = {
  data: PropTypes.object,
};

export default HorizontalCardListFeature;
