import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { GroupsProvider } from 'providers';
import { CustomLink, GroupsList } from '..';
import {
  Box,
  Button,
  CardCarousel,
  HorizontalHighlightCard,
  HorizontalScroll,
  HtmlRenderer,
  Loader,
  PrayerCard,
} from 'ui-kit';
import { getUrlFromRelatedNode, transformISODates } from 'utils';
import { includes } from 'lodash';

function HorizontalCardListFeature(props = {}) {
  const { title, subtitle, cards, callToAction } = props?.data;

  if (!props.data) {
    return null;
  }

  const cardType = props?.data?.cardType || 'default';
  /**
   * todo : TEMP SOLUTION - In the future we'll want to update how we pull in Group and Prayer cards. Right now for Groups we switch to GroupsProvider to pull in the required fields for GroupCard correctly, bypassing the CardCarousel. For Prayer we'll need to find a way to pull in the correct fields as well.
   */
  if (cards && cards[0]?.action === 'READ_GROUP') {
    return (
      <Box>
        {!isEmpty(title) && <Box as="h2">{title}</Box>}
        {!isEmpty(subtitle) && <Box as="p">{subtitle}</Box>}
        <GroupsProvider Component={GroupsList} />
      </Box>
    );
  }

  if (cards.length === 0 && title === 'My Groups') {
    return (
      <Box>
        {!isEmpty(title) && <Box as="h2">{title}</Box>}
        {!isEmpty(subtitle) && <Box as="p">{subtitle}</Box>}
        <Box>
          {' '}
          <Box
            as="a"
            target="blank"
            href="https://www.christfellowship.church/groups"
          >
            Click here
          </Box>{' '}
          to discover all kinds of groups.
        </Box>
      </Box>
    );
  }

  if (cards.length === 0 && title === 'My Prayers') {
    return (
      <Box>
        {!isEmpty(title) && <Box as="h2">{title}</Box>}
        {!isEmpty(subtitle) && <Box as="p">{subtitle}</Box>}
        <Box>
          {' '}
          <Box as="a" target="blank" href="https://rock.gocf.org/RequestPrayer">
            Click here
          </Box>{' '}
          to let us know how we can pray for you.
        </Box>
      </Box>
    );
  }
  // TEST PRAYER CARDS!
  if (cards && cards[0]?.action === 'READ_PRAYER') {
    return props.loading ? (
      <Loader text="Loading your prayers" />
    ) : (
      <Box>
        {!isEmpty(title) && <Box as="h2">{title}</Box>}
        {!isEmpty(subtitle) && <Box as="p">{subtitle}</Box>}
        <HorizontalScroll cardsCount={cards.length}>
          {cards.map((card, i) => (
            <PrayerCard
              key={i}
              boxShadow="none"
              height="100%"
              mx="s"
              coverImage={card?.coverImage?.sources[0]?.uri || '/cf-logo.png'}
              coverImageOverlay={true}
              description={card?.title}
            />
          ))}
        </HorizontalScroll>
      </Box>
    );
  }

  return (
    <Box textAlign="center">
      {!isEmpty(title) && <Box as="h2">{title}</Box>}
      {!isEmpty(subtitle) && <HtmlRenderer htmlContent={subtitle} />}
      <HorizontalScroll cardsCount={cards.length}>
        {!isEmpty(cards) &&
          cards?.map((card, i) => {
            const url = getUrlFromRelatedNode(card?.relatedNode);
            const nonClickable = url === '#no-click';
            return (
              <>
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
                    key={i}
                    m="s"
                    minWidth={{
                      _: '300px',
                      md: '340px',
                      lg: cards.length >= 3 ? '300px' : '450px',
                    }}
                    width={{ _: '300px', md: '40vw' }}
                    maxWidth={{ _: '86vw', md: '600px' }}
                    boxShadow="none"
                    href={getUrlFromRelatedNode(card?.relatedNode)}
                    Component={HorizontalHighlightCard}
                    coverImage={
                      card?.coverImage?.sources[0]?.uri || '/cf-logo.png'
                    }
                    coverImageOverlay={true}
                    title={card?.title}
                    description={card?.summary}
                    type={cardType}
                    label={transformISODates(card?.labelText)}
                  />
                )}
              </>
            );
          })}
      </HorizontalScroll>
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

HorizontalCardListFeature.propTypes = {
  data: PropTypes.shape({
    cardType: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape({})),
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default HorizontalCardListFeature;
