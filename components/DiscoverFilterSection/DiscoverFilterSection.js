import React from 'react';
import PropTypes from 'prop-types';

import { Box, DefaultCard, CardGrid } from 'ui-kit';
import { CustomLink } from 'components';
import { getURLFromType } from 'utils';
import { useDiscoverFilterCategoriesPreview } from 'hooks';

const DiscoverFilterSection = ({ contentId, title }) => {
  const { loading, error, categories } = useDiscoverFilterCategoriesPreview({
    variables: { id: contentId },
    fetchPolicy: 'cache-and-network',
  });

  const content = categories?.map(edge => edge.node);

  return (
    <Box my="s">
      <Box as="h3">{title}</Box>
      <CardGrid columns="3" maxWidth={1000} mb="xl">
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
