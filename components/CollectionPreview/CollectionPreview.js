import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { getUrlFromRelatedNode, slugify } from 'utils';
import { useDiscoverFilterCategoriesPreview } from 'hooks';

import {
  Button,
  Box,
  DefaultCard,
  CardGrid,
  Loader,
  HorizontalHighlightCard,
} from 'ui-kit';
import { CustomLink } from 'components';

const CollectionPreview = ({
  contentId,
  title,
  center,
  summary,
  cardType,
  hideButton,
}) => {
  const router = useRouter();
  const { contentItems, loading } = useDiscoverFilterCategoriesPreview({
    variables: { id: contentId, first: 3 },
  });

  const handleSeeMore = event => {
    const [type, id] = contentId.split(':');

    event.preventDefault();
    router.push(`/discover/${slugify(title)}?id=${slugify(id)}`);
  };

  return (
    <Box>
      <Box color="primary" textAlign={'center'} as="h1" opacity={0.5} mb="base">
        {title}
      </Box>
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
      <CardGrid columns="3">
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
              type="HIGHLIGHT_MEDIUM"
              as="a"
              coverImage={n?.coverImage?.sources[0]?.uri}
              description={n?.summary}
              href={getUrlFromRelatedNode(n)}
              scaleCard={false}
              scaleCoverImage={true}
              title={n?.title}
            />
          ))
        )}
      </CardGrid>
      {contentItems?.length > 2 && !hideButton ? (
        <Box textAlign="center" width="100%">
          <Button variant="secondary" mt="base" onClick={handleSeeMore}>
            Show More
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};

CollectionPreview.propTypes = {
  contentId: PropTypes.string,
  title: PropTypes.string,
};

export default CollectionPreview;