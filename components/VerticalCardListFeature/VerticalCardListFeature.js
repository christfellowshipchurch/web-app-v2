import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { CustomLink } from 'components';
import { Box, CardGrid, HorizontalHighlightCard } from 'ui-kit';
import { getUrlFromRelatedNode } from 'utils';
import Styled from './VerticalCardListFeature.styles';

function VerticalCardListFeature(props = {}) {
  let data = props?.data;

  if (!data) {
    return null;
  }

  let title = data?.title;
  let subtitle = data?.subtitle;
  let cards = data?.cards;

  return (
    <Box textAlign="center">
      {!isEmpty(title) && <Box as="h2">{title}</Box>}
      {!isEmpty(subtitle) && <Box as="p">{subtitle}</Box>}
      {cards && cards.length > 0 && (
        <CardGrid marginBottom="base" marginTop="base" columns={'12'}>
          {cards.map((card, i) => (
            <Styled.CardSpacing key={i} index={i} total={cards.length}>
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
                label={card?.labelText}
              />
            </Styled.CardSpacing>
          ))}
        </CardGrid>
      )}
    </Box>
  );
}

VerticalCardListFeature.propTypes = {
  data: PropTypes.object,
};

export default VerticalCardListFeature;
