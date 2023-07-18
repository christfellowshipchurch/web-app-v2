import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { slugify } from 'utils';
import { Box, GroupCard, Loader } from 'ui-kit';
import { rem } from 'ui-kit/_utils';
import { CustomLink } from 'components';
import { useCurrentBreakpoint, useGroupLeaders, useGroupMembers } from 'hooks';

const GroupCardConnected = ({ group, handleClick }) => {
  const { groupLeaders } = useGroupLeaders({ groupId: group?.id })
  const { groupMembers } = useGroupMembers({ groupId: group?.id })

  return <CustomLink
    as="a"
    key={group.id}
    onClick={handleClick(group)}
    href={`/group/${slugify(group.title)}`}
    Component={GroupCard}
    coverImage={group?.coverImage?.sources[0]?.uri}
    title={group.title}
    summary={group.summary}
    heroAvatars={groupLeaders?.map((member) => member?.person)}
    avatars={groupMembers?.map(member => member?.person)}
    totalHeroAvatars={group?.leaders?.totalCount}
    totalAvatars={0}
    flex={{
      _: `0 0 calc(100% - ${rem('20px')})`,
      md: `0 0 calc(50% - ${rem('20px')})`,
      lg: `0 0 calc(33.333% - ${rem('20px')})`,
    }}
    maxWidth={{ lg: '333px' }}
    m="s"
    display="block"
  />
}

function GroupsList(props = {}) {
  const router = useRouter();
  const currentBreakpoint = useCurrentBreakpoint();

  if (props.loading) return <Loader text="Loading your Groups" />;

  const noGroups = props.data.length === 0;
  if (noGroups) return <Box as="p">You do not have any Groups right now.</Box>;

  // We're doing this because we need to silently pass along the
  // `group.id` in order to query the group.
  const handleClick = group => event => {
    event.preventDefault();
    router.push(
      `/group/${slugify(group.title)}?id=${group.id}`,
      `/group/${slugify(group.title)}`
    );
  };

  return (
    <Box
      display={currentBreakpoint.isSmall ? 'block' : 'flex'}
      flexWrap="wrap"
      pb="base"
    >
      {props.data.map(group => {
        return <GroupCardConnected group={group} handleClick={handleClick} />
      })}
    </Box>
  );
}

GroupsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default GroupsList;
