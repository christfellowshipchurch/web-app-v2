import React from 'react';
import PropTypes from 'prop-types';

import { slugify } from '../../utils';
import { Box, Card, CardGrid, Loader } from '../../ui-kit';
import { CustomLink } from '../../components';

function ContentList(props = {}) {
  function getUrl(node) {
    const [type, randomId] = node.id.split(':');
    switch (type) {
      case 'EventContentItem': {
        return `/events/${slugify(node.title)}`;
      }
      case 'InformationalContentItem': {
        return `/items/${slugify(node.title)}-${randomId}`;
      }
      case 'MediaContentItem': {
        return `/content/${slugify(node.title)}-${randomId}`;
      }
      default: {
        return '/';
      }
    }
  }

  function render() {
    if (props.item.action === 'READ_GLOBAL_CONTENT') {
      if (props.loading) {
        return <Box bg="border" borderRadius="base" height="450px" />;
      }

      return props.data?.edges?.map(edge => (
        <CustomLink
          as="a"
          key={edge?.node?.id}
          href={getUrl(edge?.node)}
          Component={Card}
          coverImage={edge?.node?.images[0]?.sources[0]?.uri}
          coverImageOverlay={true}
          coverImageTitle={edge?.node?.title}
          coverImageDescription={edge?.node?.summary}
          height="450px"
          display="block"
        />
      ));
    }

    if (props.item.action === 'VIEW_CHILDREN') {
      return (
        <>
          <Box as="h2" mb="l">
            {props.item.title}
          </Box>
          {props.loading ? (
            <Loader />
          ) : (
            <CardGrid>
              {props.data?.edges?.map(edge => (
                <CustomLink
                  as="a"
                  key={edge?.node?.id}
                  href={getUrl(edge?.node)}
                  Component={Card}
                  coverImage={edge?.node?.images[0]?.sources[0]?.uri}
                  title={edge?.node?.title}
                  description={edge?.node?.summary}
                />
              ))}
            </CardGrid>
          )}
        </>
      );
    }
  }

  return (
    <Box as="section" mb="xxl">
      {render()}
    </Box>
  );
}

ContentList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default ContentList;
