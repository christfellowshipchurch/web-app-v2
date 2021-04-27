import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from 'components';
import { CardGrid, HorizontalHighlightCard } from 'ui-kit';
import { getUrlFromRelatedNode } from 'utils';
import Styled from './VerticalCardListFeature.styles';

function VerticalCardListFeature(props = {}) {
  if (!props?.data?.cards) {
    return null;
  }

  let cards = props?.data?.cards;

  return (
    <CardGrid marginBottom="base" columns={'12'}>
      {cards.map((card, i) => (
        <Styled.CardSpacing index={i} total={cards.length}>
          <CustomLink
            as="a"
            key={i}
            href={getUrlFromRelatedNode(card?.relatedNode)}
            Component={HorizontalHighlightCard}
            coverImage={card?.coverImage?.sources[0]?.uri}
            coverImageOverlay={true}
            title={card?.title}
            description={card?.summary}
            type="HIGHLIGHT_SMALL"
          />
        </Styled.CardSpacing>
      ))}
    </CardGrid>
  );
}

VerticalCardListFeature.propTypes = {
  data: PropTypes.object,
};

export default VerticalCardListFeature;
