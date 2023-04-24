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

  const { title, subtitle, cards, actions } = data;

  return (
    <Box textAlign="center">
      {!isEmpty(title) && <Box as="h2">{title}</Box>}
      <HtmlRenderer htmlContent={subtitle} />
      {cards && cards.length > 0 && (
        <CardGrid marginBottom="base" marginTop="base" columns={'12'}>
          {cards.map((card, i) => {
            const url = getUrlFromRelatedNode(card?.relatedNode);
            const nonClickable = url === '#no-click';
            return (
              <Styled.CardSpacing key={i} index={i} total={cards.length}>
                {nonClickable ? (
                  <HorizontalHighlightCard
                    coverImage={card?.coverImage?.sources[0]?.uri}
                    coverImageOverlay={true}
                    title={card?.title}
                    description={card?.summary}
                    type={
                      props?.customCardSize
                        ? props?.customCardSize
                        : cards.length < 2
                        ? 'DEFAULT'
                        : 'HIGHLIGHT_SMALL'
                    }
                    label={transformISODates(card?.labelText)}
                  />
                ) : (
                  <CustomLink
                    as="a"
                    href={url}
                    key={i}
                    Component={props?.Component ?? HorizontalHighlightCard}
                    coverImage={card?.coverImage?.sources[0]?.uri}
                    coverImageOverlay={card?.title ? true : false}
                    title={card?.title}
                    description={card?.summary}
                    type={
                      props?.customCardSize
                        ? props?.customCardSize
                        : cards.length < 2
                        ? 'DEFAULT'
                        : 'HIGHLIGHT_SMALL'
                    }
                    label={transformISODates(card?.labelText)}
                  />
                )}
              </Styled.CardSpacing>
            );
          })}
        </CardGrid>
      )}
      {actions &&
        actions.length > 0 &&
        actions.map(action => (
          <Button
            as="a"
            mt="base"
            mx="s"
            href={getUrlFromRelatedNode(action?.relatedNode)}
          >
            {action?.title}
          </Button>
        ))}
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
