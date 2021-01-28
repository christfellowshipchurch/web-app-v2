import { useEffect } from 'react';
import { useSearchGroups } from 'hooks';
import { useGroupFilters } from 'providers/GroupFiltersProvider';
import { Box, CardGrid, GroupCard, Loader } from 'ui-kit';

import DebugGroupFilterValues from './DebugGroupFilterValues';

export default function GroupSearch(props = {}) {
  const [filtersState] = useGroupFilters();
  const [searchGroups, { loading, groups, error }] = useSearchGroups({
    fetchPolicy: 'network-only',
  });

  console.groupCollapsed('%c<GroupSearch> render()', 'color: #888');
  console.log('filtersState:', filtersState);
  console.log('loading:', loading);
  console.log('groups:', groups);
  console.log('error:', error);
  console.groupEnd();

  useEffect(() => {
    if (!filtersState.hydrated) {
      return;
    }

    // API doesn't know our client side mappings for option values => labels.
    // It needs spoon-fed the values to search for. Go find the labels for
    // a given filter's currently selected values.
    const getSelectedLabels = filterName => {
      const options = filtersState.options[filterName];
      const values = filtersState.values[filterName];

      return values.map(value => {
        const option = options.find(option => option.value === value);
        return option?.label;
      });
    };

    const query = {
      // text: 'You can fuzzy search strings here too',
      campusNames: getSelectedLabels('campuses'),
      preferences: getSelectedLabels('preferences'),
      subPreferences: getSelectedLabels('subPreferences'),
    };

    console.log(
      '🔍%c Searching groups...',
      'background: #00aeff; color: white; font-weight: bold;'
    );
    console.log('--> query: ', query);

    searchGroups({
      variables: {
        query,
      },
    });
  }, [
    searchGroups,
    filtersState.hydrated,
    filtersState.options,
    filtersState.values,
  ]);

  return (
    <Box>
      <Box as="h1">Find your Community</Box>
      {!loading && (
        <Box as="p" color="subdued" mb="l">
          {groups?.length ? `Found ${groups?.length} ` : 'Could not find any '}
          groups that meet your search criteria.
        </Box>
      )}
      <Box as="p" fontSize="s" mb="l">
        <code>{JSON.stringify(filtersState.values)}</code>
      </Box>
      <Box
        as="hr"
        mt="s"
        mb="l"
        borderStyle="solid"
        borderColor="neutrals.200"
      />
      <CardGrid>
        {loading && <Loader />}
        {groups?.map((group, index) => (
          <GroupCard
            /* Temporarily need to use index in key due to duplicate data */
            key={`${group.node?.id}-${index}`}
            callToAction={{
              call: 'Contact',
              action: 'action',
            }}
            campus={group.node?.campus.name}
            coverImage={group.coverImage?.sources[0]?.uri}
            dateTime={''}
            groupType={group.type}
            heroAvatars={group.node?.leaders?.edges}
            preference={group.node?.preference}
            subPreference={group.node?.subPreference}
            summary={group.summary}
            title={group.title}
            totalAvatars={group.node?.members?.totalCount}
          />
        ))}
      </CardGrid>
      <DebugGroupFilterValues />
    </Box>
  );
}
