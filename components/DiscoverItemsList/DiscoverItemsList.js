import React from 'react';
import PropTypes from 'prop-types';

import { getUrlFromRelatedNode } from 'utils';

import { Box, CardGrid, DefaultCard, Loader } from 'ui-kit';
import { CustomLink } from 'components';

function DiscoverItemsList(props = {}) {
  if (props.loading) return <Loader text="Loading your items" />;

  const noContentItems = props.data.length === 0;
  if (noContentItems)
    return <Box as="p">You do not have any items right now.</Box>;

  return (
    <CardGrid>
      {props.data.map(contentItem => (
        <CustomLink
          Component={DefaultCard}
          as="a"
          boxShadow="none"
          coverImage={contentItem?.coverImage?.sources[0]?.uri}
          description={contentItem?.summary}
          href={getUrlFromRelatedNode(contentItem?.node)}
          key={contentItem?.id}
          scaleCard={false}
          scaleCoverImage={true}
          title={contentItem?.title}
        />
      ))}
    </CardGrid>
  );
}

DiscoverItemsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default DiscoverItemsList;
