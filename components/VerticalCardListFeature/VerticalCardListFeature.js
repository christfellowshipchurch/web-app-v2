import React from 'react';
import PropTypes from 'prop-types';
import { getURLFromType } from '../../utils';
import { CustomLink } from '../../components';

import { CardGrid, DefaultCard, HeroCardGrid } from '../../ui-kit';

function VerticalCardListFeature(props = {}) {
  const cards = props?.data?.cards || [];

  return cards.length < 2 ? (
    <HeroCardGrid>
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
    </HeroCardGrid>
  ) : (
    <CardGrid>
      {cards.map((card, i) => {
        const relatedNode = {
          ...card.relatedNode,
          //title is missing from related node
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
            title={card?.title}
            description={card?.summary}
            display="block"
          />
        );
      })}
    </CardGrid>
  );
}

VerticalCardListFeature.propTypes = {
  data: PropTypes.object,
};

export default VerticalCardListFeature;
