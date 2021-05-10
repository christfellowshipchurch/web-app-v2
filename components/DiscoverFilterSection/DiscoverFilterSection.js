import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { getUrlFromRelatedNode, getURLFromType, slugify } from 'utils';
import { useDiscoverFilterCategoriesPreview } from 'hooks';

import { Button, Box, DefaultCard, CardGrid } from 'ui-kit';
import { CustomLink } from 'components';

const DiscoverFilterSection = ({ contentId, title }) => {
  const router = useRouter();
  const { categories } = useDiscoverFilterCategoriesPreview({
    variables: { id: contentId, first: 3 },
    fetchPolicy: 'cache-and-network',
  });

  const content = categories?.map(edge => edge.node);

  const handleSeeMore = event => {
    const [type, id] = contentId.split(':');

    event.preventDefault();
    router.push(
      `/discover/${slugify(title)}?id=${slugify(id)}`,
      `/discover/${slugify(title)}`
    );
  };

  return (
    <Box my="s">
      <Box display="flex" justifyContent="space-between" mb="s">
        <Box as="h3">{title}</Box>
        <Button variant="link" paddingRight={0} onClick={handleSeeMore}>
          See more
        </Button>
      </Box>
      <CardGrid columns="3" mb="xl">
        {content.map((n, i) => (
          <CustomLink
            Component={DefaultCard}
            as="a"
            boxShadow="none"
            coverImage={n?.coverImage?.sources[0]?.uri}
            description={n?.summary}
            href={getUrlFromRelatedNode(n)}
            key={n?.id}
            scaleCard={false}
            scaleCoverImage={true}
            title={n?.title}
          />
        ))}
      </CardGrid>
    </Box>
  );
};

DiscoverFilterSection.propTypes = {
  contentId: PropTypes.string,
  title: PropTypes.string,
};

export default DiscoverFilterSection;
