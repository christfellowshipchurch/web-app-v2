import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { slugify } from 'utils';
import { Box, CardGrid, GroupCard, Loader } from 'ui-kit';
import { rem } from 'ui-kit/_utils';
import { CustomLink } from 'components';
import { useCurrentBreakpoint } from 'hooks';

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
      `/groups/${slugify(group.title)}?id=${group.id}`,
      `/groups/${slugify(group.title)}`
    );
  };

  return (
    <Box
      display={currentBreakpoint.isSmall ? 'block' : 'flex'}
      flexWrap="wrap"
      pb="base"
    >
      {props.data.map(group => {
        const totalMembers =
          (group?.leaders?.totalCount || 0) + (group?.members?.totalCount || 0);
        return (
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
            totalAvatars={totalMembers}
            flex={{
              _: `0 0 calc(100% - ${rem('20px')})`,
              md: `0 0 calc(50% - ${rem('20px')})`,
              lg: `0 0 calc(33.333% - ${rem('20px')})`,
            }}
            maxWidth={{ lg: '333px' }}
            m="s"
            display="block"
          />
        );
      })}
    </Box>
  );
}

GroupsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default GroupsList;
