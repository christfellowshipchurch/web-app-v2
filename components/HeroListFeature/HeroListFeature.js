import React from 'react';
import PropTypes from 'prop-types';
import dropRight from 'lodash/dropRight';
import isEmpty from 'lodash/isEmpty';

import { CustomLink } from '..';
import { Box, CardGrid, DefaultCard, HtmlRenderer, RowCard } from 'ui-kit';
import { getUrlFromRelatedNode, transformISODates } from 'utils';

function isClickable(url) {
  return url !== '#no-click';
}

function HeroListFeature(props = {}) {
  const onPressActionItem = props?.onPressActionItem;
  const heroCard = props?.data?.heroCard;
  let title = props?.data?.title;
  let subtitle = props?.data?.subtitle;
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
      {!isEmpty(title) && <Box as="h2">{title}</Box>}
      {!isEmpty(subtitle) && <HtmlRenderer htmlContent={subtitle} />}
      <>
        {isClickable(getUrlFromRelatedNode(heroCard?.relatedNode)) ? (
          <CustomLink
            as="a"
            href={getUrlFromRelatedNode(heroCard?.relatedNode)}
            Component={DefaultCard}
            coverImage={heroCard?.coverImage?.sources[0]?.uri}
            coverImageOverlay={true}
            coverImageTitle={heroCard?.title}
            coverImageDescription={heroCard?.summary}
            height={{ _: '250px', md: '450px' }}
            display="block"
            marginBottom="base"
            onClick={e => onPressActionItem(e, heroCard)}
            coverImageLabel={transformISODates(heroCard?.labelText)}
          />
        ) : (
          <DefaultCard
            coverImage={heroCard?.coverImage?.sources[0]?.uri}
            coverImageOverlay={true}
            coverImageTitle={heroCard?.title}
            coverImageDescription={heroCard?.summary}
            height={{ _: '250px', md: '450px' }}
            display="block"
            marginBottom="base"
            coverImageLabel={transformISODates(heroCard?.labelText)}
          />
        )}
      </>

      {cards.length > 0 && (
        <CardGrid columns={col} marginBottom="base">
          {cards.map((card, i) => {
            return (
              <>
                {isClickable(getUrlFromRelatedNode(card?.relatedNode)) ? (
                  <CustomLink
                    as="a"
                    key={i}
                    href={getUrlFromRelatedNode(card?.relatedNode)}
                    Component={RowCard}
                    coverImage={card?.image?.sources[0]?.uri}
                    coverImageOverlay={true}
                    title={card?.title}
                    description={card?.subtitle}
                    label={transformISODates(card?.labelText)}
                  />
                ) : (
                  <RowCard
                    key={i}
                    coverImage={card?.image?.sources[0]?.uri}
                    coverImageOverlay={true}
                    title={card?.title}
                    description={card?.summary}
                    label={transformISODates(card?.labelText)}
                  />
                )}
              </>
            );
          })}
        </CardGrid>
      )}
      {bottomCard &&
        (isClickable(getUrlFromRelatedNode(bottomCard?.relatedNode)) ? (
          <CustomLink
            as="a"
            href={getUrlFromRelatedNode(bottomCard?.relatedNode)}
            Component={RowCard}
            coverImage={bottomCard?.image?.sources[0]?.uri}
            coverImageOverlay={true}
            title={bottomCard?.title}
            description={bottomCard?.subtitle}
            label={transformISODates(bottomCard?.labelText)}
          />
        ) : (
          <RowCard
            coverImage={bottomCard?.image?.sources[0]?.uri}
            coverImageOverlay={true}
            title={bottomCard?.title}
            description={bottomCard?.summary}
            label={transformISODates(bottomCard?.labelText)}
          />
        ))}
    </Box>
  );
}

HeroListFeature.propTypes = {
  data: PropTypes.object,
};

export default HeroListFeature;
