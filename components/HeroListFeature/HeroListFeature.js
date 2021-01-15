import React from 'react';
import PropTypes from 'prop-types';
import { getURLFromType } from '../../utils';
import { CustomLink } from '..';

import { DefaultCard, HeroCardGrid } from '../../ui-kit';

function HeroListFeature(props = {}) {
  const heroCard = props?.data?.heroCard;
  let actions = props?.data?.actions || [];
  const cards = [heroCard, ...actions];
  return (
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
        // HeroCard
        if (i < 1)
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
        // Addtional actions
        else
          return (
            <CustomLink
              as="a"
              key={i}
              href={getURLFromType(relatedNode)}
              Component={DefaultCard}
              coverImage={card?.image?.sources[0]?.uri}
              coverImageOverlay={true}
              title={card?.title}
              description={card?.summary}
              display="block"
            />
          );
      })}
    </HeroCardGrid>
  );
}

HeroListFeature.propTypes = {
  data: PropTypes.object,
};

export default HeroListFeature;
