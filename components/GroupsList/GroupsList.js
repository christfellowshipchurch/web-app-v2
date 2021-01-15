import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { slugify } from 'utils';
import { Box, CardGrid, GroupCard, Loader } from 'ui-kit';
import { CustomLink } from 'components';

function GroupsList(props = {}) {
  const router = useRouter();
  if (props.loading) return <Loader text="Loading your Groups" />;

  const noGroups = props.data.length === 0;
  if (noGroups) return <Box as="p">You do not have any Groups right now.</Box>;

  // We're doing this because we need to silently pass along the
  // `group.id` in order to query the group.
  const handleClick = group => event => {
    event.preventDefault();
    router.push(
      `/groups/${slugify(group.title)}?id=${group.id}`,
      `/groups/${slugify(group.title)}`
    );
  };

  return (
    <CardGrid>
      {props.data.map(group => (
        <CustomLink
          as="a"
          key={group.id}
          onClick={handleClick(group)}
          href={`/groups/${slugify(group.title)}`}
          Component={GroupCard}
          coverImage={group?.coverImage?.sources[0]?.uri}
          title={group.title}
          summary={group.summary}
          heroAvatars={group?.leaders?.edges}
          avatars={group?.members?.edges}
          totalHeroAvatars={group?.leaders?.totalCount}
          totalAvatars={group?.members?.totalCount}
        />
      ))}
    </CardGrid>
  );
}

GroupsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default GroupsList;
