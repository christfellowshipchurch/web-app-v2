import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from '..';
import { Box, CardGrid, DefaultCard, HeroCardGrid, Loader } from 'ui-kit';
import { getURLFromType } from 'utils';

function HorizontalCardListFeature(props = {}) {
  const cards = props?.data?.cards || [];

  return (
    <CardGrid>
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
            Component={DefaultCard}
            coverImage={card?.coverImage?.sources[0]?.uri}
            coverImageOverlay={true}
            coverImageTitle={card?.title}
            coverImageDescription={card?.summary}
            height={{ _: '250px', md: '450px' }}
            display="block"
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
