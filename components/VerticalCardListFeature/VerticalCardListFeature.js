import React from 'react';
import PropTypes from 'prop-types';
import dropRight from 'lodash/dropRight';
import head from 'lodash/head';
import slice from 'lodash/slice';

import { CustomLink } from 'components';
import { CardGrid, DefaultCard, HorizontalHighlightCard } from 'ui-kit';
import { getURLFromType } from 'utils';

const getCardColumns = cards => {
  let col = '1';
  if (cards.length > 2) {
    if (cards.length > 3) {
      return (col = '2');
    }
    return (col = '2');
  }
  return col;
};

function VerticalCardListFeature(props = {}) {
  let cards = props?.data?.cards || [];
  const heroCard = head(cards);
  cards = slice(cards, 1);

  const col = getCardColumns(cards);

  /**
   * note : if the bottom highlight cards are uneven, the last three cards will be moved down to a 'bottomRow' in a CardGrid with 3 columns to fill the space
   */
  let bottomRow = false;
  if (cards.length > 4 && cards.length % 2 !== 0) {
    bottomRow = cards.slice(cards.length - 3, cards.length);
    cards = dropRight(cards, 3);
  }

  return (
    <>
      <CustomLink
        as="a"
        href={getURLFromType(heroCard.relatedNode, heroCard?.title)}
        Component={DefaultCard}
        coverImage={heroCard?.coverImage?.sources[0]?.uri}
        coverImageTitle={heroCard?.title}
        coverImageDescription={heroCard?.summary}
        coverImageOverlay={true}
        marginBottom="l"
        height={{ __: 250, md: 450 }}
        display="block"
      />
      <CardGrid marginBottom="base" columns={col}>
        {cards.map((card, i) => (
          <CustomLink
            as="a"
            key={i}
            href={getURLFromType(card?.relatedNode, card?.title)}
            Component={HorizontalHighlightCard}
            coverImage={card?.coverImage?.sources[0]?.uri}
            coverImageOverlay={true}
            title={card?.title}
            description={card?.summary}
            type="HIGHLIGHT_SMALL"
          />
        ))}
      </CardGrid>
      {bottomRow && (
        <CardGrid columns={3}>
          {bottomRow.map((card, i) => (
            <CustomLink
              as="a"
              key={i}
              href={getURLFromType(card?.relatedNode, card?.title)}
              Component={HorizontalHighlightCard}
              coverImage={card?.coverImage?.sources[0]?.uri}
              coverImageOverlay={true}
              title={card?.title}
              description={card?.summary}
              type="HIGHLIGHT_SMALL"
            />
          ))}
        </CardGrid>
      )}
    </>
  );
}

VerticalCardListFeature.propTypes = {
  data: PropTypes.object,
};

export default VerticalCardListFeature;
