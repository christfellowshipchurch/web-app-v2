import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { slugify } from 'utils';
import { Box, CardGrid, DefaultCard, Loader } from 'ui-kit';
import { CustomLink } from 'components';

function ContentItemsList(props = {}) {
  const router = useRouter();
  if (props.loading) return <Loader text="Loading your Content Items" />;

  const noContentItems = props.data.length === 0;
  if (noContentItems)
    return <Box as="p">You do not have any Content Items right now.</Box>;

  // We're doing this because we need to silently pass along the
  // `contentItem.id` in order to query the contentItem.

  const handleClick = contentItem => event => {
    event.preventDefault();
    router.push(
      `/discover/${slugify(contentItem.title)}?id=${contentItem.id}`,
      `/discover/${slugify(contentItem.title)}`
    );
  };
  return (
    <CardGrid>
      {props.data.map(contentItem => (
        <CustomLink
          as="a"
          key={contentItem.id}
          onClick={handleClick(contentItem)}
          href={`/discover/${slugify(contentItem?.title)}`} // TODO: Fix link to items
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
