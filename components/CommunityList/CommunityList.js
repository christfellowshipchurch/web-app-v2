import React from 'react';
import PropTypes from 'prop-types';

import { slugify } from 'utils';
import { DefaultCard, Box, CardGrid, Loader } from 'ui-kit';
import { CustomLink } from 'components';

function CommunityList(props = {}) {
  if (props.loading) return <Loader text="Loading" />;

  const noData = props.data.length === 0;
  if (noData)
    return <Box as="p">You do not have any items to display right now.</Box>;

  return (
    <CardGrid>
      {props.data.map((item, i) => (
        <CustomLink
          as="a"
          key={i}
          href={`/community/${slugify(item?.title)}`}
          Component={props.component}
          coverImage={item?.coverImage?.sources[0]?.uri}
          coverImageOverlay={true}
          coverImageTitle={item?.title}
          coverImageDescription={item?.summary}
          height="250px"
          display="block"
        />
      ))}
    </CardGrid>
  );
}

CommunityList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

CommunityList.defaultProps = { component: DefaultCard };

export default CommunityList;
