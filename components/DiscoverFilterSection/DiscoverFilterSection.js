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

const DiscoverFilterSection = ({ contentId, title }) => {
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
    <Box my="s">
      <Box display="flex" justifyContent="space-between" mb="s">
        <Box as="h3">{title}</Box>
        {contentItems?.length > 2 ? (
          <Button variant="link" paddingRight={0} onClick={handleSeeMore}>
            See more
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
              href={getUrlFromRelatedNode(n)}
              scaleCard={false}
              scaleCoverImage={true}
              title={n?.title}
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
