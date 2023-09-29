/**
 * GroupManageMembers.js
 *
 * Author: Caleb Panza
 * Created: Sep 03, 2021
 *
 * List of Group Members that can be searched and filtered. When the current person is a leader of the group, they will also be able to see management tools.
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { useGroupManage } from 'providers/GroupManageProvider';
import { GroupMember, SearchField } from 'components';
import { Box, Button, Loader, Icon } from 'ui-kit';
import { CardTitle, SmallPillButton } from './GroupManage.components';
import { useSearchGroupMembers, useGroupEmailRecipients } from 'hooks';

function StatusFilters({ statuses, selected, onChange }) {
  return (
    <Box mx={'-3px'}>
      {statuses.map(value => (
        <Button
          key={value}
          mx="3px"
          px="10px"
          py="4px"
          rounded
          size="s"
          variant="chip"
          status={selected?.includes(value) ? 'SELECTED' : 'IDLE'}
          onClick={() => {
            onChange(value);
          }}
        >
          {value}
        </Button>
      ))}
    </Box>
  );
}

StatusFilters.propTypes = {
  statuses: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

StatusFilters.defaultProps = {
  statuses: ['Active', 'Pending', 'Inactive'],
  selected: [],
  onChange: () => null,
};

function GroupManageMembers(props = {}) {
  // MARK : Hooks
  const modalDispatch = useModalDispatch();
  const [{ groupData }] = useGroupManage();
  const [searchGroupMembers, { groupMembers, loading }] =
    useSearchGroupMembers();
  const { setRecipients } = useGroupEmailRecipients({ groupId: groupData?.id });

  // MARK : State
  const [searchText, setSearchText] = useState('');
  const [searchArgs, setSearchArgs] = useState([
    { key: 'text', values: [''] },
    { key: 'groupId', values: [groupData?.id] },
    { key: 'status', values: ['Active', 'Pending'] },
  ]);

  // MARK : Variables
  const router = useRouter();
  const groupId = groupData?.id;
  const hasMembers = Array.isArray(groupMembers) && groupMembers.length > 0;
  const selectedStatuses =
    searchArgs.find(({ key }) => key === 'status')?.values ?? [];

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

  const handleStatusFilterChange = status => {
    if (loading) return;

    const activeStatuses = searchArgs.find(({ key }) => key === 'status');
    let newStatuses = activeStatuses.values;
    if (activeStatuses.values.includes(status)) {
      newStatuses = newStatuses.filter(
        existingValue => existingValue !== status
      );
    } else {
      newStatuses = [...newStatuses, status];
    }

    const statuses = { key: 'status', values: newStatuses };
    setSearchArgs([
      ...searchArgs.filter(({ key }) => key !== 'status'),
      statuses,
    ]);
  };

  const handleAddNewMember = () => {
    modalDispatch(
      showModal('AddGroupMember', {
        groupId,
      })
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // if (loading) return
    setRecipients(groupMembers?.map(m => m?.id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupMembers]);

  return (
    <>
      <Box alignItems="center" display="flex">
        <CardTitle title="Group Members" />
        <SmallPillButton onClick={handleAddNewMember} icon="plus" title="Add" />
      </Box>

      <Box my="base">
        <Button
          display={{ md: 'none' }}
          disabled={loading}
          rounded
          variant="secondary"
          fontSize="0.65rem"
          mb="base"
          py="3px"
          px="6px"
          onClick={() => {
            let newPath = router?.asPath?.split('/').filter(p => p !== 'edit');
            router.push([...newPath, 'email'].join('/'));
          }}
        >
          <Icon name="envelope" size="18px" mr="xs" />
          {groupMembers.length} Members
        </Button>

        <SearchField
          border="2px solid #C4C4C4"
          handleChange={searchFieldHandleChange}
          handleClear={searchFieldHandleClear}
          handleSubmit={searchFieldHandleSubmit}
          placeholder="Search..."
          value={searchText || ''}
        >
          Search
        </SearchField>
      </Box>

      <Box
        display="flex"
        flexDirection={{ _: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ _: 'flex-start', md: 'center' }}
        my="base"
        gridGap="0.5rem"
      >
        <StatusFilters
          selected={selectedStatuses}
          onChange={handleStatusFilterChange}
        />

        <Button
          display={{ _: 'none', md: 'block' }}
          disabled={loading}
          rounded
          variant="secondary"
          fontSize="0.65rem"
          py="3px"
          px="6px"
          onClick={() => {
            let newPath = router?.asPath?.split('/').filter(p => p !== 'edit');
            router.push([...newPath, 'email'].join('/'));
          }}
        >
          <Icon name="envelope" size="18px" mr="xs" />
          {groupMembers.length} Members
        </Button>
      </Box>

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
          {groupMembers.map(({ id, person, role, status, groupRoleId }) => (
            <GroupMember
              id={id}
              key={id}
              status={status}
              role={role}
              person={person}
              groupId={groupId}
              groupRoleId={groupRoleId}
            />
          ))}
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
