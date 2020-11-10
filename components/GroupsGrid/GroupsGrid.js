import React from 'react';
import PropTypes from 'prop-types';

import { slugify } from '../../utils';
import { Box, Card, CardGrid, Loader } from '../../ui-kit';
import { CustomLink } from '../';

function GroupsGrid(props = {}) {
  if (props.loading) return <Loader text="Loading your Groups" />;

  const noGroups = props.data.length === 0;
  if (noGroups) return <Box as="p">You do not have any Groups right now.</Box>;

  return (
    <CardGrid>
      {props.data.map(group => (
        <CustomLink
          as="a"
          key={group.id}
          href={`/groups/${slugify(group.title)}`}
          Component={Card}
          coverImage={group?.coverImage?.sources[0]?.uri}
          title={group.title}
        />
      ))}
    </CardGrid>
  );
}

GroupsGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default GroupsGrid;
