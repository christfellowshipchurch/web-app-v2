import React from 'react';
import PropTypes from 'prop-types';

import { Box, FormLabel, Select, TextInput } from 'ui-kit';

function UserProfileAddress(props = {}) {
  return (
    <>
      <FormLabel>Home Address</FormLabel>
      <TextInput
        id="street"
        placeholder="Street Address"
        onChange={props.onChange}
        value={props.initialValues?.street}
        mb="s"
      />
      <Box
        alignItems="baseline"
        display="grid"
        gridTemplateColumns="repeat(3, 32%)"
        gridColumnGap="s"
      >
        <Box>
          <TextInput
            id="city"
            placeholder="City"
            onChange={props.onChange}
            value={props.initialValues?.city}
          />
        </Box>
        <Box>
          <Select
            id="state"
            name="state"
            onChange={props.onChange}
            defaultValue={props.initialValues?.state}
          >
            <Select.Option value="">Select...</Select.Option>
            <Select.Option value="AL">Alabama</Select.Option>
            <Select.Option value="AK">Alaska</Select.Option>
            <Select.Option value="AZ">Arizona</Select.Option>
            <Select.Option value="AR">Arkansas</Select.Option>
            <Select.Option value="CA">California</Select.Option>
            <Select.Option value="CO">Colorado</Select.Option>
            <Select.Option value="CT">Connecticut</Select.Option>
            <Select.Option value="DE">Delaware</Select.Option>
            <Select.Option value="DC">District Of Columbia</Select.Option>
            <Select.Option value="FL">Florida</Select.Option>
            <Select.Option value="GA">Georgia</Select.Option>
            <Select.Option value="HI">Hawaii</Select.Option>
            <Select.Option value="ID">Idaho</Select.Option>
            <Select.Option value="IL">Illinois</Select.Option>
            <Select.Option value="IN">Indiana</Select.Option>
            <Select.Option value="IA">Iowa</Select.Option>
            <Select.Option value="KS">Kansas</Select.Option>
            <Select.Option value="KY">Kentucky</Select.Option>
            <Select.Option value="LA">Louisiana</Select.Option>
            <Select.Option value="ME">Maine</Select.Option>
            <Select.Option value="MD">Maryland</Select.Option>
            <Select.Option value="MA">Massachusetts</Select.Option>
            <Select.Option value="MI">Michigan</Select.Option>
            <Select.Option value="MN">Minnesota</Select.Option>
            <Select.Option value="MS">Mississippi</Select.Option>
            <Select.Option value="MO">Missouri</Select.Option>
            <Select.Option value="MT">Montana</Select.Option>
            <Select.Option value="NE">Nebraska</Select.Option>
            <Select.Option value="NV">Nevada</Select.Option>
            <Select.Option value="NH">New Hampshire</Select.Option>
            <Select.Option value="NJ">New Jersey</Select.Option>
            <Select.Option value="NM">New Mexico</Select.Option>
            <Select.Option value="NY">New York</Select.Option>
            <Select.Option value="NC">North Carolina</Select.Option>
            <Select.Option value="ND">North Dakota</Select.Option>
            <Select.Option value="OH">Ohio</Select.Option>
            <Select.Option value="OK">Oklahoma</Select.Option>
            <Select.Option value="OR">Oregon</Select.Option>
            <Select.Option value="PA">Pennsylvania</Select.Option>
            <Select.Option value="RI">Rhode Island</Select.Option>
            <Select.Option value="SC">South Carolina</Select.Option>
            <Select.Option value="SD">South Dakota</Select.Option>
            <Select.Option value="TN">Tennessee</Select.Option>
            <Select.Option value="TX">Texas</Select.Option>
            <Select.Option value="UT">Utah</Select.Option>
            <Select.Option value="VT">Vermont</Select.Option>
            <Select.Option value="VA">Virginia</Select.Option>
            <Select.Option value="WA">Washington</Select.Option>
            <Select.Option value="WV">West Virginia</Select.Option>
            <Select.Option value="WI">Wisconsin</Select.Option>
            <Select.Option value="WY">Wyoming</Select.Option>
          </Select>
        </Box>
        <Box>
          <TextInput
            id="zip"
            placeholder="Zip Code"
            onChange={props.onChange}
            value={props.initialValues?.zip}
          />
        </Box>
      </Box>
    </>
  );
}

UserProfileAddress.propTypes = {
  initialValues: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    street: PropTypes.string,
    zip: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
};

export default UserProfileAddress;
