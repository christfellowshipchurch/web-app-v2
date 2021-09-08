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
  person,
  role,
  status: initialStatus,
  inactiveStatusReason: initialInactiveStatusReason,
  groupMemberStatuses,
  inactiveStatusReasons,
}) => {
  const [status, setStatus] = useState(initialStatus);
  const [inactiveStatusReason, setInactiveStatusReason] = useState(
    initialInactiveStatusReason
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
      <Box display="flex" flexDirection="row" alignItems="center" mb="s">
        <SquareAvatar src={profileImageUrl} height="70px" width="60px" mr="s" />
        <Box as="h3">{fullName}</Box>
      </Box>

      <Row label="Status">
        <Select
          defaultValue={status?.label}
          id="groupMemberStatus"
          name="groupMemberStatus"
          onChange={event => setStatus({ label: event.target.value })}
        >
          {groupMemberStatuses
            .sort((a, b) => sortAlphabetically(a.label, b.label))
            .map(({ label }) => {
              return (
                <Select.Option key={label} value={label}>
                  {label}
                </Select.Option>
              );
            })}
        </Select>
      </Row>

      {status?.label?.toUpperCase() === 'INACTIVE' && (
        <Row label="Why are you marking this person as inactive?">
          <Select
            defaultValue={inactiveStatusReason?.value}
            id="inactiveMemberReason"
            name="inactiveMemberReason"
            onChange={event => setStatus({ label: event.target.value })}
          >
            {inactiveStatusReasons
              .sort((a, b) => sortAlphabetically(a.value, b.value))
              .map(({ value }) => {
                return (
                  <Select.Option key={value} value={value}>
                    {value}
                  </Select.Option>
                );
              })}
          </Select>
        </Row>
      )}

      {!isEmpty(person?.birthDate) && (
        <Row label="Birthday">
          <Box as="h3">{format(parseISO(person?.birthDate))}</Box>
        </Row>
      )}

      {!isEmpty(person?.phoneNumber) && (
        <Row label="Phone Number">
          <Box as="h5">{person?.phoneNumber}</Box>
        </Row>
      )}

      {!isEmpty(person?.email) && (
        <Row label="Email">
          <Box as="h5">{person?.email}</Box>
        </Row>
      )}

      {!isEmpty(person?.address) && (
        <Row label="Address">
          <Box as="h5">{renderAddress(person?.address)}</Box>
        </Row>
      )}

      <Row label="Notes">
        <TextArea rows="4" />
      </Row>
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
  person: {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    birthDate: PropTypes.string,
    photo: PropTypes.shape({
      uri: PropTypes.string,
    }),
    address: PropTypes.shape({}),
  },
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
};
GroupMemberDetails.defaultProps = {
  status: {
    label: 'Active',
  },
  groupMemberStatuses: [],
  inactiveMemberStatuses: [],
};

export default GroupMemberDetails;
