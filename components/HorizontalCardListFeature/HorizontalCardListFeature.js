import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { CustomLink } from '..';
import { Box, HorizontalHighlightCard, CardCarousel } from 'ui-kit';
import { getUrlFromRelatedNode } from 'utils';

function HorizontalCardListFeature(props = {}) {
  let data = props?.data;

  if (!data) {
    return null;
  }

  let title = data?.title;
  let subtitle = data?.subtitle;
  let cards = data?.cards;

  const cardType = props?.data?.cardType || 'default';
  let cardsDisplayed;

  if (cards) {
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
  }

  return (
    <Box>
      {!isEmpty(title) && <Box as="h2">{title}</Box>}
      {!isEmpty(subtitle) && <Box as="p">{subtitle}</Box>}
      <CardCarousel
        cardsDisplayed={cardsDisplayed}
        hideArrows={cards.length < 2}
        mx={'-0.625rem'}
      >
        {cards.map((card, i) => {
          return (
            <CustomLink
              as="a"
              key={i}
              mx="s"
              boxShadow="none"
              href={getUrlFromRelatedNode(card?.relatedNode)}
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
    </Box>
  );
}

HorizontalCardListFeature.propTypes = {
  data: PropTypes.object,
};

export default HorizontalCardListFeature;
