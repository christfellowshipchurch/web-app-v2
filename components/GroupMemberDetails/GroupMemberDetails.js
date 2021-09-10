/**
 * GroupMemberDetails.js
 *
 * Author: Caleb Panza
 * Created: Sep 07, 2021
 *
 * Expanded view of all Group Members
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { parseISO, format } from 'date-fns';

import {
  Box,
  Button,
  GroupMemberStatusBadge,
  SquareAvatar,
  Select,
  TextArea,
} from 'ui-kit';
import { Row } from './GroupMemberDetails.components';
import { useGroupMemberStatuses } from 'hooks';

const sortAlphabetically = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const GroupMemberDetails = ({
  id,
  person,
  role,
  status: initialStatus,
  note: initialNote,
  groupMemberStatuses,
  inactiveStatusReasons,
  onCancel,
  onSave,
}) => {
  const [status, setStatus] = useState(initialStatus?.id);
  const [inactiveStatusReason, setInactiveStatusReason] = useState(
    initialStatus?.inactiveReason?.id || inactiveStatusReasons[0]?.id
  );
  const [note, setNote] = useState(initialNote);

  const inactiveStatus = groupMemberStatuses.find(
    ({ label }) => label.toUpperCase() === 'INACTIVE'
  );
  const profileImageUrl = person?.photo?.uri;
  const fullName = [person?.firstName, person?.lastName]
    .filter(name => !isEmpty(name))
    .join(' ');

  const renderAddress = address => {
    const cityLine = `${address?.city}, ${address?.state} ${address?.postalCode}`;

    return [address?.street1, address?.street2, cityLine]
      .filter(line => !isEmpty(line))
      .join('\n');
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box as="h1" mb="l">
        Edit Group Member
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center" mb="s">
        <SquareAvatar src={profileImageUrl} height="80px" width="70px" mr="s" />
        <Box as="h3" m="0">
          {fullName}
        </Box>
      </Box>

      <Row label="Status">
        <Select
          defaultValue={status}
          id="groupMemberStatus"
          name="groupMemberStatus"
          onChange={event => setStatus(event.target.value)}
        >
          {groupMemberStatuses.map(({ label, id }) => {
            return (
              <Select.Option key={id} value={id}>
                {label}
              </Select.Option>
            );
          })}
        </Select>
      </Row>

      {status === inactiveStatus?.id && (
        <Row label="Why are you marking this person as inactive?">
          <Select
            defaultValue={inactiveStatusReason}
            id="inactiveMemberReason"
            name="inactiveMemberReason"
            onChange={event => setInactiveStatusReason(event.target.value)}
          >
            {inactiveStatusReasons.map(({ id, value }) => {
              return (
                <Select.Option key={id} value={id}>
                  {value}
                </Select.Option>
              );
            })}
          </Select>
        </Row>
      )}

      {!isEmpty(person?.birthDate) && (
        <Row label="Birthday">
          <Box as="h4">
            {format(parseISO(person?.birthDate), 'MMMM d, yyyy')}
          </Box>
        </Row>
      )}

      {!isEmpty(person?.phoneNumber) && (
        <Row label="Phone Number">
          <Box as="h4">{person?.phoneNumber}</Box>
        </Row>
      )}

      {!isEmpty(person?.email) && (
        <Row label="Email">
          <Box as="h4">{person?.email}</Box>
        </Row>
      )}

      {!isEmpty(person?.address) && (
        <Row label="Address">
          <Box as="h4">{renderAddress(person?.address)}</Box>
        </Row>
      )}

      <Row label="Notes">
        <TextArea
          id="group-leader-notes"
          rows="5"
          resize="none"
          maxWidth="100%"
          minWidth="100%"
          value={note}
          onChange={event => setNote(event.target.value)}
        />
        <Box as="h6" fontStyle="italic" color="neutrals.300">
          All updates to notes will be visible to all other Group Leaders.
        </Box>
      </Row>

      <Box display="flex" justifyContent="flex-end">
        <Button mx="s" variant="secondary" borderWidth="0" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            onSave({ groupMemberId: id, note, status, inactiveStatusReason });
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

GroupMemberDetails.propTypes = {
  id: PropTypes.string.isRequired,
  note: PropTypes.string,
  status: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }),
  inactiveStatusReason: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  role: PropTypes.string,
  person: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    birthDate: PropTypes.string,
    photo: PropTypes.shape({
      uri: PropTypes.string,
    }),
    address: PropTypes.shape({}),
  }),
  groupMemberStatuses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  inactiveStatusReasons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};
GroupMemberDetails.defaultProps = {
  note: '',
  status: {
    label: 'Active',
  },
  groupMemberStatuses: [],
  inactiveMemberStatuses: [],
  onCancel: () => null,
  onSave: () => null,
};

export default GroupMemberDetails;
