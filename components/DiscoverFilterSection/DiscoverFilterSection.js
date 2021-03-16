import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Button, Box, DefaultCard, CardGrid } from 'ui-kit';
import { CustomLink } from 'components';
import { getURLFromType, slugify } from 'utils';
import { useDiscoverFilterCategoriesPreview } from 'hooks';

const DiscoverFilterSection = ({ contentId, title }) => {
  const router = useRouter();
  const { loading, error, categories } = useDiscoverFilterCategoriesPreview({
    variables: { id: contentId, first: 3 },
    fetchPolicy: 'cache-and-network',
  });

  const content = categories?.map(edge => edge.node);

  const handleSeeMore = event => {
    const [type, randomId] = contentId.split(':');

    event.preventDefault();
    router.push({
      pathname: `/discover/${slugify(title)}`,
      query: { id: slugify(randomId) },
    });
  };

  return (
    <Box my="s">
      <Box display="flex" justifyContent="space-between">
        <Box as="h3">{title}</Box>
        <Button variant="link" paddingRight={0} onClick={handleSeeMore}>
          See more
        </Button>
      </Box>
      <CardGrid columns="3" mb="xl">
        {content.map((n, i) => (
          <CustomLink
            as="a"
            key={n?.id}
            href={getURLFromType(n, n?.title)}
            mx="s"
            boxShadow="none"
            scaleCard={false}
            scaleCoverImage={true}
            Component={DefaultCard}
            coverImage={n?.coverImage?.sources[0]?.uri}
            title={n?.title}
            description={n?.summary}
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
