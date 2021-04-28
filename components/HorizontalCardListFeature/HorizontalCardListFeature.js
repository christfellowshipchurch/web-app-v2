import React from 'react';
import PropTypes from 'prop-types';

import { GroupsProvider } from 'providers';
import { CustomLink, GroupsList } from '..';
import { HorizontalHighlightCard, CardCarousel, PrayerCard } from 'ui-kit';
import { getUrlFromRelatedNode } from 'utils';

function HorizontalCardListFeature(props = {}) {
  if (!props?.data?.cards) {
    return null;
  }

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
      >
        {cards.map((card, i) => (
          <PrayerCard
            key={i}
            boxShadow="none"
            height="100%"
            mr="base"
            coverImage={card?.coverImage?.sources[0]?.uri || '/cf-logo.png'}
            coverImageOverlay={true}
            description={card?.title}
          />
        ))}
      </CardCarousel>
    );
  }

  return (
    <CardCarousel cardsDisplayed={cardsDisplayed} hideArrows={cards.length < 2}>
      {cards.map((card, i) => (
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
      ))}
    </CardCarousel>
  );
}

HorizontalCardListFeature.propTypes = {
  data: PropTypes.object,
};

export default HorizontalCardListFeature;
