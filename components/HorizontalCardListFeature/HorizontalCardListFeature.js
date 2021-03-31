import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from '..';
import { HorizontalHighlightCard, CardCarousel } from 'ui-kit';
import { getURLFromType } from 'utils';

function HorizontalCardListFeature(props = {}) {
  const cards = props?.data?.cards;

  const cardType = props?.data?.cardType || 'default';
  let cardsDisplayed;

  switch (cardType) {
    case 'HIGHLIGHT_SMALL':
      cardsDisplayed = 4;
      break;
    case 'HIGHLIGHT_MEDIUM':
      cardsDisplayed = 3;
      break;
    default:
      cardsDisplayed = cards.length < 2 ? 1 : 2;
      break;
  }

  return (
    <CardCarousel cardsDisplayed={cardsDisplayed} hideArrows={cards.length < 2}>
      {cards.map((card, i) => {
        return (
          <CustomLink
            as="a"
            key={i}
            mx="s"
            boxShadow="none"
            href={getURLFromType(card.relatedNode, card.title)}
            Component={HorizontalHighlightCard}
            coverImage={card?.coverImage?.sources[0]?.uri || '/cf-logo.png'}
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
