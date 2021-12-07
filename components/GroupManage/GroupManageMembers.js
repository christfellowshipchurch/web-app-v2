/**
 * GroupManageMembers.js
 *
 * Author: Caleb Panza
 * Created: Sep 03, 2021
 *
 * List of Group Members that can be searched and filtered. When the current person is a leader of the group, they will also be able to see management tools.
 */

import React, { useState, useEffect } from 'react';

import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { useGroupManage } from 'providers/GroupManageProvider';
import { GroupMember, SearchField } from 'components';
import { Box, Button, Loader } from 'ui-kit';
import { CardTitle, SmallPillButton } from './GroupManage.components';
import { useSearchGroupMembers } from 'hooks';

function GroupManageMembers(props = {}) {
  // MARK : Hooks
  const modalDispatch = useModalDispatch();
  const [{ groupData }] = useGroupManage();
  const [searchGroupMembers, { groupMembers, facets, loading }] =
    useSearchGroupMembers();

  // MARK : State
  const [searchText, setSearchText] = useState('');
  const [searchArgs, setSearchArgs] = useState([
    { key: 'text', values: [''] },
    { key: 'groupId', values: [groupData?.id] },
    { key: 'status', values: [] },
  ]);

  // MARK : Variables
  const groupId = groupData?.id;
  const hasMembers = Array.isArray(groupMembers) && groupMembers.length > 0;
  const statusFacet = facets.find(({ key }) => key === 'status');

  // MARK : Handlers
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

  const handleAddNewMember = () => {
    modalDispatch(
      showModal('AddGroupMember', {
        groupId,
      })
    );
  };

  // MARK : Render
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

  // MARK : Effects
  useEffect(() => {
    searchGroupMembers({
      variables: {
        groupId: groupData?.id,
        query: {
          attributes: searchArgs,
        },
      },
    });
  }, [searchArgs]);

  useEffect(() => {
    searchGroupMembers({
      variables: {
        groupId: groupData?.id,
        query: {
          attributes: [...searchArgs],
        },
      },
    });
  }, []);

  console.log({ groupMembers })

  return (
    <>
      <Box alignItems="center" display="flex">
        <CardTitle title="Group Members" />

        <SmallPillButton onClick={handleAddNewMember} icon="plus" title="Add" />
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
            ({ id, person, role, status }) => (
              <GroupMember
                id={id}
                key={id}
                status={status}
                role={role}
                person={person}
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
