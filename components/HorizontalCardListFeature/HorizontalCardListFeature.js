import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { GroupsProvider } from 'providers';
import { CustomLink, GroupsList } from '..';
import { Box, HorizontalHighlightCard, CardCarousel, PrayerCard } from 'ui-kit';
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

  /**
   * todo : TEMP SOLUTION - In the future we'll want to update how we pull in Group and Prayer cards. Right now for Groups we switch to GroupsProvider to pull in the required fields for GroupCard correctly, bypassing the CardCarousel. For Prayer we'll need to find a way to pull in the correct fields as well.
   */
  if (cards[0]?.action === 'READ_GROUP') {
    return <GroupsProvider Component={GroupsList} />;
  }
  if (cards[0]?.action === 'READ_PRAYER') {
    return (
      <CardCarousel
        padding="base"
        cardsDisplayed={4}
        hideArrows={cards.length < 2}
        mx={'-0.625rem'}
      >
        {cards.map((card, i) => (
          <PrayerCard
            key={i}
            boxShadow="none"
            height="100%"
            mx="s"
            coverImage={card?.coverImage?.sources[0]?.uri || '/cf-logo.png'}
            coverImageOverlay={true}
            description={card?.title}
          />
        ))}
      </CardCarousel>
    );
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
