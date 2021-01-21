import { useEffect } from 'react';
import { useSearchGroups } from 'hooks';
import { useGroupFilters } from 'providers/GroupFiltersProvider';
import { Box, CardGrid, GroupCard } from 'ui-kit';

export default function GroupSearch(props = {}) {
  const [filtersState] = useGroupFilters();
  const [searchGroups, { loading, groups, error }] = useSearchGroups({
    fetchPolicy: 'network-only',
  });

  console.group('<GroupSearch> render()');
  console.log('filtersState:', filtersState);
  console.log('loading:', loading);
  console.log('groups:', groups);
  console.log('error:', error);
  console.groupEnd();

  useEffect(() => {
    console.log(
      '🔍%c Searching groups...',
      'color: #00aeff; font-weight: bold;'
    );

    searchGroups({
      variables: {
        query: 'test',
      },
    });
  }, [searchGroups]);

  return (
    <Box>
      <Box as="h1">Find your Community</Box>
      <Box as="p" color="subdued" mb="l">
        Found {groups?.length} groups that meet your search criteria.
      </Box>
      <Box as="pre" color="subdued" mb="l" letterSpacing={-1} fontSize="s">
        {JSON.stringify(filtersState, null, 2)}
      </Box>
      <CardGrid>
        {groups?.map(group => (
          <GroupCard
            key={group}
            title={group.title}
            groupType={group.type}
            summary={group.summary}
            heroAvatars={[]}
            avatars={[]}
            dateTime="Wednesdays at 6:30pm"
            coverImage="https://source.unsplash.com/random/1000x1000"
            totalAvatars={100}
          />
        ))}
      </CardGrid>
    </Box>
  );
}
