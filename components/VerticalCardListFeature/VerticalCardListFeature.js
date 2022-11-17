import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { CustomLink } from 'components';
import {
  Box,
  Button,
  CardGrid,
  HorizontalHighlightCard,
  HtmlRenderer,
} from 'ui-kit';
import { getUrlFromRelatedNode, transformISODates } from 'utils';
import Styled from './VerticalCardListFeature.styles';

function VerticalCardListFeature(props = {}) {
  let data = props?.data;

  if (!data) {
    return null;
  }

  let buttonTitle = data?.actions[0]?.title;
  let buttonUrl = data?.actions[0]?.relatedNode.url;
  let title = data?.title;
  let subtitle = data?.subtitle;
  let cards = data?.cards;

  return (
    <Box textAlign="center">
      {!isEmpty(title) && <Box as="h2">{title}</Box>}
      <HtmlRenderer htmlContent={subtitle} />
      {cards && cards.length > 0 && (
        <CardGrid marginBottom="base" marginTop="base" columns={'12'}>
          {cards.map((card, i) => (
            <Styled.CardSpacing key={i} index={i} total={cards.length}>
              <CustomLink
                as="a"
                key={i}
                href={getUrlFromRelatedNode(card?.relatedNode)}
                Component={props?.Component ?? HorizontalHighlightCard}
                coverImage={card?.coverImage?.sources[0]?.uri}
                coverImageOverlay={true}
                title={card?.title}
                description={card?.summary}
                type={cards.length < 2 ? 'DEFAULT' : 'HIGHLIGHT_SMALL'}
                label={transformISODates(card?.labelText)}
              />
            </Styled.CardSpacing>
          ))}
        </CardGrid>
      )}
      {buttonTitle ? (
        <Button as="a" mt="base" href={buttonUrl}>
          {buttonTitle}
        </Button>
      ) : null}
    </Box>
  );
}

VerticalCardListFeature.propTypes = {
  data: PropTypes.object,
  Component: PropTypes.any,
};

VerticalCardListFeature.defaultProps = {
  Component: HorizontalHighlightCard,
};

export default VerticalCardListFeature;
