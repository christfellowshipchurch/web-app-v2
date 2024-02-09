import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { getUrlFromRelatedNode, slugify } from 'utils';
import {
  useCurrentBreakpoint,
  useDiscoverFilterCategoriesPreview,
} from 'hooks';
import {
  Button,
  Box,
  DefaultCard,
  HorizontalHighlightCard,
  CardGrid,
  Loader,
  CardCarousel,
} from 'ui-kit';
import { CustomLink } from 'components';

const CollectionPreview = ({
  contentId,
  summary,
  cardType,
  hideButton,
  hideTitle,
  buttonOverride,
  titleOverride,
  size,
  horizontalScroll,
  contentOverride,
  cardProps,
}) => {
  let contentItems = [];
  const router = useRouter();
  const currentBreakpoint = useCurrentBreakpoint();
  const {
    categoryTitle,
    contentItems: queriedContent,
    loading,
  } = useDiscoverFilterCategoriesPreview({
    variables: { id: contentId, first: 3 },
  });
  contentItems = queriedContent;

  const handleSeeMore = event => {
    const [id] = contentId.split(':');

    event.preventDefault();
    router.push(`/discover/${slugify(categoryTitle)}?id=${slugify(id)}`);
  };

  if (contentOverride) {
    contentItems = contentOverride;
  }

  return (
    <Box>
      {/* Title */}
      {!hideTitle && (
        <Box
          color="secondary"
          textAlign={'center'}
          as={size === 's' ? 'h2' : 'h1'}
          mb="l"
        >
          {titleOverride || categoryTitle}
        </Box>
      )}

      {/* Summary */}
      {summary && (
        <Box
          maxWidth={600}
          textAlign="center"
          mb="l"
          as="h3"
          fontWeight="normal"
          mx="auto"
        >
          {summary}
        </Box>
      )}

      {/* Horizontal Carousel */}
      {horizontalScroll && (
        <CardCarousel display={{ md: 'none' }}>
          {loading ? (
            <Loader />
          ) : (
            contentItems.map((n, i) => (
              <CustomLink
                as="a"
                key={i}
                Component={
                  cardType === 'default' ? DefaultCard : HorizontalHighlightCard
                }
                coverImageOverlay={true}
                type={size === 's' ? 'HIGHLIGHT_SMALL' : 'HIGHLIGHT_MEDIUM'}
                mx="s"
                coverImage={n?.coverImage?.sources[0]?.uri}
                description={n?.summary}
                href={getUrlFromRelatedNode(n)}
                scaleCard={false}
                scaleCoverImage={true}
                title={n?.title}
                {...cardProps}
              />
            ))
          )}
        </CardCarousel>
      )}

      {/* Grid of Cards */}
      {(!currentBreakpoint.isSmall || !horizontalScroll) && (
        <CardGrid
          display={horizontalScroll ? { _: 'none', md: null } : null}
          columns="3"
        >
          {loading ? (
            <Loader />
          ) : (
            contentItems.map((n, i) => (
              <CustomLink
                key={i}
                Component={
                  cardType === 'default' ? DefaultCard : HorizontalHighlightCard
                }
                coverImageOverlay={true}
                type={size === 's' ? 'HIGHLIGHT_SMALL' : 'HIGHLIGHT_MEDIUM'}
                mx={size === 's' ? 'base' : 0}
                as="a"
                coverImage={n?.coverImage?.sources[0]?.uri}
                description={n?.summary}
                href={getUrlFromRelatedNode(n)}
                scaleCard={false}
                scaleCoverImage={true}
                title={n?.title}
                minWidth={300}
                {...cardProps}
              />
            ))
          )}
        </CardGrid>
      )}

      {/* See More Button */}
      {contentItems?.length > 2 && !hideButton && (
        <Box textAlign="center" width="100%">
          <Button
            variant="secondary"
            mt="l"
            px={size === 's' ? 'base' : 'l'}
            size={size}
            onClick={
              buttonOverride !== ''
                ? () => router.push(buttonOverride)
                : handleSeeMore
            }
          >
            See More
          </Button>
        </Box>
      )}
    </Box>
  );
};

CollectionPreview.propTypes = {
  hideTitle: PropTypes.bool,
  contentId: PropTypes.string,
  buttonOverride: PropTypes.string,
  horizontalScroll: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'l']),
  cardType: PropTypes.oneOf(['default', 'horizontal']),
  hideButton: PropTypes.bool,
  titleOverride: PropTypes.string,
  summary: PropTypes.string,
};

CollectionPreview.defaultProps = {
  hideTitle: false,
  buttonOverride: '',
  horizontalScroll: false,
  size: 'l',
  cardType: 'highlight',
  hideButton: false,
  titleOverride: '',
  summary: '',
};

export default CollectionPreview;
