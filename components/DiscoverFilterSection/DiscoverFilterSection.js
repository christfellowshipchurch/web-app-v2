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

const DiscoverFilterSection = ({ contentId, title, filter }) => {
  const router = useRouter();
  const { contentItems, loading } = useDiscoverFilterCategoriesPreview({
    variables: { id: contentId, first: 3 },
  });

  const content = useDiscoverFilterCategoriesPreview({
    variables: { id: contentId },
  }).contentItems.length;

  const handleSeeMore = event => {
    // eslint-disable-next-line no-unused-vars
    const [type, id] = contentId.split(':');

    event.preventDefault();
    router.push(`/discover/${slugify(title)}?id=${slugify(id)}&c=${filter}`);
  };

  return (
    <Box my="s">
      <Box display="flex" justifyContent="space-between" mb="s">
        <Box as="h3">{title}</Box>
        {content > 3 ? (
          <Button variant="link" paddingRight={0} onClick={handleSeeMore}>
            View All
          </Button>
        ) : null}
      </Box>

      <CardGrid columns="3" mb="xl">
        {loading ? (
          <Loader />
        ) : (
          contentItems.map((n, i) => (
            <CustomLink
              key={i}
              Component={n?.title ? DefaultCard : HorizontalHighlightCard}
              as="a"
              boxShadow="none"
              coverImage={n?.coverImage?.sources[0]?.uri}
              description={n?.summary}
              mobileWidth="90vw"
              href={getUrlFromRelatedNode(n)}
              scaleCard={false}
              scaleCoverImage={true}
              title={n?.title}
              minWidth={350}
              type="HIGHLIGHT_SMALL"
            />
          ))
        )}
      </CardGrid>
    </Box>
  );
};

DiscoverFilterSection.propTypes = {
  contentId: PropTypes.string,
  title: PropTypes.string,
};

export default DiscoverFilterSection;
