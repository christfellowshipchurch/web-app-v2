import React from 'react';
import PropTypes from 'prop-types';

import { getURLFromType } from '../../utils';
import { Box, DefaultCard, CardGrid, Loader } from '../../ui-kit';
import { CustomLink } from '../../components';

function ContentList(props = {}) {
  function render() {
    if (props.item.action === 'READ_GLOBAL_CONTENT') {
      if (props.loading) {
        return (
          <Box
            bg="border"
            borderRadius="base"
            height={{ _: '250px', md: '450px' }}
          />
        );
      }

      return props.data?.edges?.map(edge => (
        <CustomLink
          as="a"
          key={edge?.node?.id}
          href={getURLFromType(edge?.node)}
          Component={DefaultCard}
          coverImage={edge?.node?.images[0]?.sources[0]?.uri}
          coverImageOverlay={true}
          coverImageTitle={edge?.node?.title}
          coverImageDescription={edge?.node?.summary}
          height={{ _: '250px', md: '450px' }}
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
                  href={getURLFromType(edge?.node)}
                  Component={DefaultCard}
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
    <Box as="section" mb={{ _: 'l', lg: 'xxl' }}>
      {render()}
    </Box>
  );
}

ContentList.propTypes = {
  data: PropTypes.object,
};

export default ContentList;
