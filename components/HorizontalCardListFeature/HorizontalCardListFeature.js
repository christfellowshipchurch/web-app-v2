import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { GroupsProvider } from 'providers';
import { CustomLink, GroupsList } from '..';
import {
  Box,
  CardCarousel,
  HorizontalHighlightCard,
  HtmlRenderer,
  Loader,
  PrayerCard,
} from 'ui-kit';
import { getUrlFromRelatedNode, transformISODates } from 'utils';

function HorizontalCardListFeature(props = {}) {
  const { title, subtitle, cards } = props?.data;

  if (!props.data) {
    return null;
  }

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
  if (cards && cards[0]?.action === 'READ_GROUP') {
    return (
      <Box>
        {!isEmpty(title) && <Box as="h2">{title}</Box>}
        {!isEmpty(subtitle) && <Box as="p">{subtitle}</Box>}
        <GroupsProvider Component={GroupsList} />
      </Box>
    );
  }

  console.log(cards.length);
  if (cards.length === 0) {
    return <Box>You don't have any prayers right now</Box>;
  }
  if (cards && cards[0]?.action === 'READ_PRAYER') {
    return props.loading ? (
      <Loader text="Loading your prayers" />
    ) : (
      <Box>
        {!isEmpty(title) && <Box as="h2">{title}</Box>}
        {!isEmpty(subtitle) && <Box as="p">{subtitle}</Box>}
        <CardCarousel
          cardsDisplayed={4}
          hideArrows={!cards || cards.length < 2}
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
      </Box>
    );
  }

  return (
    <Box textAlign="center">
      {!isEmpty(title) && <Box as="h2">{title}</Box>}
      {!isEmpty(subtitle) && <HtmlRenderer htmlContent={subtitle} />}
      <CardCarousel
        cardsDisplayed={cardsDisplayed}
        hideArrows={!cards || cards.length < 2}
        mx={'-0.625rem'}
      >
        {!isEmpty(cards) &&
          cards?.map((card, i) => {
            return (
              <CustomLink
                as="a"
                key={i}
                m="s"
                boxShadow="none"
                href={getUrlFromRelatedNode(card?.relatedNode)}
                Component={HorizontalHighlightCard}
                coverImage={card?.coverImage?.sources[0]?.uri || '/cf-logo.png'}
                coverImageOverlay={true}
                title={card?.title}
                description={card?.summary}
                type={cardType}
                label={transformISODates(card?.labelText)}
              />
            );
          })}
      </CardCarousel>
    </Box>
  );
}

HorizontalCardListFeature.propTypes = {
  data: PropTypes.shape({
    cardType: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape({})),
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default HorizontalCardListFeature;
