import React from 'react';
import PropTypes from 'prop-types';

import { normalizeUserData } from '../../utils';
import { Avatar, Box, Card, Cell, Loader } from '../../ui-kit';

function UserProfile(props = {}) {
  const {
    name,
    src,
    campus,
    address,
    birthdate,
    gender,
    email,
    phone,
  } = normalizeUserData(props.currentPerson);

  if (props.loading) return <Loader text="Loading your profile" />;

  return (
    <>
      <Box mb="l" textAlign="center">
        <Avatar
          src={src}
          name={name}
          width="150px"
          height="150px"
          mb="base"
          mx="auto"
        />
        <Box as="h1">{name}</Box>
      </Box>
      <Cell maxWidth="800px">
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 33%)"
          gridColumnGap="s"
          gridRowGap="s"
          textAlign="center"
        >
          <Attribute title="My Campus" data={campus} label="campus" />
          <Attribute title="Email" data={email} label="email" />
          <Attribute title="Phone" data={phone} label="phone" />
          <Attribute title="Home Address" data={address} label="address" />
          <Attribute
            title="Date of Birth"
            data={birthdate}
            label="date of birth"
          />
          <Attribute title="Gender" data={gender} label="gender" />
        </Box>
      </Cell>
    </>
  );
}

function Attribute(props = {}) {
  return (
    <Card boxShadow="base">
      <Box as="h2" color="subdued" fontSize="s" fontWeight="bold">
        {props.title}
      </Box>
      <Box as="p">
        {props.data || (
          <Box as="span" color="subdued" fontSize="s" fontStyle="italic">
            No {props.label} specified
          </Box>
        )}
      </Box>
    </Card>
  );
}

UserProfile.propTypes = {
  currentPerson: PropTypes.object,
};

export default UserProfile;
