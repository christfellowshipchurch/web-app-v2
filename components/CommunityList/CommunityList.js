import React from 'react';
import PropTypes from 'prop-types';

import { slugify } from 'utils';
import { DefaultCard, Box, Loader } from 'ui-kit';
import { CustomLink } from 'components';

function CommunityList(props = {}) {
  if (props.loading) return <Loader text="Loading" />;

  const noData = props.data.length === 0;
  if (noData)
    return <Box as="p">You do not have any items to display right now.</Box>;

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" margin="-8px">
      {props.data
        .filter(item => item?.coverImage?.sources[0]?.uri)
        .map((item, i) => (
          <CustomLink
            as="a"
            key={i}
            href={item?.url ? item?.url : `/community/${slugify(item?.title)}`}
            Component={props.component}
            coverImage={item?.coverImage?.sources[0]?.uri}
            coverImageOverlay={true}
            coverImageTitle={item?.title}
            coverImageDescription={item?.summary}
            flex="0 0 calc(33.333% - 16px)"
            margin="8px"
            height="250px"
            display="block"
          />
        ))}
    </Box>
  );
}

CommunityList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

CommunityList.defaultProps = { component: DefaultCard };

export default CommunityList;
