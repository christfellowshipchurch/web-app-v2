import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { slugify } from 'utils';
import { useDiscoverFilterCategoriesPreview } from 'hooks';
import { Button, Box, Loader } from 'ui-kit';
import { CardGridFeature } from 'components';

const CollectionPreview = ({
  contentId,
  summary,
  hideButton,
  hideTitle,
  buttonOverride,
  titleOverride,
  size,
  horizontalScroll,
  contentOverride,
}) => {
  //setting contentItems to an empty array so we can override with hardcoded data if needed
  let contentItems = [];
  const router = useRouter();
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

  // If contentOverride is passed, use that instead of queriedContent
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

      {loading ? (
        <Loader />
      ) : (
        <CardGridFeature
          data={{ cards: contentItems }}
          horizontalScroll={horizontalScroll}
          customCardSize="HIGHLIGHT_MEDIUM"
        />
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
  /**
   * Whether or not to hide the title
   */
  hideTitle: PropTypes.bool,
  /**
   * The content id to query
   */
  contentId: PropTypes.string,
  /**
   * The content to override the button with
   */
  buttonOverride: PropTypes.string,
  /**
   * Whether or not to scroll horizontally
   */
  horizontalScroll: PropTypes.bool,
  /**
   * The size of the component
   */
  size: PropTypes.oneOf(['s', 'l']),
  /**
   * The type of card to display
   */
  cardType: PropTypes.oneOf(['default', 'horizontal']),
  /**
   * Whether or not to hide the button
   */
  hideButton: PropTypes.bool,
  /**
   * The title override
   */
  titleOverride: PropTypes.string,
  /**
   * The summary of the collection
   */
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
