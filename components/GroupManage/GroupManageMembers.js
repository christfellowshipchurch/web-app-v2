/**
 * GroupManageMembers.js
 *
 * Author: Caleb Panza
 * Created: Sep 03, 2021
 *
 * List of Group Members that can be searched and filtered. When the current person is a leader of the group, they will also be able to see management tools.
 */

import React, { useState, useEffect } from 'react';

import { useGroupManage } from 'providers/GroupManageProvider';
import { GroupMember, SearchField } from 'components';
import { Box, Button, Loader } from 'ui-kit';
import { CardTitle, SmallPillButton } from './GroupManage.components';
import { useSearchGroupMembers } from 'hooks';

function GroupManageMembers(props = {}) {
  const [{ groupData }] = useGroupManage();
  const groupId = groupData?.id;
  const [searchGroupMembers, { groupMembers, facets, loading }] =
    useSearchGroupMembers();
  const [searchText, setSearchText] = useState('');
  const [searchArgs, setSearchArgs] = useState([
    { key: 'text', values: [''] },
    { key: 'groupId', values: [groupId] },
    { key: 'status', values: [] },
  ]);
  const hasMembers = Array.isArray(groupMembers) && groupMembers.length > 0;
  const statusFacet = facets.find(({ key }) => key === 'status');

  const renderStatusFacets = () => {
    const hasFacets = statusFacet?.values.length > 0;
    const selectedStatuses =
      searchArgs.find(({ key }) => key === 'status') || [];

    if (!hasFacets) return null;

    return (
      <Box my="base" mx={'-3px'}>
        {statusFacet?.values.map(value => (
          <Button
            key={value}
            mx="3px"
            px="10px"
            py="4px"
            rounded
            size="s"
            variant="chip"
            status={
              selectedStatuses.values.includes(value) ? 'SELECTED' : 'IDLE'
            }
            onClick={() => {
              let newStatuses = selectedStatuses.values;
              if (selectedStatuses.values.includes(value)) {
                newStatuses = newStatuses.filter(
                  existingValue => existingValue !== value
                );
              } else {
                newStatuses = [...newStatuses, value];
              }

              const statuses = { key: 'status', values: newStatuses };
              setSearchArgs([
                ...searchArgs.filter(({ key }) => key !== 'status'),
                statuses,
              ]);
            }}
          >
            {value}
          </Button>
        ))}
      </Box>
    );
  };

  const searchFieldHandleChange = event => {
    setSearchText(event?.target?.value || '');
  };
  const searchFieldHandleClear = event => {
    event.preventDefault();
    const searchWithoutText = searchArgs.filter(({ key }) => key !== 'text');
    setSearchText('');
    setSearchArgs([...searchWithoutText, { key: 'text', values: [''] }]);
  };
  const searchFieldHandleSubmit = event => {
    event.preventDefault();

    const searchWithoutText = searchArgs.filter(({ key }) => key !== 'text');
    setSearchArgs([
      ...searchWithoutText,
      { key: 'text', values: [searchText] },
    ]);
  };

  useEffect(() => {
    searchGroupMembers({
      variables: {
        query: {
          attributes: searchArgs,
        },
      },
    });
  }, [searchArgs]);

  useEffect(() => {
    searchGroupMembers({
      variables: {
        query: {
          attributes: [...searchArgs],
        },
      },
    });
  }, []);

  return (
    <>
      <Box alignItems="center" display="flex">
        <CardTitle title="Group Members" />

        <SmallPillButton onClick={() => null} icon="plus" title="Add" />
      </Box>

      <Box mt="base" mb="l">
        <SearchField
          handleChange={searchFieldHandleChange}
          handleClear={searchFieldHandleClear}
          handleSubmit={searchFieldHandleSubmit}
          placeholder="Search..."
          value={searchText || ''}
        >
          Search
        </SearchField>
      </Box>

      {renderStatusFacets()}

      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" p="s">
          <Loader />
        </Box>
      )}

      {hasMembers && (
        <Box
          display="grid"
          gridTemplateColumns={{ _: '1fr', md: '1fr 1fr' }}
          columnGap="25px"
          rowGap="15px"
          // ! : keep for backwards css compatibility
          gridColumnGap="15px"
          gridRowGap="15px"
        >
          {groupMembers.map(
            ({ id, firstName, lastName, coverImage, role, status }) => (
              <GroupMember
                id={id}
                key={id}
                status={{ label: status }}
                role={role}
                person={{ firstName, lastName, photo: coverImage?.sources[0] }}
              />
            )
          )}
        </Box>
      )}

      {!hasMembers && !loading && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color={'neutrals.400'}
          p="base"
        >
          <Box as="i">We couldn't find anyone that matches your criteria.</Box>
          <Box as="i">Try refining your search a little bit</Box>
        </Box>
      )}
    </>
  );
}

export default GroupManageMembers;
