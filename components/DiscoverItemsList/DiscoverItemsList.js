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
      {props.data
        .map(contentItem => {
          switch (contentItem.action) {
            case 'OPEN_URL':
            case 'READ_CONTENT':
              return (
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
              );
            case '':
            case null:
            case undefined:
              console.warning('Action type not provided.');
              return null;
            case 'ACTION_FEATURE_ACTION':
            case 'PAGE_BUILDER_FEATURE_ACTION':
            case 'INDEX_ACTION':
            case 'OPEN_CHANNEL':
            case 'READ_PRAYER':
            case 'READ_GROUP':
            case 'READ_GLOBAL_CONTENT':
            default:
              console.warning('Action type not supported.');
              return null;
          }
        })
        .filter(item => Boolean(item))}
    </CardGrid>
  );
}

DiscoverItemsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default DiscoverItemsList;
