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
import Styled from './CardGridFeature.styles';
import { includes } from 'lodash';

function CardGridFeature(props = {}) {
  let data = props?.data;

  if (!data) {
    return null;
  }

  const { title, subtitle, cards, actions, callToAction } = data;

  return (
    <Box textAlign="center">
      {!isEmpty(title) &&
        (props?.titleOverride ? (
          <HtmlRenderer htmlContent={title} />
        ) : (
          <Box
            as={props?.titleLarge ? 'h1' : 'h2'}
            p="base"
            color={props?.titleColor ? props?.titleColor : 'primary'}
          >
            {title}
          </Box>
        ))}

      {!isEmpty(subtitle) && <HtmlRenderer htmlContent={subtitle} />}
      {cards && cards.length > 0 && (
        <CardGrid
          horizontalScroll={props?.horizontalScroll}
          marginBottom="base"
          marginTop="l"
          columns="12"
        >
          {cards.map((card, i) => {
            const url = card.routing
              ? card.routing.pathname
              : getUrlFromRelatedNode(card?.relatedNode);
            const nonClickable = url === '#no-click';
            return (
              <Styled.CardSpacing key={i} index={i} total={cards.length}>
                {nonClickable ? (
                  <HorizontalHighlightCard
                    mx={{ _: 's', md: 0 }}
                    width={{ _: 250, md: 'auto' }}
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
                    width={{ _: 300, md: 'auto' }}
                    mx={{ _: 's', md: 0 }}
                    href={`/${url}`}
                    key={i}
                    Component={props?.Component ?? HorizontalHighlightCard}
                    coverImage={card?.coverImage?.sources[0]?.uri}
                    coverImageOverlay={true}
                    title={card?.title}
                    description={card?.summary}
                    ml={i < 1 && !!props?.horizontalScroll ? 'base' : 's'}
                    mr={
                      i === cards.length - 1 && !!props?.horizontalScroll
                        ? 'base'
                        : 's'
                    }
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
      {/* Note: this is deprecated and is only support with Content Categories */}
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
      {/* Feature Call to Action from Content Collections */}
      {callToAction && (
        <Box width="100%" textAlign="center" mt="l">
          <Button
            as="a"
            target={includes(callToAction?.action, 'https') && '_blank'}
            href={callToAction?.action}
          >
            {callToAction?.call}
          </Button>
        </Box>
      )}
    </Box>
  );
}

CardGridFeature.propTypes = {
  data: PropTypes.object,
  /**
   * Whether the title should be rendered as an h1 or h2
   */
  titleLarge: PropTypes.bool,
  Component: PropTypes.any,
  horizontalScroll: PropTypes.bool,
};

CardGridFeature.defaultProps = {
  Component: HorizontalHighlightCard,
  titleLarge: false,
  horizontalScroll: true,
};

export default CardGridFeature;
