import React from 'react';
import PropTypes from 'prop-types';
import dropRight from 'lodash/dropRight';

import { CustomLink } from '..';
import { Box, CardGrid, DefaultCard, RowCard } from 'ui-kit';
import { getURLFromType } from 'utils';

function HeroListFeature(props = {}) {
  const heroCard = props?.data?.heroCard;
  let cards = props?.data?.actions || [];

  let col = cards.length > 1 ? '2' : '1';

  /**
   * note : if uneven amount of cards a bottom card will be made to fill the rest of the screen
   */
  let bottomCard = false;
  if (cards.length > 2 && cards.length % 2 !== 0) {
    bottomCard = cards.slice(cards.length - 1, cards.length)[0];
    cards = dropRight(cards, 1);
  }

  return (
    <Box>
      <CustomLink
        as="a"
        href={getURLFromType(heroCard?.relatedNode, heroCard?.title)}
        Component={DefaultCard}
        coverImage={heroCard?.coverImage?.sources[0]?.uri}
        coverImageOverlay={true}
        coverImageTitle={heroCard?.title}
        coverImageDescription={heroCard?.summary}
        height={{ _: '250px', md: '450px' }}
        display="block"
        marginBottom="base"
      />
      <CardGrid columns={col} marginBottom="l">
        {cards.map((card, i) => {
          return (
            <CustomLink
              as="a"
              key={i}
              href={getURLFromType(card?.relatedNode, card?.title)}
              Component={RowCard}
              coverImage={card?.image?.sources[0]?.uri}
              coverImageOverlay={true}
              title={card?.title}
              description={card?.subtitle}
            />
          );
        })}
      </CardGrid>
      {bottomCard && (
        <CustomLink
          as="a"
          href={getURLFromType(bottomCard?.relatedNode, bottomCard?.title)}
          Component={RowCard}
          coverImage={bottomCard?.coverImage?.sources[0]?.uri}
          coverImageOverlay={true}
          title={bottomCard?.title}
          description={bottomCard?.subtitle}
        />
      )}
    </Box>
  );
}

HeroListFeature.propTypes = {
  data: PropTypes.object,
};

export default HeroListFeature;
