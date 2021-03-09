import React from 'react';
import PropTypes from 'prop-types';

import { getURLFromType } from 'utils';
import { Box, CardGrid, DefaultCard, Loader } from 'ui-kit';
import { CustomLink } from 'components';

function ContentItemsList(props = {}) {
  if (props.loading) return <Loader text="Loading your Content Items" />;

  const noContentItems = props.data.length === 0;
  if (noContentItems)
    return <Box as="p">You do not have any Content Items right now.</Box>;

  return (
    <CardGrid>
      {props.data.map(contentItem => (
        <CustomLink
          as="a"
          key={contentItem?.id}
          href={getURLFromType(contentItem?.node, contentItem?.title)}
          Component={DefaultCard}
          coverImage={contentItem?.coverImage?.sources[0]?.uri}
          title={contentItem?.title}
          description={contentItem?.summary}
        />
      ))}
    </CardGrid>
  );
}

ContentItemsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default ContentItemsList;
